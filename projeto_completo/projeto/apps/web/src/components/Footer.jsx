import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, Atom } from 'lucide-react';
import logoIfro from '/logo-ifro.png';

const Footer = () => {
  const edicoesLinks = [
    { name: 'Edição 2022–2024', path: '/portfolio' },
    { name: 'Edição 2020–2022', path: '/portfolio' },
    { name: 'Edição 2014–2020', path: '/portfolio' },
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border pt-24 pb-12 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <img src={logoIfro} alt="Logo IFRO" className="h-12 md:h-14 w-auto object-contain" style={{ filter: 'brightness(0)' }} />
              <div>
                <div className="text-2xl font-bold tracking-tight">PIBID Física</div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">IFRO Campus Calama</div>
              </div>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              O PIBID Física do IFRO Campus Calama conecta futuros professores com alunos da educação básica, promovendo o ensino de física através de experimentos e atividades inovadoras.
            </p>
          </div>

          {/* Edições */}
          <div className="md:col-span-3 lg:col-span-2 md:col-start-7">
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6 block">Edições</span>
            <ul className="space-y-4">
              {edicoesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm font-medium hover:text-muted-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programa */}
          <div className="md:col-span-2">
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6 block">Programa</span>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-sm font-medium hover:text-muted-foreground transition-colors duration-200">
                  O que é o PIBID
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm font-medium hover:text-muted-foreground transition-colors duration-200">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm font-medium hover:text-muted-foreground transition-colors duration-200">
                  Atividades
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm font-medium hover:text-muted-foreground transition-colors duration-200">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6 block">Contato</span>
            <div className="flex flex-col space-y-4">
              <a href="mailto:pibidfisicaifro@gmail.com" className="text-sm font-medium flex items-center gap-3 hover:text-muted-foreground transition-colors duration-200" aria-label="E-mail">
                <Mail className="w-4 h-4" /> E-mail
              </a>
              <a href="#" className="text-sm font-medium flex items-center gap-3 hover:text-muted-foreground transition-colors duration-200" aria-label="Instagram">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a href="#" className="text-sm font-medium flex items-center gap-3 hover:text-muted-foreground transition-colors duration-200" aria-label="YouTube">
                <Youtube className="w-4 h-4" /> YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Tipografia Gigante Editorial */}
        <div className="py-16 md:py-24 w-full flex justify-center border-t border-border mt-16 mb-8 overflow-hidden pointer-events-none">
          <span 
            className="font-serif font-black text-foreground tracking-tighter leading-none select-none text-center"
            style={{ fontSize: 'clamp(6rem, 18vw, 24rem)' }}
          >
            PIBID
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2024 PIBID Física — IFRO Campus Calama. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Apoio: <span className="font-medium">CAPES · IFRO · ASCOM</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;