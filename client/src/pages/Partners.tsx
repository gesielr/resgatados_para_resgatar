import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Building2, Church, Heart } from "lucide-react";
import { partnerFormSchema, type PartnerForm, type Partner } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const partners: Partner[] = [
  {
    id: "1",
    name: "Igreja Comunidade Cristã",
    logo: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&q=80",
    description: "Parceiro desde 2020, oferecendo suporte espiritual e financeiro",
    type: "church",
  },
  {
    id: "2",
    name: "CT Vida Nova",
    logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=80",
    description: "Centro terapêutico parceiro que recebe nossos assistidos",
    type: "therapeutic-center",
  },
  {
    id: "3",
    name: "Empresa Solidária LTDA",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
    description: "Apoio através de doações mensais e programas de empregabilidade",
    type: "company",
  },
  {
    id: "4",
    name: "Assembleia de Deus Local",
    logo: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&q=80",
    description: "Apoio em campanhas e eventos de evangelização",
    type: "church",
  },
  {
    id: "5",
    name: "CT Restauração",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
    description: "Centro terapêutico especializado em dependência química",
    type: "therapeutic-center",
  },
  {
    id: "6",
    name: "Indústria do Bem",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    description: "Doações de materiais e suporte logístico",
    type: "company",
  },
];

const getPartnerIcon = (type: Partner["type"]) => {
  switch (type) {
    case "church":
      return Church;
    case "company":
      return Building2;
    case "therapeutic-center":
      return Heart;
  }
};

export default function Partners() {
  const { toast } = useToast();
  
  const form = useForm<PartnerForm>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: PartnerForm) => {
      const response = await apiRequest("POST", "/api/partner-contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: PartnerForm) => {
    submitMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Nossos Parceiros"
        subtitle="Juntos, transformamos mais vidas"
        imageUrl="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-partners-title">
              Quem nos Apoia
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-partners-description">
              Contamos com o apoio de igrejas, empresas e centros terapêuticos comprometidos 
              com a transformação de vidas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              const Icon = getPartnerIcon(partner.type);
              return (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1" data-testid={`card-partner-${partner.id}`}>
                    <CardContent className="p-6">
                      <div className="aspect-video overflow-hidden rounded-lg mb-4 bg-muted flex items-center justify-center">
                        <Icon className="w-16 h-16 text-gold" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2" data-testid={`text-partner-name-${partner.id}`}>
                        {partner.name}
                      </h3>
                      <p className="text-muted-foreground">{partner.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-form-title">
              Seja um Parceiro
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-form-description">
              Junte-se a nós nessa missão de resgate e transformação
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome / Organização</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome ou nome da organização"
                              {...field}
                              data-testid="input-partner-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="seu@email.com"
                              {...field}
                              data-testid="input-partner-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(00) 00000-0000"
                              {...field}
                              data-testid="input-partner-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Como você gostaria de contribuir com nossa missão?"
                              className="min-h-32"
                              {...field}
                              data-testid="input-partner-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gold text-primary hover:bg-gold/90"
                      disabled={submitMutation.isPending}
                      data-testid="button-partner-submit"
                    >
                      {submitMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
