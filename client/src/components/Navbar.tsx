import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/sobre", label: "Sobre Nós" },
    { path: "/trabalhos", label: "Trabalhos" },
    { path: "/parceiros", label: "Parceiros" },
    { path: "/contribuir", label: "Contribuir" },
    { path: "/contato", label: "Contato" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all">
            <Cross className="w-8 h-8 text-gold" data-testid="icon-logo" />
            <span className="font-bold text-lg hidden sm:block" data-testid="text-logo">
              Resgatados para Resgatar
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`relative ${
                    location === item.path
                      ? "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-gold"
                      : ""
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-border">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    location === item.path ? "bg-primary-foreground/10" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
