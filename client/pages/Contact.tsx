import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Users,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Calendar,
  Headphones,
  Globe,
  Zap,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) newErrors.email = "Email-ul este obligatoriu";
    if (!formData.message) newErrors.message = "Mesajul este obligatoriu";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Process form submission
      console.log("Contact form submitted:", formData);
      // Reset form
      setFormData({
        email: "",
        message: "",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Pentru întrebări generale și suport",
      contact: "contact@notch.ro",
      action: "mailto:contact@notch.ro",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      description: "Luni-Vineri 09:00-18:00",
      contact: "+40 721 234 567",
      action: "tel:+40721234567",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Programare Demo",
      description: "Demonstrație personalizată 30 min",
      contact: "Programează acum",
      action: "#",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Suport Tehnic",
      description: "Asistență specializată 24/7",
      contact: "support@notch.ro",
      action: "mailto:support@notch.ro",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/company/notch-ro",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/notch_ro",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com/notch.ro",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/notch.ro",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="contact" />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Să Vorbim Despre Proiectul Tău
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Contactează
              <span className="text-primary block">Echipa Notch</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              Suntem aici să te ajutăm să îți optimizezi prezența AI. Ia
              legătura cu noi pentru consultanță gratuită, demonstra��ii live
              sau întrebări despre serviciile noastre.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <div className="text-2xl font-bold text-foreground">
                    30 sec
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Timp mediu de răspuns
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Suport disponibil
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <div className="text-2xl font-bold text-foreground">
                    2 Orașe
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Birouri în România
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Modalități de Contact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alege modalitatea care ți se potrivește cel mai bine. Indiferent
              de canalul ales, vei primi răspuns rapid de la echipa noastră de
              experți.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="group bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 ${method.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className={method.color}>{method.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {method.contact}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Trimite-ne un Mesaj
                  </h2>
                  <p className="text-muted-foreground">
                    Completează formularul și vei primi răspuns în maximum 2 ore
                    în timpul programului de lucru sau în prima zi lucrătoare.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 shadow-lg">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ion@compania.ro"
                        className={`w-full px-6 py-4 border rounded-xl bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm ${
                          errors.email
                            ? "border-destructive"
                            : "border-border/50"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Mesaj *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descrie-ne în detaliu cum te putem ajuta cu optimizarea AI..."
                        className={`w-full px-6 py-4 border rounded-xl bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical shadow-sm ${
                          errors.message
                            ? "border-destructive"
                            : "border-border/50"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      Trimite Mesajul
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Schedule a Call */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Programează un Call
                  </h3>
                  <div className="bg-gradient-to-br from-primary/5 to-amber-500/5 border border-primary/20 rounded-2xl p-8">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-10 h-10 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        Vorbește Direct cu Echipa
                      </h4>
                      <p className="text-muted-foreground mb-6">
                        Programează o consultație gratuită de 30 minute cu
                        specialiștii noștri AI. Discutăm despre obiectivele tale
                        și cum te putem ajuta.
                      </p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-card-foreground">
                            Consultație 1-on-1
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Personalizată pentru business-ul tău
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <Clock className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-card-foreground">
                            30 minute gratuit
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Fără obligații sau costuri ascunse
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <Zap className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-card-foreground">
                            Analiză live
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Verificăm site-ul tău în timp real
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-3">
                        <Calendar className="w-5 h-5" />
                        Programează Call Gratuit
                      </button>

                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          Sau sună direct:
                        </p>
                        <a
                          href="tel:+40721234567"
                          className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          +40 721 234 567
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">
                          Luni-Vineri 09:00-18:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-width sections: Urmărește and Promisiunea Notch */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Social Media - Urmărește */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Urmărește
                </h3>
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <p className="text-muted-foreground mb-6">
                    Rămâi la curent cu ultimele noutăți din lumea AI și
                    optimizărilor digitale.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 bg-muted/50 hover:bg-muted px-4 py-3 rounded-lg transition-all text-muted-foreground ${social.color}`}
                      >
                        {social.icon}
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Response Time Promise - Promisiunea Notch */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Promisiunea Notch
                </h3>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-3">
                        Angajamentul Nostru
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>
                            Răspuns în maximum 2 ore în timpul programului
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>Consultație gratuită de 30 minute</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>Analiză preliminară fără obligații</span>
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

      {/* FAQ Contact Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Întrebări Frecvente
              </h2>
              <p className="text-lg text-muted-foreground">
                Răspunsuri rapide la cele mai comune întrebări despre serviciile
                noastre.
              </p>
            </div>

            <div className="space-y-4">
              <details className="bg-card border border-border rounded-lg">
                <summary className="p-6 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                  Cât durează să văd primele rezultate?
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  Primul raport de analiză îl primiți în 30 de secunde.
                  Îmbunătățirile în vizibilitatea AI sunt vizibile în 7-14 zile,
                  iar rezultatele complete în 30 zile.
                </div>
              </details>

              <details className="bg-card border border-border rounded-lg">
                <summary className="p-6 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                  Oferiți garanție pentru rezultate?
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  Da, oferim garanție de îmbunătățire a vizibilității AI în 30
                  zile sau vă returnăm banii integral. Aceasta se aplică doar
                  pentru planurile premium.
                </div>
              </details>

              <details className="bg-card border border-border rounded-lg">
                <summary className="p-6 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                  Pot programa o demonstra��ie înainte să mă decid?
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  Absolut! Oferim demonstrații gratuite de 30 minute unde vă
                  arătăm cum funcționează platforma și analizăm gratuit site-ul
                  dumneavoastră.
                </div>
              </details>

              <details className="bg-card border border-border rounded-lg">
                <summary className="p-6 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                  Aveți suport în română?
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  Da, întreaga echipă de suport vorbește română nativ. Oferim
                  suport 24/7 prin email, chat și telefon în timpul programului
                  de lucru.
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
