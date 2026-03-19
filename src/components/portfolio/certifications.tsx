import { Award } from 'lucide-react';

const certs = ["Certificação Revit BIM", "AutoCAD Professional", "Excel Avançado para Engenharia", "Gestão de Projetos MS-Project"];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-12 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary"></span>
          Certificações
          <span className="h-px w-12 bg-primary"></span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certs.map((cert) => (
            <div key={cert} className="p-6 bg-card border border-border rounded-xl flex flex-col items-center gap-4 hover:border-primary/50 transition-colors">
              <Award className="h-10 w-10 text-primary" />
              <span className="text-sm font-semibold">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}