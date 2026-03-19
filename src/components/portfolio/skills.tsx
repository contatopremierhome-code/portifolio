import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "AutoCAD (2D e 3D)", level: 90, label: "Avançado" },
  { name: "Revit (BIM)", level: 75, label: "Intermediário" },
  { name: "Excel (Fórmulas e Gestão)", level: 85, label: "Avançado" },
  { name: "MS-Project (Planejamento)", level: 70, label: "Intermediário" },
  { name: "Pacote Office", level: 95, label: "Avançado" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-primary"></span>
          Hard Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="font-semibold text-lg">{skill.name}</span>
                <span className="text-sm text-primary">{skill.label}</span>
              </div>
              <Progress value={skill.level} className="h-2 bg-muted border border-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}