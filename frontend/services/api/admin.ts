import { adminSessions, adminTrainings, dashboardStats, leads, quotes, adminUser } from "@/mock-data/admin";
import { AdminUser, DashboardStats, Lead, Training, TrainingSession } from "@/types";
import { safeFetch } from "./client";

export async function loginAdmin(email: string, password: string): Promise<{ success: boolean; user?: AdminUser; token?: string; message?: string }> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    if (email === adminUser.email && password === "admin123") {
      return { success: true, user: adminUser, token: "demo-token" };
    }
    return { success: false, message: "Identifiants invalides." };
  }

  try {
    const response = await fetch(`${baseUrl}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const payload = await response.json();

    if (!response.ok) {
      return { success: false, message: payload.message ?? "Erreur de connexion." };
    }

    return {
      success: true,
      user: payload.data.user,
      token: payload.data.token
    };
  } catch {
    return { success: false, message: "API indisponible." };
  }
}

export async function getDashboard() {
  return safeFetch<DashboardStats>("/admin/dashboard", dashboardStats);
}

export async function getLeads() {
  return safeFetch<Lead[]>("/admin/leads", leads);
}

export async function getLeadById(id: string) {
  const fallback = leads.find((lead) => lead.id === id) ?? null;
  return safeFetch<Lead | null>(`/admin/leads/${id}`, fallback);
}

export async function getQuotes() {
  return safeFetch<Lead[]>("/admin/quotes", quotes);
}

export async function getAdminTrainings() {
  return safeFetch<Training[]>("/admin/trainings", adminTrainings);
}

export async function getAdminSessions() {
  return safeFetch<TrainingSession[]>("/admin/sessions", adminSessions);
}
