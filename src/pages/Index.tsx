import React, { useState } from 'react';
import { createDefaultProposal, cleanName } from '@/utils/defaultContent';
import type { ProposalData } from '@/utils/defaultContent';
import { supabase } from '@/integrations/supabase/client';
import { exportToPDF } from '@/utils/pdfExport';
import Tela1_Briefing from '@/screens/Tela1_Briefing';
import Tela2_Wizard from '@/screens/Tela2_Wizard';
import Tela3_Preview from '@/screens/Tela3_Preview';
import { useToast } from '@/hooks/use-toast';

type Screen = 'briefing' | 'wizard' | 'preview';

const Index: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('briefing');
  const [proposal, setProposal] = useState<ProposalData>(createDefaultProposal());
  const [isLoading, setIsLoading] = useState(false);
  const [exportProgress, setExportProgress] = useState<{ current: number; total: number } | null>(null);
  const { toast } = useToast();

  const handleGenerate = async (prompt: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-proposal', {
        body: { prompt },
      });

      if (error) throw error;

      const result = data;
      const newProposal = createDefaultProposal();

      if (result.nomeEspecialista) newProposal.nomeEspecialista = cleanName(result.nomeEspecialista);
      if (result.areaExpertise) newProposal.areaExpertise = result.areaExpertise;
      if (result.generoEspecialista) newProposal.generoEspecialista = result.generoEspecialista;
      if (result.textoBoasVindas) newProposal.textoBoasVindas = result.textoBoasVindas;
      if (result.saudacaoPersonalizada) newProposal.saudacaoPersonalizada = result.saudacaoPersonalizada;
      if (result.incluirFunil8Overview === false) {
        newProposal.incluirFunil8Overview = false;
        newProposal.incluirFunil8Fase1 = false;
        newProposal.incluirFunil8Fases23 = false;
      }
      if (result.incluirSobreBM !== undefined) newProposal.incluirSobreBM = result.incluirSobreBM;
      if (result.incluirInvestimento !== undefined) newProposal.incluirInvestimento = result.incluirInvestimento;
      if (result.incluirProximosPassos !== undefined) newProposal.incluirCronograma = result.incluirProximosPassos;
      if (result.incluirEncerramento !== undefined) newProposal.incluirEncerramento = result.incluirEncerramento;
      if (result.valorPlano) newProposal.valorCoproducao = result.valorPlano;
      if (result.whatsapp) newProposal.whatsapp = result.whatsapp;
      if (result.website) newProposal.website = result.website;
      if (result.mensagemEncerramento) newProposal.mensagemEncerramento = result.mensagemEncerramento;
      if (result.notasAdicionais) newProposal.notasAdicionais = result.notasAdicionais;

      setProposal(newProposal);
      setScreen('wizard');
    } catch (err: any) {
      console.error('AI Error:', err);
      toast({
        title: 'Erro ao gerar proposta',
        description: err.message || 'Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = async () => {
    setExportProgress({ current: 0, total: 1 });
    try {
      await exportToPDF(proposal.nomeEspecialista, proposal.ano, (current, total) => {
        setExportProgress({ current, total });
      });
      toast({ title: '✅ PDF gerado com sucesso!', description: 'O download deve iniciar automaticamente.' });
    } catch (err) {
      console.error('PDF Error:', err);
      toast({ title: 'Erro ao gerar PDF', description: 'Tente novamente.', variant: 'destructive' });
    } finally {
      setExportProgress(null);
    }
  };

  const handleEditSlide = (_index: number) => {
    setScreen('wizard');
  };

  return (
    <>
      {screen === 'briefing' && (
        <Tela1_Briefing onGenerate={handleGenerate} isLoading={isLoading} />
      )}
      {screen === 'wizard' && (
        <Tela2_Wizard
          data={proposal}
          onChange={setProposal}
          onFinish={() => setScreen('preview')}
          onBack={() => setScreen('briefing')}
        />
      )}
      {screen === 'preview' && (
        <Tela3_Preview
          data={proposal}
          onBack={() => setScreen('wizard')}
          onExport={handleExport}
          onEditSlide={handleEditSlide}
          exportProgress={exportProgress}
        />
      )}
    </>
  );
};

export default Index;
