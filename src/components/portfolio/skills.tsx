'use client';

import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { 
    name: "AutoCAD (2D e 3D)", 
    level: "Avançado", 
    color: "#FF0000", 
    class: "glow-autocad",
    logo: "https://cdn.simpleicons.org/autodesk/FF0000" 
  },
  { 
    name: "Excel", 
    level: "Avançado", 
    color: "#217346", 
    class: "glow-excel",
    logo: "https://cdn.simpleicons.org/microsoftexcel/217346" 
  },
  { 
    name: "Revit (BIM)", 
    level: "Intermediário", 
    color: "#0696D7", 
    class: "glow-revit",
    logo: "https://cdn.simpleicons.org/autodeskrevit/0696D7" 
  },
  { 
    name: "MS-Project", 
    level: "Intermediário", 
    color: "#31752F", 
    class: "glow-msproject",
    logo: "https://cdn.simpleicons.org/microsoft/31752F" 
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white">HARD SKILLS</h2>
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm">Domínio Técnico & Ferramentas</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name} className={`glass-card transition-all duration-500 group cursor-default ${skill.class}`}>
              <CardContent className="p-8 flex flex-col items-center justify-center gap-6">
                <div className="relative h-20 w-20 flex items-center justify-center">
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-white mb-1">{skill.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {skill.level}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
