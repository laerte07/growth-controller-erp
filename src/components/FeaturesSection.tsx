// ===== SEÇÃO DE FUNCIONALIDADES =====
// Grid com todos os 9 módulos do sistema ERP
// Usa CardHoverGroup + spotlight follow mouse para efeito premium

import { motion } from "framer-motion";
import {
  Users,
  FileInput,
  Package,
  Wallet,
  BarChart3,
  ScrollText,
  FileCheck,
  Monitor,
  ShoppingCart,
} from "lucide-react";
import CardHoverGroup from "./CardHoverGroup";
import { useSpotlight } from "@/hooks/useSpotlight";

/** Módulos disponíveis no ERP */
const modulos = [
  { icon: Users, nome: "Cadastros Básicos", descricao: "Clientes, fornecedores, produtos e categorias" },
  { icon: FileInput, nome: "Compras – Notas de Entrada", descricao: "Controle completo de compras e notas fiscais" },
  { icon: Package, nome: "Estoque – Cadastro e Controle", descricao: "Gestão de estoque em tempo real com alertas" },
  { icon: Wallet, nome: "Financeiro Básico", descricao: "Contas a pagar, receber e fluxo de caixa" },
  { icon: BarChart3, nome: "Financeiro Avançado", descricao: "DRE, conciliação bancária e relatórios" },
  { icon: ScrollText, nome: "Logs Avançados", descricao: "Rastreabilidade total de ações no sistema" },
  { icon: FileCheck, nome: "Nota Fiscal Eletrônica", descricao: "Emissão de NF-e, NFC-e com envio automático" },
  { icon: Monitor, nome: "PDV – Frente de Caixa", descricao: "Ponto de venda rápido e intuitivo" },
  { icon: ShoppingCart, nome: "Vendas – Pedidos e Orçamentos", descricao: "Gestão completa do ciclo de vendas" },
];

/** Card individual de módulo com spotlight */
const CardModulo = ({
  modulo,
  index,
}: {
  modulo: (typeof modulos)[0];
  index: number;
}) => {
  const { ref, handlers } = useSpotlight();

  return (
    <motion.div
      ref={ref}
      {...handlers}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      tabIndex={0}
      className="relative flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card/40 card-spotlight transition-all group focus-visible:outline-none"
    >
      <div className="relative z-10 flex items-start gap-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-focus-visible:bg-primary/20 transition-colors">
          <modulo.icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg mb-1">{modulo.nome}</h3>
          <p className="text-sm text-muted-foreground">{modulo.descricao}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="section-padding bg-card/30">
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
            Tudo que você precisa,{" "}
            <span className="text-gradient">em um só lugar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Módulos completos para cada área da sua operação comercial.
          </p>
        </motion.div>

        {/* Grid de módulos com hover group */}
        <CardHoverGroup
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          intensidade="normal"
        >
          {modulos.map((modulo, index) => (
            <CardModulo key={modulo.nome} modulo={modulo} index={index} />
          ))}
        </CardHoverGroup>
      </div>
    </section>
  );
};

export default FeaturesSection;
