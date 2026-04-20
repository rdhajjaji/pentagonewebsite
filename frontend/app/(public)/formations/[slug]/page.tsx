import { notFound } from "next/navigation";
import { getTrainingBySlug, getUpcomingTrainings } from "@/services/api/public";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function TrainingDetailPage({ params }: Props) {
  const { slug } = await params;
  const training = await getTrainingBySlug(slug);
  const sessions = (await getUpcomingTrainings()).filter((session) => session.trainingId === training?.id);

  if (!training) {
    notFound();
  }

  return (
    <section className="container-page py-14">
      <div className="card-surface overflow-hidden">
        <div className="gradient-panel px-8 py-12 text-white md:px-10 md:py-14">
          <div className="relative">
            <p className="eyebrow kicker-dark">{training.category}</p>
            <h1 className="mt-5 text-balance text-4xl font-black tracking-[-0.05em] md:text-6xl">{training.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{training.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-100">
              <span className="metric-chip">{training.duration}</span>
              <span className="metric-chip">{training.level}</span>
              <span className="metric-chip">{training.price ?? "Sur devis"}</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="secondary">
                Je suis intéressé
              </Button>
              <Button href="/devis">Demander un devis</Button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 px-8 py-10 md:grid-cols-[1.7fr_1fr] md:px-10 md:py-12">
          <div className="space-y-8">
            <div className="card-surface p-6 md:p-7">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">Objectifs</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600">
                {training.objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card-surface p-6 md:p-7">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">Programme</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-600">
                {training.program.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card-surface h-fit p-6">
              <h3 className="text-xl font-black tracking-[-0.03em] text-slate-950">Informations clés</h3>
              <div className="mt-5 space-y-5 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900">Public cible</p>
                  <p className="mt-1 leading-7">{training.targetAudience}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Prérequis</p>
                  <p className="mt-1 leading-7">{training.prerequisites}</p>
                </div>
              </div>
            </div>

            <div className="card-surface p-6">
              <h3 className="text-xl font-black tracking-[-0.03em] text-slate-950">Prochaines dates</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {sessions.length > 0 ? (
                  sessions.map((session) => (
                    <div key={session.id} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                      <p className="font-semibold text-slate-900">{formatDate(session.date)}</p>
                      <p className="mt-1">{session.mode} • {session.location ?? "À confirmer"}</p>
                    </div>
                  ))
                ) : (
                  <p>À planifier.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
