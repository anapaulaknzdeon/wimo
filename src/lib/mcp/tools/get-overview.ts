import { defineTool } from "@lovable.dev/mcp-js";

const OVERVIEW = {
  name: "WIMO",
  tagline: "Sua jornada de autonomia",
  audience:
    "Pessoas neurodivergentes, especialmente adolescentes autistas e pessoas com TDAH, além de família, escola e profissionais de saúde.",
  description:
    "A WIMO é uma plataforma inteligente que ajuda pessoas neurodivergentes a organizar a rotina, registrar emoções, lidar com sobrecarga e construir autonomia, conectando de forma segura a rede de apoio (família, escola e terapeutas).",
  pillars: [
    "Diário inteligente e check-ins emocionais",
    "Organização visual da rotina",
    "Regulação emocional e plano de crise",
    "Rede de apoio conectada",
  ],
  site: "https://wimo-wonderland.lovable.app",
};

export default defineTool({
  name: "get_wimo_overview",
  title: "Visão geral da WIMO",
  description:
    "Retorna a descrição institucional da WIMO: proposta, público atendido e pilares da plataforma.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(OVERVIEW, null, 2) }],
    structuredContent: OVERVIEW,
  }),
});
