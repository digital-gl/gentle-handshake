import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

  // Wait for fonts and images to load
  await new Promise(resolve => setTimeout(resolve, 800));

  for (let i = 0; i < total; i++) {
    onProgress?.(i + 1, total);
    const slide = slides[i] as HTMLElement;

    const canvas = await html2canvas(slide, {
      scale: 2,
      width: 1280,
      height: 720,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      windowWidth: 1280,
      windowHeight: 720,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);

    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
  }

  const fileName = `Proposta_BM_${nomeEspecialista.replace(/\s+/g, '_') || 'Especialista'}_${ano}.pdf`;
  pdf.save(fileName);
}
