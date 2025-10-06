import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, imageUrl, showCTA = false }: HeroProps) {
  const defaultImage = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80";
  
  return (
    <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl || defaultImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="text-hero-title"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="text-hero-subtitle"
          >
            {subtitle}
          </motion.p>
        )}
        
        {showCTA && (
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/parceiros">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 min-w-[200px]"
                data-testid="button-hero-partner"
              >
                Seja um Parceiro
              </Button>
            </Link>
            <Link href="/contribuir">
              <Button
                size="lg"
                className="bg-gold text-primary hover:bg-gold/90 min-w-[200px]"
                data-testid="button-hero-donate"
              >
                Contribuir Agora
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
