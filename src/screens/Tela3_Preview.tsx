import React, { useRef } from 'react';
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

const Tela3_Preview: React.FC<Tela3Props> = ({ data, onBack, onExport, onEditSlide }) => {
  const slidesRef = useRef<HTMLDivElement>(null);

  const activeSlides = SLIDES.filter(s => data[s.key as keyof ProposalData] as boolean);

  return (
    <div className="min-h-screen bg-bm-darker">
      {/* Fixed buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button onClick={onBack} className="bg-bm-card text-bm-gray rounded-lg px-4 py-2 text-sm hover:bg-bm-card-light border border-bm-orange/20">
          ← Voltar ao Wizard
        </button>
        <button onClick={onExport} className="bm-btn-primary text-sm">
          ⬇️ Exportar PDF
        </button>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-4 space-y-8" ref={slidesRef} id="slides-container">
        {activeSlides.map((slide, i) => {
          const originalIndex = SLIDES.indexOf(slide);
          return (
            <div key={slide.key} className="relative group">
              <button
                onClick={() => onEditSlide(originalIndex)}
                className="absolute -top-3 right-2 z-10 bg-bm-orange text-bm-white rounded-full px-3 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ✏️ Editar
              </button>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-bm-orange/10">
                {/* @ts-ignore - dynamic component */}
                <slide.Component data={data} />
              </div>
              <p className="text-center text-[0.5rem] text-bm-gray-dark mt-2">Slide {i + 1} de {activeSlides.length}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tela3_Preview;
