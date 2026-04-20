import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/forms/QuoteForm";

export default function QuotePage() {
  return (
    <section className="container-page py-14">
      <SectionHeading
        eyebrow="Demande de devis"
        title="Recevez une proposition adaptée"
        description="Décrivez votre contexte, la formation visée et le volume attendu. Nous vous répondons avec une offre claire."
      />
      <div className="mt-8">
        <QuoteForm />
      </div>
    </section>
  );
}
