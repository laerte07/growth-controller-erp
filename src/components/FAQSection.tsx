import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "É difícil de usar?",
    answer:
      "De jeito nenhum. Nosso sistema foi projetado com foco em usabilidade. A interface é intuitiva e qualquer pessoa da sua equipe consegue aprender em poucos minutos, sem necessidade de treinamentos longos ou conhecimento técnico.",
  },
  {
    question: "Funciona para mais de uma empresa?",
    answer:
      "Sim! Você pode gerenciar uma ou múltiplas empresas simultaneamente dentro do mesmo sistema, com dados completamente separados e seguros. Ideal para grupos empresariais ou franquias.",
  },
  {
    question: "E se a legislação mudar?",
    answer:
      "Fique tranquilo. Todas as atualizações fiscais e tributárias estão inclusas. Nossa equipe acompanha as mudanças legislativas e atualiza o sistema automaticamente, garantindo que sua empresa esteja sempre em conformidade.",
  },
  {
    question: "E se eu quiser mudar de plano?",
    answer:
      "Você tem total flexibilidade! É possível fazer upgrade entre planos a qualquer momento. O valor já investido é considerado na migração, sem prejuízos. Nosso time está pronto para ajudar na melhor transição.",
  },
  {
    question: "Preciso instalar algo no meu computador?",
    answer:
      "Não. O sistema funciona 100% online, direto no navegador. Basta acessar de qualquer dispositivo com internet — computador, tablet ou celular.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Absolutamente. Utilizamos criptografia de ponta a ponta, servidores seguros e backups automáticos diários. Seus dados empresariais estão protegidos com o mais alto padrão de segurança.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Dúvidas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Respostas para as perguntas mais comuns sobre o sistema.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/50 bg-card/60 px-6 data-[state=open]:glow-border transition-all"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-base hover:no-underline hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
