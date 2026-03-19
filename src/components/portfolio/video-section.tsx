'use client';

import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 reveal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase italic">Engenharia em Movimento</h2>
            <div className="h-2 w-32 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground uppercase tracking-widest text-sm font-bold">Visão Técnica e Prática em Ação</p>
          </div>

          <div className="relative group">
            {/* Efeito de brilho externo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-primary rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <Card className="glass-card overflow-hidden rounded-[2rem] border-white/10 relative z-10">
              <div className="relative aspect-video bg-black/40">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  controls={false}
                >
                  <source src="https://i.imgur.com/6fWIdJm.mp4" type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
                
                {/* Overlay de interação sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent pointer-events-none"></div>
                
                {/* Selo de Qualidade Técnica */}
                <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Demonstração Técnica</span>
                </div>
              </div>
            </Card>
          </div>
          
          <p className="mt-10 text-center text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
            Acompanhamento visual de processos e resultados, integrando precisão de software com a realidade de campo.
          </p>
        </div>
      </div>
    </section>
  );
}
