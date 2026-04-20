"use client";

import { useEffect, useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrainingCard } from "@/components/public/TrainingCard";
import { trainings as fallbackTrainings } from "@/mock-data/public";
import { Training } from "@/types";

export default function TrainingsPage() {
  const [items, setItems] = useState<Training[]>(fallbackTrainings);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");
  const [level, setLevel] = useState("Tous");

  useEffect(() => {
    async function load() {
      try {
        const module = await import("@/services/api/public");
        const data = await module.getTrainings();
        setItems(data);
      } catch {
        setItems(fallbackTrainings);
      }
    }
    load();
  }, []);

  const categories = useMemo(() => ["Toutes", ...new Set(items.map((item) => item.category))], [items]);
  const levels = useMemo(() => ["Tous", ...new Set(items.map((item) => item.level))], [items]);

  const filtered = items.filter((item) => {
    const search = `${item.title} ${item.shortDescription} ${item.category}`.toLowerCase();
    const matchesQuery = search.includes(query.toLowerCase());
    const matchesCategory = category === "Toutes" || item.category === category;
    const matchesLevel = level === "Tous" || item.level === level;
    return matchesQuery && matchesCategory && matchesLevel;
  });

  return (
    <section className="container-page py-14">
      <SectionHeading
        eyebrow="Catalogue"
        title="Nos formations"
        description="Recherchez rapidement une formation par thématique, niveau ou mot-clé dans une interface plus claire et plus premium."
      />
      <div className="card-surface mt-8 grid gap-4 p-5 md:grid-cols-3 md:p-6">
        <input
          className="field"
          placeholder="Rechercher une formation"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select className="field" value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select className="field" value={level} onChange={(event) => setLevel(event.target.value)}>
          {levels.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <p>{filtered.length} formation(s) affichée(s)</p>
        <p>Filtres rapides par catégorie et niveau</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((training) => (
          <TrainingCard key={training.id} training={training} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="card-surface mt-8 p-8 text-center text-slate-600">Aucun résultat ne correspond à vos filtres.</div>
      ) : null}
    </section>
  );
}
