import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatCard } from "@/components/ui/StatCard";
import { getDashboard, getLeads, getQuotes } from "@/services/api/admin";
import { formatDate } from "@/lib/utils";

export default async function AdminDashboardPage() {
  const stats = await getDashboard();
  const leads = await getLeads();
  const quotes = await getQuotes();

  const chartItems = [
    { label: "Leads nouveaux", value: stats.newLeads, total: stats.totalLeads },
    { label: "Leads qualifiés", value: leads.filter((lead) => lead.status === "qualifié").length, total: stats.totalLeads },
    { label: "Demandes de devis", value: stats.quotes, total: stats.totalLeads }
  ];

  return (
    <div className="space-y-6">
      <AdminHeader title="Dashboard" subtitle="Vue d’ensemble des leads, devis, formations et sessions à venir." />

      <div className="grid-dashboard">
        <StatCard label="Leads totaux" value={stats.totalLeads} helper="Volume global des demandes enregistrées." />
        <StatCard label="Nouveaux leads" value={stats.newLeads} helper="Demandes à traiter en priorité." />
        <StatCard label="Demandes de devis" value={stats.quotes} helper="Opportunités commerciales en cours." />
        <StatCard label="Formations actives" value={stats.activeTrainings} helper="Catalogue actuellement visible." />
        <StatCard label="Prochaines sessions" value={stats.upcomingSessions} helper="Sessions ouvertes à l’inscription." />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="card-surface p-6 md:p-7">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Performance commerciale</p>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-slate-950">Lecture rapide du pipeline</h2>
            </div>
            <p className="text-sm text-slate-500">Indicateurs calculés sur les leads disponibles</p>
          </div>

          <div className="mt-8 space-y-5">
            {chartItems.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>{item.label}</span>
                  <span className="font-semibold text-slate-900">{item.value}</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600"
                    style={{ width: `${Math.max((item.value / Math.max(item.total, 1)) * 100, 10)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { label: "Réactivité", value: "24h" },
              { label: "Conversion cible", value: "32%" },
              { label: "Qualité CRM", value: "Premium" }
            ].map((item) => (
              <div key={item.label} className="rounded-[1.35rem] border border-slate-200 bg-slate-50/80 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-2xl font-black tracking-[-0.03em] text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-dark px-6 py-7 text-white md:px-7">
          <p className="eyebrow kicker-dark">Pilotage</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">Une interface admin conçue pour décider vite.</h2>
          <p className="mt-4 text-sm leading-8 text-slate-300">
            Statistiques, demandes récentes et visibilité immédiate sur les actions commerciales prioritaires.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "Suivi lisible des leads et des devis",
              "Structure prête pour votre API Node.js",
              "UI premium cohérente avec le site public"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-6 md:p-7">
          <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">Derniers leads</h2>
          <div className="mt-5 space-y-3">
            {leads.map((lead) => (
              <div key={lead.id} className="rounded-[1.35rem] border border-slate-200 bg-white/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-950">{lead.fullName}</p>
                    <p className="text-sm text-slate-500">{lead.company ?? "Particulier"}</p>
                  </div>
                  <span className="text-xs text-slate-500">{formatDate(lead.createdAt)}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{lead.message}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-6 md:p-7">
          <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">Dernières demandes de devis</h2>
          <div className="mt-5 table-wrap">
            <table className="table-ui">
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Entreprise</th>
                  <th>Formation</th>
                  <th>Participants</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((quote) => (
                  <tr key={quote.id}>
                    <td className="font-semibold text-slate-950">{quote.fullName}</td>
                    <td>{quote.company ?? "-"}</td>
                    <td>{quote.trainingWanted ?? "-"}</td>
                    <td>{quote.participants ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
