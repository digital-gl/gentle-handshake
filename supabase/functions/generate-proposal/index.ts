import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const systemPrompt = `Você é especialista em propostas comerciais da BM Coproduções. Ao receber um briefing, extraia e gere TODO o conteúdo necessário para uma proposta profissional completa.

Retorne SOMENTE um JSON válido, sem markdown, sem explicações, sem blocos de código.

Campos do JSON:
{
  "nomeEspecialista": "apenas o nome, sem 'se chama', 'é', etc",
  "areaExpertise": "área de atuação",
  "generoEspecialista": "feminino | masculino | neutro",
  "saudacaoPersonalizada": "saudação personalizada",
  "textoBoasVindas": "texto de boas-vindas personalizado em português BR, tom profissional e caloroso, alinhado à voz da BM: 'Não vendemos serviços. Construímos operações.'",
  "incluirSobreBM": true,
  "incluirModeloCoproducao": true,
  "incluirFunil8Overview": true,
  "incluirInvestimento": true,
  "incluirProximosPassos": true,
  "incluirEncerramento": true,
  "valorPlano": "",
  "whatsapp": "45 99124 0809",
  "website": "bmcoproduções.com.br/bm",
  "mensagemEncerramento": "mensagem personalizada de encerramento",
  "notasAdicionais": "",
  "tonoMensagem": "profissional | caloroso | direto"
}

Para campos não mencionados, use os valores padrão. Personalize textos para o especialista mencionado. A proposta deve parecer feita manualmente para aquele especialista específico. Se o briefing mencionar que não quer Funil 8 ou similar, defina incluirFunil8Overview como false.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return new Response(
        JSON.stringify({ error: "Prompt é obrigatório" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "generate_proposal_data",
              description: "Generate structured proposal data from a briefing",
              parameters: {
                type: "object",
                properties: {
                  nomeEspecialista: { type: "string" },
                  areaExpertise: { type: "string" },
                  generoEspecialista: { type: "string", enum: ["feminino", "masculino", "neutro"] },
                  saudacaoPersonalizada: { type: "string" },
                  textoBoasVindas: { type: "string" },
                  incluirSobreBM: { type: "boolean" },
                  incluirModeloCoproducao: { type: "boolean" },
                  incluirFunil8Overview: { type: "boolean" },
                  incluirInvestimento: { type: "boolean" },
                  incluirProximosPassos: { type: "boolean" },
                  incluirEncerramento: { type: "boolean" },
                  valorPlano: { type: "string" },
                  whatsapp: { type: "string" },
                  website: { type: "string" },
                  mensagemEncerramento: { type: "string" },
                  notasAdicionais: { type: "string" },
                  tonoMensagem: { type: "string", enum: ["profissional", "caloroso", "direto"] },
                },
                required: ["nomeEspecialista", "areaExpertise", "textoBoasVindas"],
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "generate_proposal_data" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Limite de requisições atingido. Tente novamente em alguns segundos." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Créditos insuficientes. Adicione fundos em Settings > Workspace > Usage." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const aiResponse = await response.json();
    
    let proposalData;
    const toolCall = aiResponse.choices?.[0]?.message?.tool_calls?.[0];
    if (toolCall?.function?.arguments) {
      proposalData = JSON.parse(toolCall.function.arguments);
    } else {
      // Fallback: try to parse content as JSON
      const content = aiResponse.choices?.[0]?.message?.content || "";
      proposalData = JSON.parse(content);
    }

    return new Response(
      JSON.stringify(proposalData),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("generate-proposal error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
