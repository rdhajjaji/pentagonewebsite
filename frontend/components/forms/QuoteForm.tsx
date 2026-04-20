"use client";

import { useState } from "react";
import { createLead } from "@/services/api/public";
import { Button } from "@/components/ui/Button";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  trainingWanted: "",
  participants: "1",
  message: ""
};

export function QuoteForm() {
  const [form, setForm] = useState(initialState);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

    const result = await createLead({
      ...form,
      participants: Number(form.participants),
      source: "Formulaire devis",
      type: "quote",
      status: "nouveau",
      notes: []
    });

    setFeedback(result.message ?? "Votre demande de devis a été envoyée.");
    setForm(initialState);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="label">Nom</label>
          <input className="field" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
        </div>
        <div>
          <label className="label">Email</label>
          <input className="field" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="label">Téléphone</label>
          <input className="field" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <label className="label">Entreprise</label>
          <input className="field" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        </div>
        <div>
          <label className="label">Formation souhaitée</label>
          <input className="field" required value={form.trainingWanted} onChange={(e) => setForm({ ...form, trainingWanted: e.target.value })} />
        </div>
        <div>
          <label className="label">Nombre de participants</label>
          <input className="field" type="number" min="1" required value={form.participants} onChange={(e) => setForm({ ...form, participants: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="label">Message</label>
        <textarea className="field min-h-32" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">Nous revenons vers vous avec une offre adaptée.</p>
        <Button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Demander un devis"}
        </Button>
      </div>
      {feedback ? <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{feedback}</div> : null}
    </form>
  );
}
