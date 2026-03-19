import { Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <footer className="py-32 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-12">
          
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">Contato Direto</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estou aberto a oportunidades de estágio em escritórios de engenharia, consultoria e gestão de obras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/30 border border-border">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail Profissional</p>
                <p className="font-semibold text-white">contato@engcivil.pro</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/30 border border-border">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MapPin />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Localização</p>
                <p className="font-semibold text-white">São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfólio Engenharia Civil | Universidade Nove de Julho.</p>
        </div>
      </div>
    </footer>
  );
}
