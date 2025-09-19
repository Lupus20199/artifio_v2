import {
  Search,
  ExternalLink,
  Loader2,
  Building2,
  Globe,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Zap,
  ArrowRight,
  Info,
  X,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

type InputType = "url" | "business";

interface FormData {
  inputValue: string;
  inputType: InputType;
}

interface AnalysisResult {
  inputValue: string;
  inputType: InputType;
  score: number;
  visibility: number;
  recommendations: string[];
}

export default function ToolA() {
  const [formData, setFormData] = useState<FormData>({
    inputValue: "",
    inputType: "url",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputTypeToggle = (type: InputType) => {
    setFormData((prev) => ({
      ...prev,
      inputType: type,
      inputValue: "", // Clear the input when switching
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.inputValue.trim()) return;

    setIsLoading(true);
    setError("");
    setResults(null);

    // Simulate API call with potential error
    setTimeout(() => {
      const shouldError = Math.random() < 0.15; // 15% chance of error

      if (shouldError) {
        setError(
          "A apărut o eroare. Te rugăm să verifici datele introduse și încearcă din nou.",
        );
        setIsLoading(false);
        return;
      }

      setResults({
        inputValue: formData.inputValue,
        inputType: formData.inputType,
        score: Math.floor(Math.random() * 100),
        visibility: Math.floor(Math.random() * 50) + 10,
        recommendations: [
          "Optimizează meta descrierea pentru cuvinte cheie AI",
          "Adaugă schema markup pentru produse",
          "Îmbunătățește structura headingurilor",
          "Creează conținut FAQ optimizat pentru AI",
          "Adaugă informații de contact structurate",
        ],
      });
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="solutions" />

      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 relative">
              <Search className="w-10 h-10 text-primary" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              AI Visibility — Notch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Analizează vizibilitatea business-ului tău în ecosistemul AI.
              <span className="text-primary font-medium block mt-2">
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
              {/* Toggle Buttons */}
              <div className="flex justify-center mb-6">
                <div className="bg-muted/50 p-1 rounded-xl border">
                  <div className="flex">
                    <button
                      type="button"
                      onClick={() => handleInputTypeToggle("url")}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        formData.inputType === "url"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Globe className="w-4 h-4 inline mr-2" />
                      URL Website
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputTypeToggle("business")}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        formData.inputType === "business"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Building2 className="w-4 h-4 inline mr-2" />
                      Numele Business-ului
                    </button>
                  </div>
                </div>
              </div>

              {/* Input Field */}
              <div>
                <label
                  htmlFor="inputValue"
                  className="block text-sm font-medium text-card-foreground mb-3"
                >
                  {formData.inputType === "url"
                    ? "Introdu URL-ul website-ului"
                    : "Introdu numele business-ului"}
                </label>
                <div className="relative">
                  {formData.inputType === "url" ? (
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  )}
                  <input
                    type={formData.inputType === "url" ? "url" : "text"}
                    id="inputValue"
                    value={formData.inputValue}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        inputValue: e.target.value,
                      }))
                    }
                    placeholder={
                      formData.inputType === "url"
                        ? "https://exemplu.ro"
                        : "Ex: Restaurant Central, SoftTech SRL"
                    }
                    className="w-full pl-11 pr-4 py-4 border border-input rounded-xl text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !formData.inputValue.trim()}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Se analizează...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Începe Analiza AI
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
                  Analiza ta AI a fost finalizată cu succes. Vezi rezultatele
                  mai jos!
                </p>
              </div>
            </div>
          )}

          {/* Results Section */}
          {results && (
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 mb-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-2">
                  Rezultatele Analizei AI
                </h2>
                <p className="text-muted-foreground">
                  {formData.inputType === "url"
                    ? "Website analizat"
                    : "Business analizat"}
                  :
                  <span className="font-medium text-foreground ml-1">
                    {results.inputValue}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {results.score}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Vizibilitate AI
                  </div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {results.visibility}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    De câte ori ai apărut
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
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {rec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/30">
                <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02]">
                  Descarcă Raport Complet
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-muted text-muted-foreground hover:bg-muted/80 px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  Algoritm
                </button>
                <button
                  onClick={() => {
                    setResults(null);
                    setFormData({ inputValue: "", inputType: "url" });
                    setError("");
                  }}
                  className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-xl font-medium transition-all duration-200"
                >
                  Analiză Nouă
                </button>
              </div>
            </div>
          )}

          {/* Instructions */}
          {!results && !isLoading && (
            <div className="bg-muted/20 rounded-xl p-6 lg:p-8 border border-border/30">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Cum funcționează analiza AI?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    1
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Alege tipul de analiză
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Selectează între analiza unui URL sau numele business-ului
                    tău
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    2
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Procesare AI avansată
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Analizăm 50+ modele AI pentru prezența și vizibilitatea ta
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    3
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Raport personalizat
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Primești scor detaliat și recomandări specifice
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

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
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Termeni și Condiții
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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

      {/* Algorithm Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                <Info className="w-6 h-6 text-primary" />
                Pe ce te putem ajuta
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Algoritmul nostru analizează prezența afacerii tale în
                ecosistemul AI prin scanarea a peste 50 de modele AI diferite și
                evaluarea frecvenței cu care apari în răspunsurile generate
                pentru întrebări relevante din industria ta.
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-card-foreground">
                  Opțiuni disponibile:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                    <h5 className="font-medium text-card-foreground mb-2">
                      🔍 Optimizare Conținut
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Îmbunătățim structura și conținutul pentru AI
                    </p>
                  </div>
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                    <h5 className="font-medium text-card-foreground mb-2">
                      📊 Monitorizare Concurență
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Analizăm cum se prezintă competitorii în AI
                    </p>
                  </div>
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                    <h5 className="font-medium text-card-foreground mb-2">
                      ⚡ Strategie AI-First
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Dezvoltăm strategii adaptate pentru AI
                    </p>
                  </div>
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                    <h5 className="font-medium text-card-foreground mb-2">
                      📈 Rapoarte Detaliate
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Furnizăm analize complete și acționabile
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-xl font-medium transition-all duration-200"
                >
                  Am înțeles
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
