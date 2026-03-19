import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Projetos de Plantas em AutoCAD",
    description: "Desenvolvimento completo de plantas baixas, cortes e fachadas seguindo rigorosamente as normas técnicas vigentes.",
    tags: ["AutoCAD", "Desenho Técnico"],
    image: "https://picsum.photos/seed/autocad1/800/600"
  },
  {
    title: "Vendas e Operações (Mercado Livre)",
    description: "Gestão logística estratégica focada em otimização de estoque e redução de tempo de entrega (SLA).",
    tags: ["Logística", "Gestão de Fluxo"],
    image: "https://picsum.photos/seed/logistics1/800/600"
  },
  {
    title: "Gestão de Prazos Autônomos",
    description: "Liderança de cronogramas em projetos independentes, garantindo 100% de pontualidade na entrega.",
    tags: ["Autogestão", "Cronograma"],
    image: "https://picsum.photos/seed/management1/800/600"
  }
];

export default function ExperienceSection() {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Experiência e Projetos</h2>
          <p className="text-muted-foreground">Resultados práticos através de competências técnicas e autogestão</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-border bg-card/40 hover:bg-card/60 transition-all duration-500 group border shadow-lg hover:shadow-primary/5">
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  data-ai-hint="technical engineering"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <CardHeader className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{tag}</Badge>)}
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-base pt-2">{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
