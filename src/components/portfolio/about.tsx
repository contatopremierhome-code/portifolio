import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-primary"></span>
            Sobre Mim
          </h2>
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                "Tenho uma trajetória marcada pela autogestão e disciplina com prazos, competências que desenvolvi atuando de forma autônoma e que considero essenciais para o ambiente de consultoria e gestão de obras. Meu objetivo é contribuir com as rotinas do escritório, apoiando a equipe na viabilização de edificações eficientes."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}