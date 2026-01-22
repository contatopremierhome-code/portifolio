import { Eye } from "lucide-react";

export default function PageFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:px-6 md:text-left">
        <div className="flex items-center gap-2">
          <Eye className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">Br Óculos</span>
        </div>
        <div className="flex flex-col items-center gap-2 md:items-end">
            <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Br Óculos. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
            Av. Rio Branco, 278 - Centro Histórico de São Paulo, SP
            </p>
        </div>
      </div>
    </footer>
  );
}
