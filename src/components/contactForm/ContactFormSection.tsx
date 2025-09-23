import { SectionTitle } from "../SectionTitle";
import { ContactForm } from "./ContactForm";

export function ContactFormSection() {
  return (
    <section id="contact" className="flex flex-col gap-12">
      <SectionTitle title="Contato" />
      <ContactForm />
    </section>
  );
}
