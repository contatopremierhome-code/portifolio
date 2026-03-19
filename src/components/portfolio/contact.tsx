import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <footer className="py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Contato Simplificado</h2>
          <p className="text-muted-foreground">Envie uma proposta de estágio ou tire suas dúvidas.</p>
        </div>
        <form className="space-y-4">
          <Input placeholder="Seu Nome" className="bg-background" />
          <Input placeholder="E-mail" type="email" className="bg-background" />
          <Textarea placeholder="Sua Mensagem" className="bg-background min-h-[120px]" />
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">
            Enviar Mensagem
          </Button>
        </form>
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Portfólio de Engenharia Civil.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}