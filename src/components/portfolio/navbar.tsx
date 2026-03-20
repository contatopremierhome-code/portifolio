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
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo / Nome - Escondido no celular para dar espaço aos botões */}
        <div className="hidden md:flex items-center gap-3 group cursor-pointer" onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          playSound('click');
        }}>
          <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12">
            <HardHat size={20} />
          </div>
          <span className="text-sm font-black text-white uppercase tracking-[0.3em]">
            Jeovane de Oliveira
          </span>
        </div>

        {/* Links de Navegação - Centralizados no celular com o nome removido */}
        <div className="flex items-center justify-between w-full md:w-auto gap-0 md:gap-8 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[9px] sm:text-[10px] md:text-xs font-black text-white uppercase tracking-[0.1em] md:tracking-[0.2em] hover:text-primary transition-colors py-2 px-2 md:px-3 relative group flex-shrink-0"
              onClick={() => playSound('click')}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
