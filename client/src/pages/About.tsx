import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Target, Eye, Heart } from "lucide-react";
import type { TeamMember } from "@shared/schema";

const team: TeamMember[] = [
  {
    id: "1",
    name: "Pastor João Santos",
    role: "Diretor Presidente",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: "2",
    name: "Maria Oliveira",
    role: "Coordenadora de Resgate",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: "3",
    name: "Carlos Silva",
    role: "Assistente Social",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: "4",
    name: "Ana Costa",
    role: "Psicóloga Voluntária",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Sobre Nós"
        subtitle="Conheça nossa história, missão e valores"
        imageUrl="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1600&q=80"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="text-history-title">
              Nossa História
            </h2>
            <p className="text-lg text-muted-foreground mb-4" data-testid="text-history-content">
              Fundada em 2020 em Garopaba-SC, a Associação Resgatados para Resgatar nasceu do 
              desejo de levar esperança e transformação para pessoas em situação de vulnerabilidade. 
              Nossa jornada começou com um grupo de voluntários comprometidos em fazer a diferença 
              na vida de quem mais precisa.
            </p>
            <p className="text-lg text-muted-foreground" data-testid="text-history-content-2">
              Ao longo dos anos, já resgatamos e encaminhamos centenas de pessoas para centros 
              terapêuticos, oferecendo não apenas abrigo, mas um caminho completo de restauração 
              física, emocional e espiritual.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full" data-testid="card-mission">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-gold mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Missão</h3>
                  <p className="text-muted-foreground">
                    Resgatar pessoas em situação de rua e vulnerabilidade, oferecendo acolhimento, 
                    amor e encaminhamento para centros terapêuticos, promovendo restauração integral.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full" data-testid="card-vision">
                <CardContent className="p-8">
                  <Eye className="w-12 h-12 text-gold mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser referência em resgate e restauração de vidas, expandindo nossa atuação 
                    para alcançar cada vez mais pessoas que necessitam de esperança e recomeço.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full" data-testid="card-values">
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 text-gold mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Valores</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Amor incondicional</li>
                    <li>• Fé em Cristo</li>
                    <li>• Dignidade humana</li>
                    <li>• Transparência</li>
                    <li>• Compromisso social</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-team-title">
              Nossa Equipe
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-team-description">
              Pessoas comprometidas com a transformação de vidas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1" data-testid={`card-team-${member.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-1" data-testid={`text-team-name-${member.id}`}>
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="text-statute-title">
              Estatuto da Associação
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-statute-description">
              Conheça nosso estatuto e documentação oficial
            </p>
            <Button size="lg" variant="outline" data-testid="button-download-statute">
              <FileText className="w-5 h-5 mr-2" />
              Baixar Estatuto (PDF)
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
