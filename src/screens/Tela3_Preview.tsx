import React, { useRef, useEffect, useState } from 'react';
import type { ProposalData } from '@/utils/defaultContent';
import {
  SlideCapa, SlideBoasVindas, SlideSobreBM, SlideModeloCoproducao,
  SlideEstruturaCompleta, SlideFunil8Overview, SlideFunil8Fase1,
  SlideFases23, SlideCronograma, SlideInvestimento, SlideEncerramento
} from '@/components/SlideComponents';

interface Tela3Props {
  data: ProposalData;
  onBack: () => void;
  onExport: () => void;
  onEditSlide: (index: number) => void;
  exportProgress?: { current: number; total: number } | null;
}

const SLIDES = [
  { key: 'incluirCapa', Component: SlideCapa, needsData: true },
  { key: 'incluirBoasVindas', Component: SlideBoasVindas, needsData: true },
  { key: 'incluirSobreBM', Component: SlideSobreBM, needsData: false },
  { key: 'incluirModeloCoproducao', Component: SlideModeloCoproducao, needsData: true },
  { key: 'incluirEstruturaCompleta', Component: SlideEstruturaCompleta, needsData: false },
  { key: 'incluirFunil8Overview', Component: SlideFunil8Overview, needsData: false },
  { key: 'incluirFunil8Fase1', Component: SlideFunil8Fase1, needsData: false },
  { key: 'incluirFunil8Fases23', Component: SlideFases23, needsData: false },
  { key: 'incluirCronograma', Component: SlideCronograma, needsData: true },
  { key: 'incluirInvestimento', Component: SlideInvestimento, needsData: true },
  { key: 'incluirEncerramento', Component: SlideEncerramento, needsData: true },
] as const;

const SlidePreview: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.parentElement?.clientWidth || 800;
        setScale(Math.min(parentWidth / 1280, 1));
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: 720 * scale, position: 'relative', overflow: 'hidden' }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: 1280, height: 720 }}>
        {children}
      </div>
    </div>
  );
};

const Tela3_Preview: React.FC<Tela3Props> = ({ data, onBack, onExport, onEditSlide, exportProgress }) => {
  const activeSlides = SLIDES.filter(s => data[s.key as keyof ProposalData] as boolean);

  return (
    <div className="min-h-screen" style={{ background: '#111111' }}>
      {/* Export progress overlay */}
      {exportProgress && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#2A2A2A', border: '1.5px solid rgba(240,90,40,0.7)', borderRadius: 12, padding: '32px 48px', textAlign: 'center', boxShadow: '0 0 20px rgba(240,90,40,0.3)' }}>
            <p style={{ color: '#F05A28', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Gerando PDF...</p>
            <p style={{ color: '#ccc', fontSize: 14 }}>Slide {exportProgress.current} de {exportProgress.total}</p>
            <div style={{ width: 200, height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, marginTop: 16 }}>
              <div style={{ width: `${(exportProgress.current / exportProgress.total) * 100}%`, height: '100%', background: '#F05A28', borderRadius: 2, transition: 'width 0.3s' }} />
            </div>
          </div>
        </div>
      )}

      {/* Hidden render area for PDF export */}
      <div id="pdf-render-area" style={{ position: 'fixed', left: -9999, top: 0, visibility: 'hidden' }}>
        {activeSlides.map((slide) => (
          // @ts-ignore
          <slide.Component key={slide.key} data={data} />
        ))}
      </div>

      {/* Fixed buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button onClick={onBack} style={{ background: 'transparent', border: '1.5px solid #F05A28', color: '#F05A28', fontWeight: 700, padding: '8px 16px', borderRadius: 8, fontSize: 14 }}>
          ← Voltar ao Wizard
        </button>
        <button onClick={onExport} style={{ background: '#F05A28', color: '#fff', fontWeight: 700, padding: '8px 16px', borderRadius: 8, fontSize: 14, border: 'none' }}>
          Exportar PDF
        </button>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-4 space-y-8" id="slides-container">
        {activeSlides.map((slide, i) => {
          const originalIndex = SLIDES.indexOf(slide);
          return (
            <div key={slide.key} className="relative group">
              <button
                onClick={() => onEditSlide(originalIndex)}
                style={{ position: 'absolute', top: -12, right: 8, zIndex: 10, background: '#F05A28', color: '#fff', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 700, border: 'none', opacity: 0, transition: 'opacity 0.2s', cursor: 'pointer' }}
                className="group-hover:!opacity-100"
              >
                Editar
              </button>
              <SlidePreview>
                {/* @ts-ignore - dynamic component */}
                <slide.Component data={data} />
              </SlidePreview>
              <p style={{ textAlign: 'center', fontSize: 10, color: '#666', marginTop: 8 }}>Slide {i + 1} de {activeSlides.length}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tela3_Preview;
