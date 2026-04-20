import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function CompaniesPage() {
  return (
    <section className="container-page py-14">
      <SectionHeading
        eyebrow="Offre B2B"
        title="Des formations sur mesure pour les entreprises"
        description="Nous concevons des dispositifs adaptés à vos enjeux de transformation, d’organisation et de montée en compétence."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Parcours sur mesure",
            text: "Contenus personnalisés, rythme adapté et objectifs alignés avec votre contexte opérationnel."
          },
          {
            title: "Accompagnement managérial",
            text: "Dispositifs conçus pour renforcer leadership, coordination, pilotage et efficacité collective."
          },
          {
            title: "Audit et conseil",
            text: "Aide au cadrage, analyse des besoins et recommandations pour structurer votre plan de formation."
          }
        ].map((item) => (
          <div key={item.title} className="card-surface p-6">
            <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 card-surface flex flex-col gap-5 p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Un besoin spécifique ?</h2>
          <p className="mt-2 text-slate-600">Nous pouvons construire une offre dédiée à votre entreprise et à vos équipes.</p>
        </div>
        <Button href="/devis">Demander une offre</Button>
      </div>
    </section>
  );
}
