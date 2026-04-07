import React, { useState, useRef, useEffect } from 'react';
import type { ProposalData } from '@/utils/defaultContent';
import { defaultContent } from '@/utils/defaultContent';
import ProgressBar from '@/components/ProgressBar';
import ToggleSection from '@/components/ToggleSection';
import {
  SlideCapa, SlideBoasVindas, SlideSobreBM, SlideModeloCoproducao,
  SlideEstruturaCompleta, SlideFunil8Overview, SlideFunil8Fase1,
  SlideFases23, SlideCronograma, SlideInvestimento, SlideEncerramento
} from '@/components/SlideComponents';

const SLIDE_CONFIG = [
  { key: 'incluirCapa', label: 'Capa', tooltip: 'Slide de abertura com logo e nome' },
  { key: 'incluirBoasVindas', label: 'Boas-vindas / Perfil', tooltip: 'Apresentação do especialista' },
  { key: 'incluirSobreBM', label: 'Sobre a BM', tooltip: 'Apresentação da empresa e fundadoras' },
  { key: 'incluirModeloCoproducao', label: 'Divisão de Responsabilidades', tooltip: 'O que cada parte executa' },
  { key: 'incluirEstruturaCompleta', label: 'Estrutura Completa', tooltip: '8 áreas que a BM assume' },
  { key: 'incluirFunil8Overview', label: 'Funil 8 — Visão Geral', tooltip: '3 fases interdependentes' },
  { key: 'incluirFunil8Fase1', label: 'Funil 8 — Fase 1 Detalhada', tooltip: 'Pirâmide de aquisição' },
  { key: 'incluirFunil8Fases23', label: 'Fases 2 e 3 — Monetização e Escala', tooltip: 'Turbo Express e Lançamento Pago' },
  { key: 'incluirCronograma', label: 'Cronograma 90 Dias', tooltip: 'Entregas dos primeiros 90 dias' },
  { key: 'incluirInvestimento', label: 'Investimento', tooltip: 'Condições comerciais' },
  { key: 'incluirEncerramento', label: 'Encerramento', tooltip: 'Slide final com CTA' },
] as const;

interface Tela2Props {
  data: ProposalData;
  onChange: (d: ProposalData) => void;
  onFinish: () => void;
  onBack: () => void;
}

const SlidePreviewSmall: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateScale = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / 1280);
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: 720 * scale, position: 'relative', overflow: 'hidden' }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: 1280, height: 720 }}>
        {children}
      </div>
    </div>
  );
};

const Tela2_Wizard: React.FC<Tela2Props> = ({ data, onChange, onFinish, onBack }) => {
  const [step, setStep] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = (partial: Partial<ProposalData>) => onChange({ ...data, ...partial });
  const config = SLIDE_CONFIG[step];
  const toggleKey = config.key as keyof ProposalData;

  const renderForm = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <ToggleSection label="Exibir logo BM" enabled={data.showLogo} onToggle={(v) => update({ showLogo: v })}><div /></ToggleSection>
            <div>
              <label className="text-xs text-bm-gray block mb-1">Nome do Especialista</label>
              <input value={data.nomeEspecialista} onChange={(e) => update({ nomeEspecialista: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
            </div>
            <div>
              <label className="text-xs text-bm-gray block mb-1">Ano</label>
              <input value={data.ano} onChange={(e) => update({ ano: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="text-xs text-bm-gray block mb-1">Nome do Especialista</label>
              <input value={data.nomeEspecialista} onChange={(e) => update({ nomeEspecialista: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
            </div>
            <div>
              <label className="text-xs text-bm-gray block mb-1">Área de Expertise</label>
              <input value={data.areaExpertise} onChange={(e) => update({ areaExpertise: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
            </div>
            <div>
              <label className="text-xs text-bm-gray block mb-1">Foto do Especialista</label>
              <input type="file" ref={fileInputRef} accept="image/png,image/svg+xml,image/jpeg" className="hidden" onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (ev) => update({ fotoEspecialista: ev.target?.result as string });
                  reader.readAsDataURL(file);
                }
              }} />
              <button onClick={() => fileInputRef.current?.click()} className="bm-btn-secondary w-full text-left text-sm" style={{ padding: '8px 12px' }}>
                {data.fotoEspecialista ? 'Foto carregada — clique para trocar' : 'Upload de foto'}
              </button>
            </div>
            <div>
              <label className="text-xs text-bm-gray block mb-1">Texto de Boas-Vindas</label>
              <textarea value={data.textoBoasVindas} onChange={(e) => update({ textoBoasVindas: e.target.value })} rows={4} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange resize-none" />
            </div>
          </div>
        );
      case 2:
        return (
          <p className="text-sm text-bm-gray bg-bm-card rounded-lg p-3 border border-bm-orange/20">
            Conteúdo padrão BM — não editável. Use o toggle para incluir ou excluir este slide.
          </p>
        );
      case 3:
        return (
          <div className="space-y-3">
            <p className="text-xs text-bm-gray">As responsabilidades estão pré-configuradas conforme o padrão BM.</p>
            <div>
              <label className="text-xs text-bm-orange block mb-1">Suas Responsabilidades</label>
              {data.responsabilidadesEspecialista.map((r, i) => (
                <input key={i} value={r} onChange={(e) => {
                  const arr = [...data.responsabilidadesEspecialista]; arr[i] = e.target.value;
                  update({ responsabilidadesEspecialista: arr });
                }} className="w-full bg-bm-card border border-bm-orange/20 rounded p-1.5 text-xs text-bm-white mb-1 focus:outline-none focus:border-bm-orange" />
              ))}
            </div>
            <div>
              <label className="text-xs text-bm-orange block mb-1">Responsabilidades BM</label>
              {data.responsabilidadesBM.map((r, i) => (
                <input key={i} value={r} onChange={(e) => {
                  const arr = [...data.responsabilidadesBM]; arr[i] = e.target.value;
                  update({ responsabilidadesBM: arr });
                }} className="w-full bg-bm-card border border-bm-orange/20 rounded p-1.5 text-xs text-bm-white mb-1 focus:outline-none focus:border-bm-orange" />
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <p className="text-sm text-bm-gray bg-bm-card rounded-lg p-3 border border-bm-orange/20">
            Conteúdo padrão BM — 8 áreas de operação. Use o toggle para incluir ou excluir.
          </p>
        );
      case 5:
        return (
          <div className="space-y-3">
            <p className="text-xs text-bm-gray">Visão geral das 3 fases do Funil 8.</p>
            <ToggleSection label="Incluir Fase 1 (Aquisição)" enabled={data.incluirFunil8Fase1} onToggle={(v) => update({ incluirFunil8Fase1: v })}><div /></ToggleSection>
            <ToggleSection label="Incluir Fases 2 e 3 (Monetização/Escala)" enabled={data.incluirFunil8Fases23} onToggle={(v) => update({ incluirFunil8Fases23: v })}><div /></ToggleSection>
          </div>
        );
      case 6:
        return <p className="text-xs text-bm-gray">Detalhamento da pirâmide de aquisição.</p>;
      case 7:
        return <p className="text-xs text-bm-gray">Monetização (Turbo Express) e Escala (Lançamento Pago).</p>;
      case 8:
        return (
          <div className="space-y-3">
            {data.proximosPassos.map((p, i) => (
              <div key={i} className="space-y-1">
                <label className="text-xs text-bm-orange">Fase {i + 1}</label>
                <input value={p.titulo} onChange={(e) => { const arr = [...data.proximosPassos]; arr[i] = { ...arr[i], titulo: e.target.value }; update({ proximosPassos: arr }); }} className="w-full bg-bm-card border border-bm-orange/20 rounded p-1.5 text-xs text-bm-white focus:outline-none" placeholder="Título" />
                <input value={p.dias} onChange={(e) => { const arr = [...data.proximosPassos]; arr[i] = { ...arr[i], dias: e.target.value }; update({ proximosPassos: arr }); }} className="w-full bg-bm-card border border-bm-orange/20 rounded p-1.5 text-xs text-bm-white focus:outline-none" placeholder="Dias" />
                <textarea value={p.descricao} onChange={(e) => { const arr = [...data.proximosPassos]; arr[i] = { ...arr[i], descricao: e.target.value }; update({ proximosPassos: arr }); }} rows={2} className="w-full bg-bm-card border border-bm-orange/20 rounded p-1.5 text-xs text-bm-white focus:outline-none resize-none" />
              </div>
            ))}
          </div>
        );
      case 9:
        return (
          <div className="space-y-3">
            {/* Layout toggle */}
            <div>
              <label className="text-xs text-bm-orange block mb-1">Layout do slide</label>
              <div className="flex gap-2">
                <button onClick={() => update({ layoutInvestimento: 'planos' })} className={`flex-1 text-xs rounded-lg py-2 px-3 border ${data.layoutInvestimento === 'planos' ? 'bg-bm-orange text-white border-bm-orange' : 'bg-bm-card text-bm-gray border-bm-orange/30'}`}>
                  Planos (Impulso/Plus)
                </button>
                <button onClick={() => update({ layoutInvestimento: 'coproducao' })} className={`flex-1 text-xs rounded-lg py-2 px-3 border ${data.layoutInvestimento === 'coproducao' ? 'bg-bm-orange text-white border-bm-orange' : 'bg-bm-card text-bm-gray border-bm-orange/30'}`}>
                  Coprodução
                </button>
              </div>
            </div>
            
            {data.layoutInvestimento === 'planos' ? (
              <>
                <div>
                  <label className="text-xs text-bm-gray block mb-1">Nome do Plano 1</label>
                  <input value={data.planoImpulsoNome} onChange={(e) => update({ planoImpulsoNome: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
                </div>
                <div>
                  <label className="text-xs text-bm-gray block mb-1">Valor Plano 1</label>
                  <input value={data.planoImpulsoValor} onChange={(e) => update({ planoImpulsoValor: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
                </div>
                <div>
                  <label className="text-xs text-bm-orange block mb-1">Itens Plano 1</label>
                  {data.planoImpulsoItems.map((item, i) => (
                    <input key={i} value={item} onChange={(e) => { const arr = [...data.planoImpulsoItems]; arr[i] = e.target.value; update({ planoImpulsoItems: arr }); }} className="w-full bg-bm-card border border-bm-orange/20 rounded p-1.5 text-xs text-bm-white mb-1 focus:outline-none" />
                  ))}
                </div>
                <div>
                  <label className="text-xs text-bm-gray block mb-1">Nome do Plano 2</label>
                  <input value={data.planoImpulsoPlusNome} onChange={(e) => update({ planoImpulsoPlusNome: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
                </div>
                <div>
                  <label className="text-xs text-bm-gray block mb-1">Valor Plano 2</label>
                  <input value={data.planoImpulsoPlusValor} onChange={(e) => update({ planoImpulsoPlusValor: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
                </div>
                <div>
                  <label className="text-xs text-bm-orange block mb-1">Itens Plano 2</label>
                  {data.planoImpulsoPlusItems.map((item, i) => (
                    <input key={i} value={item} onChange={(e) => { const arr = [...data.planoImpulsoPlusItems]; arr[i] = e.target.value; update({ planoImpulsoPlusItems: arr }); }} className="w-full bg-bm-card border border-bm-orange/20 rounded p-1.5 text-xs text-bm-white mb-1 focus:outline-none" />
                  ))}
                </div>
                <div>
                  <label className="text-xs text-bm-gray block mb-1">Condições Gerais</label>
                  <input value={data.condicoesGerais} onChange={(e) => update({ condicoesGerais: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="text-xs text-bm-gray block mb-1">Valor Total da Coprodução</label>
                  <input value={data.valorCoproducao} onChange={(e) => update({ valorCoproducao: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
                </div>
                <div>
                  <label className="text-xs text-bm-gray block mb-1">Parcelamento</label>
                  <input value={data.parcelamento} onChange={(e) => update({ parcelamento: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
                </div>
                <div>
                  <label className="text-xs text-bm-gray block mb-1">Desconto à Vista</label>
                  <input value={data.descontoVista} onChange={(e) => update({ descontoVista: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
                </div>
                <div>
                  <label className="text-xs text-bm-gray block mb-1">Economia</label>
                  <input value={data.economiaVista} onChange={(e) => update({ economiaVista: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
                </div>
                <div>
                  <label className="text-xs text-bm-gray block mb-1">Investimento em Tráfego</label>
                  <input value={data.valorTrafego} onChange={(e) => update({ valorTrafego: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
                </div>
                <ToggleSection label="Mostrar comparativo de estrutura" enabled={data.mostrarComparativoEstrutura} onToggle={(v) => update({ mostrarComparativoEstrutura: v })}><div /></ToggleSection>
              </>
            )}
          </div>
        );
      case 10:
        return (
          <div className="space-y-3">
            <div>
              <label className="text-xs text-bm-gray block mb-1">Mensagem de Encerramento</label>
              <textarea value={data.mensagemEncerramento} onChange={(e) => update({ mensagemEncerramento: e.target.value })} rows={3} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange resize-none" />
            </div>
            <div>
              <label className="text-xs text-bm-gray block mb-1">WhatsApp</label>
              <input value={data.whatsapp} onChange={(e) => update({ whatsapp: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
            </div>
            <div>
              <label className="text-xs text-bm-gray block mb-1">Website</label>
              <input value={data.website} onChange={(e) => update({ website: e.target.value })} className="w-full bg-bm-card border border-bm-orange/30 rounded-lg p-2 text-sm text-bm-white focus:outline-none focus:border-bm-orange" />
            </div>
            <ToggleSection label="Exibir logo BM grande" enabled={data.showLogo} onToggle={(v) => update({ showLogo: v })}><div /></ToggleSection>
          </div>
        );
      default: return null;
    }
  };

  const renderPreview = () => {
    switch (step) {
      case 0: return <SlideCapa data={data} />;
      case 1: return <SlideBoasVindas data={data} />;
      case 2: return <SlideSobreBM />;
      case 3: return <SlideModeloCoproducao data={data} />;
      case 4: return <SlideEstruturaCompleta />;
      case 5: return <SlideFunil8Overview />;
      case 6: return <SlideFunil8Fase1 />;
      case 7: return <SlideFases23 />;
      case 8: return <SlideCronograma data={data} />;
      case 9: return <SlideInvestimento data={data} />;
      case 10: return <SlideEncerramento data={data} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-bm-darker flex flex-col">
      <div className="bg-bm-dark border-b border-bm-orange/20 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-bm-gray hover:text-bm-white text-sm">← Voltar</button>
            <h1 className="text-lg font-bold text-bm-white">Confirme sua <span className="text-bm-orange">Proposta</span></h1>
          </div>
          <div className="w-64">
            <ProgressBar current={step} total={SLIDE_CONFIG.length} />
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full p-4 flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[38%] space-y-4 overflow-y-auto" style={{ flexShrink: 0 }}>
          <div className="bg-bm-card rounded-xl p-4 border border-bm-orange/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-bm-orange rounded" />
              <h2 className="text-sm font-bold text-bm-white">{config.label}</h2>
            </div>
            <ToggleSection label="Incluir este slide" tooltip={config.tooltip} enabled={data[toggleKey] as boolean} onToggle={(v) => update({ [toggleKey]: v })}>
              {renderForm()}
            </ToggleSection>
          </div>

          <div className="flex gap-2">
            <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="flex-1 bg-bm-card text-bm-gray rounded-lg py-2 text-sm hover:bg-bm-card-light disabled:opacity-30">← Anterior</button>
            <button onClick={() => update({ [toggleKey]: false })} className="bg-bm-card text-bm-gray-dark rounded-lg px-3 py-2 text-xs hover:bg-bm-card-light">Pular</button>
            {step < SLIDE_CONFIG.length - 1 ? (
              <button onClick={() => setStep(step + 1)} className="flex-1 bm-btn-primary py-2 text-sm">Próximo →</button>
            ) : (
              <button onClick={onFinish} className="flex-1 bm-btn-primary py-2 text-sm">Ver Preview Completo →</button>
            )}
          </div>
        </div>

        <div className="lg:w-[55%] flex items-start justify-center">
          <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-bm-orange/20">
            <SlidePreviewSmall>
              {renderPreview()}
            </SlidePreviewSmall>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tela2_Wizard;
