import {
  Activity,
  ExternalLink,
  Loader2,
  Globe,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

interface FormData {
  website: string;
}

interface AnalysisResult {
  website: string;
  performanceScore: number;
  accessibilityScore: number;
  seoScore: number;
  bestPracticesScore: number;
  recommendations: string[];
}

export default function PerformanceTool() {
  const [formData, setFormData] = useState<FormData>({
    website: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.website.trim()) return;

    setIsLoading(true);
    setError("");
    setResults(null);

    // Simulate API call with potential error
    setTimeout(() => {
      const shouldError = Math.random() < 0.15; // 15% chance of error

      if (shouldError) {
        setError(
          "A apărut o eroare. Te rugăm să verifici URL-ul și încearcă din nou.",
        );
        setIsLoading(false);
        return;
      }

      setResults({
        website: formData.website,
        performanceScore: Math.floor(Math.random() * 40) + 60,
        accessibilityScore: Math.floor(Math.random() * 30) + 70,
        seoScore: Math.floor(Math.random() * 35) + 65,
        bestPracticesScore: Math.floor(Math.random() * 25) + 75,
        recommendations: [
          "Optimizează imaginile pentru încărcare mai rapidă",
          "Îmbunătățește contrastul culorilor pentru accesibilitate",
          "Adaugă atribute alt la toate imaginile",
          "Reduce timpul de încărcare JavaScript",
          "Implementează lazy loading pentru imagini",
          "Optimizează structura headingurilor (H1, H2, H3)",
          "Adaugă meta descripții pentru toate paginile",
        ],
      });
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="solutions" />

      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 relative">
              <Activity className="w-10 h-10 text-green-500" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Performanță & Accesibilitate Site
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Evaluează viteza și accesibilitatea site-ului tău pentru o
              experiență optimă.
              <span className="text-green-500 font-medium block mt-2">
                Rezultate în 30 de secunde.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Analysis Form */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 mb-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Field */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-card-foreground mb-3"
                >
                  Introdu URL-ul website-ului
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="url"
                    id="website"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        website: e.target.value,
                      }))
                    }
                    placeholder="https://exemplu.ro"
                    className="w-full pl-11 pr-4 py-4 border border-input rounded-xl text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !formData.website.trim()}
                className="w-full bg-green-500 text-white hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Se analizează...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Începe testul
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 mb-8 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-destructive mb-1">Eroare</h3>
                <p className="text-destructive/80 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Success Message */}
          {results && !error && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-8 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-700 mb-1">
                  Analiză completă!
                </h3>
                <p className="text-green-600 text-sm">
                  Analiza de performanță a fost finalizată cu succes. Vezi
                  rezultatele mai jos!
                </p>
              </div>
            </div>
          )}

          {/* Results Section */}
          {results && (
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 mb-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-2">
                  Rezultatele Analizei de Performanță
                </h2>
                <p className="text-muted-foreground">
                  Website analizat:
                  <span className="font-medium text-foreground ml-1">
                    {results.website}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-500/5 rounded-xl border border-green-500/10">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    {results.performanceScore}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Performanță
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    {results.accessibilityScore}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Accesibilitate
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-500/5 rounded-xl border border-purple-500/10">
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    {results.seoScore}
                  </div>
                  <div className="text-sm text-muted-foreground">SEO</div>
                </div>
                <div className="text-center p-4 bg-amber-500/5 rounded-xl border border-amber-500/10">
                  <div className="text-3xl font-bold text-amber-500 mb-2">
                    {results.bestPracticesScore}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Best Practices
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  Recomandări pentru optimizare:
                </h3>
                <div className="space-y-3">
                  {results.recommendations.map((rec: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border border-border/30"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {rec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/30">
                <button className="flex-1 bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02]">
                  Descarcă Raport Complet
                </button>
                <button
                  onClick={() => {
                    setResults(null);
                    setFormData({ website: "" });
                    setError("");
                  }}
                  className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-xl font-medium transition-all duration-200"
                >
                  Test Nou
                </button>
              </div>
            </div>
          )}

          {/* Instructions */}
          {!results && !isLoading && (
            <div className="bg-muted/20 rounded-xl p-6 lg:p-8 border border-border/30">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Ce analizăm pentru site-ul tău?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    ⚡
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Performanță & Viteză
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Evaluăm viteza de încărcare, optimizarea imaginilor și
                    performanța generală
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    ♿
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Accesibilitate Web
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Verificăm conformitatea cu standardele WCAG pentru toți
                    utilizatorii
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    🔍
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Optimizare SEO
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Analizăm meta tag-urile, structura și optimizarea pentru
                    motoare de căutare
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    ✅
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Best Practices
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Verificăm securitatea, protocolurile HTTPS și standardele
                    web moderne
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

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
