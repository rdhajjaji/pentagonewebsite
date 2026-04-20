import Link from "next/link";
import { Training } from "@/types";

export function TrainingCard({ training }: { training: Training }) {
  return (
    <article className="card-surface group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-sky-700">
          {training.category}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">{training.level}</span>
      </div>

      <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
      <h3 className="mt-5 text-2xl font-black tracking-[-0.03em] text-slate-950">{training.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{training.shortDescription}</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Durée</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{training.duration}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Tarif</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{training.price ?? "Sur devis"}</p>
        </div>
      </div>

      <Link
        href={`/formations/${training.slug}`}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-950/10 bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition duration-200 group-hover:bg-slate-900"
      >
        Voir le détail
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
