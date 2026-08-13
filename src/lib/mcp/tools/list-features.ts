import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const FEATURES = [
  { title: "Diário inteligente", description: "Registre emoções, conquistas, dificuldades e momentos importantes." },
  { title: "Organização", description: "Agendas, tarefas, cronogramas visuais e lembretes para o dia a dia." },
  { title: "Regulação emocional", description: "Check-ins emocionais, monitoramento de humor e acompanhamento de sobrecarga." },
  { title: "Comunicação", description: "Conecte-se com família, escola e profissionais em um ambiente seguro." },
  { title: "Plano de crise", description: "Registre gatilhos, intensidade e estratégias que realmente funcionam." },
  { title: "Desenvolvimento da autonomia", description: "Metas, habilidades e pequenas conquistas para construir independência." },
];

export default defineTool({
  name: "list_wimo_features",
  title: "Listar funcionalidades da WIMO",
  description: "Lista as funcionalidades da plataforma WIMO, com filtro opcional por termo de busca.",
  inputSchema: {
    query: z.string().trim().optional().describe("Termo opcional para filtrar funcionalidades."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const items = q
      ? FEATURES.filter((f) => `${f.title} ${f.description}`.toLowerCase().includes(q))
      : FEATURES;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});
