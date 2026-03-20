'use client';

import { Mail, MapPin, Key } from 'lucide-react';
import Image from 'next/image';
import { useAudio } from '@/hooks/use-audio';
import { cn } from '@/lib/utils';

export default function ContactSection() {
  const { playSound } = useAudio();

  return (
    <footer id="contact" className="py-20 md:py-40 relative border-t border-white/20 bg-black/95">
      {/* Blueprint Grid apenas para Desktop */}
      <div className="absolute inset-0 blueprint-grid opacity-10 hidden md:block pointer-events-none"></div>
      
      <div className="container mx-auto px-4 reveal text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-20">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-white text-[11px] font-black uppercase tracking-[0.3em] mb-6 border-2 border-primary shadow-[0_0_25px_rgba(59,130,246,0.7)]">
              Contato Profissional
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              CONTATO
            </h2>
            <div className="h-2.5 md:h-3.5 w-24 md:w-40 bg-primary mx-auto rounded-full shadow-[0_0_25px_rgba(59,130,246,0.8)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="mailto:jeovanede@hotmail.com"
              className="p-10 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer block border-white/30 hover:border-primary/60 bg-white/5"
              onClick={() => playSound('click')}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-[1.5rem] md:rounded-[2rem] bg-primary flex items-center justify-center text-white mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-[0_0_40px_rgba(59,130,246,0.6)] group-hover:rotate-12">
                <Mail size={32} />
              </div>
              <p className="text-[12px] text-primary uppercase font-black tracking-[0.3em] mb-2 drop-shadow-lg">E-mail</p>
              <p className="font-black text-white text-lg md:text-xl break-all group-hover:text-primary transition-colors drop-shadow-2xl">jeovanede@hotmail.com</p>
            </a>
            
            <a 
              href="https://wa.me/5511919854675?text=Olá%20Jeovane,%20vim%20através%20do%20seu%20Portifólio%20!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-10 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer border-white/30 hover:border-primary/60 bg-white/5"
              onClick={() => playSound('click')}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-[1.5rem] md:rounded-[2rem] bg-[#25D366] flex items-center justify-center text-white mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-[0_0_40px_rgba(37,211,102,0.6)] group-hover:rotate-12 overflow-hidden p-4">
                <Image 
                  src="https://i.imgur.com/Hr6SCB8.png" 
                  alt="WhatsApp" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                />
              </div>
              <p className="text-[12px] text-[#25D366] uppercase font-black tracking-[0.3em] mb-2 drop-shadow-lg">WhatsApp</p>
              <p className="font-black text-white text-lg md:text-xl group-hover:text-[#25D366] transition-colors drop-shadow-2xl">(11) 91985-4675</p>
            </a>

            <div 
              className="p-10 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer border-white/30 hover:border-primary/60 bg-white/5"
              onClick={() => playSound('click')}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-[1.5rem] md:rounded-[2rem] bg-primary flex items-center justify-center text-white mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-[0_0_40px_rgba(59,130,246,0.6)] group-hover:rotate-12">
                <MapPin size={32} />
              </div>
              <p className="text-[12px] text-primary uppercase font-black tracking-[0.3em] mb-2 drop-shadow-lg">Local</p>
              <p className="font-black text-white text-lg md:text-xl group-hover:text-primary transition-colors drop-shadow-2xl">São Paulo - SP</p>
            </div>
          </div>

          <div className="pt-20 opacity-60">
            <Key size={60} className="mx-auto animate-float text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]" />
          </div>
        </div>

        <div className="mt-20 md:mt-40 pt-12 border-t border-white/20 text-[11px] md:text-[15px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          <p>© 2026 JEOVANE DE OLIVEIRA | ENGENHARIA CIVIL (UNINOVE).</p>
        </div>
      </div>
    </footer>
  );
}
