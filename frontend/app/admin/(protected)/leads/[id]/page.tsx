import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getLeadById } from "@/services/api/admin";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function AdminLeadDetailPage({ params }: Props) {
  const { id } = await params;
  const lead = await getLeadById(id);

  if (!lead) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <AdminHeader title={lead.fullName} subtitle="Détail du lead, historique et informations de qualification." />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="card-surface p-6">
          <h2 className="text-xl font-bold text-slate-950">Informations complètes</h2>
          <div className="mt-5 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
            <div><span className="font-semibold text-slate-900">Email :</span> {lead.email}</div>
            <div><span className="font-semibold text-slate-900">Téléphone :</span> {lead.phone}</div>
            <div><span className="font-semibold text-slate-900">Entreprise :</span> {lead.company ?? "-"}</div>
            <div><span className="font-semibold text-slate-900">Source :</span> {lead.source}</div>
            <div><span className="font-semibold text-slate-900">Type :</span> {lead.type}</div>
            <div><span className="font-semibold text-slate-900">Statut :</span> <StatusBadge value={lead.status} /></div>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-slate-900">Message</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">{lead.message}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Marquer comme traité", "Archiver", "Supprimer"].map((action) => (
              <button key={action} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">
                {action}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-surface p-6">
            <h2 className="text-xl font-bold text-slate-950">Historique</h2>
            <div className="mt-4 space-y-4">
              {lead.history.map((item) => (
                <div key={`${item.at}-${item.to}`} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">{item.from ?? "Création"} → {item.to}</p>
                  <p className="mt-1">{item.note}</p>
                  <p className="mt-2 text-xs text-slate-500">{formatDate(item.at)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-6">
            <h2 className="text-xl font-bold text-slate-950">Notes internes</h2>
            <div className="mt-4 space-y-3">
              {lead.notes.map((note) => (
                <div key={note} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">{note}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
