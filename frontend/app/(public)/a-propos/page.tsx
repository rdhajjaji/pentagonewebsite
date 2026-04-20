import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <section className="container-page py-14">
      <SectionHeading
        eyebrow="À propos"
        title="Une entreprise de formation orientée qualité"
        description="Pentagone Formations accompagne les organisations et les professionnels avec une promesse simple : clarté, sérieux et efficacité."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Mission",
            text: "Faire monter les équipes en compétence avec des dispositifs lisibles, concrets et immédiatement utiles."
          },
          {
            title: "Vision",
            text: "Devenir un partenaire de confiance pour les entreprises cherchant un haut niveau de qualité pédagogique et d’exécution."
          },
          {
            title: "Valeurs",
            text: "Exigence, fiabilité, sens du service, pédagogie et professionnalisme."
          },
          {
            title: "Éléments de confiance",
            text: "Formateurs expérimentés, formats souples, approche orientée résultats et expérience client premium."
          }
        ].map((item) => (
          <div key={item.title} className="card-surface p-6">
            <h2 className="text-xl font-bold text-slate-950">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
