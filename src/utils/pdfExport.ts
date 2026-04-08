import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForImages(element: Element): Promise<void> {
  const images = Array.from(element.querySelectorAll('img'));

  await Promise.all(
    images.map(
      img =>
        new Promise<void>(resolve => {
          if (img.complete && img.naturalWidth > 0) {
            resolve();
            return;
          }

          const finish = () => resolve();
          img.addEventListener('load', finish, { once: true });
          img.addEventListener('error', finish, { once: true });
        })
    )
  );
}

/**
 * html2canvas doesn't support object-fit: cover properly.
 * This function replaces object-fit:cover images with inline canvas elements
 * that simulate the same crop, then restores them after capture.
 */
function patchObjectFitImages(container: Element): Array<{ img: HTMLImageElement; parent: HTMLElement; canvas: HTMLCanvasElement }> {
  const patches: Array<{ img: HTMLImageElement; parent: HTMLElement; canvas: HTMLCanvasElement }> = [];
  const images = Array.from(container.querySelectorAll('img'));

  for (const img of images) {
    const style = getComputedStyle(img);
    if (style.objectFit !== 'cover') continue;
    if (!img.complete || img.naturalWidth === 0) continue;

    const cw = img.clientWidth;
    const ch = img.clientHeight;
    if (cw === 0 || ch === 0) continue;

    const nw = img.naturalWidth;
    const nh = img.naturalHeight;

    const scale = Math.max(cw / nw, ch / nh);
    const sw = cw / scale;
    const sh = ch / scale;
    const sx = (nw - sw) / 2;
    const sy = (nh - sh) / 2;

    const cvs = document.createElement('canvas');
    cvs.width = cw * 2;
    cvs.height = ch * 2;
    cvs.style.width = `${cw}px`;
    cvs.style.height = `${ch}px`;
    cvs.style.display = 'block';
    cvs.style.borderRadius = style.borderRadius;

    const ctx = cvs.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw * 2, ch * 2);
    }

    const parent = img.parentElement!;
    parent.insertBefore(cvs, img);
    img.style.display = 'none';
    patches.push({ img, parent, canvas: cvs });
  }

  return patches;
}

function restoreObjectFitImages(patches: Array<{ img: HTMLImageElement; parent: HTMLElement; canvas: HTMLCanvasElement }>) {
  for (const { img, parent, canvas } of patches) {
    img.style.display = '';
    parent.removeChild(canvas);
  }
}

function getPageBackground(slide: HTMLElement): [number, number, number] {
  const inlineBackground = `${slide.style.background} ${slide.style.backgroundColor}`.toLowerCase();
  const computedBackground = getComputedStyle(slide).backgroundColor.toLowerCase();

  if (
    inlineBackground.includes('#ffffff') ||
    inlineBackground.includes('#fff') ||
    inlineBackground.includes('white') ||
    computedBackground.includes('255, 255, 255')
  ) {
    return [255, 255, 255];
  }

  const rgbMatch = computedBackground.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (rgbMatch) {
    return [Number(rgbMatch[1]), Number(rgbMatch[2]), Number(rgbMatch[3])];
  }

  return [26, 26, 26];
}

export async function exportToPDF(
  nomeEspecialista: string,
  ano: string,
  onProgress?: (current: number, total: number) => void
): Promise<void> {
  const container = document.getElementById('pdf-render-area');
  if (!container) {
    throw new Error('pdf-render-area not found');
  }

  const slides = container.querySelectorAll('.bm-slide');
  if (slides.length === 0) {
    throw new Error('No slides found');
  }

  const total = slides.length;
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4', compress: true });

  await Promise.all([document.fonts?.ready ?? Promise.resolve(), waitForImages(container), wait(300)]);

  for (let i = 0; i < total; i++) {
    onProgress?.(i + 1, total);
    const slide = slides[i] as HTMLElement;

    const originalStyles = {
      width: slide.style.width,
      height: slide.style.height,
      overflow: slide.style.overflow,
    };

    slide.style.width = `${SLIDE_WIDTH}px`;
    slide.style.height = `${SLIDE_HEIGHT}px`;
    slide.style.overflow = 'hidden';

    await waitForImages(slide);
    await wait(120);

    const patches = patchObjectFitImages(slide);

    const canvas = await html2canvas(slide, {
      scale: 2,
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      imageTimeout: 0,
      windowWidth: SLIDE_WIDTH,
      windowHeight: SLIDE_HEIGHT,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
    });

    restoreObjectFitImages(patches);

    const imgData = canvas.toDataURL('image/png');

    if (i > 0) pdf.addPage();

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const renderWidth = pageWidth;
    const renderHeight = (canvas.height * renderWidth) / canvas.width;
    const offsetX = 0;
    const offsetY = (pageHeight - renderHeight) / 2;
    const [bgR, bgG, bgB] = getPageBackground(slide);

    pdf.setFillColor(bgR, bgG, bgB);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    pdf.addImage(imgData, 'PNG', offsetX, offsetY, renderWidth, renderHeight);

    slide.style.width = originalStyles.width;
    slide.style.height = originalStyles.height;
    slide.style.overflow = originalStyles.overflow;
  }

  const fileName = `Proposta_BM_${nomeEspecialista.replace(/\s+/g, '_') || 'Especialista'}_${ano}.pdf`;
  pdf.save(fileName);
}
