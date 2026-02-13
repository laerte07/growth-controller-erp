// ===== SEÇÃO FAQ — DÚVIDAS FREQUENTES =====
// FAQ estratégico e persuasivo, eliminando objeções reais de empresários

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Perguntas e respostas estratégicas */
const perguntas = [
  {
    pergunta: "Preciso instalar algo no meu computador?",
    resposta:
      "Não. O sistema funciona 100% online, direto no navegador. Basta acessar de qualquer dispositivo com internet — computador, tablet ou celular. Sem instalações, sem configurações complicadas. Você acessa de onde estiver, com total segurança.",
  },
  {
    pergunta: "Funciona para múltiplas empresas com CNPJs diferentes?",
    resposta:
      "Sim! Você pode gerenciar uma ou várias empresas simultaneamente dentro do mesmo sistema, cada uma com seu próprio CNPJ, dados separados e relatórios independentes. Ideal para grupos empresariais, franquias ou empreendedores com mais de um negócio.",
  },
  {
    pergunta: "O sistema já está adequado às exigências fiscais?",
    resposta:
      "Absolutamente. O ERP já vem preparado para emissão de NF-e, NFC-e e atende às obrigações fiscais vigentes. Além disso, todas as atualizações tributárias e fiscais são aplicadas automaticamente — sua empresa estará sempre em conformidade, sem custo adicional.",
  },
  {
    pergunta: "Como funciona o suporte técnico?",
    resposta:
      "Nosso suporte é feito por uma equipe técnica especializada e humanizada. Você conta com atendimento dedicado para tirar dúvidas, resolver problemas e receber orientação sobre o melhor uso do sistema. Nada de bots genéricos — aqui você fala com quem realmente entende.",
  },
  {
    pergunta: "O que acontece se eu quiser trocar de plano?",
    resposta:
      "Você tem total flexibilidade! É possível fazer upgrade entre planos a qualquer momento. O valor já investido é considerado na migração, sem prejuízos. Nosso time está pronto para ajudar na melhor transição para o seu momento.",
  },
  {
    pergunta: "Posso migrar meus dados do sistema atual?",
    resposta:
      "Sim. Oferecemos suporte completo para migração de dados do seu sistema anterior. Nossa equipe acompanha todo o processo para garantir que nenhuma informação seja perdida e que a transição aconteça de forma rápida e segura.",
  },
  {
    pergunta: "Quanto tempo leva para começar a usar?",
    resposta:
      "A implantação é rápida. Em poucos minutos você já pode começar a operar. O sistema é intuitivo e não exige treinamentos extensos — sua equipe aprende a usar de forma natural, com apoio do nosso time sempre que necessário.",
  },
  {
    pergunta: "Meus dados ficam seguros?",
    resposta:
      "Segurança é prioridade máxima. Utilizamos criptografia de ponta a ponta, servidores seguros com redundância e backups automáticos diários. Seus dados empresariais estão protegidos com o mais alto padrão de segurança do mercado.",
  },
  {
    pergunta: "Existe fidelidade contratual?",
    resposta:
      "No plano Assinatura, não há fidelidade — você pode cancelar quando quiser. Os planos Híbrido e Compra Total possuem condições especiais justamente por oferecerem economia significativa. Você escolhe o modelo que faz mais sentido para o seu negócio.",
  },
  {
    pergunta: "O sistema funciona offline?",
    resposta:
      "O sistema opera 100% em nuvem para garantir sincronização em tempo real, segurança e atualizações automáticas. Isso significa que você precisa de conexão com a internet para utilizá-lo. Porém, o módulo PDV possui recursos de contingência para situações de instabilidade de rede.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        {/* Título da seção */}
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
            Respostas diretas para as perguntas mais comuns de empresários como você.
          </p>
        </motion.div>

        {/* Lista de perguntas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {perguntas.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/50 bg-card/60 px-6 data-[state=open]:glow-border transition-all"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-base hover:no-underline hover:text-primary py-5">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.resposta}
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
