"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export function AdminHeader({ title, subtitle }: { title: string; subtitle: string }) {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <div className="card-surface flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-7">
      <div>
        <p className="eyebrow">Espace admin</p>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">{subtitle}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 md:block">
          <p className="font-semibold text-slate-900">Pilotage premium</p>
          <p className="mt-1">Vue claire, actions rapides, données prêtes à connecter.</p>
        </div>
        <Button
          variant="secondary"
          onClick={() => {
            logout();
            router.push("/admin/login");
          }}
        >
          Déconnexion
        </Button>
      </div>
    </div>
  );
}
