import {
  Search,
  Brain,
  TrendingUp,
  Zap,
  ChevronRight,
  CheckCircle,
  BarChart3,
  Shield,
  Rocket,
  Star,
  Globe,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="py-32 lg:py-40 min-h-screen flex items-center relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent"></div>

        {/* Animated Glow Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-secondary/25 to-primary/15 rounded-full blur-3xl animate-pulse opacity-25"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-2xl animate-pulse opacity-20"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8 relative z-10 drop-shadow-lg">
              <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Cum funcționează
              </span>
              <span className="text-primary block">
                Notch?
              </span>
            </h1>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="group">
                <div className="relative bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:border-primary/50 hover:-translate-y-2 overflow-hidden">
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/10 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Search className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        50+
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground group-hover:text-muted-foreground/90">
                      Modele AI
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/25 hover:border-secondary/50 hover:-translate-y-2 overflow-hidden">
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-primary/10 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        30s
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground group-hover:text-muted-foreground/90">
                      Analiză Rapidă
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/60 hover:-translate-y-2 overflow-hidden">
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-secondary/8 opacity-70 group-hover:opacity-95 transition-opacity duration-300"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/25 to-secondary/15 rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        300%
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground group-hover:text-muted-foreground/90">
                      Creștere Medie
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30 hover:border-secondary/60 hover:-translate-y-2 overflow-hidden">
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/12 via-transparent to-primary/8 opacity-70 group-hover:opacity-95 transition-opacity duration-300"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/25 to-primary/15 rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        98%
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground group-hover:text-muted-foreground/90">
                      Satisfacție Client
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/solutii"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Explorează soluțiile noastre
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Notch Works Section */}
      <section id="cum-functioneaza" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Cum Funcționează Notch?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              În doar trei pași simpli, îți optimizăm prezența în ecosystemul AI
              și te ajutăm să domini rezultatele
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur border border-border/50 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-3 text-center overflow-hidden">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary/50 transition-shadow duration-300">
                      <Search className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Analizăm Prezența Actuală
                  </h3>
                  <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                    Scanăm peste 50 de modele AI pentru a vedea cât de des apare
                    afacerea ta în răspunsurile generate pentru întreb��ri
                    relevante din industria ta.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur border border-border/50 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 hover:border-secondary/50 hover:-translate-y-3 text-center overflow-hidden">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-transparent to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-secondary/50 transition-shadow duration-300">
                      <Brain className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Optimizăm Strategia
                  </h3>
                  <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                    Creăm o strategie personalizată de optimizare AI, cu
                    recomandări specifice pentru conținut, structură și cuvinte
                    cheie AI-friendly.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur border border-border/50 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 hover:border-primary/60 hover:-translate-y-3 text-center overflow-hidden">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/6 via-transparent to-secondary/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/25 via-transparent to-secondary/15 rounded-2xl blur opacity-0 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div>
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary/60 transition-shadow duration-300">
                      <TrendingUp className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Monitorizăm Rezultatele
                  </h3>
                  <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                    Urmărim progresul în timp real și îți oferim rapoarte
                    detaliate despre creșterea vizibilității tale în căutările
                    AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              De Ce Să Alegi Notch?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferim cea mai avansată tehnologie de optimizare AI din România
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Analiză Avansată
              </h3>
              <p className="text-muted-foreground text-sm">
                Algoritmii noștri analizează peste 50 de modele AI pentru a-ți
                oferi cea mai completă imagine a vizibilității tale.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Rezultate Rapide
              </h3>
              <p className="text-muted-foreground text-sm">
                Obții primul raport de analiză în doar 30 de secunde și vezi
                îmbunătățiri în primele 7 zile.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Strategie Sigură
              </h3>
              <p className="text-muted-foreground text-sm">
                Folosim doar tehnici white-hat aprobate de marile companii AI
                pentru rezultate durabile.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Acoperire Globală
              </h3>
              <p className="text-muted-foreground text-sm">
                Optimizăm prezența ta în modele AI din întreaga lume, inclusiv
                ChatGPT, Claude, Bard și altele.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Suport Expert
              </h3>
              <p className="text-muted-foreground text-sm">
                Echipa noastră de specialiști AI îți oferă suport personalizat
                pentru fiecare etapă a procesului.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Automatizare Completă
              </h3>
              <p className="text-muted-foreground text-sm">
                Odată configurat, sistemul nostru lucrează automat pentru a-ți
                menține și îmbunătăți poziția în AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo/Screenshots Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Vezi Notch în Acțiune
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Demonstrații video și capturi de ecran cu rezultatele clienților
              noștri
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video Placeholder */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Video Demo Placeholder
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Demonstrație cu rezultate reale
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground">
                  Cum să crești vizibilitatea cu 300% în 30 zile
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Studiu de caz - Companie SaaS din București
                </p>
              </div>
            </div>

            {/* Screenshot Placeholder */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Dashboard Screenshot Placeholder
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Interfața de analiză AI
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground">
                  Dashboard-ul Notch în timp real
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Monitorizare 24/7 a performanței AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Peste 500 de afaceri din România și-au crescut vizibilitatea AI cu
              Notch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "În doar 2 săptămâni, compania noastră a început să apară în 8
                din 10 r��spunsuri AI pentru întrebări din domeniul nostru.
                Incredibil!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    Maria Popescu
                  </p>
                  <p className="text-sm text-muted-foreground">
                    CEO, TechStart Romania
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Notch ne-a ajutat să înțelegem cum funcționează AI-ul și să ne
                optimizăm conținutul. Rezultatele au fost spectaculoase."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    Alexandru Ionescu
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Marketing Director, eCommerce Plus
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "ROI-ul a fost evident din prima lună. Acum primim clienți care
                ne găsesc prin recomandările AI."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    Elena Marin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fondator, ConsultingPro
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-8">
              Încrederea companiilor de top din România
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-muted/50 px-6 py-3 rounded">TechStart</div>
              <div className="bg-muted/50 px-6 py-3 rounded">
                eCommerce Plus
              </div>
              <div className="bg-muted/50 px-6 py-3 rounded">ConsultingPro</div>
              <div className="bg-muted/50 px-6 py-3 rounded">DigitalFlow</div>
              <div className="bg-muted/50 px-6 py-3 rounded">InnovateRO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Începe Astăzi Optimizarea AI
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nu lăsa concurența să te depășească în era AI. Verifică gratuit
              vizibilitatea afacerii tale acum.
            </p>
            <Link
              to="/solutii/vizibilitate-ai"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Verifică vizibilitatea afacerii tale în AI
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <Link
                    to="/terms"
                    className="hover:text-foreground transition-colors"
                  >
                    Termeni și Condiții
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-foreground transition-colors"
                  >
                    Politica de Confidențialitate
                  </Link>
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
