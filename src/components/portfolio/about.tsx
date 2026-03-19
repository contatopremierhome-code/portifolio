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
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase italic">Minha Trajetória</h2>
            <div className="h-2 w-32 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground uppercase tracking-widest text-sm font-bold">Uma Jornada de Resiliência</p>
          </div>

          <Card className="glass-card overflow-hidden">
            <CardContent className="p-10 md:p-20 relative space-y-8">
              <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tight">De Aprendiz a Futuro Engenheiro</h3>
              
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-justify">
                <p>
                  Minha vida profissional começou cedo, enfrentando os desafios do mercado real na Santa Efigênia. Essa base foi fundamental para desenvolver o dinamismo e a visão prática que carrego hoje.
                </p>
                
                <p>
                  Em <span className="text-white font-bold">2014</span>, descobri minha afinidade com a precisão técnica ao iniciar o curso de AutoCAD no SENAC. Meu desempenho foi tão destacado que, antes mesmo de concluir a formação, recebi o convite do meu professor para integrar a equipe de seu escritório técnico. Essa experiência validou minha capacidade de entrega sob padrões profissionais rigorosos.
                </p>

                <p>
                  A vida me apresentou novos desafios quando precisei priorizar o apoio aos negócios da minha família. Demonstrei adaptabilidade e espírito empreendedor ao atuar de forma autônoma no Mercado Livre, onde aprimorei competências de logística, atendimento e gestão financeira que são vitais para qualquer obra eficiente.
                </p>

                <div className="p-8 rounded-2xl bg-primary/5 border-l-4 border-primary mt-10">
                  <h4 className="text-white font-black uppercase text-sm tracking-widest mb-4">A Engenharia no Sangue</h4>
                  <p>
                    Iniciei meu sonho na graduação em <span className="text-white font-bold">2015</span>, mas em <span className="text-white font-bold">2018</span> precisei fazer uma pausa estratégica por questões financeiras — um intervalo que apenas aumentou minha determinação. 
                  </p>
                  <p className="mt-4">
                    Em <span className="text-white font-bold">2025</span>, retornei com foco total à <span className="text-primary font-bold">UNINOVE</span>, e hoje sigo em ritmo acelerado para concluir minha formação em <span className="text-white font-bold">2026</span>. Estou pronto para aplicar essa bagagem de vida e técnica em um estágio que valorize quem sabe, de fato, o valor do trabalho duro.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
