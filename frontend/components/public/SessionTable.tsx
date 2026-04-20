import { TrainingSession } from "@/types";
import { formatDate, classNames } from "@/lib/utils";

const statusStyles: Record<TrainingSession["status"], string> = {
  Ouverte: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Complète: "bg-rose-50 text-rose-700 border-rose-100",
  Reportée: "bg-amber-50 text-amber-700 border-amber-100"
};

export function SessionTable({ items }: { items: TrainingSession[] }) {
  return (
    <div className="card-surface table-wrap p-4 md:p-5">
      <table className="table-ui">
        <thead>
          <tr>
            <th>Date</th>
            <th>Formation</th>
            <th>Mode</th>
            <th>Lieu</th>
            <th>Places</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {items.map((session) => (
            <tr key={session.id}>
              <td className="font-semibold text-slate-700">{formatDate(session.date)}</td>
              <td>
                <div>
                  <p className="font-semibold text-slate-950">{session.trainingTitle}</p>
                  <p className="mt-1 text-sm text-slate-500">{session.time}</p>
                </div>
              </td>
              <td>{session.mode}</td>
              <td>{session.location ?? "À confirmer"}</td>
              <td>{session.availableSeats}</td>
              <td>
                <span className={classNames("inline-flex rounded-full border px-3 py-1 text-xs font-bold", statusStyles[session.status])}>
                  {session.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
