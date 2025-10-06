import { useState } from "react";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import type { Project } from "@shared/schema";

const projects: Project[] = [
  {
    id: "1",
    title: "Resgate na Praça Central",
    description: "Acolhimento e encaminhamento de 15 pessoas em situação de rua",
    category: "rescue",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    fullDescription: "Uma ação coordenada que resultou no resgate e encaminhamento de 15 pessoas em situação de rua para centros terapêuticos parceiros. A operação contou com apoio de voluntários, profissionais de saúde e assistentes sociais, oferecendo não apenas abrigo, mas um caminho completo de restauração.",
    date: "15/01/2024",
  },
  {
    id: "2",
    title: "Culto de Gratidão",
    description: "Celebração com ex-assistidos que superaram vícios",
    category: "worship",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80",
    fullDescription: "Momento emocionante de louvor e testemunho onde ex-assistidos compartilharam suas histórias de superação. O culto reuniu mais de 100 pessoas e celebrou a transformação de vidas através da fé e do amor.",
    date: "10/02/2024",
  },
  {
    id: "3",
    title: "Parceria com Igreja Local",
    description: "Nova parceria para ampliar atendimentos",
    category: "partnership",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    fullDescription: "Estabelecimento de parceria estratégica com igreja local, ampliando nossa capacidade de atendimento e fortalecendo a rede de apoio. A parceria inclui doações mensais, voluntários e espaço para atividades.",
    date: "05/03/2024",
  },
  {
    id: "4",
    title: "Campanha de Inverno",
    description: "Distribuição de cobertores e roupas quentes",
    category: "community",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    fullDescription: "Campanha solidária que distribuiu mais de 200 cobertores, agasalhos e kits de higiene para pessoas em situação de rua durante o inverno. A ação contou com doações da comunidade e voluntários dedicados.",
    date: "20/06/2024",
  },
  {
    id: "5",
    title: "Workshop de Capacitação",
    description: "Curso profissionalizante para ressocialização",
    category: "community",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    fullDescription: "Workshop gratuito de capacitação profissional oferecido a pessoas em processo de ressocialização, focando em habilidades práticas e preparação para o mercado de trabalho.",
    date: "15/04/2024",
  },
  {
    id: "6",
    title: "Resgate Emergencial Noturno",
    description: "Operação de resgate durante madrugada fria",
    category: "rescue",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    fullDescription: "Operação emergencial realizada durante uma madrugada especialmente fria, resultando no resgate de 8 pessoas e encaminhamento imediato para abrigos e centros de acolhimento.",
    date: "28/07/2024",
  },
];

const categories = [
  { id: "all", label: "Todos", value: "all" },
  { id: "rescue", label: "Resgates", value: "rescue" },
  { id: "worship", label: "Cultos", value: "worship" },
  { id: "partnership", label: "Parcerias", value: "partnership" },
  { id: "community", label: "Ações Comunitárias", value: "community" },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Hero
        title="Trabalhos Realizados"
        subtitle="Acompanhe nossas ações de resgate e transformação"
        imageUrl="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={selectedCategory === category.value ? "bg-gold text-primary hover:bg-gold/90" : ""}
                  data-testid={`button-filter-${category.id}`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col" data-testid={`card-project-${project.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${project.id}`}>
                        {categories.find((c) => c.value === project.category)?.label}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-xl mb-2" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setSelectedProject(project)}
                        data-testid={`button-view-${project.id}`}
                      >
                        Ver Mais
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" data-testid="dialog-project-details">
          <DialogHeader>
            <DialogTitle className="text-2xl" data-testid="text-modal-title">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="mb-4">
                <Badge variant="secondary">
                  {categories.find((c) => c.value === selectedProject.category)?.label}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <Calendar className="w-4 h-4" />
                <span>{selectedProject.date}</span>
              </div>
              <p className="text-lg leading-relaxed" data-testid="text-modal-description">
                {selectedProject.fullDescription}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
