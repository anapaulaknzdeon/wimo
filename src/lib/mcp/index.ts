import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getOverviewTool from "./tools/get-overview";
import listFeaturesTool from "./tools/list-features";

const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "wimo-your-autonomy-journey",
  title: "WIMO: Your Autonomy Journey",
  version: "0.1.0",
  instructions:
    "Ferramentas de conteúdo público da WIMO. Use `get_wimo_overview` para a descrição da plataforma e `list_wimo_features` para as funcionalidades.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getOverviewTool, listFeaturesTool],
});
