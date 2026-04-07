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

const Tela3_Preview: React.FC<Tela3Props> = ({ data, onBack, onExport, onEditSlide }) => {
  const activeSlides = SLIDES.filter(s => data[s.key as keyof ProposalData] as boolean);

  return (
    <div className="min-h-screen bg-bm-darker">
      {/* Fixed buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button onClick={onBack} className="bm-btn-secondary text-sm" style={{ padding: '8px 16px' }}>
          ← Voltar ao Wizard
        </button>
        <button onClick={onExport} className="bm-btn-primary text-sm" style={{ padding: '8px 16px' }}>
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
                className="absolute -top-3 right-2 z-10 bg-bm-orange text-white rounded-full px-3 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ fontWeight: 700 }}
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
