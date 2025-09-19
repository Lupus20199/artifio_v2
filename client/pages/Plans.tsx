import { Check, X, Star, Zap, Shield, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PlanFeature[];
  highlighted?: boolean;
  buttonText: string;
  buttonLink: string;
}

const plans: Plan[] = [
  {
    name: "Basic",
    description: "Perfect pentru afaceri mici care încep să exploreze AI",
    price: "99",
    period: "lună",
    buttonText: "Alege Basic",
    buttonLink: "/register?plan=basic",
    features: [
      { name: "Analiză AI Visibility pentru 1 website", included: true },
      { name: "Raport lunar de performanță", included: true },
      { name: "Monitorizare 10 cuvinte cheie", included: true },
      { name: "Suport email", included: true },
      { name: "Optimizare automată", included: false },
      { name: "Analiză competitori", included: false },
      { name: "Rapoarte personalizate", included: false },
      { name: "Suport prioritar", included: false },
    ],
  },
  {
    name: "Pro",
    description:
      "Ideal pentru afaceri în creștere care vor rezultate superioare",
    price: "299",
    period: "lună",
    highlighted: true,
    buttonText: "Alege Pro",
    buttonLink: "/register?plan=pro",
    features: [
      { name: "Analiză AI Visibility pentru 5 website-uri", included: true },
      { name: "Rapoarte săptămânale detaliate", included: true },
      { name: "Monitorizare 50 cuvinte cheie", included: true },
      { name: "Optimizare automată", included: true },
      { name: "Analiză competitori (5 competitori)", included: true },
      { name: "Suport prioritar (email + telefon)", included: true },
      { name: "Dashboard personalizat", included: true },
      { name: "Consultanț�� 1:1 (2 ore/lună)", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "Soluția completă pentru companii mari cu cerințe complexe",
    price: "999",
    period: "lună",
    buttonText: "Contactează-ne",
    buttonLink: "/contact?plan=enterprise",
    features: [
      {
        name: "Analiză AI Visibility pentru website-uri nelimitate",
        included: true,
      },
      { name: "Rapoarte personalizate zilnice", included: true },
      { name: "Monitorizare cuvinte cheie nelimitate", included: true },
      { name: "Optimizare automată avansată", included: true },
      { name: "Analiză competitori nelimitată", included: true },
      { name: "Suport dedicat 24/7", included: true },
      { name: "Consultanță 1:1 (10 ore/lună)", included: true },
      { name: "Implementare personalizată", included: true },
    ],
  },
];

export default function Plans() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="plans" />

      {/* Hero Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Alege planul potrivit pentru
              <span className="text-primary block">afacerea ta</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Oricare ar fi mărimea afacerii tale, avem soluția perfectă pentru
              a-ți optimiza vizibilitatea în AI
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.highlighted
                    ? "border-primary shadow-2xl scale-105 bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Cel mai popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-card-foreground">
                      {plan.price}
                    </span>
                    <span className="text-lg text-muted-foreground ml-1">
                      lei
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    per {plan.period}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-card-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={plan.buttonLink}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Toate planurile includ o perioadă de probă gratuită de 14 zile
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                Anulare oricând
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-500" />
                Setup instant
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                Suport dedicat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Întrebări frecvente
              </h2>
              <p className="text-muted-foreground">
                Răspunsuri la întrebările cele mai comune despre planurile
                noastre
              </p>
            </div>

            <div className="space-y-4">
              <details className="bg-card border border-border rounded-lg">
                <summary className="p-6 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                  Pot schimba planul oricând?
                </summary>
                <div className="p-6 pt-0 text-sm text-muted-foreground">
                  Da, poți face upgrade sau downgrade la planul tău oricând.
                  Modificările se vor aplica imediat și vei fi facturat
                  proporțional.
                </div>
              </details>

              <details className="bg-card border border-border rounded-lg">
                <summary className="p-6 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                  Ce se întâmplă după perioada de probă?
                </summary>
                <div className="p-6 pt-0 text-sm text-muted-foreground">
                  După 14 zile de probă gratuită, vei fi facturat automat
                  conform planului ales. Poți anula oricând înainte de sfârșitul
                  perioadei de probă.
                </div>
              </details>

              <details className="bg-card border border-border rounded-lg">
                <summary className="p-6 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                  Oferiti reduceri pentru plăți anuale?
                </summary>
                <div className="p-6 pt-0 text-sm text-muted-foreground">
                  Da! Plătind anual economisești 20% față de plata lunară.
                  Contactează-ne pentru detalii complete.
                </div>
              </details>

              <details className="bg-card border border-border rounded-lg">
                <summary className="p-6 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                  Pot adăuga website-uri suplimentare la planul meu?
                </summary>
                <div className="p-6 pt-0 text-sm text-muted-foreground">
                  Absolut! Poți adăuga website-uri suplimentare la orice plan
                  contra cost. Pentru detalii despre prețuri, contactează echipa
                  noastră de vânzări.
                </div>
              </details>
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
