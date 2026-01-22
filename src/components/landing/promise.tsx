import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle } from "lucide-react";

export default function PromiseSection() {
  return (
    <section id="promise" className="w-full bg-background py-12 md:py-24">
      <div className="container mx-auto grid items-start gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col items-center text-center">
          <Card className="w-full max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-2xl">Óculos Prontos em até <span className="font-bold text-accent">2 Horas</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Com nosso laboratório de alta tecnologia, você não precisa esperar dias para ver o mundo com mais clareza. Fazemos seus óculos na hora.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center text-center">
          <Card className="w-full max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-2xl">Exames de Vista no Local</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Agende seu exame e resolva tudo em uma única visita. Cuidamos da sua saúde visual com a conveniência que você merece.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
