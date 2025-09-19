import {
  Mail,
  Phone,
  MapPin,
  Target,
  Users,
  Zap,
  Heart,
  Shield,
  Globe,
  Award,
  Lightbulb,
  TrendingUp,
  Star,
  Brain,
  Rocket,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function About() {
  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Inovația AI",
      description:
        "Suntem în permanență la frontera tehnologiei AI, dezvoltând soluții care definesc viitorul optimizării digitale.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparență Totală",
      description:
        "Oferim vizibilitate completă asupra metodelor noastre și rezultatelor, fără cutii negre sau promisiuni false.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Centrat pe Client",
      description:
        "Succesul clientului este măsura noastră de performanță. Construim relații pe termen lung, nu doar proiecte.",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rezultate Rapide",
      description:
        "Timp de implementare scurt, rezultate măsurabile în primele săptămâni, îmbunătățiri continue.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Clienți Activi",
      icon: <Users className="w-5 h-5" />,
    },
    {
      number: "300%",
      label: "Creștere Medie Vizibilitate",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      number: "50+",
      label: "Modele AI Monitorizate",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      number: "98%",
      label: "Satisfacție Clienți",
      icon: <Star className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="about" />

      {/* Hero Section */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-primary rounded-full animate-bounce"></div>
        <div
          className="absolute bottom-32 left-1/4 w-3 h-3 bg-amber-500 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-2 h-2 bg-secondary rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-amber-500/10 border border-primary/20 rounded-full px-8 py-4 mb-12 shadow-lg backdrop-blur-sm">
              <Target className="w-6 h-6 text-primary" />
              <span className="text-base font-semibold bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
                Liderii Optimizării AI din România
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Despre
              </span>
              <span className="block bg-gradient-to-r from-primary via-primary to-amber-500 bg-clip-text text-transparent">
                Notch
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-16 max-w-4xl mx-auto">
              Suntem echipa care{" "}
              <span className="text-primary font-semibold">revoluționează</span>{" "}
              modul în care afacerile din România își optimizează prezența în
              ecosistemul inteligenței artificiale.
            </p>

            {/* Enhanced Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-2">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-amber-500/10 border border-primary/20 rounded-full px-6 py-3 mb-8 shadow-lg backdrop-blur-sm">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <span className="text-base font-semibold bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
                    Misiunea Noastră
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Democratizăm Accesul
                  </span>
                  <span className="block bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
                    la Optimizarea AI
                  </span>
                </h2>

                <div className="space-y-6 mb-10">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Credem că fiecare afacere, indiferent de mărime, merită să
                    fie găsită și recomandată de modelele de inteligență
                    artificială. Misiunea noastră este să facem optimizarea AI
                    <span className="text-primary font-semibold">
                      {" "}
                      accesibilă, transparentă și eficientă
                    </span>{" "}
                    pentru toate companiile din România.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nu suntem doar o platformă tehnologică - suntem{" "}
                    <span className="text-primary font-semibold">
                      partenerii voștri strategici
                    </span>{" "}
                    în era inteligenței artificiale, oferind instrumente și
                    expertiză pentru a vă poziționa în vârful rezultatelor AI.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/instrumente"
                    className="group bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-3"
                  >
                    Explorează Instrumentele
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </a>
                  <a
                    href="/contact"
                    className="group bg-card/80 backdrop-blur border border-border hover:bg-accent text-card-foreground px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center gap-3"
                  >
                    Vorbește cu Echipa
                    <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-gradient-to-br from-primary/10 via-card/50 to-amber-500/10 backdrop-blur border border-border/50 rounded-3xl p-12 shadow-2xl">
                  {/* Floating elements inside */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>

                  <div className="text-center relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-amber-500/30 rounded-full flex items-center justify-center">
                        <Target className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-6">
                      <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
                        Viziunea Noastră
                      </span>
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Să devenim prima platformă de optimizare AI din Europa de
                      Est, stabilind standardele industriei pentru{" "}
                      <span className="text-primary font-semibold">
                        transparență și rezultate
                      </span>
                      .
                    </p>

                    {/* Vision stats */}
                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          2025
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Target Europa de Est
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          10k+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Companii vizate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Valorile Noastre
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Principiile Care Ne Ghidează
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aceste valori fundamentale definesc modul în care abord��m fiecare
              proiect și construim relații durabile cu clienții noștri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="bg-card border border-border rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl ${value.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className={value.color}>{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Floating decoration elements */}
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-amber-600">
                Clienții Noștri Mulțumiți
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ce Spun Clienții
              <span className="text-primary block">Despre Notch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Peste 500 de afaceri din România și-au transformat prezența AI cu
              ajutorul nostru. Descoperă poveștile lor de succes.
            </p>
          </div>

          {/* Featured Review */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative bg-gradient-to-br from-primary/5 to-amber-500/5 border border-primary/20 rounded-3xl p-12 text-center">
              <div className="absolute top-8 left-8 text-primary/20">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-amber-500 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-2xl sm:text-3xl font-semibold text-foreground leading-relaxed mb-8">
                "În doar 3 săptămâni am început să appar în 9 din 10 răspunsuri
                ChatGPT pentru domeniul nostru. ROI-ul a fost de 400% în prima
                lună!"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">MP</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground text-lg">
                    Maria Popescu
                  </p>
                  <p className="text-primary font-medium">
                    CEO, TechStart Romania
                  </p>
                  <p className="text-sm text-muted-foreground">
                    SaaS • București
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "Notch ne-a ajutat să înțelegem exact cum să ne optimizăm
                  conținutul pentru AI. Acum suntem în top 3 recomandări pentru
                  majoritatea cuvintelor cheie din industrie."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="font-bold text-blue-600">AI</span>
                  </div>
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
            </div>

            <div className="group">
              <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "Incredibil! Clienții ne găsesc acum prin recomandările AI. Am
                  crescut traficul organic cu 250% în doar 2 luni de utilizare
                  Notch."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    <span className="font-bold text-green-600">EM</span>
                  </div>
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

            <div className="group">
              <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "Platforma este incredibil de ușor de folosit și rezultatele
                  sunt măsurabile. Suportul în română este fantastic - se simt
                  ca și parteneri, nu doar furnizori."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <span className="font-bold text-purple-600">RG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      Radu Georgescu
                    </p>
                    <p className="text-sm text-muted-foreground">
                      CTO, DigitalFlow
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "Am încercat alte soluții, dar Notch este cu ani-lumină în
                  față. Transparența și rezultatele concrete m-au convins să
                  continui colaborarea."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                    <span className="font-bold text-amber-600">SP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      Simona Popa
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Head of Growth, InnovateRO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "Rezultatele vorbesc de la sine. În 6 luni am devenit liderul
                  de piață în recomandările AI pentru domeniul nostru.
                  Investiția s-a întors de 10 ori."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center">
                    <span className="font-bold text-red-600">CD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      Cristian Dumitrescu
                    </p>
                    <p className="text-sm text-muted-foreground">
                      CEO, MediaTech Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "Ca startup, era crucial să fim găsiți de AI-uri. Notch ne-a
                  dat credibilitatea și vizibilitatea de care aveam nevoie
                  pentru a concura cu marii jucători."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                    <span className="font-bold text-teal-600">LV</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      Laura Vasile
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Co-founder, StartupHub
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 bg-card border border-border rounded-2xl px-12 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">
                  4.9/5
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  Rating mediu
                </div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Review-uri pozitive
                </div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">
                  95%
                </div>
                <div className="text-sm text-muted-foreground">
                  Recomandă Notch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Notch Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                De Ce Să Alegeți Notch?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nu suntem doar o altă platformă de marketing. Suntem pionieri în
                optimizarea AI cu o abordare unică și rezultate demonstrate.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Tehnologie Proprietară
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Algoritmi avansați dezvoltați intern pentru analiză AI, cu
                      acuratețe de peste 95% în predicțiile de vizibilitate.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Metodologii White-Hat
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Folosim exclusiv tehnici aprobate de marile companii AI
                      pentru rezultate durabile și etice.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-6">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Acoperire Globală AI
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Monitorizăm și optimizăm pentru peste 50 de modele AI din
                      întreaga lume, inclusiv cele mai noi lansări.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-xl p-6">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                      <Rocket className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Rezultate în Record
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Primul raport în 30 secunde, îmbunătățiri vizibile în 7
                      zile, rezultate complete în 30 zile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Garanția Notch
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Dacă nu vedeți îmbunătățiri în vizibilitatea AI în primele
                    30 de zile, vă returnăm banii integral.
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Analiză gratuită inițială</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Suport 24/7 în română</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Rapoarte săptămânale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-amber-500/5 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-amber-500/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-primary rounded-full animate-bounce"></div>
        <div
          className="absolute bottom-20 right-1/4 w-3 h-3 bg-amber-500 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-amber-500/10 border border-primary/20 rounded-full px-8 py-4 mb-12 shadow-lg backdrop-blur-sm">
              <Rocket className="w-6 h-6 text-primary" />
              <span className="text-base font-semibold bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
                Alătură-te Liderilor AI
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Gata să Începi
              </span>
              <span className="block bg-gradient-to-r from-primary via-primary to-amber-500 bg-clip-text text-transparent">
                Transformarea AI?
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Peste{" "}
              <span className="text-primary font-bold">500 de companii</span>{" "}
              din România și-au transformat deja prezența AI cu Notch.
              <br className="hidden sm:block" />
              <span className="text-primary font-semibold">
                Când vă alăturați și dumneavoastră?
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="/instrumente"
                className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-3"
              >
                Începeți Acum - Gratuit
                <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="group bg-card/80 backdrop-blur border-2 border-border hover:border-primary/30 hover:bg-accent text-card-foreground px-10 py-5 rounded-2xl text-xl font-bold transition-all hover:shadow-xl inline-flex items-center justify-center gap-3"
              >
                Vorbește cu Echipa
                <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Success indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                <div className="text-3xl font-bold text-primary mb-2">
                  30 sec
                </div>
                <div className="text-sm text-muted-foreground">
                  Primul raport gratuit
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                <div className="text-3xl font-bold text-primary mb-2">
                  7 zile
                </div>
                <div className="text-sm text-muted-foreground">
                  Primele îmbunătățiri
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">
                  Garanție de satisfacție
                </div>
              </div>
            </div>
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
