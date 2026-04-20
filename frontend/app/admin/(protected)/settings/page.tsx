import { AdminHeader } from "@/components/admin/AdminHeader";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <AdminHeader title="Paramètres" subtitle="Informations société, branding et coordonnées de contact." />
      <div className="card-surface grid gap-5 p-6 md:grid-cols-2 md:p-7">
        <div>
          <label className="label">Nom de la société</label>
          <input className="field" defaultValue="Pentagone Formations" />
        </div>
        <div>
          <label className="label">Email de contact</label>
          <input className="field" defaultValue="contact@pentagone-formations.com" />
        </div>
        <div>
          <label className="label">Téléphone</label>
          <input className="field" defaultValue="+216 71 000 000" />
        </div>
        <div>
          <label className="label">CTA principal</label>
          <input className="field" defaultValue="Demander un devis" />
        </div>
        <div className="md:col-span-2">
          <label className="label">Réseaux sociaux</label>
          <input className="field" defaultValue="linkedin.com/company/pentagone-formations" />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button className="rounded-2xl border border-slate-950/10 bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-slate-900">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
