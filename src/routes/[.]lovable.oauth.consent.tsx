import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthDetails = {
  client?: { name?: string } | null;
  redirect_url?: string;
  redirect_to?: string;
};

type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: OAuthDetails | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: OAuthDetails | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: OAuthDetails | null; error: { message: string } | null }>;
};

const oauthApi = () => (supabase.auth as unknown as { oauth: OAuthApi }).oauth;

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s['authorization_id'] === "string" ? s['authorization_id'] : "",
  }),
  component: Consent,
});

function Consent() {
  const { authorization_id } = Route.useSearch();
  const [signedIn, setSignedIn] = useState<boolean | null>(null);
  const [details, setDetails] = useState<OAuthDetails | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorization_id) {
        setError("Pedido de autorização inválido: authorization_id ausente.");
        setSignedIn(false);
        return;
      }
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      if (!data.session) {
        setSignedIn(false);
        return;
      }
      setSignedIn(true);
      const { data: info, error: err } = await oauthApi().getAuthorizationDetails(authorization_id);
      if (!active) return;
      if (err) {
        setError(err.message);
        return;
      }
      const immediate = info?.redirect_url ?? info?.redirect_to;
      if (immediate && !info?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(info);
    })();
    return () => {
      active = false;
    };
  }, [authorization_id]);

  async function signIn() {
    setBusy(true);
    setError(null);
    const { error: err } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.href },
    });
    if (err) {
      setBusy(false);
      setError(err.message);
    }
  }

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const api = oauthApi();
    const { data, error: err } = approve
      ? await api.approveAuthorization(authorization_id)
      : await api.denyAuthorization(authorization_id);
    if (err) {
      setBusy(false);
      setError(err.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("O servidor de autorização não retornou um redirecionamento.");
      return;
    }
    window.location.href = target;
  }

  const clientName = details?.client?.name ?? "este aplicativo";

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="glass-card w-full max-w-md rounded-3xl p-8 text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground">
          Conectar à sua conta WIMO
        </h1>

        {error && (
          <p role="alert" className="mt-4 text-sm text-destructive">
            {error}
          </p>
        )}

        {signedIn === null && (
          <p className="mt-4 text-sm text-muted-foreground">Carregando pedido de autorização…</p>
        )}

        {signedIn === false && authorization_id && (
          <>
            <p className="mt-3 text-sm text-muted-foreground">
              Entre na sua conta para continuar a conexão.
            </p>
            <button
              disabled={busy}
              onClick={signIn}
              className="gradient-brand mt-6 w-full rounded-full px-6 py-3 font-semibold text-white disabled:opacity-60"
            >
              Entrar com Google
            </button>
          </>
        )}

        {signedIn === true && details && (
          <>
            <p className="mt-3 text-sm text-muted-foreground">
              {clientName} quer acessar a WIMO em seu nome.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                disabled={busy}
                onClick={() => decide(false)}
                className="w-full rounded-full border border-border px-6 py-3 font-semibold text-foreground disabled:opacity-60"
              >
                Recusar
              </button>
              <button
                disabled={busy}
                onClick={() => decide(true)}
                className="gradient-brand w-full rounded-full px-6 py-3 font-semibold text-white disabled:opacity-60"
              >
                Aprovar
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
