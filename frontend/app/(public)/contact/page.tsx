import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <section className="container-page py-14">
      <SectionHeading
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Décrivez votre besoin, nous revenons vers vous rapidement avec une réponse claire."
      />
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="card-surface p-6">
          <h2 className="text-xl font-bold text-slate-950">Coordonnées</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <p>Email : contact@pentagone-formations.com</p>
            <p>Téléphone : +216 71 000 000</p>
            <p>Adresse : Tunis, Tunisie</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
