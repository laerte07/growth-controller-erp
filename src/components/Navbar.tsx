// ===== NAVBAR =====
// Barra de navegação fixa com efeito glass ao rolar e menu mobile

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 20);
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const links = [
    { rotulo: "Funcionalidades", href: "#funcionalidades" },
    { rotulo: "Planos", href: "#planos" },
    { rotulo: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        rolou ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-bold text-gradient">
          ERP<span className="text-foreground">Braspet</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.rotulo}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.rotulo}
            </a>
          ))}
          <a
            href="#contato"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
          >
            Começar Agora
          </a>
        </div>

        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-foreground"
          aria-label="Abrir menu de navegação"
        >
          {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="md:hidden glass border-t border-border/50 mt-2">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.rotulo}
                href={link.href}
                onClick={() => setMenuAberto(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.rotulo}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuAberto(false)}
              className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
            >
              Começar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
