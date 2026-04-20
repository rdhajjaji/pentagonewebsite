import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] items-center justify-center py-20">
      <div className="card-surface max-w-lg p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">404</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">Page introuvable</h1>
        <p className="mt-3 text-slate-600">La ressource demandée n’existe pas ou a été déplacée.</p>
        <Link href="/" className="mt-6 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
