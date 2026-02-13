// ===== HOOK: SPOTLIGHT FOLLOW MOUSE =====
// Rastreia a posição do mouse dentro de um elemento e retorna
// as variáveis CSS --x e --y para criar um gradiente radial
// que "segue" o cursor, criando efeito premium estilo Stripe.

import { useCallback, useRef } from "react";

/**
 * Hook que retorna handlers para aplicar efeito de spotlight
 * que acompanha o mouse dentro de um card.
 *
 * Uso:
 *   const { ref, handlers } = useSpotlight();
 *   <div ref={ref} {...handlers} />
 *
 * O elemento receberá as CSS custom properties --x e --y
 * representando a posição do mouse em pixels relativo ao elemento.
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  const aoMoverMouse = useCallback((e: React.MouseEvent<T>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  }, []);

  const aoSairMouse = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.removeProperty("--x");
    ref.current.style.removeProperty("--y");
  }, []);

  return {
    ref,
    handlers: {
      onMouseMove: aoMoverMouse,
      onMouseLeave: aoSairMouse,
    },
  };
}
