import {
  Star,
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
  TrendingUp,
  MessageCircle,
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
  overallRating: number;
  sentimentScore: number;
  mentionsFound: number;
  competitorComparison: number;
  platforms: {
    name: string;
    rating: number;
    mentions: number;
    sentiment: "positive" | "neutral" | "negative";
  }[];
  recommendations: string[];
}

export default function ReputationTool() {
  const [formData, setFormData] = useState<FormData>({
    inputValue: "",
    inputType: "business",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

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
        overallRating: (Math.random() * 2 + 3.5).toFixed(1), // 3.5-5.0 rating
        sentimentScore: Math.floor(Math.random() * 30) + 70, // 70-100%
        mentionsFound: Math.floor(Math.random() * 150) + 50, // 50-200 mentions
        competitorComparison: Math.floor(Math.random() * 40) + 60, // 60-100%
        platforms: [
          {
            name: "Google Reviews",
            rating: (Math.random() * 1.5 + 3.5).toFixed(1),
            mentions: Math.floor(Math.random() * 50) + 20,
            sentiment: Math.random() > 0.3 ? "positive" : "neutral",
          },
          {
            name: "Facebook",
            rating: (Math.random() * 1.5 + 3.5).toFixed(1),
            mentions: Math.floor(Math.random() * 30) + 10,
            sentiment: Math.random() > 0.4 ? "positive" : "neutral",
          },
          {
            name: "AI Responses",
            rating: (Math.random() * 1.5 + 3.5).toFixed(1),
            mentions: Math.floor(Math.random() * 25) + 15,
            sentiment: Math.random() > 0.2 ? "positive" : "neutral",
          },
          {
            name: "Forums & Blogs",
            rating: (Math.random() * 1.5 + 3.5).toFixed(1),
            mentions: Math.floor(Math.random() * 20) + 8,
            sentiment: Math.random() > 0.5 ? "positive" : "neutral",
          },
        ],
        recommendations: [
          "Monitorizează Google Reviews săptămânal pentru răspunsuri rapide",
          "Creează conținut FAQ pentru îmbunătățirea reputa��iei AI",
          "Implementează un sistem de colectare feedback pozitiv",
          "Răspunde la toate review-urile în maxim 24 ore",
          "Optimizează profilurile sociale pentru căutări AI",
          "Dezvoltă o strategie de content marketing pozitivă",
          "Monitorizează mențiunile brandului în timp real",
        ],
      });
      setIsLoading(false);
    }, 3000);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-500";
      case "negative":
        return "text-red-500";
      default:
        return "text-amber-500";
    }
  };

  const getSentimentBg = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-500/10";
      case "negative":
        return "bg-red-500/10";
      default:
        return "bg-amber-500/10";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="solutions" />

      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="w-20 h-20 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 relative">
              <Star className="w-10 h-10 text-amber-500" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Reputație Online — Notch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Monitorizează și analizează reputația business-ului tău online și
              în răspunsurile AI.
              <span className="text-amber-500 font-medium block mt-2">
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
                      onClick={() => handleInputTypeToggle("business")}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        formData.inputType === "business"
                          ? "bg-amber-500 text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Building2 className="w-4 h-4 inline mr-2" />
                      Numele Business-ului
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputTypeToggle("url")}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        formData.inputType === "url"
                          ? "bg-amber-500 text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Globe className="w-4 h-4 inline mr-2" />
                      URL Website
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
                  {formData.inputType === "business"
                    ? "Introdu numele business-ului"
                    : "Introdu URL-ul website-ului"}
                </label>
                <div className="relative">
                  {formData.inputType === "business" ? (
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
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
                      formData.inputType === "business"
                        ? "Ex: Restaurant Central, SoftTech SRL"
                        : "https://exemplu.ro"
                    }
                    className="w-full pl-11 pr-4 py-4 border border-input rounded-xl text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !formData.inputValue.trim()}
                className="w-full bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Se analizează...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Analizează Reputația
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
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-8 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-700 mb-1">
                  Analiză completă!
                </h3>
                <p className="text-amber-600 text-sm">
                  Analiza reputației online a fost finalizată cu succes. Vezi
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
                  Rezultatele Analizei de Reputație
                </h2>
                <p className="text-muted-foreground">
                  {formData.inputType === "business"
                    ? "Business analizat"
                    : "Website analizat"}
                  :
                  <span className="font-medium text-foreground ml-1">
                    {results.inputValue}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-amber-500/5 rounded-xl border border-amber-500/10">
                  <div className="text-3xl font-bold text-amber-500 mb-2">
                    {results.overallRating}⭐
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Rating General
                  </div>
                </div>
                <div className="text-center p-4 bg-green-500/5 rounded-xl border border-green-500/10">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    {results.sentimentScore}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Sentiment Pozitiv
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    {results.mentionsFound}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Mențiuni Găsite
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-500/5 rounded-xl border border-purple-500/10">
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    {results.competitorComparison}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    vs Concurență
                  </div>
                </div>
              </div>

              {/* Platform Breakdown */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  Analiza pe platforme:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.platforms.map((platform, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/30"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${getSentimentBg(platform.sentiment)}`}
                        >
                          <div
                            className={`w-full h-full rounded-full ${getSentimentColor(platform.sentiment).replace("text-", "bg-")}`}
                          ></div>
                        </div>
                        <div>
                          <p className="font-medium text-card-foreground">
                            {platform.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {platform.mentions} mențiuni
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-amber-500">
                          {platform.rating}⭐
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  Recomandări pentru îmbunătățirea reputației:
                </h3>
                <div className="space-y-3">
                  {results.recommendations.map((rec: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border border-border/30"
                    >
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {rec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/30">
                <button className="flex-1 bg-amber-500 text-white hover:bg-amber-600 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02]">
                  Descarcă Raport Complet
                </button>
                <button
                  onClick={() => {
                    setResults(null);
                    setFormData({ inputValue: "", inputType: "business" });
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
                Ce analizăm pentru reputația ta?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    ⭐
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Rating & Review-uri
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Scanăm Google Reviews, Facebook, și alte platforme pentru
                    rating-ul general
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    💬
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Analiza Sentimentului
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Evaluăm tonul mențiunilor online - pozitive, neutre sau
                    negative
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    🤖
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Prezența în AI
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Verificăm cum ești menționat în răspunsurile ChatGPT, Claude
                    și altele
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    📊
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Comparare Concurență
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Te comparăm cu competitorii pentru a vedea poziția ta
                    relativă
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
