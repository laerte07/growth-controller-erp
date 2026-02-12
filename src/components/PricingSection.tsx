import { motion } from "framer-motion";
import { Check, Star, TrendingUp, Crown } from "lucide-react";

const plans = [
  {
    icon: TrendingUp,
    name: "Assinatura",
    tag: "Flexível",
    price: "129,97",
    period: "/mês",
    description: "Ideal para quem quer baixo investimento inicial e flexibilidade total.",
    features: [
      "Todos os módulos inclusos",
      "Atualizações automáticas",
      "Suporte técnico",
      "Sem fidelidade",
      "Cancele quando quiser",
    ],
    highlight: false,
  },
  {
    icon: Star,
    name: "Híbrido",
    tag: "Mais Popular",
    price: "999,97",
    extra: "+ R$ 45,99/mês",
    description: "Economia superior a 40% no custo mensal equivalente já no primeiro ano.",
    features: [
      "Todos os módulos inclusos",
      "Atualizações automáticas",
      "Suporte prioritário",
      "Economia de 40%+",
      "Melhor custo-benefício",
    ],
    highlight: true,
  },
  {
    icon: Crown,
    name: "Compra Total",
    tag: "Máxima Economia",
    price: "2.999,97",
    period: " (36 meses)",
    description: "Economize R$ 1.678,95 comparado à assinatura. Como ganhar 1 ano grátis.",
    features: [
      "Todos os módulos inclusos",
      "Atualizações por 36 meses",
      "Suporte premium",
      "Até 12x no cartão",
      "Sem boletos por 2 anos",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Você escolhe como{" "}
            <span className="text-gradient">quer investir</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Três modelos pensados para diferentes momentos da sua empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "border-2 border-primary glow-border bg-card"
                  : "border border-border/50 bg-card/60"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  {plan.tag}
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.highlight ? "bg-primary/20" : "bg-primary/10"}`}>
                  <plan.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                  {!plan.highlight && (
                    <span className="text-xs text-muted-foreground">{plan.tag}</span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm text-muted-foreground">R$ </span>
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                )}
                {plan.extra && (
                  <p className="text-primary text-sm font-medium mt-1">{plan.extra}</p>
                )}
              </div>

              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`w-full inline-flex items-center justify-center py-3 rounded-lg font-semibold transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Escolher {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
