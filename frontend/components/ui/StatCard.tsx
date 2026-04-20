type StatCardProps = {
  label: string;
  value: number | string;
  helper?: string;
};

export function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <div className="card-surface p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
          <p className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-4xl">{value}</p>
        </div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg text-white shadow-lg shadow-slate-950/15">
          ✦
        </span>
      </div>
      {helper ? <p className="mt-3 text-sm text-slate-500">{helper}</p> : <p className="mt-3 text-sm text-slate-400">Suivi mis à jour en temps réel.</p>}
    </div>
  );
}
