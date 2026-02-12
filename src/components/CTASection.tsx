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
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 rounded-3xl" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Pare de perder dinheiro{" "}
              <span className="text-gradient">com desorganização.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já transformaram sua gestão com
              nosso ERP. O próximo passo é seu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:brightness-110 transition-all glow-border"
              >
                Quero meu ERP agora
                <ArrowRight className="w-5 h-5" />
              </a>
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
