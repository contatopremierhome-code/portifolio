import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Projetos de Plantas em AutoCAD",
    description: "Desenvolvimento de plantas baixas, cortes e fachadas com precisão técnica e normas vigentes.",
    tags: ["AutoCAD", "Desenho Técnico"],
    image: "https://picsum.photos/seed/autocad/800/600"
  },
  {
    title: "Vendas e Operações (Mercado Livre)",
    description: "Experiência em logística e operações, focada em gestão de estoque e agilidade de entrega.",
    tags: ["Logística", "E-commerce"],
    image: "https://picsum.photos/seed/logistics/800/600"
  },
  {
    title: "Gestão de Prazos Autônomos",
    description: "Controle rigoroso de cronogramas em projetos independentes, garantindo entrega e qualidade.",
    tags: ["Autogestão", "Cronograma"],
    image: "https://picsum.photos/seed/management/800/600"
  }
];

export default function ExperienceSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-primary"></span>
          Experiência e Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none bg-card hover:shadow-2xl transition-all group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}