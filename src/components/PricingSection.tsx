// ===== SEÇÃO DE PLANOS =====
// Três modelos de investimento com hover premium forte,
// spotlight follow mouse e badges animados.
// Usa CardHoverGroup com intensidade "forte" para conversão.

import { motion } from "framer-motion";
import { Check, Star, TrendingUp, Crown } from "lucide-react";
import CardHoverGroup from "./CardHoverGroup";
import { useSpotlight } from "@/hooks/useSpotlight";

/** Configuração dos planos */
const planos = [
  {
    icon: TrendingUp,
    nome: "Assinatura",
    selo: "Flexível",
    preco: "129,97",
    periodo: "/mês",
    descricao: "Ideal para quem quer baixo investimento inicial e flexibilidade total",
    recursos: [
      "Todos os módulos inclusos",
      "Atualizações automáticas",
      "Suporte técnico",
      "Sem fidelidade",
      "Cancele quando quiser",
    ],
    destaque: false,
    badgeEconomia: "Comece sem Compromisso",
  },
  {
    icon: Star,
    nome: "Híbrido",
    selo: "Escolha Inteligente",
    preco: "999,97",
    complemento: "+ R$ 45,99/mês",
    descricao: "Economia superior a 40% no custo mensal equivalente já no primeiro ano",
    recursos: [
      "Todos os módulos inclusos",
      "Atualizações automáticas",
      "Suporte prioritário",
      "Economia de 40%+",
      "Melhor custo-benefício",
    ],
    destaque: true,
    badgeEconomia: null,
  },
  {
    icon: Crown,
    nome: "Plano Elite",
    selo: "Máxima Economia",
    preco: "2.999,97",
    periodo: " (36 meses)",
    descricao: "Invista uma única vez e economize R$ 1.678,95. Parcelamento em até 12x e liberdade total de mensalidades por 24 meses",
    recursos: [
      "Todos os módulos inclusos",
      "Atualizações por 36 meses",
      "Suporte premium",
      "Até 12x no cartão",
      "Sem boletos por 2 anos",
    ],
    destaque: false,
    badgeEconomia: "Economize R$ 1.678,95",
  },
];

/** Card individual de plano com spotlight forte */
const CardPlano = ({
  plano,
  index,
}: {
  plano: (typeof planos)[0];
  index: number;
}) => {
  const { ref, handlers } = useSpotlight<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      {...handlers}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      tabIndex={0}
      className={`relative rounded-2xl p-8 flex flex-col card-spotlight card-spotlight-forte transition-all focus-visible:outline-none ${
        plano.destaque
          ? "border-2 border-primary glow-border bg-card"
          : "border border-border/50 bg-card/60"
      }`}
    >
      {/* Badge "Melhor Custo-Benefício" no plano destacado */}
      {plano.destaque && (
        <div className="badge-pulso absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold whitespace-nowrap z-20">
          {plano.selo}
        </div>
      )}

      {/* Selo de economia no plano Compra Total */}
      {plano.badgeEconomia && (
        <div className="badge-pulso absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold whitespace-nowrap z-20">
          {plano.badgeEconomia}
        </div>
      )}

      {/* Conteúdo acima do spotlight overlay */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Cabeçalho do plano */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plano.destaque ? "bg-primary/20" : "bg-primary/10"}`}>
            <plano.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold">{plano.nome}</h3>
            {!plano.destaque && !plano.badgeEconomia && (
              <span className="text-xs text-muted-foreground">{plano.selo}</span>
            )}
          </div>
        </div>

        {/* Preço */}
        <div className="mb-4">
          <span className="text-sm text-muted-foreground">R$ </span>
          <span className="font-display text-4xl font-bold">{plano.preco}</span>
          {plano.periodo && (
            <span className="text-muted-foreground text-sm">{plano.periodo}</span>
          )}
          {plano.complemento && (
            <p className="text-primary text-sm font-medium mt-1">{plano.complemento}</p>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-6">{plano.descricao}</p>

        {/* Lista de recursos */}
        <ul className="space-y-3 mb-8 flex-1">
          {plano.recursos.map((recurso) => (
            <li key={recurso} className="flex items-center gap-3 text-sm">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{recurso}</span>
            </li>
          ))}
        </ul>

        {/* Botão de ação */}
        <a
          href="#contato"
          className={`w-full inline-flex items-center justify-center py-3 rounded-lg font-semibold transition-all ${
            plano.destaque
              ? "bg-primary text-primary-foreground hover:brightness-110"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          Escolher {plano.nome}
        </a>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <section id="planos" className="section-padding">
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
            O próximo passo da sua gestão{" "}
            <span className="text-gradient">começa aqui</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Modelos flexíveis para empresas que querem controle e crescimento.
          </p>
        </motion.div>

        {/* Grid de planos com hover group forte */}
        <CardHoverGroup
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-8 overflow-visible"
          intensidade="forte"
        >
          {planos.map((plano, index) => (
            <CardPlano key={plano.nome} plano={plano} index={index} />
          ))}
        </CardHoverGroup>
      </div>
    </section>
  );
};

export default PricingSection;
