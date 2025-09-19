import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { href: "/", label: "Acasă", key: "home" },
    { href: "/solutii", label: "Soluții", key: "solutions" },
    { href: "/about", label: "Despre Noi", key: "about" },
    { href: "/contact", label: "Contact", key: "contact" },
    { href: "/planuri", label: "Planuri", key: "plans" },
  ];

  const isActivePage = (pageKey: string) => currentPage === pageKey;

  const displayName = user?.displayName || user?.email?.split("@")[0] || "";

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd06f9482d48b40d59259ba9c3de99335%2F54accc928a0d4b658b78f6cb3cfd354e?format=webp&width=800"
                alt="Notch Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActivePage(item.key)
                    ? "text-primary font-semibold hover:text-primary/80"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {!user ? (
              <Link
                to="/login"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 hover:scale-105 cursor-pointer"
              >
                Conectare
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="px-3 py-2 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center uppercase">
                        {displayName.charAt(0)}
                      </div>
                      <span className="text-sm font-medium">{displayName}</span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Cont</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/settings")}>Setări</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/despre-notch")}>Despre Notch</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => import("@/lib/auth").then(m => m.logout())}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Deschide meniul principal</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 cursor-pointer ${
                  isActivePage(item.key)
                    ? "text-primary font-semibold hover:bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {!user ? (
              <Link
                to="/login"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 mt-4 cursor-pointer"
              >
                Conectare
              </Link>
            ) : (
              <div className="mt-4 space-y-2">
                <div className="px-3 py-2 text-sm text-muted-foreground">Conectat ca <span className="text-foreground font-medium">{displayName}</span></div>
                <Link
                  to="/settings"
                  className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-muted/50"
                >
                  Setări
                </Link>
                <button
                  onClick={() => import("@/lib/auth").then(m => m.logout())}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-muted/50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
