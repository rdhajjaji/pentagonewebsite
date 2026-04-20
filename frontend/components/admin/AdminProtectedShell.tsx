"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function AdminProtectedShell({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isReady } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.replace("/admin/login");
    }
  }, [isAuthenticated, isReady, router]);

  if (!isReady || !isAuthenticated) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="card-surface px-6 py-5 text-sm text-slate-600">Chargement de l’espace admin...</div>
      </div>
    );
  }

  return <>{children}</>;
}
