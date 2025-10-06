import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Heart, Users, HandHeart, Award } from "lucide-react";
import type { Project, Testimonial } from "@shared/schema";

const projects: Project[] = [
  {
    id: "1",
    title: "Resgate na Praça Central",
    description: "Acolhimento e encaminhamento de 15 pessoas em situação de rua",
    category: "rescue",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    fullDescription: "Uma ação de resgate que transformou vidas através do amor e cuidado.",
    date: "2024-01-15",
  },
  {
    id: "2",
    title: "Culto de Gratidão",
    description: "Celebração com ex-assistidos que superaram vícios",
    category: "worship",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80",
    fullDescription: "Momento de louvor e testemunho de vidas transformadas.",
    date: "2024-02-10",
  },
  {
    id: "3",
    title: "Parceria com Igreja Local",
    description: "Nova parceria para ampliar atendimentos",
    category: "partnership",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    fullDescription: "Fortalecimento da rede de apoio através de novas parcerias.",
    date: "2024-03-05",
  },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "João Silva",
    text: "Minha vida foi completamente transformada. Hoje sou livre e tenho propósito.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "2",
    name: "Maria Santos",
    text: "Encontrei amor e esperança quando mais precisava. Gratidão eterna!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: "3",
    name: "Pedro Costa",
    text: "O resgate me deu uma segunda chance. Hoje ajudo outros a encontrarem o caminho.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Resgatando vidas com fé, amor e propósito"
        subtitle="Levando esperança a quem mais precisa através do amor de Cristo"
        showCTA={true}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-about-title">
              Quem Somos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-description">
              A Associação Resgatados para Resgatar é uma entidade cristã sem fins lucrativos 
              dedicada a resgatar pessoas em situação de rua e encaminhá-las para centros 
              terapêuticos, oferecendo esperança, dignidade e um novo começo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Amor", description: "Agimos com compaixão e empatia" },
              { icon: Users, title: "Comunidade", description: "Construímos pontes de solidariedade" },
              { icon: HandHeart, title: "Cuidado", description: "Acolhemos com dignidade" },
              { icon: Award, title: "Transformação", description: "Promovemos mudanças reais" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1" data-testid={`card-value-${item.title.toLowerCase()}`}>
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-projects-title">
              Últimos Trabalhos
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-projects-description">
              Conheça algumas das vidas que foram transformadas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1" data-testid={`card-project-${project.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Link href="/trabalhos">
                      <Button variant="outline" className="w-full" data-testid={`button-project-details-${project.id}`}>
                        Ver Detalhes
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/trabalhos">
              <Button size="lg" variant="outline" data-testid="button-all-projects">
                Ver Todos os Trabalhos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
              Depoimentos
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-testimonials-description">
              Histórias de transformação e esperança
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full" data-testid={`card-testimonial-${testimonial.id}`}>
                  <CardContent className="p-6 text-center">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                    )}
                    <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold text-gold" data-testid={`text-testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
