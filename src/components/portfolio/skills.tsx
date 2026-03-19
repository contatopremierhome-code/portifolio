import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, Box, Table, ClipboardList, Monitor } from 'lucide-react';

const skills = [
  { name: "AutoCAD (2D e 3D)", level: 90, label: "Avançado", icon: PenTool },
  { name: "Revit (BIM)", level: 75, label: "Intermediário", icon: Box },
  { name: "Excel (Fórmulas e Gestão)", level: 85, label: "Avançado", icon: Table },
  { name: "MS-Project (Planejamento)", level: 70, label: "Intermediário", icon: ClipboardList },
  { name: "Pacote Office", level: 95, label: "Avançado", icon: Monitor },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Hard Skills</h2>
          <p className="text-muted-foreground">Domínio técnico de ferramentas essenciais para engenharia</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name} className="glass-card transition-all duration-300 hover:border-primary/50 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <skill.icon className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">{skill.label}</span>
                </div>
                <div className="space-y-3">
                  <Progress value={skill.level} className="h-2.5 bg-muted-foreground/10" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
