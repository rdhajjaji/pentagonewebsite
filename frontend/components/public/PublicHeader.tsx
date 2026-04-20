"use client";

import Link from "next/link";
import { publicNavigation } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { classNames } from "@/lib/utils";

export function PublicHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className="container-page">
        <div className="card-surface flex flex-wrap items-center justify-between gap-4 rounded-[1.6rem] px-5 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-3 text-slate-950">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black tracking-[0.22em] text-white shadow-lg shadow-slate-950/20">
              PF
            </span>
            <span>
              <span className="block text-base font-black tracking-[0.02em]">Pentagone Formations</span>
              <span className="block text-xs font-medium text-slate-500">Formations premium & accompagnement B2B</span>
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {publicNavigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={classNames(
                    "rounded-full px-4 py-2.5 transition duration-200",
                    active
                      ? "bg-slate-950 text-white shadow-md shadow-slate-950/10"
                      : "hover:bg-slate-100 hover:text-slate-950"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button href="/devis" className="whitespace-nowrap">
            Demander un devis
          </Button>
        </div>
      </div>
    </header>
  );
}
