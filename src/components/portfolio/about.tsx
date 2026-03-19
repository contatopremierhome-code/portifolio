import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 -left-10 text-primary/10">
            <Quote size={120} />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Sobre Mim</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="glass-card shadow-2xl relative z-10">
            <CardContent className="p-10 md:p-16">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium text-center italic">
                "Tenho uma trajetória marcada pela autogestão e disciplina com prazos, competências que desenvolvi atuando de forma autônoma e que considero essenciais para o ambiente de consultoria e gestão de obras. Meu objetivo é contribuir com as rotinas do escritório, apoiando a equipe na viabilização de edificações eficientes."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
