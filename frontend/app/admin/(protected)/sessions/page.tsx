import { AdminHeader } from "@/components/admin/AdminHeader";
import { getAdminSessions } from "@/services/api/admin";
import { formatDate } from "@/lib/utils";

export default async function AdminSessionsPage() {
  const sessions = await getAdminSessions();

  return (
    <div className="space-y-6">
      <AdminHeader title="Gestion des sessions" subtitle="Planifiez les prochaines sessions et préparez leur synchronisation API." />
      <div className="flex justify-end">
        <button className="rounded-2xl border border-slate-950/10 bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-slate-900">
          Créer une session
        </button>
      </div>
      <div className="card-surface table-wrap p-4 md:p-5">
        <table className="table-ui">
          <thead>
            <tr>
              <th>Formation</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Lieu</th>
              <th>Mode</th>
              <th>Places</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id}>
                <td className="font-semibold text-slate-950">{session.trainingTitle}</td>
                <td>{formatDate(session.date)}</td>
                <td>{session.time}</td>
                <td>{session.location ?? "-"}</td>
                <td>{session.mode}</td>
                <td>{session.availableSeats}</td>
                <td>{session.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
