import { Button } from "@/components/ui/Button";

const metrics = [
  "Formats présentiel, distanciel et hybrides",
  "Accompagnement B2B sur mesure",
  "Expérience premium de bout en bout"
];

export function HeroSection() {
  return (
    <section className="container-page pt-8 md:pt-10">
      <div className="gradient-panel overflow-hidden rounded-[2.3rem] px-6 py-10 text-white shadow-[0_30px_80px_rgba(2,6,23,0.28)] md:px-10 md:py-14 xl:px-14 xl:py-16">
        <div className="hero-orb -left-10 top-10 h-36 w-36 bg-sky-400/35" />
        <div className="hero-orb bottom-0 right-0 h-52 w-52 bg-indigo-400/20" />

        <div className="relative grid items-center gap-10 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="max-w-4xl">
            <p className="eyebrow kicker-dark">Organisme de formation premium</p>
            <h1 className="mt-6 text-balance text-4xl font-black leading-[1.02] tracking-[-0.05em] md:text-6xl xl:text-7xl">
              Développez les compétences de vos équipes avec plus de clarté, plus de rigueur et plus d’impact.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Pentagone Formations conçoit des parcours structurés, lisibles et immédiatement activables pour les entreprises,
              les managers et les professionnels exigeants.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/formations" variant="secondary">
                Voir les formations
              </Button>
              <Button href="/devis">Demander un devis</Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {metrics.map((item) => (
                <span key={item} className="metric-chip">
                  <span className="metric-dot" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 text-slate-950 md:p-7">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-sky-700">Pilotage rapide</p>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em]">Une offre pensée pour rassurer et convertir.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Du premier contact à la planification des sessions, chaque étape doit inspirer confiance et simplicité.
            </p>

            <div className="mt-6 space-y-4">
              {[
                { label: "Taux de satisfaction cible", value: "96%" },
                { label: "Formats disponibles", value: "3" },
                { label: "Délai moyen de retour", value: "24h" }
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3">
                  <span className="text-sm font-medium text-slate-600">{item.label}</span>
                  <span className="text-lg font-black tracking-[-0.03em] text-slate-950">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.35rem] border border-sky-100 bg-sky-50/80 p-4">
              <p className="text-sm font-semibold text-slate-900">Positionnement</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Design corporate, argumentaire clair, parcours d’inscription fluide et image de marque crédible pour le B2B.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
