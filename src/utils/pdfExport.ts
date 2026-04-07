import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function exportToPDF(nomeEspecialista: string, ano: string): Promise<void> {
  const container = document.getElementById('slides-container');
  if (!container) return;

  const slides = container.querySelectorAll('.bm-slide');
  if (slides.length === 0) return;

  // A4 landscape dimensions
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const pdfWidth = 297;
  const pdfHeight = 210;

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i] as HTMLElement;
    
    const canvas = await html2canvas(slide, {
      scale: 2,
      backgroundColor: '#1A1A1A',
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    
    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
  }

  const fileName = `Proposta_BM_${nomeEspecialista.replace(/\s+/g, '_') || 'Especialista'}_${ano}.pdf`;
  pdf.save(fileName);
}
