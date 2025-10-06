import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas novidades em breve.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="border-t border-gold/30 mb-8"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold" data-testid="text-footer-contact">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                <span data-testid="text-address">
                  Rua Principal, 123<br />
                  Garopaba - SC, 88495-000
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <span data-testid="text-phone">(48) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <span data-testid="text-email">contato@resgatados.org.br</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gold" data-testid="text-footer-links">Links Rápidos</h3>
            <div className="space-y-2 text-sm">
              <Link href="/sobre">
                <a className="block hover:text-gold transition-colors" data-testid="link-footer-sobre">Sobre Nós</a>
              </Link>
              <Link href="/trabalhos">
                <a className="block hover:text-gold transition-colors" data-testid="link-footer-trabalhos">Trabalhos Realizados</a>
              </Link>
              <Link href="/parceiros">
                <a className="block hover:text-gold transition-colors" data-testid="link-footer-parceiros">Parceiros</a>
              </Link>
              <Link href="/contribuir">
                <a className="block hover:text-gold transition-colors" data-testid="link-footer-contribuir">Contribuir</a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gold" data-testid="text-footer-social">Redes Sociais</h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-gold/30 hover:bg-gold/10"
                data-testid="button-facebook"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-gold/30 hover:bg-gold/10"
                data-testid="button-instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-gold/30 hover:bg-gold/10"
                data-testid="button-youtube"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gold" data-testid="text-footer-newsletter">Newsletter</h3>
            <p className="text-sm mb-3">Receba nossas novidades</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-gold/30 text-primary-foreground placeholder:text-primary-foreground/50"
                required
                data-testid="input-newsletter-email"
              />
              <Button type="submit" variant="secondary" className="bg-gold text-primary hover:bg-gold/90" data-testid="button-newsletter-submit">
                Enviar
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gold/30 text-center text-sm">
          <p data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Associação Resgatados para Resgatar. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gold text-primary hover:bg-gold/90 shadow-xl"
        size="icon"
        data-testid="button-scroll-top"
      >
        <ChevronUp className="w-5 h-5" />
      </Button>
    </footer>
  );
}
