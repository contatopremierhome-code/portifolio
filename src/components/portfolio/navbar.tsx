'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useAudio } from '@/hooks/use-audio';
import { HardHat } from 'lucide-react';

const navItems = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Evolução', href: '#timeline' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const { playSound } = useAudio();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-6",
        scrolled ? "bg-black/90 backdrop-blur-2xl border-b border-white/10 py-4" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo / Nome - Escondido no celular para dar espaço total aos botões */}
        <div className="hidden md:flex items-center gap-3 group cursor-pointer" onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          playSound('click');
        }}>
          <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <HardHat size={20} />
          </div>
          <span className="text-sm font-black text-white uppercase tracking-[0.3em] drop-shadow-lg">
            Jeovane de Oliveira
          </span>
        </div>

        {/* Links de Navegação - Centralizados e Otimizados para Celular */}
        <div className="flex items-center justify-between w-full md:w-auto gap-1 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.15em] md:tracking-[0.25em] hover:text-primary transition-colors py-2 px-3 relative group flex-shrink-0 drop-shadow-md"
              onClick={() => playSound('click')}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
