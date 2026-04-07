import React, { useState } from 'react';
import bmLogo from '@/assets/bm-logo.png';

interface Tela1Props {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

const Tela1_Briefing: React.FC<Tela1Props> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="min-h-screen bm-gradient-dark bm-texture flex flex-col items-center justify-center p-6">
      <img src={bmLogo} alt="BM Logo" className="w-24 h-24 rounded-full mb-6" />
      <h1 className="text-2xl md:text-3xl font-extrabold text-bm-white tracking-wide mb-2">
        Monte sua <span className="text-bm-orange">Proposta</span> com IA
      </h1>
      <p className="text-sm text-bm-gray mb-6 text-center max-w-lg">
        Descreva o especialista e a proposta. A IA irá estruturar tudo automaticamente.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ex: O especialista se chama Vanessa, é nutricionista especializada em emagrecimento feminino. Vamos oferecer o plano BM Impulso Plus por R$1.800/mês. Não incluir o Funil 8. Incluir os próximos passos dos 90 dias. Ela tem foco em mulheres acima de 40 anos..."
        className="w-full max-w-2xl h-48 bg-bm-card border border-bm-orange/30 rounded-xl p-4 text-sm text-bm-white placeholder:text-bm-gray-dark focus:outline-none focus:border-bm-orange resize-none"
      />

      <button
        onClick={() => prompt.trim() && onGenerate(prompt)}
        disabled={isLoading || !prompt.trim()}
        className="bm-btn-primary mt-6 text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-bm-white/30 border-t-bm-white rounded-full animate-spin" />
            A IA está lendo seu briefing...
          </>
        ) : (
          'Gerar Estrutura da Proposta →'
        )}
      </button>
    </div>
  );
};

export default Tela1_Briefing;
