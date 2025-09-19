import {
  Brain,
  Search,
  BarChart3,
  Star,
  Lock,
  ChevronRight,
  Sparkles,
  Zap,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Shield,
  Rocket,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

interface Tool {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  available: boolean;
  comingSoon?: boolean;
  color: string;
  bgColor: string;
}

const tools: Tool[] = [
  {
    id: 1,
    name: "Vizibilitate AI",
    description:
      "Analizează cât de des apare afacerea ta în răspunsurile modelelor AI și identifică oportunități de îmbunătățire.",
    icon: <Search className="w-6 h-6" />,
    available: true,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    name: "Concurență AI",
    description:
      "Compară vizibilitatea ta AI cu concurenții și descoperă strategii pentru a te diferenția pe piață.",
    icon: <BarChart3 className="w-6 h-6" />,
    available: false,
    comingSoon: true,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 3,
    name: "Review-uri AI",
    description:
      "Monitorizează și analizează cum sunt percepute produsele și serviciile tale în răspunsurile AI.",
    icon: <Star className="w-6 h-6" />,
    available: false,
    comingSoon: true,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    id: 4,
    name: "Monitor Performanță",
    description:
      "Urmărește în timp real performanța ta în căutările AI și primește alerte pentru schimbări importante.",
    icon: <TrendingUp className="w-6 h-6" />,
    available: false,
    comingSoon: true,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    id: 5,
    name: "Optimizare Conținut",
    description:
      "Generează și optimizează conținut pentru a avea mai multe șanse să fie referențiat de modelele AI.",
    icon: <Rocket className="w-6 h-6" />,
    available: false,
    comingSoon: true,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    id: 6,
    name: "Securitate AI",
    description:
      "Verifică și protejează-ți reputația online în ecositemul AI și monitorizează mențiunile negative.",
    icon: <Shield className="w-6 h-6" />,
    available: false,
    comingSoon: true,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
];

export default function Tools() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="solutions" />

      {/* Hero Section - Reduced padding */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Suite Completă de Instrumente AI
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
              Instrumente
              <span className="text-primary block">Notch</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Descoperă suite-ul nostru avansat de instrumente AI, conceput
              pentru a-ți optimiza vizibilitatea în căutările AI.
            </p>
          </div>

          {/* Search/Filter Bar - Smaller and more compact */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Caută instrumente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid - Reduced padding and improved cards */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.id}
                className={`group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
                  tool.available
                    ? "hover:border-primary/30 hover:-translate-y-1"
                    : "opacity-75"
                }`}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/2 to-transparent rounded-xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with icon and status */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        tool.available
                          ? `${tool.bgColor} ${tool.color} group-hover:scale-110`
                          : "bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      {tool.available ? (
                        tool.icon
                      ) : (
                        <Lock className="w-6 h-6" />
                      )}
                    </div>
                    {tool.comingSoon && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
                        În Curând
                      </span>
                    )}
                  </div>

                  {/* Title and description */}
                  <div className="mb-5">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  {/* Action button */}
                  {tool.available ? (
                    <a
                      href="/solutii/vizibilitate-ai"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                    >
                      <Zap className="w-4 h-4" />
                      Deschide
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="w-full bg-muted/50 text-muted-foreground px-4 py-2.5 rounded-lg text-sm font-medium text-center flex items-center justify-center gap-2 border border-muted">
                      <Lock className="w-4 h-4" />
                      În Curând
                    </div>
                  )}
                </div>

                {/* Hover overlay */}
                {tool.available && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredTools.length === 0 && (
            <div className="text-center py-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Nu am găsit instrumente
              </h3>
              <p className="text-muted-foreground">
                Încearcă să cauți cu un termen diferit sau verifică din nou mai
                târziu.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Coming Soon Preview - Reduced padding */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                În Dezvoltare
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Instrumente în Curând
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Lucrăm continuu la noi instrumente inovatoare pentru a-ți
              îmbunătăți prezența AI
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="font-medium text-card-foreground text-sm mb-1">
                Concurență
              </h3>
              <p className="text-xs text-muted-foreground">Analiză avansată</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="font-medium text-card-foreground text-sm mb-1">
                Review-uri
              </h3>
              <p className="text-xs text-muted-foreground">
                Sentiment analysis
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="font-medium text-card-foreground text-sm mb-1">
                Monitor
              </h3>
              <p className="text-xs text-muted-foreground">
                Real-time tracking
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-medium text-card-foreground text-sm mb-1">
                Securitate
              </h3>
              <p className="text-xs text-muted-foreground">Brand protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as homepage */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd06f9482d48b40d59259ba9c3de99335%2F54accc928a0d4b658b78f6cb3cfd354e?format=webp&width=800"
                  alt="Notch Logo"
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Liderul în optimizarea vizibilității AI pentru afaceri din
                România.
              </p>
              <div className="text-sm text-muted-foreground">
                © 2025 Notch. Toate drepturile rezervate.
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Servicii</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Analiză AI
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Optimizare Conținut
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Monitorizare
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Consultanță
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/terms"
                    className="hover:text-foreground transition-colors"
                  >
                    Termeni și Condiții
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-foreground transition-colors"
                  >
                    Politica de Confidențialitate
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:contact@notch.ro"
                    className="hover:text-foreground transition-colors"
                  >
                    contact@notch.ro
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:+40721234567"
                    className="hover:text-foreground transition-colors"
                  >
                    +40 721 234 567
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>București, România</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
