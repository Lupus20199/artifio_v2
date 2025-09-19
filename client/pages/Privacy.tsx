import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Privacy() {
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
                Politica de Confidențialitate
              </h1>
              <p className="text-muted-foreground">
                Actualizat ultima dată: {new Date().toLocaleDateString("ro-RO")}
              </p>
            </div>

            {/* Content */}
            <div className="bg-card border border-border rounded-lg p-8 prose prose-slate max-w-none dark:prose-invert">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  1. Introducere
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Notch se angajează să protejeze confidențialitatea și
                  siguranța datelor personale ale utilizatorilor. Această
                  politică explică cum colectăm, utilizăm, stocăm și protejăm
                  informațiile dumneavoastră personale.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Prin utilizarea serviciilor Notch, vă exprimați acordul cu
                  practicile descrise în această politică de confidențialitate.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  2. Informații Colectate
                </h2>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  2.1 Informații Furnizate Direct
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Date de cont:
                    </strong>{" "}
                    nume, adresă de email, parolă
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Informații de profil:
                    </strong>{" "}
                    numele companiei, domeniul de activitate
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Date de facturare:
                    </strong>{" "}
                    informații pentru procesarea plăților
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">Conținut:</strong>{" "}
                    site-uri web, texte și materiale încărcate pentru analiză
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Comunicări:
                    </strong>{" "}
                    mesaje trimise prin formulare de contact sau email
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  2.2 Informații Colectate Automat
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Date de utilizare:
                    </strong>{" "}
                    paginile vizitate, timpul petrecut, acțiunile efectuate
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Informații tehnice:
                    </strong>{" "}
                    adresa IP, tipul browserului, sistemul de operare
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Date de performanță:
                    </strong>{" "}
                    viteză de încărcare, erori, probleme tehnice
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Cookies și tehnologii similare:
                    </strong>{" "}
                    pentru funcționalitate și analiză
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  2.3 Informații de la Terți
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Putem colecta informații de la servicii terțe de autentificare
                  (Google, Facebook) sau de la partenerii de integrare, cu
                  acordul dumneavoastră explicit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  3. Cum Utilizăm Informațiile
                </h2>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  3.1 Furnizarea Serviciilor
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>
                    • Analiza vizibilității AI pentru site-urile dumneavoastră
                  </li>
                  <li>• Generarea de rapoarte și recomandări personalizate</li>
                  <li>• Monitorizarea performanței în căutările AI</li>
                  <li>• Optimizarea conținutului pentru modele AI</li>
                </ul>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  3.2 Comunicare și Suport
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Răspunsuri la întrebări și solicitări de suport</li>
                  <li>
                    • Notificări despre servicii și actualizări importante
                  </li>
                  <li>• Comunicări de marketing (cu acordul dumneavoastră)</li>
                </ul>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  3.3 Îmbunătățirea Serviciilor
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Analiză pentru îmbunătățirea funcționalităților</li>
                  <li>• Dezvoltarea de noi instrumente și caracteristici</li>
                  <li>• Cercetare și dezvoltare în domeniul AI</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  4. Cookies și Tehnologii de Urmărire
                </h2>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  4.1 Tipuri de Cookies
                </h3>
                <div className="space-y-4 mb-4">
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">
                      Cookies Esențiale
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Necesare pentru funcționarea de bază a platformei
                      (autentificare, sesiuni)
                    </p>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">
                      Cookies de Analiză
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pentru înțelegerea modului de utilizare a serviciilor
                      (Google Analytics)
                    </p>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">
                      Cookies de Marketing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pentru personalizarea reclamelor și conținutului (cu
                      acordul dumneavoastră)
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  4.2 Gestionarea Cookies
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Puteți gestiona preferințele pentru cookies prin setările
                  browserului sau prin panoul nostru de consentiment. Notă:
                  dezactivarea anumitor cookies poate afecta funcționalitatea
                  platformei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  5. Partajarea Informațiilor
                </h2>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  5.1 Cu Terți de Încredere
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Furnizorii de servicii:
                    </strong>{" "}
                    hosting, procesare plăți, analiză
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Parteneri AI:
                    </strong>{" "}
                    pentru accesul la modele și APIs-uri AI
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Servicii de suport:
                    </strong>{" "}
                    platforme de help desk și comunicare
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  5.2 Cerințe Legale
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Putem divulga informații când este necesar pentru respectarea
                  legii, protejarea drepturilor noastre sau siguranța
                  utilizatorilor.
                </p>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  5.3 Nu Vindem Date Personale
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nu vindem, nu închiriem și nu comercializăm datele
                  dumneavoastră personale către terți pentru scopuri de
                  marketing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  6. Securitatea Datelor
                </h2>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  6.1 Măsuri de Protecție
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Criptare SSL/TLS pentru transmisia datelor</li>
                  <li>• Criptare a bazelor de date și backup-urilor</li>
                  <li>• Autentificare cu doi factori pentru conturi</li>
                  <li>• Monitorizare 24/7 pentru amenințări de securitate</li>
                  <li>• Accesul restricționat la datele personale</li>
                </ul>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  6.2 Localizarea Datelor
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Datele sunt stocate în centre de date securizate din Uniunea
                  Europeană, cu backup-uri în regiuni conforme cu GDPR.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  7. Drepturile Dumneavoastră
                </h2>

                <div className="space-y-4">
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">
                      🔍 Dreptul de Acces
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Să solicitați o copie a datelor personale pe care le
                      deținem
                    </p>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">
                      ✏️ Dreptul de Rectificare
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Să corectați informațiile incorecte sau incomplete
                    </p>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">
                      🗑️ Dreptul de Ștergere
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Să solicitați ștergerea datelor personale în anumite
                      condiții
                    </p>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">
                      ⏸️ Dreptul de Limitare
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Să limitați procesarea datelor în anumite circumstanțe
                    </p>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">
                      📦 Dreptul la Portabilitate
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Să primiți datele într-un format structurat și să le
                      transferați
                    </p>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">
                      🚫 Dreptul de Opoziție
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Să vă opuneți prelucrării pentru marketing direct
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  8. Păstrarea Datelor
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Păstrăm datele personale doar pe durata necesară pentru
                  îndeplinirea scopurilor pentru care au fost colectate:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Date de cont:
                    </strong>{" "}
                    până la închiderea contului + 30 zile
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Date de facturare:
                    </strong>{" "}
                    7 ani pentru conformitate fiscală
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Date de analiză:
                    </strong>{" "}
                    2 ani pentru îmbunătățirea serviciilor
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-card-foreground">
                      Logs de securitate:
                    </strong>{" "}
                    1 an pentru protecție
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  9. Servicii Terțe
                </h2>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  9.1 Integrări AI
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizăm APIs-uri de la furnizori de AI (OpenAI, Google, etc.)
                  pentru analiză. Aceste servicii au propriile politici de
                  confidențialitate pe care le respectăm.
                </p>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  9.2 Servicii de Plăți
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Plățile sunt procesate prin Stripe și alte platforme
                  securizate. Nu stocăm informații complete ale cardurilor de
                  credit.
                </p>

                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  9.3 Analiză Web
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizăm Google Analytics pentru înțelegerea utilizării
                  platformei. Puteți opta pentru non-participare prin setările
                  browserului.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  10. Modificări ale Politicii
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ne rezervăm dreptul de a actualiza această politică de
                  confidențialitate. Modificările importante vor fi comunicate
                  prin email și prin notificări în platformă.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Data ultimei actualizări este afișată în partea de sus a
                  acestei pagini.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  11. Contact pentru Confidențialitate
                </h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Pentru întrebări despre confidențialitate sau pentru
                    exercitarea drepturilor dumneavoastră, ne puteți contacta:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Email: </span>
                      <a
                        href="mailto:privacy@notch.ro"
                        className="text-primary hover:text-primary/80"
                      >
                        privacy@notch.ro
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Telefon: </span>
                      <a
                        href="tel:+40721234567"
                        className="text-primary hover:text-primary/80"
                      >
                        +40 721 234 567
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        Adresă: București, România
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      Ofițer de Protecție a Datelor (DPO)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Pentru chestiuni complexe de confidențialitate:{" "}
                      <a
                        href="mailto:dpo@notch.ro"
                        className="text-primary hover:text-primary/80"
                      >
                        dpo@notch.ro
                      </a>
                    </p>
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
