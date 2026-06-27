import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AccessibilityBar from './AccessibilityBar';
import logoIfro from '/logo-ifro.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'O Programa', path: '/about' },
    { name: 'Atividades', path: '/services' },
    { name: 'Edições', path: '/portfolio' },
    { name: 'Notícias', path: '/noticias' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Depoimentos', path: '/testimonials' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-background/95 backdrop-blur-sm border-b border-border'
      }`}
    >
      <AccessibilityBar />
      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        {/* Desktop: grid 3 colunas com logo centralizado */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* Nav — esquerda */}
          <div className="flex items-center gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-200 relative group ${
                  isActive(link.path)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* Logo — centro */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 justify-center">
            <img
              src={logoIfro}
              alt="Logo do IFRO"
              className="h-12 w-auto object-contain"
              style={{ filter: 'brightness(0)' }}
            />
            <div className="w-px h-10 bg-border"></div>
            <div className="leading-tight text-center">
              <div className="text-base font-bold tracking-tight text-foreground">PIBID Física</div>
              <div className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">IFRO Campus Calama</div>
            </div>
          </Link>

          {/* Nav — direita */}
          <div className="flex items-center justify-end gap-6">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-200 relative group ${
                  isActive(link.path)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] text-xs tracking-widest uppercase px-5"
            >
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>

        {/* Mobile: layout simples com hambúrguer */}
        <div className="flex md:hidden items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
            <img
              src={logoIfro}
              alt="Logo do IFRO"
              className="h-10 w-auto object-contain"
              style={{ filter: 'brightness(0)' }}
            />
            <div className="w-px h-8 bg-border mx-1"></div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight text-foreground">PIBID Física</div>
              <div className="text-[9px] text-muted-foreground font-medium tracking-widest uppercase">IFRO Campus Calama</div>
            </div>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors duration-200"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-xl font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] py-6 text-lg"
                >
                  <a href="mailto:pibidfisicaifro@gmail.com" onClick={() => setIsMobileMenuOpen(false)}>
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;