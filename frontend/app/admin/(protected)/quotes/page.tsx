import { AdminHeader } from "@/components/admin/AdminHeader";
import { getQuotes } from "@/services/api/admin";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default async function AdminQuotesPage() {
  const quotes = await getQuotes();

  return (
    <div className="space-y-6">
      <AdminHeader title="Demandes de devis" subtitle="Suivi des demandes d’offre, volumes et besoins exprimés." />
      <div className="card-surface table-wrap p-4 md:p-5">
        <table className="table-ui">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Entreprise</th>
              <th>Formation</th>
              <th>Participants</th>
              <th>Statut</th>
              <th>Besoin</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote) => (
              <tr key={quote.id}>
                <td className="font-semibold text-slate-950">{quote.fullName}</td>
                <td>{quote.company ?? "-"}</td>
                <td>{quote.trainingWanted ?? "-"}</td>
                <td>{quote.participants ?? "-"}</td>
                <td><StatusBadge value={quote.status} /></td>
                <td>{quote.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
