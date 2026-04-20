import { AdminUser, DashboardStats, Lead, Training, TrainingSession } from "@/types";
import { trainings, sessions } from "./public";

export const adminUser: AdminUser = {
  id: "admin-1",
  email: "admin@pentagone-formations.com",
  fullName: "Admin Pentagone",
  role: "Administrateur"
};

export const leads: Lead[] = [
  {
    id: "l-1",
    fullName: "Ahmed Ben Salah",
    email: "ahmed@novalink.tn",
    phone: "+216 20 100 100",
    company: "NovaLink",
    source: "Formulaire devis",
    type: "quote",
    status: "nouveau",
    createdAt: "2026-04-18T09:10:00Z",
    message: "Nous cherchons une formation management pour 12 managers.",
    trainingWanted: "Management de projet",
    participants: 12,
    notes: ["Priorité élevée."],
    history: [{ at: "2026-04-18T09:10:00Z", from: null, to: "nouveau", note: "Lead créé" }]
  },
  {
    id: "l-2",
    fullName: "Ines Trabelsi",
    email: "ines@capsule.tn",
    phone: "+216 24 222 333",
    company: "Capsule",
    source: "Page contact",
    type: "contact",
    status: "contacté",
    createdAt: "2026-04-17T14:20:00Z",
    message: "Nous souhaitons en savoir plus sur vos sessions Excel.",
    notes: ["Relance programmée pour jeudi."],
    history: [
      { at: "2026-04-17T14:20:00Z", from: null, to: "nouveau", note: "Lead créé" },
      { at: "2026-04-18T08:15:00Z", from: "nouveau", to: "contacté", note: "Premier échange réalisé" }
    ]
  },
  {
    id: "l-3",
    fullName: "Karim Gharbi",
    email: "karim@northit.io",
    phone: "+216 27 555 222",
    company: "NorthIT",
    source: "Landing page",
    type: "quote",
    status: "qualifié",
    createdAt: "2026-04-15T11:50:00Z",
    message: "Besoin d’un parcours cybersécurité pour l’ensemble du service support.",
    trainingWanted: "Cybersécurité pour entreprises",
    participants: 20,
    notes: ["Proposition en cours de finalisation."],
    history: [
      { at: "2026-04-15T11:50:00Z", from: null, to: "nouveau", note: "Lead créé" },
      { at: "2026-04-16T12:00:00Z", from: "nouveau", to: "qualifié", note: "Besoin confirmé avec le client" }
    ]
  }
];

export const quotes = leads.filter((lead) => lead.type === "quote");

export const dashboardStats: DashboardStats = {
  totalLeads: leads.length,
  newLeads: leads.filter((lead) => lead.status === "nouveau").length,
  quotes: quotes.length,
  activeTrainings: trainings.filter((training) => training.active).length,
  upcomingSessions: sessions.length
};

export const adminTrainings: Training[] = trainings;
export const adminSessions: TrainingSession[] = sessions;
