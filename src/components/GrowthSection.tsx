import { motion } from "framer-motion";
import { Building2, Globe, Puzzle, Zap, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Múltiplas Empresas",
    description: "Gerencie uma ou várias empresas simultaneamente com total controle.",
  },
  {
    icon: Globe,
    title: "Físico & Digital",
    description: "Ideal para comércio físico e digital, tudo em um só sistema.",
  },
  {
    icon: Puzzle,
    title: "Sistema Modular",
    description: "Ative apenas os módulos que você precisa, quando precisar.",
  },
  {
    icon: Zap,
    title: "Performance Rápida",
    description: "Interface veloz e responsiva para o ritmo do seu negócio.",
  },
  {
    icon: Shield,
    title: "Atualizações Fiscais",
    description: "Atualizações fiscais e tributárias inclusas automaticamente.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Time de suporte técnico dedicado para ajudar sua operação.",
  },
];

const GrowthSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl glass hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
