'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4 reveal">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-16 -left-10 text-primary/5 select-none pointer-events-none">
            <Quote size={240} />
          </div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase">Sobre Mim</h2>
            <div className="h-2 w-32 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="glass-card overflow-hidden">
            <CardContent className="p-12 md:p-20 relative">
              <p className="text-2xl md:text-4xl leading-tight text-white/90 font-bold text-center italic tracking-tight">
                "Tenho uma trajetória marcada pela <span className="text-primary">autogestão e disciplina com prazos</span>, competências que desenvolvi atuando de forma autônoma e que considero essenciais para o ambiente de consultoria e gestão de obras."
              </p>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
                Possuo domínio avançado em AutoCAD e Excel, ferramentas que utilizo para garantir precisão e organização técnica. Meu objetivo é contribuir com as rotinas do escritório, apoiando a equipe na viabilização de edificações eficientes enquanto consolido minha formação prática.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
