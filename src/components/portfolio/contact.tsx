'use client';

import { Mail, MapPin, Key } from 'lucide-react';
import Image from 'next/image';
import { useAudio } from '@/hooks/use-audio';

export default function ContactSection() {
  const { playSound } = useAudio();

  return (
    <footer id="contact" className="py-20 md:py-40 relative border-t border-white/10 blueprint-grid bg-black/95">
      <div className="container mx-auto px-4 reveal text-center">
        <div className="max-w-4xl mx-auto space-y-20">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              Contato Profissional
            </div>
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase italic leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
              CONTATO
            </h2>
            <div className="h-2 md:h-3 w-24 md:w-40 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="mailto:jeovanede@hotmail.com"
              className="p-10 md:p-12 rounded-[2rem] md:rounded-[3rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer block border-white/20 hover:border-primary/50"
              onClick={() => playSound('click')}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-[1.5rem] md:rounded-[2rem] bg-primary flex items-center justify-center text-white mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:rotate-12">
                <Mail size={32} />
              </div>
              <p className="text-[11px] text-primary uppercase font-black tracking-[0.3em] mb-2">E-mail</p>
              <p className="font-black text-white text-base md:text-lg break-all group-hover:text-primary transition-colors">jeovanede@hotmail.com</p>
            </a>
            
            <a 
              href="https://wa.me/5511919854675?text=Olá%20Jeovane,%20vim%20através%20do%20seu%20Portifólio%20!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-10 md:p-12 rounded-[2rem] md:rounded-[3rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer border-white/20 hover:border-primary/50"
              onClick={() => playSound('click')}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-[1.5rem] md:rounded-[2rem] bg-[#25D366] flex items-center justify-center text-white mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(37,211,102,0.5)] group-hover:rotate-12 overflow-hidden p-4">
                <Image 
                  src="https://i.imgur.com/Hr6SCB8.png" 
                  alt="WhatsApp" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                />
              </div>
              <p className="text-[11px] text-[#25D366] uppercase font-black tracking-[0.3em] mb-2">WhatsApp</p>
              <p className="font-black text-white text-base md:text-lg group-hover:text-[#25D366] transition-colors">(11) 91985-4675</p>
            </a>

            <div 
              className="p-10 md:p-12 rounded-[2rem] md:rounded-[3rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer border-white/20 hover:border-primary/50"
              onClick={() => playSound('click')}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-[1.5rem] md:rounded-[2rem] bg-primary flex items-center justify-center text-white mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:rotate-12">
                <MapPin size={32} />
              </div>
              <p className="text-[11px] text-primary uppercase font-black tracking-[0.3em] mb-2">Local</p>
              <p className="font-black text-white text-base md:text-lg group-hover:text-primary transition-colors">São Paulo - SP</p>
            </div>
          </div>

          <div className="pt-20 opacity-40">
            <Key size={60} className="mx-auto animate-float text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
          </div>
        </div>

        <div className="mt-20 md:mt-40 pt-12 border-t border-white/10 text-[10px] md:text-[14px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-white font-black drop-shadow-xl">
          <p>© {new Date().getFullYear()} JEOVANE DE OLIVEIRA | ENGENHARIA CIVIL (UNINOVE).</p>
        </div>
      </div>
    </footer>
  );
}
