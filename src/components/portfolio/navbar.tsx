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
        scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo / Nome */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          playSound('click');
        }}>
          <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12">
            <HardHat size={20} />
          </div>
          {/* Nome escondido no celular (hidden), visível apenas no computador (md:block) */}
          <span className="text-sm font-black text-white uppercase tracking-[0.3em] hidden md:block">
            Jeovane de Oliveira
          </span>
        </div>

        {/* Links de Navegação */}
        <div className="flex items-center gap-1 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] md:text-xs font-black text-white/50 uppercase tracking-[0.2em] hover:text-primary transition-colors py-2 px-1 md:px-3 relative group"
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
