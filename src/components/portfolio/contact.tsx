'use client';

import { Mail, MapPin, Key } from 'lucide-react';
import Image from 'next/image';
import { useAudio } from '@/hooks/use-audio';

export default function ContactSection() {
  const { playSound } = useAudio();

  return (
    <footer id="contact" className="py-40 relative border-t border-white/10 blueprint-grid bg-black/60">
      <div className="container mx-auto px-4 reveal text-center">
        <div className="max-w-4xl mx-auto space-y-20">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-primary/20">
              Contato
            </div>
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase italic leading-none">CONTATO</h2>
            
            <div className="mt-12 p-8 rounded-[2rem] bg-white/5 border border-white/10 max-w-3xl mx-auto">
              <p className="text-xl text-white/80 leading-relaxed font-medium italic">
                "Agradeço por conhecer minha trajetória. Se puder contribuir com sua empresa, ficarei muito satisfeito com seu contato."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="mailto:jeovanede@hotmail.com"
              className="p-12 rounded-[3rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer block"
              onClick={() => playSound('click')}
            >
              <div className="h-20 w-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl group-hover:rotate-12">
                <Mail size={32} />
              </div>
              <p className="text-xs text-white/50 uppercase font-black tracking-[0.3em] mb-2">E-mail</p>
              <p className="font-black text-white text-lg break-all">jeovanede@hotmail.com</p>
            </a>
            
            <a 
              href="https://wa.me/5511919854675?text=Olá%20Jeovane,%20vim%20através%20do%20seu%20Portifólio%20!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-12 rounded-[3rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer border-primary/30"
              onClick={() => playSound('click')}
            >
              <div className="h-20 w-20 rounded-[2rem] bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mx-auto mb-8 group-hover:bg-[#25D366] transition-all duration-500 shadow-2xl group-hover:rotate-12 overflow-hidden p-4">
                <Image 
                  src="https://i.imgur.com/Hr6SCB8.png" 
                  alt="WhatsApp" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-white/50 uppercase font-black tracking-[0.3em] mb-2">WhatsApp</p>
              <p className="font-black text-white text-lg">(11) 91985-4675</p>
            </a>

            <div 
              className="p-12 rounded-[3rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer"
              onClick={() => playSound('click')}
            >
              <div className="h-20 w-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl group-hover:rotate-12">
                <MapPin size={32} />
              </div>
              <p className="text-xs text-white/50 uppercase font-black tracking-[0.3em] mb-2">Local</p>
              <p className="font-black text-white text-lg">São Paulo - SP</p>
            </div>
          </div>

          <div className="pt-20 opacity-20">
            <Key size={60} className="mx-auto animate-float text-primary" />
          </div>
        </div>

        <div className="mt-40 pt-12 border-t border-white/10 text-[14px] md:text-[16px] uppercase tracking-[0.5em] text-white font-black drop-shadow-lg">
          <p>© {new Date().getFullYear()} JEOVANE DE OLIVEIRA | ENGENHARIA CIVIL.</p>
        </div>
      </div>
    </footer>
  );
}
