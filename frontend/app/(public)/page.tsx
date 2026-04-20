import { HeroSection } from "@/components/public/HeroSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrainingCard } from "@/components/public/TrainingCard";
import { SessionTable } from "@/components/public/SessionTable";
import { Button } from "@/components/ui/Button";
import { getTrainings, getUpcomingTrainings } from "@/services/api/public";
import { testimonials } from "@/mock-data/public";

export default async function HomePage() {
  const trainings = await getTrainings();
  const sessions = await getUpcomingTrainings();

  return (
    <>
      <HeroSection />

      <section className="container-page py-10 md:py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Exécution structurée",
              text: "Des parcours cadrés, clairs et directement exploitables par les entreprises et les professionnels."
            },
            {
              title: "Image de marque crédible",
              text: "Une expérience premium qui rassure dès le premier contact et soutient la conversion."
            },
            {
              title: "Déploiement fluide",
              text: "Des formats souples, des calendriers visibles et une relation client simple à piloter."
            }
          ].map((item) => (
            <div key={item.title} className="card-surface p-6 md:p-7">
              <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
              <h3 className="mt-5 text-2xl font-black tracking-[-0.03em] text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          eyebrow="Prochaines formations"
          title="Des parcours immédiatement activables"
          description="Une sélection de formations conçues pour répondre aux besoins opérationnels des entreprises et créer une expérience commerciale plus crédible."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trainings.map((training) => (
            <TrainingCard key={training.id} training={training} />
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="card-dark px-7 py-8 text-white md:px-8">
            <p className="eyebrow kicker-dark">Positionnement</p>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em]">Une promesse de sérieux, de clarté et d’impact.</h2>
            <p className="mt-4 text-sm leading-8 text-slate-300 md:text-base">
              Nous combinons exigence pédagogique, lisibilité de l’offre et qualité de service pour inspirer confiance avant même le premier échange.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Approche premium et rassurante pour le B2B",
                "Offres lisibles, sessions planifiables, parcours clairs",
                "Exécution fluide du contact initial jusqu’au devis"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Sessions à venir"
              title="Calendrier des prochaines sessions"
              description="Des dates visibles rapidement pour accélérer la prise de décision et fluidifier l’inscription."
            />
            <div className="mt-8">
              <SessionTable items={sessions} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          eyebrow="Pourquoi nous choisir"
          title="Une exécution premium visible dans chaque détail"
          description="Du design de l’offre à la gestion de vos demandes, tout est pensé pour inspirer sérieux et efficacité."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Approche premium", text: "Des parcours bien cadrés, des supports propres et une expérience professionnelle de bout en bout." },
            { title: "Vision entreprise", text: "Des formats pensés pour les enjeux RH, managériaux et opérationnels des organisations." },
            { title: "Mise en œuvre fluide", text: "Des délais clairs, une communication rassurante et un déploiement simple pour vos équipes." }
          ].map((item) => (
            <div key={item.title} className="card-surface p-6 md:p-7">
              <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">Premium</span>
              <h3 className="mt-5 text-2xl font-black tracking-[-0.03em] text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          eyebrow="Ils nous font confiance"
          title="Des retours qui renforcent la crédibilité"
          description="Quelques témoignages illustrant notre exigence de qualité et de résultat."
          align="center"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="card-surface p-6 md:p-7">
              <div className="flex items-center gap-1 text-sky-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-8 text-slate-600">“{item.quote}”</p>
              <footer className="mt-6">
                <p className="font-bold text-slate-950">{item.author}</p>
                <p className="text-sm text-slate-500">{item.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="container-page py-12 md:py-20">
        <div className="card-dark flex flex-col gap-6 px-8 py-9 text-white md:flex-row md:items-center md:justify-between md:px-10 md:py-10">
          <div className="max-w-2xl">
            <p className="eyebrow kicker-dark">Prêt à lancer votre projet</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">Échangeons sur votre besoin de formation.</h2>
            <p className="mt-4 text-slate-300">Obtenez une proposition claire, adaptée à votre contexte et à vos objectifs.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="secondary">
              Nous contacter
            </Button>
            <Button href="/devis">Demander un devis</Button>
          </div>
        </div>
      </section>
    </>
  );
}
