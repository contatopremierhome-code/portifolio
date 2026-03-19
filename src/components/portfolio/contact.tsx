'use client';

import { Mail, MapPin, Phone, Key } from 'lucide-react';
import { useAudio } from '@/hooks/use-audio';

export default function ContactSection() {
  const { playSound } = useAudio();

  return (
    <footer className="py-40 relative border-t border-white/10 blueprint-grid bg-black/60">
      <div className="container mx-auto px-4 reveal text-center">
        <div className="max-w-4xl mx-auto space-y-20">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-primary/20">
              Entrega das Chaves
            </div>
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase italic leading-none">CONTATO</h2>
            <p className="text-2xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
              Pronto para somar na sua equipe com eficiência técnica e <span className="text-white font-bold">autogestão comprovada</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="p-12 rounded-[3rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer"
              onClick={() => playSound('click')}
            >
              <div className="h-20 w-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl group-hover:rotate-12">
                <Mail size={32} />
              </div>
              <p className="text-xs text-muted-foreground uppercase font-black tracking-[0.3em] mb-2">E-mail</p>
              <p className="font-black text-white text-lg break-all">jeovane.costa@exemplo.com</p>
            </div>
            
            <div 
              className="p-12 rounded-[3rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer border-primary/30"
              onClick={() => playSound('click')}
            >
              <div className="h-20 w-20 rounded-[2rem] bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mx-auto mb-8 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 shadow-2xl group-hover:rotate-12">
                <Phone size={32} />
              </div>
              <p className="text-xs text-muted-foreground uppercase font-black tracking-[0.3em] mb-2">WhatsApp</p>
              <p className="font-black text-white text-lg">(11) 91985-4675</p>
            </div>

            <div 
              className="p-12 rounded-[3rem] glass-card transition-all duration-500 hover:-translate-y-4 group cursor-pointer"
              onClick={() => playSound('click')}
            >
              <div className="h-20 w-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl group-hover:rotate-12">
                <MapPin size={32} />
              </div>
              <p className="text-xs text-muted-foreground uppercase font-black tracking-[0.3em] mb-2">Local</p>
              <p className="font-black text-white text-lg">São Paulo - SP</p>
            </div>
          </div>

          <div className="pt-20 opacity-20">
            <Key size={60} className="mx-auto animate-float text-primary" />
          </div>
        </div>

        <div className="mt-40 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.8em] text-muted-foreground font-black">
          <p>© {new Date().getFullYear()} JEOVANE DE OLIVEIRA COSTA | ENGENHARIA CIVIL UNINOVE.</p>
        </div>
      </div>
    </footer>
  );
}
