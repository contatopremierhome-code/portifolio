import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <footer className="py-32 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Contato Direto</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Estou aberto a oportunidades de estágio em escritórios de engenharia, consultoria e gestão de obras.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail Profissional</p>
                  <p className="font-semibold text-white">contato@engcivil.pro</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border">
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

          <form className="space-y-4 p-8 rounded-3xl bg-muted/20 border border-border/50">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Nome" className="bg-background/50 h-14" />
              <Input placeholder="Empresa" className="bg-background/50 h-14" />
            </div>
            <Input placeholder="E-mail" type="email" className="bg-background/50 h-14" />
            <Textarea placeholder="Descreva a vaga ou proposta..." className="bg-background/50 min-h-[150px]" />
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 text-lg rounded-2xl font-bold shadow-lg shadow-primary/20">
              <Send className="mr-2 h-5 w-5" />
              Enviar Proposta
            </Button>
          </form>
        </div>

        <div className="mt-32 pt-12 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfólio Engenharia Civil | Universidade Nove de Julho.</p>
        </div>
      </div>
    </footer>
  );
}
