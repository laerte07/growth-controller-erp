// ===== CTA FINAL =====
// Seção de conversão final com headline persuasiva e botões de ação

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto text-center rounded-3xl p-12 md:p-20 overflow-hidden"
        >
          {/* Fundo com gradiente azul */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 rounded-3xl" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Headline persuasiva */}
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Seu concorrente já pode estar{" "}
              <span className="text-gradient">mais organizado que você.</span>
            </h2>

            {/* Subheadline */}
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Implante hoje. Ganhe controle. Cresça com previsibilidade.
            </p>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col items-center">
                <a
                  href="#planos"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:brightness-110 transition-all glow-border"
                >
                  Quero meu ERP agora
                  <ArrowRight className="w-5 h-5" />
                </a>
                <span className="text-xs text-muted-foreground mt-2">Sem burocracia. Implantação rápida.</span>
              </div>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass text-foreground font-semibold text-lg hover:bg-secondary transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Demonstração
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
