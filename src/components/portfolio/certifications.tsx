import { Award, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const certs = [
  { name: "Certificação Revit BIM", issuer: "Engenharia Digital" },
  { name: "AutoCAD Professional", issuer: "Autodesk Authorized" },
  { name: "Excel Avançado", issuer: "Data Analytics Corp" },
  { name: "Gestão MS-Project", issuer: "PMI Training" }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Certificações</h2>
          <p className="text-muted-foreground">Qualificações técnicas validadas pelo mercado</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certs.map((cert) => (
            <Card key={cert.name} className="glass-card hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <Award className="h-14 w-14 text-primary relative" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{cert.issuer}</p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-accent opacity-50" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
