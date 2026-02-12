import { motion } from "framer-motion";
import { MousePointerClick, Rocket, Headphones, Shield, PiggyBank, Lock } from "lucide-react";

const points = [
  { icon: MousePointerClick, title: "Sistema Intuitivo", text: "Interface amigável que qualquer pessoa aprende em minutos." },
  { icon: Rocket, title: "Implantação Simples", text: "Comece a usar no mesmo dia, sem complicações técnicas." },
  { icon: Headphones, title: "Suporte Especializado", text: "Equipe pronta para resolver qualquer dúvida da sua operação." },
  { icon: Shield, title: "Atualizações Fiscais", text: "Conformidade tributária sempre atualizada automaticamente." },
  { icon: PiggyBank, title: "Custo-Benefício", text: "O melhor retorno sobre investimento do mercado ERP." },
  { icon: Lock, title: "Segurança Total", text: "Dados protegidos com criptografia e backups constantes." },
];

const AuthoritySection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
