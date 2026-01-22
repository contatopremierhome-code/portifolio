import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, AlertCircle } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="w-full bg-primary/5 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Venha nos Visitar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos te esperando no coração de São Paulo.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-lg shadow-sm w-full max-w-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.653495493024!2d-46.64371812401659!3d-23.54061264883907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58508743f757%3A0x1ca80685de68a529!2sBR%20OCULOS!5e0!3m2!1sen!2sbr!4v1719507963236!5m2!1sen!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center">
            <Card className="w-full max-w-md shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline">Horário de Funcionamento</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-lg">
                <div className="flex justify-between"><span>Segunda a Sexta:</span> <span>08:00 - 16:00</span></div>
                <div className="flex justify-between"><span>Sábado:</span> <span>08:00 - 14:00</span></div>
                <div className="flex justify-between"><span>Domingo:</span> <span>Fechado</span></div>
                <div className="!mt-6 flex items-start gap-3 rounded-lg border border-accent/50 bg-accent/10 p-4 text-sm text-accent">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                  <p>
                    <span className="font-bold">Dica de ouro:</span> Chegue até às 14h de segunda a sábado para garantir seu óculos pronto ainda hoje!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
