import React from 'react';
import bmLogo from '@/assets/bm-logo.png';
import { defaultContent } from '@/utils/defaultContent';
import type { ProposalData } from '@/utils/defaultContent';
import crisImg from '@/assets/cris.png';
import janaImg from '@/assets/janaina.png';
import sabrinaImg from '@/assets/sabrina.png';

const fotos = [crisImg, janaImg, sabrinaImg];

// SLIDE: CAPA
export const SlideCapa: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide bm-slide-dark bm-texture flex flex-col items-center justify-center p-8 relative">
    {data.showLogo && <img src={bmLogo} alt="BM Logo" className="w-20 h-20 mb-6 rounded-full" />}
    <p className="text-bm-gray text-[0.6rem] tracking-[0.3em] uppercase mb-2">Infraestrutura Digital</p>
    <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider mb-1">
      <span className="text-bm-orange">PROPOSTA</span> <span className="text-bm-white">EXCLUSIVA</span>
    </h1>
    <p className="text-xs text-bm-gray tracking-[0.2em] mb-6">COPRODUÇÃO ESTRATÉGICA</p>
    {data.nomeEspecialista && (
      <div className="bg-bm-orange/20 border border-bm-orange px-6 py-2 rounded-lg">
        <span className="text-bm-orange font-bold text-sm">{data.nomeEspecialista}</span>
      </div>
    )}
    <div className="absolute bottom-4 flex items-center gap-4 text-[0.5rem] text-bm-gray-dark">
      <span>Estratégia</span><span>•</span><span>Estrutura</span><span>•</span><span>Escala</span>
    </div>
    <span className="absolute bottom-4 right-6 text-[0.5rem] text-bm-gray-dark">{data.ano}</span>
    <span className="absolute bottom-4 left-6 text-[0.5rem] text-bm-gray-dark">{data.website}</span>
  </div>
);

// SLIDE: BOAS-VINDAS
export const SlideBoasVindas: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide bm-slide-dark bm-texture p-6 flex flex-col">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-1 h-6 bg-bm-orange rounded" />
      <div>
        <h2 className="text-lg font-extrabold text-bm-white">Perfil do Especialista</h2>
        <p className="text-[0.55rem] text-bm-gray">Área editável para personalização</p>
      </div>
    </div>
    <div className="flex gap-4 flex-1">
      <div className="flex-1 space-y-3">
        <div>
          <p className="text-[0.5rem] text-bm-orange uppercase tracking-wider">Nome Completo</p>
          <p className="text-sm font-bold text-bm-white">{data.nomeEspecialista || "[Nome do Especialista]"}</p>
        </div>
        <div>
          <p className="text-[0.5rem] text-bm-orange uppercase tracking-wider">Área de Expertise</p>
          <p className="text-sm text-bm-white">{data.areaExpertise || "[Segmento de atuação]"}</p>
        </div>
        <div>
          <p className="text-[0.5rem] text-bm-orange uppercase tracking-wider">Apresentação</p>
          <p className="text-[0.55rem] text-bm-gray leading-relaxed">{data.textoBoasVindas}</p>
        </div>
      </div>
      <div className="w-28 flex-shrink-0 flex items-start justify-center">
        {data.fotoEspecialista ? (
          <img src={data.fotoEspecialista} alt="Especialista" className="w-24 h-24 rounded-full border-2 border-bm-orange object-cover" />
        ) : (
          <div className="w-24 h-24 rounded-full border-2 border-bm-orange bg-bm-card flex items-center justify-center text-bm-gray-dark text-[0.5rem]">FOTO</div>
        )}
      </div>
    </div>
  </div>
);

// SLIDE: SOBRE A BM
export const SlideSobreBM: React.FC = () => (
  <div className="bm-slide bm-slide-dark bm-texture p-5 flex gap-4">
    <div className="w-[40%] space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-1 h-5 bg-bm-orange rounded" />
        <div>
          <h2 className="text-base font-extrabold text-bm-white">Sobre a BM</h2>
          <p className="text-[0.5rem] text-bm-gray">Infraestrutura Digital</p>
        </div>
      </div>
      <span className="bm-badge text-[0.5rem]">BM</span>
      <p className="text-[0.6rem] font-bold text-bm-white">Não é uma Agência. É uma Estrutura Completa.</p>
      <p className="text-[0.5rem] text-bm-gray leading-relaxed">{defaultContent.sobreBM}</p>
      <div className="bg-bm-card rounded-lg p-3 border border-bm-orange/30">
        <p className="text-[0.5rem] text-bm-orange font-bold">NOSSA VISÃO</p>
        <p className="text-[0.55rem] text-bm-white font-bold mt-1">NÃO VENDEMOS SERVIÇOS. CONSTRUÍMOS OPERAÇÕES.</p>
      </div>
      <div className="bg-bm-card rounded-lg p-3 border border-bm-orange/30">
        <p className="text-[0.5rem] text-bm-orange font-bold">Nossa Cultura</p>
        <p className="text-[0.45rem] text-bm-gray mt-1">{defaultContent.pilares.cultura}</p>
      </div>
    </div>
    <div className="w-[60%]">
      <h3 className="text-sm font-bold text-bm-white mb-3">As Mentes por Trás da BM</h3>
      <div className="grid grid-cols-3 gap-2">
        {defaultContent.fundadoras.map((f, i) => (
          <div key={i} className="bm-card flex flex-col items-center text-center p-3">
            <img src={fotos[i]} alt={f.nome} className="w-16 h-16 rounded-full border-2 border-bm-orange object-cover mb-2" />
            <p className="text-[0.6rem] font-bold text-bm-white">{f.nome}</p>
            <p className="text-[0.45rem] text-bm-orange">{f.cargo1}</p>
            <p className="text-[0.45rem] text-bm-gray">{f.cargo2}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// SLIDE: MODELO DE COPRODUÇÃO
export const SlideModeloCoproducao: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide bm-slide-dark bm-texture p-5">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-1 h-5 bg-bm-orange rounded" />
      <div>
        <h2 className="text-base font-extrabold text-bm-white">Divisão de Responsabilidades</h2>
        <p className="text-[0.5rem] text-bm-gray">Clareza total sobre o que cada parte executa</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="bm-card">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">👤</span>
          <div>
            <p className="text-xs font-bold text-bm-white">Especialista</p>
            <p className="text-[0.45rem] text-bm-orange">Sua Expertise</p>
          </div>
        </div>
        {defaultContent.divisaoResponsabilidades.especialista.items.map((item, i) => (
          <div key={i} className="flex items-start gap-2 py-1.5 border-b border-bm-card-light/30 last:border-0">
            <span className="text-xs">{item.icone}</span>
            <div>
              <p className="text-[0.55rem] font-bold text-bm-white">{item.titulo}</p>
              <p className="text-[0.45rem] text-bm-gray">{item.descricao}</p>
            </div>
          </div>
        ))}
        <p className="text-[0.5rem] text-bm-orange mt-2 font-medium">Foque apenas no que você faz de melhor</p>
      </div>
      <div className="bm-card">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🏢</span>
          <div>
            <p className="text-xs font-bold text-bm-white">BM</p>
            <p className="text-[0.45rem] text-bm-orange">Operação Completa</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {defaultContent.divisaoResponsabilidades.bm.items.map((item, i) => (
            <div key={i} className="bg-bm-dark rounded-lg p-2 flex items-center gap-1.5">
              <span className="text-[0.6rem]">{item.icone}</span>
              <p className="text-[0.5rem] font-medium text-bm-white">{item.titulo}</p>
            </div>
          ))}
        </div>
        <div className="bg-bm-orange rounded-lg p-2 mt-3 text-center">
          <p className="text-[0.5rem] font-bold text-bm-white">A BM assume a operação completa</p>
        </div>
      </div>
    </div>
  </div>
);

// SLIDE: ESTRUTURA COMPLETA
export const SlideEstruturaCompleta: React.FC = () => (
  <div className="bm-slide bm-slide-dark bm-texture p-4">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-1 h-5 bg-bm-orange rounded" />
      <div>
        <h2 className="text-sm font-extrabold text-bm-white">A Estrutura Completa que Assumimos</h2>
        <p className="text-[0.45rem] text-bm-gray">Operação total. Você não precisa estruturar funil, montar equipe ou gerir processos.</p>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-1.5">
      {defaultContent.estruturaCompleta.map((item, i) => (
        <div key={i} className="bm-card p-2">
          <div className="flex items-center gap-1 mb-1">
            <span className="bg-bm-orange rounded-md w-5 h-5 flex items-center justify-center text-[0.55rem]">{item.icone}</span>
            <p className="text-[0.5rem] font-bold text-bm-white">{item.titulo}</p>
          </div>
          <p className="text-[0.4rem] text-bm-gray mb-1">{item.descricao}</p>
          {item.bullets.map((b, j) => (
            <div key={j} className="flex items-center gap-1">
              <span className="text-bm-orange text-[0.4rem]">✓</span>
              <span className="text-[0.4rem] text-bm-gray">{b}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
    <div className="bg-bm-orange-dark/40 border border-bm-orange/40 rounded-lg p-2 mt-2 text-center">
      <p className="text-[0.45rem] text-bm-white">A BM constrói, organiza e opera toda a máquina enquanto você foca no que realmente importa.</p>
    </div>
  </div>
);

// SLIDE: FUNIL 8 OVERVIEW
export const SlideFunil8Overview: React.FC = () => (
  <div className="bm-slide bm-slide-dark bm-texture p-5">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-1 h-5 bg-bm-orange rounded" />
      <div>
        <h2 className="text-base font-extrabold text-bm-white">Metodologia FUNIL 8</h2>
        <p className="text-[0.5rem] text-bm-gray">Estratégia de Vendas em 3 Fases Interdependentes</p>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-3">
      {(['fase1', 'fase2', 'fase3'] as const).map((key, i) => {
        const fase = defaultContent.funil8Overview[key];
        return (
          <div key={i} className="bm-card border-bm-orange/60">
            <div className="flex items-start gap-2 mb-2">
              <span className="bg-bm-orange text-bm-white font-bold text-[0.5rem] w-6 h-6 rounded flex items-center justify-center">0{i + 1}</span>
              <div>
                <p className="text-xs font-bold text-bm-white">{fase.titulo}</p>
                <p className="text-[0.45rem] text-bm-orange">{fase.subtitulo}</p>
              </div>
            </div>
            <p className="bm-stat-number text-xl text-center my-2">{fase.numero}</p>
            <p className="text-[0.45rem] text-bm-gray text-center mb-2">{fase.label}</p>
            {fase.bullets.map((b, j) => (
              <div key={j} className="flex items-center gap-1 mb-0.5">
                <span className="text-bm-orange text-[0.4rem]">●</span>
                <span className="text-[0.45rem] text-bm-gray">{b}</span>
              </div>
            ))}
            <div className="bg-bm-dark rounded-lg p-1.5 mt-2 space-y-0.5">
              {fase.info.map((inf, j) => (
                <p key={j} className="text-[0.4rem] text-bm-gray">{inf}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
    <div className="bg-bm-card rounded-lg p-3 flex items-start gap-2">
      <span className="text-lg">💡</span>
      <div>
        <p className="text-[0.55rem] font-bold text-bm-orange">Princípio Fundamental</p>
        <p className="text-[0.45rem] text-bm-gray">Cada fase tem uma função clara e singular: adquirir, monetizar ou escalar. Não são opções, são estações de uma linha de produção. A falha de uma etapa compromete todo o sistema.</p>
      </div>
    </div>
  </div>
);

// SLIDE: FUNIL 8 FASE 1 DETALHADO
export const SlideFunil8Fase1: React.FC = () => (
  <div className="bm-slide bm-slide-dark bm-texture p-5 flex gap-4">
    <div className="w-[55%]">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-5 bg-bm-orange rounded" />
        <div>
          <h2 className="text-sm font-extrabold text-bm-white">Fase 1: Aquisição</h2>
          <p className="text-[0.45rem] text-bm-orange">Funil 8</p>
        </div>
      </div>
      <p className="text-[0.45rem] text-bm-gray mb-3">Comprar cliente a custo zero através da maximização do valor</p>
      <div className="space-y-1.5">
        {[...defaultContent.funil8Detalhado.piramide].reverse().map((item, i) => (
          <div key={i} className={`flex items-center gap-2 p-1.5 rounded-lg border ${i === 0 ? 'bg-bm-orange-dark/60 border-bm-orange' : 'bg-bm-orange/80 border-bm-orange/60'}`}>
            <span className="text-xs">{item.icone}</span>
            <div className="flex-1">
              <p className="text-[0.5rem] font-bold text-bm-white">{item.titulo}</p>
              <p className="text-[0.4rem] text-bm-white/80">{item.descricao}</p>
            </div>
            <span className="text-[0.6rem] font-bold text-bm-white">{item.valor}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="w-[45%] space-y-2">
      {defaultContent.funil8Detalhado.cards.map((card, i) => (
        <div key={i} className={`bm-card p-2 ${card.titulo === 'Resultados Esperados' ? 'bg-bm-orange-dark/30' : ''}`}>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-xs">{card.icone}</span>
            <p className="text-[0.5rem] font-bold text-bm-white">{card.titulo}</p>
          </div>
          {card.stats ? (
            <div className="grid grid-cols-3 gap-1">
              {card.stats.map((s, j) => (
                <div key={j} className="bg-bm-dark rounded p-1.5 text-center">
                  <p className="text-[0.6rem] font-bold text-bm-orange">{s.valor}</p>
                  <p className="text-[0.35rem] text-bm-gray">{s.label}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[0.45rem] text-bm-gray">{card.texto}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

// SLIDE: FASES 2 e 3
export const SlideFases23: React.FC = () => (
  <div className="bm-slide bm-slide-dark bm-texture p-5">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-1 h-5 bg-bm-orange rounded" />
      <div>
        <h2 className="text-sm font-extrabold text-bm-white">Fases 2 e 3</h2>
        <p className="text-[0.45rem] text-bm-gray">Monetização e Escala da Base Construída</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {([
        { key: 'fase2' as const, badge: '02', titulo: 'Monetização', sub: 'Turbo Express' },
        { key: 'fase3' as const, badge: '03', titulo: 'Escala', sub: 'Lançamento Pago' }
      ]).map((fase) => {
        const data = defaultContent.fases23[fase.key];
        return (
          <div key={fase.key} className="space-y-2">
            <div className="bm-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-bm-orange text-bm-white font-bold text-[0.5rem] w-5 h-5 rounded flex items-center justify-center">{fase.badge}</span>
                <div>
                  <p className="text-xs font-bold text-bm-white">{fase.titulo}</p>
                  <p className="text-[0.4rem] text-bm-orange">{fase.sub}</p>
                </div>
              </div>
              {data.cards.map((c, i) => (
                <div key={i} className="bg-bm-dark rounded-lg p-2 mb-1.5">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="text-[0.5rem]">{c.icone}</span>
                    <p className="text-[0.45rem] font-bold text-bm-white">{c.titulo}</p>
                  </div>
                  <p className="text-[0.4rem] text-bm-gray">{c.texto}</p>
                </div>
              ))}
            </div>
            <div className="bg-bm-card-light/50 rounded-lg p-2">
              <p className="text-[0.4rem] text-bm-orange font-bold mb-1">Resultados Esperados</p>
              <div className="grid grid-cols-3 gap-1">
                {data.stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-[0.55rem] font-bold text-bm-orange">{s.valor}</p>
                    <p className="text-[0.35rem] text-bm-gray">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

// SLIDE: CRONOGRAMA
export const SlideCronograma: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide bm-slide-dark bm-texture p-4">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-1 h-5 bg-bm-orange rounded" />
      <div>
        <h2 className="text-sm font-extrabold text-bm-white">Cronograma e Entregas</h2>
        <p className="text-[0.45rem] text-bm-gray">Primeiros 90 Dias: Da Estruturação à Monetização</p>
      </div>
    </div>
    <div className="flex items-center gap-1 mb-3">
      {[defaultContent.cronograma.fase1, defaultContent.cronograma.fase2, defaultContent.cronograma.fase3].map((f, i) => (
        <React.Fragment key={i}>
          <div className={`flex-1 rounded-lg p-1.5 text-center ${i === 0 ? 'bg-bm-orange' : i === 1 ? 'bg-bm-orange/80' : 'bg-bm-orange-dark'}`}>
            <p className="text-[0.45rem] font-bold text-bm-white">{f.dias}</p>
            <p className="text-[0.35rem] text-bm-white/80">{f.titulo}</p>
          </div>
          {i < 2 && <span className="text-bm-orange text-xs">→</span>}
        </React.Fragment>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-2">
      {/* Fase 1 */}
      <div className="bm-card p-2">
        <div className="flex items-center gap-1 mb-2">
          <span className="bg-bm-orange text-bm-white font-bold text-[0.4rem] w-4 h-4 rounded flex items-center justify-center">01</span>
          <p className="text-[0.5rem] font-bold text-bm-white">Validação e Estruturação</p>
        </div>
        {(defaultContent.cronograma.fase1.items as string[]).map((item, i) => (
          <div key={i} className="flex items-center gap-1 mb-0.5">
            <span className="text-bm-orange text-[0.35rem]">✅</span>
            <span className="text-[0.4rem] text-bm-gray">{item}</span>
          </div>
        ))}
        <div className="bg-bm-dark rounded p-1.5 mt-2">
          <p className="text-[0.4rem] text-bm-orange text-center">{defaultContent.cronograma.fase1.rodape}</p>
        </div>
      </div>
      {/* Fase 2 */}
      <div className="bm-card p-2">
        <div className="flex items-center gap-1 mb-2">
          <span className="bg-bm-orange text-bm-white font-bold text-[0.4rem] w-4 h-4 rounded flex items-center justify-center">02</span>
          <p className="text-[0.5rem] font-bold text-bm-white">Aquisição e Validação</p>
        </div>
        {(defaultContent.cronograma.fase2.items as Array<{icone: string; titulo: string; descricao: string}>).map((item, i) => (
          <div key={i} className="flex items-start gap-1 mb-1">
            <span className="text-[0.4rem]">{item.icone}</span>
            <div>
              <p className="text-[0.4rem] font-bold text-bm-white">{item.titulo}</p>
              <p className="text-[0.35rem] text-bm-gray">{item.descricao}</p>
            </div>
          </div>
        ))}
        <div className="bg-bm-dark rounded p-1.5 mt-2">
          <p className="text-[0.4rem] text-bm-orange text-center">{defaultContent.cronograma.fase2.rodape}</p>
        </div>
      </div>
      {/* Fase 3 */}
      <div className="bm-card p-2">
        <div className="flex items-center gap-1 mb-2">
          <span className="bg-bm-orange text-bm-white font-bold text-[0.4rem] w-4 h-4 rounded flex items-center justify-center">03</span>
          <p className="text-[0.5rem] font-bold text-bm-white">Monetização da Base</p>
        </div>
        {(defaultContent.cronograma.fase3.items as Array<{icone: string; titulo: string; descricao: string}>).map((item, i) => (
          <div key={i} className="flex items-start gap-1 mb-1">
            <span className="text-[0.4rem]">{item.icone}</span>
            <div>
              <p className="text-[0.4rem] font-bold text-bm-white">{item.titulo}</p>
              <p className="text-[0.35rem] text-bm-gray">{item.descricao}</p>
            </div>
          </div>
        ))}
        <div className="bg-bm-dark rounded p-1.5 mt-2">
          <p className="text-[0.4rem] text-bm-orange text-center">{defaultContent.cronograma.fase3.rodape}</p>
        </div>
      </div>
    </div>
  </div>
);

// SLIDE: INVESTIMENTO
export const SlideInvestimento: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide bm-slide-dark bm-texture p-5">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-1 h-5 bg-bm-orange rounded" />
      <div>
        <h2 className="text-base font-extrabold text-bm-white">Investimento</h2>
        <p className="text-[0.5rem] text-bm-gray">Condições comerciais da coprodução estratégica</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-3">
      <div className="bm-card">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">🤝</span>
          <p className="text-xs font-bold text-bm-white">Coprodução Estratégica</p>
        </div>
        <div className="bg-bm-dark rounded-lg p-2 space-y-1">
          <div className="flex justify-between">
            <span className="text-[0.45rem] text-bm-gray">Valor Total:</span>
            <span className="text-sm font-bold text-bm-orange">{data.valorCoproducao}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[0.45rem] text-bm-gray">Parcelado:</span>
            <span className="text-[0.5rem] text-bm-white">{data.parcelamento}</span>
          </div>
        </div>
        <div className="bg-bm-orange-dark/40 rounded-lg p-2 mt-2 flex items-center gap-2">
          <span className="text-sm">%</span>
          <div>
            <p className="text-[0.45rem] text-bm-white font-bold">{data.descontoVista}</p>
            <p className="text-[0.4rem] text-bm-gray">{data.economiaVista}</p>
          </div>
        </div>
      </div>
      <div className="bm-card">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">📢</span>
          <p className="text-xs font-bold text-bm-white">Investimento em Tráfego</p>
        </div>
        <div className="bg-bm-orange-dark/40 rounded-lg p-3 text-center mb-2">
          <p className="text-[0.4rem] text-bm-gray">Investimento Mínimo Recomendado</p>
          <p className="text-xl font-bold text-bm-orange">{data.valorTrafego}</p>
          <p className="text-[0.4rem] text-bm-gray">por mês</p>
        </div>
        {defaultContent.investimento.trafego.items.map((item, i) => (
          <div key={i} className="flex items-center gap-1 mb-0.5">
            <span className="text-bm-orange text-[0.4rem]">●</span>
            <span className="text-[0.45rem] text-bm-gray">{item}</span>
          </div>
        ))}
      </div>
    </div>
    {data.mostrarComparativoEstrutura && (
      <div className="bm-card flex gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-sm">🏛️</span>
            <div>
              <p className="text-[0.5rem] font-bold text-bm-white">Comparativo de Estrutura</p>
              <p className="text-[0.4rem] text-bm-gray">Para estruturar de forma independente:</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {defaultContent.investimento.comparativo.map((c, i) => (
              <div key={i} className="bg-bm-dark rounded p-1.5 flex items-center gap-1">
                <span className="text-[0.4rem]">{c.icone}</span>
                <span className="text-[0.4rem] text-bm-gray">{c.titulo}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-bm-orange rounded-lg p-3 flex flex-col justify-center w-[35%]">
          <p className="text-[0.5rem] font-bold text-bm-white flex items-center gap-1">✅ Na Coprodução BM</p>
          <p className="text-[0.4rem] text-bm-white/90 mt-1">Toda essa estrutura está <strong>integrada em uma única operação estratégica</strong></p>
        </div>
      </div>
    )}
  </div>
);

// SLIDE: ENCERRAMENTO
export const SlideEncerramento: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide bm-slide-dark bm-texture flex flex-col items-center justify-center p-8 text-center">
    {data.showLogo && <img src={bmLogo} alt="BM Logo" className="w-20 h-20 mb-4 rounded-full" />}
    <p className="text-bm-gray text-[0.5rem] tracking-[0.3em] uppercase mb-2">Infraestrutura Digital</p>
    <h2 className="text-xl font-extrabold text-bm-white mb-3">Vamos Construir Juntos</h2>
    <p className="text-[0.55rem] text-bm-gray max-w-md mb-4">{data.mensagemEncerramento}</p>
    <div className="flex gap-4 mb-4">
      {[
        { titulo: "Estratégia Completa", sub: "Operação total planejada" },
        { titulo: "Equipe Dedicada", sub: "Profissionais especializados" },
        { titulo: "Parceria Real", sub: "Compromisso de verdade" }
      ].map((item, i) => (
        <div key={i} className="text-center">
          <p className="text-[0.5rem] font-bold text-bm-orange">{item.titulo}</p>
          <p className="text-[0.4rem] text-bm-gray">{item.sub}</p>
        </div>
      ))}
    </div>
    <p className="text-[0.45rem] text-bm-gray">Entre em contato para dar o próximo passo</p>
    <p className="text-[0.5rem] text-bm-orange mt-1">{data.website}</p>
  </div>
);
