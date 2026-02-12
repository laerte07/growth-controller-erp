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

const modules = [
  { icon: Users, name: "Cadastros Básicos", desc: "Clientes, fornecedores, produtos e categorias" },
  { icon: FileInput, name: "Compras – Notas de Entrada", desc: "Controle completo de compras e notas fiscais" },
  { icon: Package, name: "Estoque – Cadastro e Controle", desc: "Gestão de estoque em tempo real com alertas" },
  { icon: Wallet, name: "Financeiro Básico", desc: "Contas a pagar, receber e fluxo de caixa" },
  { icon: BarChart3, name: "Financeiro Avançado", desc: "DRE, conciliação bancária e relatórios" },
  { icon: ScrollText, name: "Logs Avançados", desc: "Rastreabilidade total de ações no sistema" },
  { icon: FileCheck, name: "Nota Fiscal Eletrônica", desc: "Emissão de NF-e, NFC-e com envio automático" },
  { icon: Monitor, name: "PDV – Frente de Caixa", desc: "Ponto de venda rápido e intuitivo" },
  { icon: ShoppingCart, name: "Vendas – Pedidos e Orçamentos", desc: "Gestão completa do ciclo de vendas" },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="section-padding bg-card/30">
      <div className="container mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, index) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card/40 hover:bg-secondary/30 transition-all group"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <mod.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">{mod.name}</h3>
                <p className="text-sm text-muted-foreground">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
