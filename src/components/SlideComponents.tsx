import React from 'react';
import bmLogo from '@/assets/bm-logo.png';
import { defaultContent } from '@/utils/defaultContent';
import type { ProposalData } from '@/utils/defaultContent';
import crisImg from '@/assets/cris.png';
import janaImg from '@/assets/janaina.png';
import sabrinaImg from '@/assets/sabrina.png';
import {
  Megaphone, Monitor, Smartphone, Paintbrush, PenLine, MessageSquare,
  Play, Handshake, User, Building2, Lightbulb, BarChart3, ShoppingCart,
  Plus, Crown, Target, Settings, RefreshCw, CheckCircle, ChevronRight,
  Star, GraduationCap, Video, FolderOpen, CalendarDays, Zap, TrendingUp,
  Users, Cog, Rocket, Package, BookOpen, AlertCircle, Eye, Heart
} from 'lucide-react';

const fotos = [crisImg, janaImg, sabrinaImg];

// Icon mapping for structure cards
const structureIcons = [Megaphone, Monitor, Smartphone, Paintbrush, PenLine, MessageSquare, Play, Handshake];

// Icon mapping for funil cards
const funilCardIcons = [Target, Settings, RefreshCw, BarChart3];

// Icon mapping for piramide
const piramideIcons = [ShoppingCart, Plus, Plus, Plus, Crown];

// Icon mapping for fases23 cards
const fase2Icons = [Users, CalendarDays, Package];
const fase3Icons = [CheckCircle, Megaphone, Crown];

// Icon mapping for cronograma fase2/3 items
const cronoFase2Icons = [ShoppingCart, Megaphone, BookOpen, Play, Star];
const cronoFase3Icons = [Zap, TrendingUp, Users, Cog, Rocket];

// Icon mapping for divisao especialista items
const espIcons = [GraduationCap, Video, FolderOpen, CalendarDays];
// Icon mapping for divisao BM items
const bmIcons = [BarChart3, PenLine, Package, PenLine, Play, Monitor, Megaphone, Handshake];

// Slide Header component
const SlideHeader: React.FC<{ section: string }> = ({ section }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px 12px' }}>
    <img src={bmLogo} alt="BM" style={{ width: 32, height: 32, borderRadius: '50%' }} />
    <span style={{ color: '#F05A28', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>{section}</span>
  </div>
);

// Slide Footer component  
const SlideFooter: React.FC = () => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 40px 10px' }}>
    <div style={{ borderTop: '1px solid rgba(240,90,40,0.3)', paddingTop: 6, textAlign: 'center' }}>
      <span style={{ color: '#888', fontSize: 10 }}>bmcoproduções.com.br/bm</span>
    </div>
  </div>
);

// ============ SLIDE: CAPA ============
export const SlideCapa: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide" style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 1280, height: 720, position: 'relative', overflow: 'hidden', backgroundImage: 'repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(255,255,255,0.02) 40px,rgba(255,255,255,0.02) 41px)' }}>
    {data.showLogo && <img src={bmLogo} alt="BM Logo" style={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 32 }} />}
    <p style={{ color: '#888', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 8 }}>Infraestrutura Digital</p>
    <h1 style={{ fontSize: 48, fontWeight: 900, letterSpacing: '0.05em', marginBottom: 4 }}>
      <span style={{ color: '#F05A28' }}>PROPOSTA</span>{' '}
      <span style={{ color: '#fff' }}>EXCLUSIVA</span>
    </h1>
    <p style={{ fontSize: 16, color: '#888', letterSpacing: '0.2em', marginBottom: 40 }}>COPRODUÇÃO ESTRATÉGICA</p>
    {data.nomeEspecialista && (
      <div style={{ border: '1.5px solid #F05A28', borderRadius: 12, padding: '12px 48px', background: 'rgba(240,90,40,0.08)' }}>
        <span style={{ color: '#F05A28', fontWeight: 700, fontSize: 20, letterSpacing: '0.05em' }}>{data.nomeEspecialista}</span>
      </div>
    )}
    <div style={{ position: 'absolute', bottom: 24, display: 'flex', gap: 16, fontSize: 11, color: '#888' }}>
      <span>{data.website}</span>
      <span>{data.ano}</span>
    </div>
  </div>
);

// ============ SLIDE: BOAS-VINDAS ============
export const SlideBoasVindas: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide" style={{ background: '#FFFFFF', display: 'flex', flexDirection: 'column', width: 1280, height: 720, position: 'relative', overflow: 'hidden' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 48px 16px' }}>
      <img src={bmLogo} alt="BM" style={{ width: 40, height: 40, borderRadius: '50%' }} />
      <span style={{ color: '#F05A28', fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>PROPOSTA DE PARCERIA</span>
    </div>
    <div style={{ borderBottom: '1px solid rgba(240,90,40,0.3)', margin: '0 48px' }} />
    
    <div style={{ display: 'flex', flex: 1, padding: '32px 48px 0' }}>
      <div style={{ width: 700, paddingRight: 40, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: '#1A1A1A', marginBottom: 8, lineHeight: 1.2 }}>
          Seja Bem-vindo a <span style={{ color: '#F05A28' }}>BM Coproduções</span>
        </h2>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 20 }}>É uma honra ter você conosco nessa jornada de transformação digital!</p>
        
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.8, marginBottom: 20 }}>
          Estamos <span style={{ textDecoration: 'underline', color: '#F05A28', fontWeight: 600 }}>muito felizes</span> com essa nova parceria! Mais que apenas oferecer serviços, nosso objetivo e <span style={{ textDecoration: 'underline', color: '#F05A28', fontWeight: 700 }}>construir uma operação completa</span> ao redor da sua expertise, garantindo que sua presença digital gere autoridade, conexão e resultados consistentes.
        </p>
        
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.8, marginBottom: 32 }}>
          Conte conosco para traduzir a essência do seu conhecimento em uma estrutura de negócio digital escalável, com estratégia, copy, design, tráfego e posicionamento trabalhando em perfeita sintonia.
        </p>
        
        <div style={{ background: '#1A1A1A', borderRadius: 8, padding: '20px 24px', marginTop: 'auto', marginBottom: 32 }}>
          <p style={{ color: '#CCC', fontSize: 14, fontStyle: 'italic', lineHeight: 1.7 }}>
            "{defaultContent.manifesto}"
          </p>
        </div>
      </div>
      
      <div style={{ width: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {data.fotoEspecialista ? (
          <div style={{ width: 220, height: 220, borderRadius: 16, border: '3px dashed #F05A28', overflow: 'hidden', flexShrink: 0 }}>
            <img src={data.fotoEspecialista} alt="Especialista" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ) : (
          <div style={{ width: 220, height: 220, borderRadius: 16, border: '3px dashed #F05A28', background: '#F05A28', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <span style={{ color: '#fff', fontSize: 14, textAlign: 'center', padding: 20 }}>Foto profissional do especialista</span>
          </div>
        )}
        <p style={{ fontSize: 24, fontWeight: 800, color: '#1A1A1A', marginTop: 20, letterSpacing: '0.05em', textTransform: 'uppercase', textAlign: 'center' }}>
          {data.nomeEspecialista || "[NOME DO ESPECIALISTA]"}
        </p>
        <p style={{ fontSize: 15, color: '#F05A28', fontWeight: 600, marginTop: 6, textAlign: 'center' }}>
          {data.areaExpertise || "[ÁREA DE EXPERTISE]"}
        </p>
      </div>
    </div>
  </div>
);

// ============ SLIDE: SOBRE A BM (Dark layout with founders) ============
export const SlideSobreBM: React.FC = () => (
  <div className="bm-slide" style={{ background: '#1A1A1A', color: '#fff', display: 'flex', flexDirection: 'column', width: 1280, height: 720, position: 'relative', overflow: 'hidden', padding: 32 }}>
    {/* Header with orange bar */}
    <div style={{ borderLeft: '4px solid #F05A28', paddingLeft: 16, marginBottom: 14 }}>
      <h2 style={{ fontSize: 28, fontWeight: 800 }}>Sobre a BM</h2>
      <p style={{ fontSize: 13, color: '#CCCCCC', marginTop: 2 }}>Infraestrutura Digital</p>
    </div>

    {/* Card: Não é uma Agência */}
    <div style={{ background: '#2A2A2A', border: '1px solid rgba(240,90,40,0.4)', borderRadius: 12, padding: '14px 20px', marginBottom: 10, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: '#F05A28', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Building2 size={18} color="#fff" />
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Não é uma Agência. É uma Estrutura Completa.</p>
        <p style={{ fontSize: 12, color: '#aaa', lineHeight: 1.6 }}>
          A BM Infraestrutura Digital é uma estrutura estratégica completa para especialistas que desejam{' '}
          <span style={{ color: '#F05A28', fontWeight: 700 }}>posicionamento forte, autoridade e vendas consistentes</span>.
          {' '}Unimos estratégia, copy, design, tráfego e posicionamento em um único ecossistema.
        </p>
      </div>
    </div>

    {/* Card: Nossa Visão */}
    <div style={{ background: '#2A2A2A', border: '1px solid rgba(240,90,40,0.4)', borderRadius: 12, padding: '14px 20px', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 14 }}>
      <Eye size={20} color="#F05A28" style={{ flexShrink: 0 }} />
      <div>
        <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>Nossa Visão</p>
        <p style={{ fontSize: 16, fontWeight: 800, color: '#F05A28', letterSpacing: '0.02em' }}>NÃO VENDEMOS SERVIÇOS. CONSTRUÍMOS OPERAÇÕES.</p>
      </div>
    </div>

    {/* As Mentes por Trás da BM */}
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <Users size={16} color="#F05A28" />
        <span style={{ fontSize: 13, fontWeight: 700, color: '#F05A28' }}>As Mentes por Trás da BM</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        {defaultContent.fundadoras.map((f, i) => (
          <div key={i} style={{ background: '#2A2A2A', border: '1px solid rgba(240,90,40,0.3)', borderRadius: 12, padding: 16, textAlign: 'center' }}>
            <img src={fotos[i]} alt={f.nome} style={{ width: 80, height: 80, borderRadius: '50%', border: '3px solid #F05A28', objectFit: 'cover', margin: '0 auto 10px' }} />
            <p style={{ fontSize: 15, fontWeight: 700 }}>{f.nome}</p>
            <p style={{ fontSize: 12, color: '#F05A28', fontWeight: 700, marginTop: 2 }}>{f.cargo1}</p>
            <p style={{ fontSize: 11, color: '#CCCCCC' }}>{f.cargo2}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Card: Nossa Cultura */}
    <div style={{ background: '#3D2010', borderRadius: 12, padding: '14px 20px', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
      <Heart size={18} color="#F05A28" style={{ flexShrink: 0, marginTop: 2 }} />
      <div>
        <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>Nossa Cultura</p>
        <p style={{ fontSize: 12, color: '#ddd', lineHeight: 1.5 }}>
          <span style={{ fontWeight: 700 }}>Base Sólida + Movimento Contínuo.</span>{' '}
          Valorizamos acompanhamento estratégico, humanizado e personalizado, garantindo que cada projeto seja estruturado sobre uma base sólida e um movimento contínuo de crescimento.
        </p>
      </div>
    </div>
  </div>
);

// ============ SLIDE: MODELO DE COPRODUÇÃO / DIVISÃO ============
export const SlideModeloCoproducao: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide" style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', color: '#fff', display: 'flex', flexDirection: 'column', width: 1280, height: 720, position: 'relative', overflow: 'hidden' }}>
    <SlideHeader section="MODELO DE Coprodução" />
    <div style={{ borderTop: '1px solid rgba(240,90,40,0.3)', margin: '0 40px' }} />
    <div style={{ flex: 1, padding: '20px 40px 40px', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>
        Você Foca no Que Sabe. <span style={{ color: '#F05A28', fontStyle: 'italic' }}>A BM Constrói Tudo.</span>
      </h2>
      <p style={{ fontSize: 14, color: '#888', marginBottom: 24 }}>Clareza total sobre o que cada parte executa na parceria</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, flex: 1 }}>
        {/* Sua Responsabilidade */}
        <div style={{ background: '#FFFFFF', borderRadius: 12, padding: '28px 32px', display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: 18, fontWeight: 800, color: '#1A1A1A', marginBottom: 4 }}>Sua Responsabilidade</p>
          <div style={{ width: 50, height: 3, background: '#F05A28', marginBottom: 20 }} />
          <div style={{ flex: 1 }}>
            {data.responsabilidadesEspecialista.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 6, height: 6, borderRadius: 1, background: '#F05A28', flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: '#333', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Nossa Responsabilidade */}
        <div style={{ background: '#FFFFFF', borderRadius: 12, padding: '28px 32px', display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: 18, fontWeight: 800, color: '#1A1A1A', marginBottom: 4 }}>Nossa Responsabilidade</p>
          <div style={{ width: 50, height: 3, background: '#F05A28', marginBottom: 20 }} />
          <div style={{ flex: 1 }}>
            {data.responsabilidadesBM.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 6, height: 6, borderRadius: 1, background: '#F05A28', flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: '#333', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ============ SLIDE: ESTRUTURA COMPLETA ============
export const SlideEstruturaCompleta: React.FC = () => (
  <div className="bm-slide" style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', color: '#fff', display: 'flex', flexDirection: 'column', width: 1280, height: 720, position: 'relative', overflow: 'hidden' }}>
    <SlideHeader section="ESTRUTURA COMPLETA" />
    <div style={{ flex: 1, padding: '0 40px 40px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ borderLeft: '4px solid #F05A28', paddingLeft: 12, marginBottom: 12 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800 }}>A Estrutura Completa que Assumimos</h2>
        <p style={{ fontSize: 11, color: '#888' }}>Operação total. Você não precisa estruturar funil, montar equipe ou gerir processos.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, flex: 1 }}>
        {defaultContent.estruturaCompleta.map((item, i) => {
          const Icon = structureIcons[i];
          return (
            <div key={i} style={{ background: '#2A2A2A', border: '1.5px solid rgba(240,90,40,0.7)', borderRadius: 12, padding: 12, display: 'flex', flexDirection: 'column', boxShadow: '0 0 12px rgba(240,90,40,0.15), 0 2px 8px rgba(0,0,0,0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: '#F05A28', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={14} color="#fff" />
                </div>
              <p style={{ fontSize: 14, fontWeight: 700 }}>{item.titulo}</p>
              </div>
              <p style={{ fontSize: 12, color: '#888', marginBottom: 6 }}>{item.descricao}</p>
              {item.bullets.map((b, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                  <CheckCircle size={12} color="#F05A28" />
                  <span style={{ fontSize: 12, color: '#aaa' }}>{b}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      
      <div style={{ background: 'rgba(192,74,26,0.25)', border: '1.5px solid rgba(240,90,40,0.5)', borderRadius: 8, padding: 10, marginTop: 8, textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: '#fff' }}>A BM constrói, organiza e opera toda a máquina enquanto você foca no que realmente importa.</p>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ============ SLIDE: FUNIL 8 OVERVIEW ============
export const SlideFunil8Overview: React.FC = () => {
  const bulletIcons = [
    [Target, GraduationCap, Settings],
    [Zap, CalendarDays, Users],
    [TrendingUp, Crown, Users]
  ];
  return (
    <div className="bm-slide" style={{ background: '#1A1A1A', color: '#fff', display: 'flex', flexDirection: 'column', width: 1280, height: 720, position: 'relative', overflow: 'hidden' }}>
      <div style={{ padding: '28px 48px 0' }}>
        <div style={{ borderLeft: '4px solid #F05A28', paddingLeft: 14, marginBottom: 20 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800 }}>Metodologia FUNIL 8</h2>
          <p style={{ fontSize: 14, color: '#888' }}>Estratégia de Vendas em 3 Fases Interdependentes</p>
        </div>
      </div>
      
      <div style={{ flex: 1, padding: '0 48px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, flex: 1, marginBottom: 16 }}>
          {(['fase1', 'fase2', 'fase3'] as const).map((key, i) => {
            const fase = defaultContent.funil8Overview[key];
            const icons = bulletIcons[i];
            return (
              <div key={i} style={{ background: '#2A2A2A', border: '1.5px solid rgba(240,90,40,0.5)', borderRadius: 12, padding: '18px 20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: '#F05A28', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 16, flexShrink: 0 }}>0{i + 1}</div>
                  <div>
                    <p style={{ fontSize: 17, fontWeight: 700 }}>{fase.titulo}</p>
                    <p style={{ fontSize: 12, color: '#F05A28', fontStyle: 'italic' }}>{fase.subtitulo}</p>
                  </div>
                </div>
                <p style={{ fontSize: 36, fontWeight: 900, color: '#F05A28', margin: '0 0 2px', lineHeight: 1 }}>{fase.numero}</p>
                <p style={{ fontSize: 12, color: '#888', marginBottom: 14 }}>{fase.label}</p>
                {fase.bullets.map((b, j) => {
                  const BIcon = icons[j] || ChevronRight;
                  return (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
                      <BIcon size={13} color="#F05A28" />
                      <span style={{ fontSize: 14, color: '#bbb' }}>{b}</span>
                    </div>
                  );
                })}
                <div style={{ background: '#1A1A1A', borderRadius: 8, padding: '10px 14px', marginTop: 'auto' }}>
                  {fase.info.map((inf, j) => {
                    const parts = inf.split(':');
                    return (
                      <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: j < fase.info.length - 1 ? 4 : 0 }}>
                       <span style={{ fontSize: 13, color: '#888' }}>{parts[0]}:</span>
                         <span style={{ fontSize: 14, fontWeight: 700, color: '#F05A28' }}>{parts[1]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        
        <div style={{ background: '#2A2A2A', border: '1px solid rgba(240,90,40,0.4)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', marginBottom: 20 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(240,90,40,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Lightbulb size={20} color="#F05A28" />
          </div>
          <div>
            <p style={{ fontSize: 15, fontWeight: 700 }}>Princípio Fundamental</p>
            <p style={{ fontSize: 13, color: '#999', lineHeight: 1.5 }}>Cada fase tem uma <span style={{ color: '#F05A28', fontWeight: 700 }}>função clara e singular</span>: adquirir, monetizar ou escalar. Não são opções, são estações de uma linha de produção. A falha de uma etapa compromete todo o sistema.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ SLIDE: FUNIL 8 FASE 1 DETALHADO ============
export const SlideFunil8Fase1: React.FC = () => {
  const piramide = defaultContent.funil8Detalhado.piramide;
  // Bottom to top order: Produto Principal, OB1, OB2, OB3, Upsell
  const bgColors = ['rgba(240,90,40,0.35)', 'rgba(240,90,40,0.5)', 'rgba(240,90,40,0.65)', 'rgba(240,90,40,0.8)', 'rgba(240,90,40,0.95)'];
  
  return (
    <div className="bm-slide" style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', color: '#fff', display: 'flex', flexDirection: 'column', width: 1280, height: 720, position: 'relative', overflow: 'hidden' }}>
      <SlideHeader section="FASE 1 — AQUISIÇÃO" />
      <div style={{ flex: 1, padding: '0 40px 40px', display: 'flex', gap: 24 }}>
        {/* Left: Pyramid stacked bottom-to-top */}
        <div style={{ width: '55%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ borderLeft: '4px solid #F05A28', paddingLeft: 12, marginBottom: 6 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800 }}>Fase 1: Aquisição</h2>
            <p style={{ fontSize: 11 }}><span style={{ color: '#F05A28', fontWeight: 700 }}>Funil 8</span>  <span style={{ color: '#888' }}>Comprar cliente a custo zero através da maximização do valor</span></p>
          </div>
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 0, paddingBottom: 8 }}>
            {[...piramide].reverse().map((item, i) => {
              const Icon = piramideIcons[4 - i];
              const widthPct = 45 + i * 10;
              return (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div style={{ textAlign: 'center', padding: '2px 0', color: '#F05A28', fontSize: 14 }}>↑</div>
                  )}
                  <div style={{
                    width: `${widthPct}%`,
                    padding: '8px 16px',
                    borderRadius: 8,
                    background: bgColors[4 - i],
                    textAlign: 'center',
                    position: 'relative',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                      <Icon size={14} color="#fff" />
                      <span style={{ fontSize: 13, fontWeight: 700 }}>{item.titulo}</span>
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 800, color: '#fff' }}>{item.valor}</p>
                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)' }}>{item.descricao}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        
        {/* Right: Cards */}
        <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {defaultContent.funil8Detalhado.cards.map((card, i) => {
            const Icon = funilCardIcons[i];
            return (
              <div key={i} style={{ background: card.titulo === 'Resultados Esperados' ? '#1E1E1E' : '#2A2A2A', border: '1.5px solid rgba(240,90,40,0.5)', borderRadius: 12, padding: 12, flex: 1, display: 'flex', flexDirection: 'column', boxShadow: card.titulo === 'Resultados Esperados' ? 'inset 0 1px 0 rgba(240,90,40,0.1), 0 0 15px rgba(240,90,40,0.1)' : '0 0 12px rgba(240,90,40,0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <Icon size={16} color="#F05A28" />
                  <p style={{ fontSize: 15, fontWeight: 700 }}>{card.titulo}</p>
                </div>
                {card.stats ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, flex: 1 }}>
                    {card.stats.map((s, j) => (
                      <div key={j} style={{ background: '#1A1A1A', borderRadius: 6, padding: 10, textAlign: 'center' }}>
                        <p style={{ fontSize: 18, fontWeight: 900, color: '#F05A28' }}>{s.valor}</p>
                        <p style={{ fontSize: 11, color: '#888' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ fontSize: 13, color: '#888' }}>{card.texto}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// ============ SLIDE: FASES 2 e 3 ============
export const SlideFases23: React.FC = () => (
  <div className="bm-slide" style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', color: '#fff', display: 'flex', flexDirection: 'column', width: 1280, height: 720, position: 'relative', overflow: 'hidden' }}>
    <SlideHeader section="FASES 2 E 3" />
    <div style={{ flex: 1, padding: '0 40px 40px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ borderLeft: '4px solid #F05A28', paddingLeft: 12, marginBottom: 14 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800 }}>Fases 2 e 3</h2>
        <p style={{ fontSize: 11, color: '#888' }}>Monetização e Escala da Base Construída</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1 }}>
        {([
          { key: 'fase2' as const, badge: '02', titulo: 'Monetização', sub: 'Turbo Express', icons: fase2Icons },
          { key: 'fase3' as const, badge: '03', titulo: 'Escala', sub: 'Lançamento Pago', icons: fase3Icons }
        ]).map((fase) => {
          const faseData = defaultContent.fases23[fase.key];
          return (
            <div key={fase.key} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ background: '#2A2A2A', border: '1.5px solid rgba(240,90,40,0.7)', borderRadius: 12, flex: 1, padding: 14, display: 'flex', flexDirection: 'column', boxShadow: '0 0 12px rgba(240,90,40,0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 6, background: '#F05A28', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{fase.badge}</div>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 700 }}>{fase.titulo}</p>
                    <p style={{ fontSize: 10, color: '#F05A28' }}>{fase.sub}</p>
                  </div>
                </div>
                {faseData.cards.map((c, i) => {
                  const Icon = fase.icons[i];
                  return (
                    <div key={i} style={{ background: '#1A1A1A', borderRadius: 8, padding: 10, marginBottom: 6 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <Icon size={14} color="#F05A28" />
                       <p style={{ fontSize: 14, fontWeight: 700 }}>{c.titulo}</p>
                      </div>
                      <p style={{ fontSize: 12, color: '#888' }}>{c.texto}</p>
                    </div>
                  );
                })}
              </div>
              <div style={{ background: '#1E1E1E', border: '1.5px solid rgba(240,90,40,0.5)', borderRadius: 12, padding: 10, boxShadow: 'inset 0 1px 0 rgba(240,90,40,0.1), 0 0 15px rgba(240,90,40,0.1)' }}>
                <p style={{ fontSize: 12, color: '#F05A28', fontWeight: 700, marginBottom: 6 }}>Resultados Esperados</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                  {faseData.stats.map((s, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                       <p style={{ fontSize: 18, fontWeight: 900, color: '#F05A28' }}>{s.valor}</p>
                       <p style={{ fontSize: 11, color: '#888' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ============ SLIDE: CRONOGRAMA ============
export const SlideCronograma: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide" style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', color: '#fff', display: 'flex', flexDirection: 'column', width: 1280, height: 720, position: 'relative', overflow: 'hidden' }}>
    <SlideHeader section="CRONOGRAMA" />
    <div style={{ flex: 1, padding: '0 40px 40px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ borderLeft: '4px solid #F05A28', paddingLeft: 12, marginBottom: 10 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800 }}>Cronograma e Entregas</h2>
        <p style={{ fontSize: 11, color: '#888' }}>Primeiros 90 Dias: Da Estruturação à Monetização</p>
      </div>
      
      {/* Timeline bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
        {data.proximosPassos.map((p, i) => (
          <React.Fragment key={i}>
            <div style={{ flex: 1, borderRadius: 8, padding: '8px 12px', textAlign: 'center', background: i === 0 ? '#F05A28' : i === 1 ? 'rgba(240,90,40,0.8)' : '#C04A1A' }}>
              <p style={{ fontSize: 12, fontWeight: 700 }}>{p.dias}</p>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)' }}>{p.titulo}</p>
            </div>
            {i < data.proximosPassos.length - 1 && <ChevronRight size={16} color="#F05A28" />}
          </React.Fragment>
        ))}
      </div>
      
      {/* 3 cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, flex: 1 }}>
        {data.proximosPassos.map((passo, idx) => (
          <div key={idx} style={{ background: '#2A2A2A', border: '1.5px solid rgba(240,90,40,0.7)', borderRadius: 12, padding: 12, display: 'flex', flexDirection: 'column', boxShadow: '0 0 12px rgba(240,90,40,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: '#F05A28', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 14, flexShrink: 0 }}>0{idx + 1}</div>
              <p style={{ fontSize: 15, fontWeight: 700 }}>{passo.titulo}</p>
            </div>
            <p style={{ fontSize: 13, color: '#aaa', lineHeight: 1.6, flex: 1 }}>{passo.descricao}</p>
            <div style={{ background: '#1A1A1A', borderRadius: 6, padding: 8, marginTop: 10, textAlign: 'center' }}>
              <p style={{ fontSize: 12, color: '#F05A28' }}>{passo.dias}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ============ SLIDE: INVESTIMENTO (2 Plans Layout) ============
export const SlideInvestimento: React.FC<{ data: ProposalData }> = ({ data }) => {
  if (data.layoutInvestimento === 'planos') {
    return (
      <div className="bm-slide" style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', color: '#fff', display: 'flex', flexDirection: 'column', width: 1280, height: 720, position: 'relative', overflow: 'hidden' }}>
        <SlideHeader section="INVESTIMENTO" />
        <div style={{ flex: 1, padding: '0 40px 40px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ borderLeft: '4px solid #F05A28', paddingLeft: 12, marginBottom: 16 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800 }}>Investimento</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, flex: 1 }}>
            {/* BM Impulso */}
            <div style={{ background: '#1E1E1E', border: '1.5px solid rgba(240,90,40,0.7)', borderRadius: 12, display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 0 12px rgba(240,90,40,0.15)' }}>
              <div style={{ background: '#1A1A1A', padding: '20px 24px', borderBottom: '1px solid rgba(240,90,40,0.3)' }}>
                <p style={{ fontSize: 22, fontWeight: 800, textAlign: 'center' }}>{data.planoImpulsoNome}</p>
                <p style={{ fontSize: 13, color: '#888', textAlign: 'center', marginTop: 4 }}>{data.planoImpulsoSubtitulo}</p>
              </div>
              <div style={{ flex: 1, padding: '16px 24px' }}>
                {data.planoImpulsoItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <CheckCircle size={18} color="#F05A28" />
                    <span style={{ fontSize: 14, color: '#ccc' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(240,90,40,0.3)', textAlign: 'center' }}>
                <p style={{ fontSize: 12, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>INVESTIMENTO MENSAL</p>
                <p style={{ fontSize: 30, fontWeight: 900, color: '#F05A28', margin: '4px 0' }}>{data.planoImpulsoValor}</p>
                <p style={{ fontSize: 12, color: '#666' }}>{defaultContent.planosImpulso.impulso.contrato}</p>
              </div>
            </div>
            
            {/* BM Impulso Plus */}
            <div style={{ position: 'relative', background: '#1E1E1E', border: '1.5px solid rgba(240,90,40,1)', borderRadius: 12, display: 'flex', flexDirection: 'column', overflow: 'visible', boxShadow: '0 0 20px rgba(240,90,40,0.3)' }}>
              <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#fff', color: '#1A1A1A', fontWeight: 800, fontSize: 12, padding: '4px 20px', borderRadius: 20, letterSpacing: '0.05em' }}>RECOMENDADO</div>
              
              <div style={{ background: '#F05A28', padding: '20px 24px', borderRadius: '10px 10px 0 0' }}>
                <p style={{ fontSize: 22, fontWeight: 800, textAlign: 'center' }}>{data.planoImpulsoPlusNome}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginTop: 4 }}>{data.planoImpulsoPlusSubtitulo}</p>
              </div>
              <div style={{ flex: 1, padding: '16px 24px' }}>
                {data.planoImpulsoPlusItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <CheckCircle size={18} color="#F05A28" />
                    <span style={{ fontSize: 14, color: '#ccc' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(240,90,40,0.3)', textAlign: 'center' }}>
                <p style={{ fontSize: 10, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>INVESTIMENTO MENSAL</p>
                <p style={{ fontSize: 28, fontWeight: 900, color: '#F05A28', margin: '4px 0' }}>{data.planoImpulsoPlusValor}</p>
                <p style={{ fontSize: 11, color: '#666' }}>{defaultContent.planosImpulso.impulsoPlus.contrato}</p>
              </div>
            </div>
          </div>
          
          {/* Condições Gerais */}
          <div style={{ background: '#2A2A2A', borderRadius: 10, marginTop: 14, padding: '10px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <AlertCircle size={14} color="#F05A28" style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#F05A28' }}>Condições Gerais</p>
                <p style={{ fontSize: 11, color: '#888' }}>{data.condicoesGerais}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Coproducao layout
  return (
    <div className="bm-slide" style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', color: '#fff', display: 'flex', flexDirection: 'column', width: 1280, height: 720, position: 'relative', overflow: 'hidden' }}>
      <SlideHeader section="INVESTIMENTO" />
      <div style={{ flex: 1, padding: '0 40px 40px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ borderLeft: '4px solid #F05A28', paddingLeft: 12, marginBottom: 16 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800 }}>Investimento</h2>
          <p style={{ fontSize: 12, color: '#888' }}>Condições comerciais da coprodução estratégica</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1 }}>
          <div style={{ background: '#2A2A2A', border: '1.5px solid rgba(240,90,40,0.7)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', boxShadow: '0 0 12px rgba(240,90,40,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <Handshake size={20} color="#F05A28" />
              <p style={{ fontSize: 16, fontWeight: 700 }}>Coprodução Estratégica</p>
            </div>
            <div style={{ background: '#1A1A1A', borderRadius: 8, padding: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 11, color: '#888' }}>Valor Total:</span>
                <span style={{ fontSize: 18, fontWeight: 900, color: '#F05A28' }}>{data.valorCoproducao}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, color: '#888' }}>Parcelado:</span>
                <span style={{ fontSize: 13, color: '#fff' }}>{data.parcelamento}</span>
              </div>
            </div>
            <div style={{ background: 'rgba(192,74,26,0.3)', borderRadius: 8, padding: 12, marginTop: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Star size={18} color="#F05A28" />
              <div>
                <p style={{ fontSize: 12, fontWeight: 700 }}>{data.descontoVista}</p>
                <p style={{ fontSize: 10, color: '#888' }}>{data.economiaVista}</p>
              </div>
            </div>
          </div>
          <div style={{ background: '#2A2A2A', border: '1.5px solid rgba(240,90,40,0.7)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', boxShadow: '0 0 12px rgba(240,90,40,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <Megaphone size={20} color="#F05A28" />
              <p style={{ fontSize: 16, fontWeight: 700 }}>Investimento em Tráfego</p>
            </div>
            <div style={{ background: 'rgba(192,74,26,0.3)', borderRadius: 8, padding: 16, textAlign: 'center', marginBottom: 10 }}>
              <p style={{ fontSize: 10, color: '#888' }}>Investimento Mínimo Recomendado</p>
              <p style={{ fontSize: 32, fontWeight: 900, color: '#F05A28' }}>{data.valorTrafego}</p>
              <p style={{ fontSize: 10, color: '#888' }}>por mês</p>
            </div>
            {defaultContent.investimento.trafego.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <ChevronRight size={10} color="#F05A28" />
                <span style={{ fontSize: 12, color: '#aaa' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
};

// ============ SLIDE: ENCERRAMENTO ============
export const SlideEncerramento: React.FC<{ data: ProposalData }> = ({ data }) => (
  <div className="bm-slide" style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: 1280, height: 720, position: 'relative', overflow: 'hidden', backgroundImage: 'repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(255,255,255,0.02) 40px,rgba(255,255,255,0.02) 41px)' }}>
    {data.showLogo && <img src={bmLogo} alt="BM Logo" style={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 24 }} />}
    <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>
      Vamos <span style={{ color: '#F05A28', fontStyle: 'italic' }}>Construir</span> Juntos!
    </h2>
    {data.mensagemEncerramento && (
      <p style={{ fontSize: 15, color: '#ccc', maxWidth: 700, marginBottom: 24, lineHeight: 1.7 }}>
        {data.mensagemEncerramento}
      </p>
    )}
    
    <div style={{ marginBottom: 16 }}>
      <p style={{ fontSize: 13 }}><span style={{ color: '#F05A28', fontWeight: 700 }}>WhatsApp:</span> {data.whatsapp}</p>
      <p style={{ fontSize: 13, marginTop: 4 }}><span style={{ color: '#F05A28', fontWeight: 700 }}>Website:</span> {data.website}</p>
    </div>
    
    <div style={{ position: 'absolute', bottom: 24 }}>
      <p style={{ fontSize: 11, color: '#666' }}>BM Coproduções - Infraestrutura Digital</p>
    </div>
  </div>
);
