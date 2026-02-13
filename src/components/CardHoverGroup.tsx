// ===== COMPONENTE: CARD HOVER GROUP =====
// Container reutilizável que aplica o efeito "Focus Hover Group":
// - Ao passar o mouse em um card, os demais ficam com opacidade reduzida
// - Funciona com foco de teclado (focus-visible) para acessibilidade
// - No mobile, não aplica dimming (sem hover real)
//
// Props:
//   children: os cards filhos (devem ser elementos diretos)
//   className: classes extras para o container
//   intensidade: "normal" (padrão) ou "forte" (para planos/preços)

import { cn } from "@/lib/utils";

interface CardHoverGroupProps {
  children: React.ReactNode;
  className?: string;
  /** "normal" para cards de features/benefícios, "forte" para cards de planos */
  intensidade?: "normal" | "forte";
}

const CardHoverGroup = ({
  children,
  className,
  intensidade = "normal",
}: CardHoverGroupProps) => {
  return (
    <div
      className={cn(
        // Grupo que controla o dimming dos filhos
        // Quando hover no container, todos os filhos ficam com opacidade reduzida
        // Exceto o filho sob hover, que mantém opacidade total
        "grupo-hover-cards",
        intensidade === "forte"
          ? "grupo-hover-forte"
          : "grupo-hover-normal",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardHoverGroup;
