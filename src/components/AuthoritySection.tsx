// ===== SEÇÃO DE AUTORIDADE =====
// Reforça confiança com diferenciais de segurança, suporte e custo-benefício

import { motion } from "framer-motion";
import { MousePointerClick, Rocket, Headphones, Shield, PiggyBank, Lock } from "lucide-react";

/** Pontos de autoridade */
const pontosAutoridade = [
  { icon: MousePointerClick, titulo: "Sistema Intuitivo", texto: "Interface amigável que qualquer pessoa aprende em minutos." },
  { icon: Rocket, titulo: "Implantação Simples", texto: "Comece a usar no mesmo dia, sem complicações técnicas." },
  { icon: Headphones, titulo: "Suporte Especializado", texto: "Equipe pronta para resolver qualquer dúvida da sua operação." },
  { icon: Shield, titulo: "Atualizações Fiscais", texto: "Conformidade tributária sempre atualizada automaticamente." },
  { icon: PiggyBank, titulo: "Custo-Benefício", texto: "O melhor retorno sobre investimento do mercado ERP." },
  { icon: Lock, titulo: "Segurança Total", texto: "Dados protegidos com criptografia e backups constantes." },
];

const AuthoritySection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Por que <span className="text-gradient">confiar</span> no nosso ERP?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Construído para empresas que levam gestão a sério.
          </p>
        </motion.div>

        {/* Grid de pontos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pontosAutoridade.map((ponto, index) => (
            <motion.div
              key={ponto.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ponto.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{ponto.titulo}</h3>
              <p className="text-muted-foreground text-sm">{ponto.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
