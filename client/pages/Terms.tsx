import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <main className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Termeni și Condiții – Notch
              </h1>
              <p className="text-muted-foreground">
                Ultima actualizare: 25 Iulie 2025
              </p>
            </div>

            {/* Content */}
            <div className="bg-card border border-border rounded-lg p-8 prose prose-slate max-w-none dark:prose-invert">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  0. Introducere
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Accesând și utilizând platforma Notch (denumită în continuare
                  „Platforma" sau „Serviciul"), ești de acord cu acești Termeni
                  și Condiții. Dacă nu ești de acord, te rugăm să nu utilizezi
                  platforma sau serviciile noastre.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  1. Informații despre operator
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <h3 className="text-xl font-medium text-card-foreground mb-3">
                    Platforma Notch este operată de:
                  </h3>
                  <li>
                    <strong className="text-card-foreground">
                      Lupus Development SRL
                    </strong>
                  </li>
                  <li>
                    <strong className="text-card-foreground">
                      Sediu social:{" "}
                    </strong>{" "}
                    Aleea Dealul Macinului 8 Bl. D38 Sc. E Et. 3 Ap. 72 Cod
                    062046
                  </li>
                  <li>
                    <strong className="text-card-foreground">CUI: </strong>{" "}
                    50595916
                  </li>
                  <li>
                    <strong className="text-card-foreground">
                      Nr. înregistrare la Registrul Comerțului:{" "}
                    </strong>{" "}
                    J2024025051005
                  </li>
                  <li>
                    <strong className="text-card-foreground">
                      Email de contact oficial :{" "}
                    </strong>{" "}
                    contact@notch.ro
                  </li>
                  <li>
                    <strong className="text-card-foreground">Telefon: </strong>{" "}
                    0760 560 346
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  1. Acceptarea Termenilor
                </h2>
                {/* <h3 className="text-xl font-medium text-card-foreground mb-3">
                  3.1 Eligibilitate
                </h3> */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Accesând și utilizând platforma Notch (denumită în continuare
                  „Platforma” sau „Serviciul”), ești de acord cu acești Termeni
                  și Condiții. Dacă nu ești de acord, te rugăm să nu utilizezi
                  platforma sau serviciile noastre.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  2. Descrierea serviciilor
                </h2>
                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  Notch oferă servicii digitale de analiză automată și
                  personalizată, care includ:
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-8">
                  <li>
                  • Audit AI Visibility (vizibilitate în ChatGPT, Copilot,
                    Google SGE etc.)
                  </li>
                  <li>
                  • Analiză de reputație online și comparare cu competiția
                  </li>
                  <li>
                  • Evaluare performanță tehnică și accesibilitate a
                    website-urilor
                  </li>
                  <li>
                  • Recomandări de optimizare și servicii de implementare (în
                    baza unui abonament lunar)
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                Rapoartele sunt generate digital și livrate prin email sau puse la dispoziție în contul de utilizator (dacă este cazul).

                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  3. Plasarea comenzii și caracterul serviciului
                </h2>
               
                <p className="text-muted-foreground leading-relaxed mb-4">
                Prin completarea formularului de solicitare și inițierea unei comenzi (inclusiv gratuite), utilizatorul înțelege că serviciul este digital și personalizat, procesat automat și/sau manual pe baza informațiilor oferite.

                </p>
                <h3 className="text-xl font-medium text-card-foreground mb-3">
                Prin trimiterea cererii, utilizatorul solicită executarea imediată a serviciului și acceptă pierderea dreptului de retragere conform art. 16 lit. m din OUG 34/2014.

                </h3>
               
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  4. Condiții de plată
                </h2>
               
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Plata pentru serviciile premium se efectuează în avans, online, prin procesatori autorizați (Stripe, PayPal etc.).</li>
                  <li>• Comanda este considerată confirmată odată cu recepționarea plății.</li>
                  <li>• Raportul livrat se consideră produs consumat.</li>
                </ul>
               
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  7. Încetarea Serviciului
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Datele nu sunt transmise terților în scopuri comerciale și
                  sunt păstrate doar pe perioada necesară livrării serviciului.
                  Ai dreptul să soliciți acces, rectificare sau ștergerea
                  datelor tale oricând, la adresa juridic@notch.agency.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vezi Politica noastră de Confidențialitate completă{" "}
                  <a
                    href="/privacy"
                    className="text-primary hover:text-primary/80"
                  >
                    [link]
                  </a>
                  .
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  10. Jurisdicție și legislație aplicabilă
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Prezentul acord este guvernat de legislația română. Orice
                  dispută va fi soluționată de instanțele competente din
                  București, România.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  11. Modificări
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Notch își rezervă dreptul de a modifica acești termeni
                  oricând. Continuarea utilizării serviciului după actualizare
                  înseamnă acceptarea noilor condiții.
                </p>
              </section>

              <section className="mb-8">
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4 font-medium">
                    🛡️ Notch este un brand înregistrat.
                    <br />
                    Toate drepturile rezervate. Pentru întrebări legale:
                    contact@notch.ro
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Contact
                </h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Pentru întrebări despre acești termeni, ne puteți contacta:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Email: </span>
                      <a
                        href="mailto:contact@notch.ro"
                        className="text-primary hover:text-primary/80"
                      >
                        contact@notch.ro
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Telefon: </span>
                      <a
                        href="tel:+40721234567"
                        className="text-primary hover:text-primary/80"
                      >
                        +40 760 560 346
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        Adresă: București, România
                      </span>
                    </div>
                  </div>
                </div>
              </section>
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
