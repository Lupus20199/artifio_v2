import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  User,
  MapPin,
  Phone,
  UserPlus,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!fullName) newErrors.fullName = "Numele complet este obligatoriu";
    if (!email) newErrors.email = "Email-ul este obligatoriu";
    if (!password) newErrors.password = "Parola este obligatorie";
    if (!confirmPassword)
      newErrors.confirmPassword = "Confirmarea parolei este obligatorie";
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Parolele nu se potrivesc";
    }
    if (!gdprConsent)
      newErrors.gdpr = "Trebuie să accepți termenii și condițiile";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Process registration
      console.log("Registration attempt:", { fullName, email, password });
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Register with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <main className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Register
              </h1>
              <p className="text-muted-foreground">
                Creează-ți contul Notch pentru a începe
              </p>
            </div>

            {/* Registration Form */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name Input */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Nume complet
                  </label>
                  <div className="relative">
                    <UserPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ion Popescu"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.fullName ? "border-destructive" : "border-border"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@exemplu.com"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.email ? "border-destructive" : "border-border"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Parola
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Creează o parolă"
                      className={`w-full pl-10 pr-12 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.password ? "border-destructive" : "border-border"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Confirmă parola
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirmă parola"
                      className={`w-full pl-10 pr-12 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.confirmPassword
                          ? "border-destructive"
                          : "border-border"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* GDPR Consent */}
                <div className="flex items-start gap-3">
                  <input
                    id="gdpr"
                    type="checkbox"
                    checked={gdprConsent}
                    onChange={(e) => setGdprConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                  <label
                    htmlFor="gdpr"
                    className="text-sm text-muted-foreground"
                  >
                    Sunt de acord cu{" "}
                    <a
                      href="/terms"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Termenii și Condițiile
                    </a>
                    ,{" "}
                    <a
                      href="/privacy"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Politica de Confidențialitate
                    </a>{" "}
                    și{" "}
                    <a
                      href="/gdpr"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      GDPR
                    </a>
                  </label>
                </div>
                {errors.gdpr && (
                  <p className="text-destructive text-sm">{errors.gdpr}</p>
                )}

                {/* Register Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-lg text-sm font-semibold transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                >
                  Register
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background text-muted-foreground">
                  sau
                </span>
              </div>
            </div>

            {/* Social Registration Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleSocialLogin("Google")}
                className="w-full bg-card border border-border hover:bg-accent text-card-foreground px-4 py-3 rounded-lg text-sm font-medium transition-all hover:shadow-md flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Register cu Google
              </button>

              <button
                onClick={() => handleSocialLogin("Facebook")}
                className="w-full bg-card border border-border hover:bg-accent text-card-foreground px-4 py-3 rounded-lg text-sm font-medium transition-all hover:shadow-md flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Register cu Facebook
              </button>

              <button
                onClick={() => handleSocialLogin("Guest")}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-3"
              >
                <User className="w-5 h-5" />
                Continuă ca vizitator
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center bg-muted/30 rounded-lg p-4">
              <p className="text-muted-foreground text-sm mb-3">
                Ai deja un cont?
              </p>
              <a
                href="/login"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-2"
              >
                Login
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
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
                    +40 760 560 346
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
