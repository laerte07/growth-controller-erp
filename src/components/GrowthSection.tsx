// ===== SEÇÃO: O ERP QUE CRESCE COM VOCÊ =====
// Destaca escalabilidade, multi-empresas e diferenciais competitivos

import { motion } from "framer-motion";
import { Building2, Globe, Puzzle, Zap, Shield, Headphones } from "lucide-react";

/** Lista de diferenciais do sistema */
const diferenciais = [
  {
    icon: Building2,
    titulo: "Múltiplas Empresas",
    descricao: "Gerencie uma ou várias empresas simultaneamente com total controle.",
  },
  {
    icon: Globe,
    titulo: "Físico & Digital",
    descricao: "Ideal para comércio físico e digital, tudo em um só sistema.",
  },
  {
    icon: Puzzle,
    titulo: "Sistema Modular",
    descricao: "Ative apenas os módulos que você precisa, quando precisar.",
  },
  {
    icon: Zap,
    titulo: "Performance Rápida",
    descricao: "Interface veloz e responsiva para o ritmo do seu negócio.",
  },
  {
    icon: Shield,
    titulo: "Atualizações Fiscais",
    descricao: "Atualizações fiscais e tributárias inclusas automaticamente.",
  },
  {
    icon: Headphones,
    titulo: "Suporte Especializado",
    descricao: "Time de suporte técnico dedicado para ajudar sua operação.",
  },
];

const GrowthSection = () => {
  return (
    <section className="section-padding">
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
            O ERP que <span className="text-gradient">cresce com você</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um sistema pensado para escalar junto com sua operação, do início ao topo.
          </p>
        </motion.div>

        {/* Grid de diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl glass hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{item.titulo}</h3>
              <p className="text-muted-foreground">{item.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
