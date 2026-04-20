"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { loginAdmin } from "@/services/api/admin";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("admin@pentagone-formations.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setInfo(null);

    const result = await loginAdmin(email, password);

    if (!result.success || !result.user || !result.token) {
      setError(result.message ?? "Connexion impossible.");
      setLoading(false);
      return;
    }

    if (result.message) {
      setInfo(result.message);
    }

    login({
      token: result.token,
      user: result.user
    });

    router.push(result.mode === "demo" ? "/admin/dashboard?mode=demo" : "/admin/dashboard");
  }

  return (
    <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-[1fr_0.88fr]">
      <div className="card-dark hidden p-8 text-white lg:block">
        <div className="relative h-full rounded-[1.7rem] border border-white/10 bg-white/5 p-8">
          <p className="eyebrow kicker-dark">Portail interne sécurisé</p>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.05em]">Admin Pentagone Formations</h1>
          <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
            Une interface de pilotage conçue pour suivre les leads, gérer les formations et structurer les demandes de devis.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              "Dashboard commercial lisible et premium",
              "Tables admin propres, cohérentes et responsives",
              "Connexion prête pour une API Node.js réelle"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card-surface w-full space-y-5 p-8 md:p-9">
        <div>
          <p className="eyebrow">Connexion admin</p>
          <h1 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950">Bienvenue</h1>
          <p className="mt-3 text-sm leading-7 text-slate-500">Connectez-vous pour accéder au dashboard, aux leads et aux demandes de devis.</p>
        </div>

        <div className="rounded-[1.35rem] border border-sky-100 bg-sky-50/80 p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Compte de démonstration prérempli</p>
          <p className="mt-2">Utilisez les identifiants ci-dessous pour entrer immédiatement dans l’espace admin. Si l’API ne répond pas, la connexion bascule automatiquement en mode démo.</p>
        </div>

        <div>
          <label className="label">Email</label>
          <input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="label">Mot de passe</label>
          <input className="field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {info ? <div className="rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-700">{info}</div> : null}
        {error ? <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div> : null}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </Button>
        <p className="text-xs text-slate-500">Identifiants démo : admin@pentagone-formations.com / admin123</p>
      </form>
    </div>
  );
}
