"use client";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { leads as fallbackLeads } from "@/mock-data/admin";
import { Lead } from "@/types";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const pageSize = 5;

export default function AdminLeadsPage() {
  const [items, setItems] = useState<Lead[]>(fallbackLeads);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Tous");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function load() {
      try {
        const module = await import("@/services/api/admin");
        const data = await module.getLeads();
        setItems(data);
      } catch {
        setItems(fallbackLeads);
      }
    }
    load();
  }, []);

  const statuses = useMemo(() => ["Tous", ...new Set(items.map((item) => item.status))], [items]);

  const filtered = items.filter((item) => {
    const haystack = `${item.fullName} ${item.email} ${item.company ?? ""} ${item.source}`.toLowerCase();
    const matchQuery = haystack.includes(query.toLowerCase());
    const matchStatus = status === "Tous" || item.status === status;
    return matchQuery && matchStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-6">
      <AdminHeader title="Gestion des leads" subtitle="Recherchez, filtrez et suivez l’évolution de vos demandes." />

      <div className="card-surface grid gap-4 p-5 md:grid-cols-[2fr_1fr] md:p-6">
        <input className="field" placeholder="Rechercher un lead" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="field" value={status} onChange={(e) => setStatus(e.target.value)}>
          {statuses.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="card-surface table-wrap p-4 md:p-5">
        <table className="table-ui">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Entreprise</th>
              <th>Source</th>
              <th>Type</th>
              <th>Statut</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((lead) => (
              <tr key={lead.id}>
                <td className="font-semibold text-slate-950">{lead.fullName}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.company ?? "-"}</td>
                <td>{lead.source}</td>
                <td>{lead.type}</td>
                <td><StatusBadge value={lead.status} /></td>
                <td>{new Date(lead.createdAt).toLocaleDateString("fr-FR")}</td>
                <td>
                  <Link href={`/admin/leads/${lead.id}`} className="inline-flex rounded-full bg-slate-950 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900">
                    Voir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Page {page} / {totalPages}
        </p>
        <div className="flex gap-3">
          <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-slate-50" onClick={() => setPage((p) => Math.max(1, p - 1))}>
            Précédent
          </button>
          <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-slate-50" onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
