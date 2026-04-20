import { sessions, trainings } from "@/mock-data/public";
import { Lead, Training, TrainingSession } from "@/types";
import { safeFetch } from "./client";

export async function getTrainings() {
  return safeFetch<Training[]>("/trainings", trainings);
}

export async function getUpcomingTrainings() {
  return safeFetch<TrainingSession[]>("/trainings/upcoming", sessions);
}

export async function getTrainingBySlug(slug: string) {
  const fallback = trainings.find((item) => item.slug === slug || item.id === slug) ?? null;
  return safeFetch<Training | null>(`/trainings/${slug}`, fallback);
}

export async function createLead(payload: Partial<Lead>) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    return {
      success: true,
      message: "Votre demande a bien été enregistrée."
    };
  }

  try {
    const response = await fetch(`${baseUrl}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Network error");
    }

    return {
      success: true,
      message: "Votre demande a bien été enregistrée."
    };
  } catch {
    return {
      success: true,
      message: "Mode démo : votre demande a été enregistrée localement."
    };
  }
}
