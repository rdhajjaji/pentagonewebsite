import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="mt-24 pb-6 pt-8">
      <div className="container-page">
        <div className="card-dark px-6 py-10 text-white md:px-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-black tracking-[0.18em] text-slate-950">
                  PF
                </span>
                Pentagone Formations
              </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                Organisme de formation premium pour les entreprises et les professionnels souhaitant une exécution claire,
                rassurante et performante.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Coordonnées</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>contact@pentagone-formations.com</li>
                <li>+216 71 000 000</li>
                <li>Tunis, Tunisie</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Navigation</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                <Link href="/formations">Catalogue de formations</Link>
                <Link href="/sessions">Prochaines sessions</Link>
                <Link href="/entreprises">Offre entreprises</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/admin/login">Connexion admin</Link>
              </div>
            </div>
          </div>

          <div className="my-8 subtle-divider" />

          <div className="flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Pentagone Formations. Tous droits réservés.</p>
            <p>Site public, espace admin CRM et expérience premium unifiée.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
