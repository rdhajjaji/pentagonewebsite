import { SectionHeading } from "@/components/ui/SectionHeading";
import { SessionTable } from "@/components/public/SessionTable";
import { getUpcomingTrainings } from "@/services/api/public";
import { Button } from "@/components/ui/Button";

export default async function SessionsPage() {
  const sessions = await getUpcomingTrainings();

  return (
    <section className="container-page py-14">
      <SectionHeading
        eyebrow="Calendrier"
        title="Prochaines sessions"
        description="Consultez rapidement les prochaines dates disponibles et demandez une inscription ou un complément d’information."
      />
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SessionTable items={sessions} />
        <div className="card-dark px-7 py-8 text-white">
          <p className="eyebrow kicker-dark">Prise de décision rapide</p>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em]">Des sessions visibles, une conversion facilitée.</h2>
          <p className="mt-4 text-sm leading-8 text-slate-300">
            Rendez votre calendrier lisible, rassurez vos prospects et orientez-les vers l’action grâce à une information claire et structurée.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/devis" variant="secondary">
              Demander un devis
            </Button>
            <Button href="/contact">Demander des informations</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
