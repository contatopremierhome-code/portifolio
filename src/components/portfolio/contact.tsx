'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <footer className="py-32 relative border-t border-white/10">
      <div className="container mx-auto px-4 reveal text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Contato Direto</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pronto para somar na sua equipe com eficiência e domínio técnico.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl glass-card transition-transform hover:-translate-y-2 group">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail />
              </div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">E-mail</p>
              <p className="font-bold text-white break-all">jeovane.costa@exemplo.com</p>
            </div>
            
            <div className="p-8 rounded-3xl glass-card transition-transform hover:-translate-y-2 group">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone />
              </div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">WhatsApp</p>
              <p className="font-bold text-white">(11) 91985-4675</p>
            </div>

            <div className="p-8 rounded-3xl glass-card transition-transform hover:-translate-y-2 group">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <MapPin />
              </div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Localização</p>
              <p className="font-bold text-white">São Paulo - SP</p>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold">
          <p>© {new Date().getFullYear()} Jeovane de Oliveira Costa | Engenharia Civil UNINOVE.</p>
        </div>
      </div>
    </footer>
  );
}
