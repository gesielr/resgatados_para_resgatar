import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { QrCode, CreditCard, Heart, Shield, CheckCircle2 } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

function CheckoutForm({ amount, frequency }: { amount: number; frequency: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/contribuir?success=true",
      },
    });

    if (error) {
      toast({
        title: "Erro no pagamento",
        description: error.message,
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button
        type="submit"
        size="lg"
        className="w-full bg-gold text-primary hover:bg-gold/90"
        disabled={!stripe || isProcessing}
        data-testid="button-submit-payment"
      >
        {isProcessing ? "Processando..." : `Doar R$ ${amount.toFixed(2)}`}
      </Button>
    </form>
  );
}

function StripeCheckout({ amount, frequency }: { amount: number; frequency: string }) {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!stripePromise) {
      setLoading(false);
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);

    apiRequest("POST", "/api/create-payment-intent", { amount })
      .then(async (res) => {
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        const data = await res.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [amount]);

  if (!stripePromise || error) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">
          Pagamento com cartão temporariamente indisponível.
        </p>
        <p className="text-muted-foreground">
          Por favor, utilize a opção PIX para doar.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">
          Pagamento com cartão temporariamente indisponível.
        </p>
        <p className="text-muted-foreground">
          Por favor, utilize a opção PIX para doar.
        </p>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm amount={amount} frequency={frequency} />
    </Elements>
  );
}

export default function Donation() {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("once");
  const { toast } = useToast();

  const predefinedAmounts = [20, 50, 100, 200];

  const handlePixCopy = () => {
    navigator.clipboard.writeText("pix@resgatados.org.br");
    toast({
      title: "Chave PIX copiada!",
      description: "Cole no seu aplicativo bancário para doar",
    });
  };

  const finalAmount = customAmount ? parseFloat(customAmount) : amount;

  return (
    <div className="min-h-screen">
      <Hero
        title="Contribuir"
        subtitle="Sua ajuda transforma vidas"
        imageUrl="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Heart className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-donate-title">
              Faça Parte Dessa Transformação
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-donate-description">
              Cada doação representa esperança, acolhimento e uma nova chance para quem mais precisa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: CheckCircle2, title: "Transparência", desc: "Prestação de contas mensal" },
              { icon: Shield, title: "Segurança", desc: "Pagamento 100% seguro" },
              { icon: Heart, title: "Impacto Real", desc: "Vidas transformadas" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center" data-testid={`card-info-${item.title.toLowerCase()}`}>
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center" data-testid="text-donation-form-title">
                  Escolha o Valor e Forma de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <div className="space-y-8">
                  <div>
                    <Label className="text-lg mb-4 block">Frequência</Label>
                    <RadioGroup value={frequency} onValueChange={setFrequency} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      <div>
                        <RadioGroupItem value="once" id="once" className="peer sr-only" />
                        <Label
                          htmlFor="once"
                          className="flex items-center justify-center rounded-md border-2 border-muted bg-card p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-gold peer-data-[state=checked]:bg-gold/10 cursor-pointer"
                          data-testid="radio-frequency-once"
                        >
                          Uma vez
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                        <Label
                          htmlFor="monthly"
                          className="flex items-center justify-center rounded-md border-2 border-muted bg-card p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-gold peer-data-[state=checked]:bg-gold/10 cursor-pointer"
                          data-testid="radio-frequency-monthly"
                        >
                          Mensal
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="quarterly" id="quarterly" className="peer sr-only" />
                        <Label
                          htmlFor="quarterly"
                          className="flex items-center justify-center rounded-md border-2 border-muted bg-card p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-gold peer-data-[state=checked]:bg-gold/10 cursor-pointer"
                          data-testid="radio-frequency-quarterly"
                        >
                          Trimestral
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="annual" id="annual" className="peer sr-only" />
                        <Label
                          htmlFor="annual"
                          className="flex items-center justify-center rounded-md border-2 border-muted bg-card p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-gold peer-data-[state=checked]:bg-gold/10 cursor-pointer"
                          data-testid="radio-frequency-annual"
                        >
                          Anual
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-lg mb-4 block">Valor da Doação</Label>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                      {predefinedAmounts.map((value) => (
                        <Button
                          key={value}
                          variant={amount === value && !customAmount ? "default" : "outline"}
                          onClick={() => {
                            setAmount(value);
                            setCustomAmount("");
                          }}
                          className={amount === value && !customAmount ? "bg-gold text-primary hover:bg-gold/90" : ""}
                          data-testid={`button-amount-${value}`}
                        >
                          R$ {value}
                        </Button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        R$
                      </span>
                      <Input
                        type="number"
                        placeholder="Outro valor"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="pl-10"
                        min="1"
                        step="0.01"
                        data-testid="input-custom-amount"
                      />
                    </div>
                  </div>

                  <Tabs defaultValue="pix" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="pix" data-testid="tab-pix">
                        <QrCode className="w-4 h-4 mr-2" />
                        PIX
                      </TabsTrigger>
                      <TabsTrigger value="card" data-testid="tab-card">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Cartão
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="pix" className="space-y-6 pt-6">
                      <div className="text-center">
                        <div className="inline-block p-8 bg-muted rounded-lg mb-4">
                          <QrCode className="w-48 h-48 mx-auto text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Escaneie o QR Code ou copie a chave PIX
                        </p>
                        <div className="flex gap-2 max-w-md mx-auto">
                          <Input
                            value="pix@resgatados.org.br"
                            readOnly
                            className="text-center"
                            data-testid="input-pix-key"
                          />
                          <Button onClick={handlePixCopy} variant="outline" data-testid="button-copy-pix">
                            Copiar
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="card" className="pt-6">
                      {finalAmount >= 1 ? (
                        <StripeCheckout amount={finalAmount} frequency={frequency} />
                      ) : (
                        <div className="text-center py-12 text-muted-foreground">
                          Por favor, selecione um valor para continuar
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
