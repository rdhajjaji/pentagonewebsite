"use client";

import Link from "next/link";
import { adminNavigation } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import { classNames } from "@/lib/utils";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="card-dark w-full p-5 text-white xl:w-80 xl:sticky xl:top-6 xl:self-start">
      <div className="relative">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Pentagone</p>
          <p className="mt-2 text-2xl font-black tracking-[-0.03em]">Admin CRM</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">Pilotage des leads, devis, formations et sessions depuis une interface claire.</p>
        </div>

        <div className="mt-6 space-y-2">
          {adminNavigation.map((item, index) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm transition duration-200",
                  active
                    ? "bg-white text-slate-950 shadow-[0_14px_26px_rgba(255,255,255,0.12)]"
                    : "text-slate-300 hover:bg-white/8 hover:text-white"
                )}
              >
                <span className="font-medium">{item.label}</span>
                <span className={classNames("text-xs font-bold", active ? "text-slate-500" : "text-slate-500")}>0{index + 1}</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
          <p className="font-semibold text-white">Compte connecté</p>
          <p className="mt-1">admin@pentagone-formations.com</p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500">Démo prête à connecter à votre API Node.js</p>
        </div>
      </div>
    </aside>
  );
}
