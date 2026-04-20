import { AdminHeader } from "@/components/admin/AdminHeader";
import { getAdminTrainings } from "@/services/api/admin";

export default async function AdminTrainingsPage() {
  const trainings = await getAdminTrainings();

  return (
    <div className="space-y-6">
      <AdminHeader title="Gestion des formations" subtitle="Consultez les formations actives et préparez les actions CRUD côté API." />
      <div className="flex justify-end">
        <button className="rounded-2xl border border-slate-950/10 bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-slate-900">
          Ajouter une formation
        </button>
      </div>
      <div className="card-surface table-wrap p-4 md:p-5">
        <table className="table-ui">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Slug</th>
              <th>Durée</th>
              <th>Prix</th>
              <th>Niveau</th>
              <th>Catégorie</th>
              <th>Actif</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training) => (
              <tr key={training.id}>
                <td className="font-semibold text-slate-950">{training.title}</td>
                <td>{training.slug}</td>
                <td>{training.duration}</td>
                <td>{training.price ?? "Sur devis"}</td>
                <td>{training.level}</td>
                <td>{training.category}</td>
                <td>{training.active ? "Oui" : "Non"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
