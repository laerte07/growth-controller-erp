// ===== RODAPÉ =====
// Footer com logo e copyright

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-bold text-gradient">
          ERP<span className="text-foreground">Braspet</span>
        </span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ERP Braspet. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
