import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Responderemos em breve. Obrigado pelo contato!",
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

  const onSubmit = (data: ContactForm) => {
    submitMutation.mutate(data);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5548999999999", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Entre em Contato"
        subtitle="Estamos aqui para ouvir você"
        imageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-8" data-testid="text-contact-title">
                Fale Conosco
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="hover-elevate active-elevate-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                        <p className="text-muted-foreground" data-testid="text-contact-address">
                          Rua Principal, 123<br />
                          Centro - Garopaba, SC<br />
                          CEP: 88495-000
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate active-elevate-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                        <p className="text-muted-foreground" data-testid="text-contact-phone">
                          (48) 99999-9999
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate active-elevate-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                        <p className="text-muted-foreground" data-testid="text-contact-email">
                          contato@resgatados.org.br
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Conosco via WhatsApp
                </Button>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.123456789!2d-48.62!3d-28.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAxJzEyLjAiUyA0OMKwMzcnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Associação"
                  data-testid="iframe-map"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6" data-testid="text-form-title">
                    Envie sua Mensagem
                  </h3>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Seu nome completo"
                                {...field}
                                data-testid="input-contact-name"
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
                                data-testid="input-contact-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Assunto</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Sobre o que você quer falar?"
                                {...field}
                                data-testid="input-contact-subject"
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
                                placeholder="Escreva sua mensagem aqui..."
                                className="min-h-32"
                                {...field}
                                data-testid="input-contact-message"
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
                        data-testid="button-contact-submit"
                      >
                        {submitMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
