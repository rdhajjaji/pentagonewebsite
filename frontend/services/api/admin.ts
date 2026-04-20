import { adminSessions, adminTrainings, dashboardStats, leads, quotes, adminUser } from "@/mock-data/admin";
import { AdminUser, DashboardStats, Lead, Training, TrainingSession } from "@/types";
import { safeFetch } from "./client";

type LoginResult = {
  success: boolean;
  user?: AdminUser;
  token?: string;
  message?: string;
  mode?: "api" | "demo";
};

function isDemoCredentials(email: string, password: string) {
  return email === adminUser.email && password === "admin123";
}

function demoLoginResult(): LoginResult {
  return {
    success: true,
    user: adminUser,
    token: "demo-token",
    mode: "demo",
    message: "API indisponible. Connexion en mode démo activée."
  };
}

export async function loginAdmin(email: string, password: string): Promise<LoginResult> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

  if (!baseUrl) {
    if (isDemoCredentials(email, password)) {
      return demoLoginResult();
    }
    return { success: false, message: "Identifiants invalides." };
  }

  try {
    const response = await fetch(`${baseUrl}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const contentType = response.headers.get("content-type") ?? "";
    const payload = contentType.includes("application/json") ? await response.json() : null;

    if (!response.ok) {
      if (response.status === 401) {
        return { success: false, message: payload?.message ?? "Identifiants invalides." };
      }

      if (isDemoCredentials(email, password)) {
        return demoLoginResult();
      }

      return { success: false, message: payload?.message ?? "Connexion impossible." };
    }

    if (!payload?.data?.user || !payload?.data?.token) {
      if (isDemoCredentials(email, password)) {
        return demoLoginResult();
      }

      return { success: false, message: "Réponse API invalide." };
    }

    return {
      success: true,
      user: payload.data.user,
      token: payload.data.token,
      mode: "api"
    };
  } catch {
    if (isDemoCredentials(email, password)) {
      return demoLoginResult();
    }

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
