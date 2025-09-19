import {
  Mail,
  Phone,
  MapPin,
  Download,
  Trash2,
  Eye,
  Shield,
  Clock,
  User,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function Gdpr() {
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
                Informații GDPR
              </h1>
              <p className="text-muted-foreground">
                Drepturile dumneavoastră conform Regulamentului General privind
                Protecția Datelor (GDPR)
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Actualizat ultima dată: {new Date().toLocaleDateString("ro-RO")}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-card-foreground mb-2">
                  Accesează Datele
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Descarcă o copie a datelor tale personale
                </p>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Solicită Date
                </button>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Shield className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold text-card-foreground mb-2">
                  Modifică Consimțământul
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Gestionează preferințele de confidențialitate
                </p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Setări Privacy
                </button>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Trash2 className="w-8 h-8 text-destructive mx-auto mb-3" />
                <h3 className="font-semibold text-card-foreground mb-2">
                  Șterge Contul
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Eliminarea completă a datelor personale
                </p>
                <button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Șterge Date
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="bg-card border border-border rounded-lg p-8 prose prose-slate max-w-none dark:prose-invert">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Ce este GDPR?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Regulamentul General privind Protecția Datelor (GDPR) este o
                  lege europeană care vă oferă control asupra datelor
                  dumneavoastră personale. Acesta stabilește reguli clare despre
                  cum organizațiile pot colecta, utiliza și stoca informațiile
                  dumneavoastră personale.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notch respectă pe deplin GDPR și vă oferă instrumente pentru
                  exercitarea drepturilor dumneavoastră în mod simplu și
                  transparent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Drepturile Dumneavoastră GDPR
                </h2>

                <div className="space-y-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Eye className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-medium text-card-foreground">
                        Dreptul de Acces (Art. 15)
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Aveți dreptul să știți ce date personale procesăm despre
                      dumneavoastră și să obțineți o copie a acestora.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-card-foreground">
                        Ce puteți solicita:
                      </strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Confirmarea procesării datelor personale</li>
                        <li>• O copie a datelor procesate</li>
                        <li>• Informații despre scopul procesării</li>
                        <li>• Informații despre durata de păstrare</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/20 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <User className="w-6 h-6 text-green-500" />
                      <h3 className="text-xl font-medium text-card-foreground">
                        Dreptul de Rectificare (Art. 16)
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Puteți corecta datele personale inexacte sau incomplete
                      din contul dumneavoastră.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-card-foreground">
                        Cum să corectați datele:
                      </strong>
                      <ul className="mt-2 space-y-1">
                        <li>
                          • Accesați setările contului pentru modificări simple
                        </li>
                        <li>• Contactați-ne pentru corecții complexe</li>
                        <li>• Procesarea se face în maxim 30 zile</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/20 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Trash2 className="w-6 h-6 text-red-500" />
                      <h3 className="text-xl font-medium text-card-foreground">
                        Dreptul de Ștergere - "Right to be Forgotten" (Art. 17)
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Puteți solicita ștergerea datelor personale în anumite
                      condiții specifice.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-card-foreground">
                        Când se aplică:
                      </strong>
                      <ul className="mt-2 space-y-1">
                        <li>
                          • Datele nu mai sunt necesare pentru scopurile
                          inițiale
                        </li>
                        <li>
                          • Vă retrageți consimțământul și nu există alt temei
                          legal
                        </li>
                        <li>• Datele au fost procesate ilegal</li>
                        <li>
                          • Ștergerea este necesară pentru conformitate legală
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/20 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-amber-500" />
                      <h3 className="text-xl font-medium text-card-foreground">
                        Dreptul de Limitare a Prelucrării (Art. 18)
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Puteți restricționa procesarea datelor în anumite
                      situații, menținându-le stocate dar fără prelucrare
                      activă.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-card-foreground">
                        Când se aplică:
                      </strong>
                      <ul className="mt-2 space-y-1">
                        <li>
                          • Contestați acuratețea datelor (pe perioada
                          verificării)
                        </li>
                        <li>
                          • Prelucrarea este ilegală dar nu doriți ștergerea
                        </li>
                        <li>
                          • Nu mai avem nevoie de date dar voi le necesitați
                          pentru acțiuni legale
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/20 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Download className="w-6 h-6 text-blue-500" />
                      <h3 className="text-xl font-medium text-card-foreground">
                        Dreptul la Portabilitatea Datelor (Art. 20)
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Puteți obține datele într-un format structurat și le
                      puteți transfera la alt furnizor.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-card-foreground">
                        Ce includem:
                      </strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Date de profil în format JSON</li>
                        <li>• Rapoarte de analiză în format CSV/Excel</li>
                        <li>• Setări și preferințe</li>
                        <li>• Istoricul activității (unde aplicabil)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/20 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-purple-500" />
                      <h3 className="text-xl font-medium text-card-foreground">
                        Dreptul de Opoziție (Art. 21)
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Puteți să vă opuneți prelucrării datelor pentru marketing
                      direct sau alte scopuri specifice.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-card-foreground">
                        Opțiuni disponibile:
                      </strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Oprirea comunicărilor de marketing</li>
                        <li>• Limitarea profilării pentru marketing</li>
                        <li>• Opoziție pentru motive legitime personale</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Cum să Exercitați Aceste Drepturi
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-card-foreground mb-3">
                      🔧 Prin Cont
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Majoritatea drepturilor pot fi exercitate direct din
                      setările contului dumneavoastră.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Setări → Privacy & Date</li>
                      <li>• Descărcați datele personale</li>
                      <li>• Modificați preferințele</li>
                      <li>• Ștergeți contul</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-card-foreground mb-3">
                      📧 Prin Email
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Pentru cereri complexe sau asistență specializată.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        • Email:{" "}
                        <a
                          href="mailto:gdpr@notch.ro"
                          className="text-primary hover:text-primary/80"
                        >
                          gdpr@notch.ro
                        </a>
                      </li>
                      <li>• Timpul de răspuns: 72 ore</li>
                      <li>• Procesare: maxim 30 zile</li>
                      <li>• Verificare identitate necesară</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Temeiul Legal pentru Prelucrare
                </h2>

                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-card-foreground mb-2">
                      📝 Consimțământ (Art. 6(1)(a))
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pentru marketing, cookies non-esențiale și anumite
                      caracteristici opționale.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-card-foreground mb-2">
                      📋 Contract (Art. 6(1)(b))
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pentru furnizarea serviciilor Notch conform termenilor
                      acceptați.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-card-foreground mb-2">
                      ⚖️ Obligație Legală (Art. 6(1)(c))
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pentru conformitate fiscală, de securitate și alte cerințe
                      legale.
                    </p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-card-foreground mb-2">
                      🎯 Interes Legitim (Art. 6(1)(f))
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pentru îmbunătățirea serviciilor, securitate și analiză
                      internă.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Autoritatea de Supraveghere
                </h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Dacă considerați că drepturile dumneavoastră GDPR au fost
                    încălcate, puteți depune o plângere la autoritatea națională
                    de supraveghere:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-card-foreground">
                          Autoritatea Națională de Supraveghere a Prelucrării
                          Datelor cu Caracter Personal (ANSPDCP)
                        </strong>
                        <p className="text-muted-foreground">
                          B-dul G-ral. Gheorghe Magheru 28-30, Sector 1,
                          București
                        </p>
                        <p className="text-muted-foreground">
                          Email: anspdcp@dataprotection.ro
                        </p>
                        <p className="text-muted-foreground">
                          Telefon: +40 318 059 211
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Ofițerul de Protecție a Datelor (DPO)
                </h2>
                <div className="bg-primary/10 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Pentru întrebări specifice despre protecția datelor sau
                    pentru exercitarea drepturilor GDPR, puteți contacta direct
                    DPO-ul nostru:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Email DPO: </span>
                      <a
                        href="mailto:dpo@notch.ro"
                        className="text-primary hover:text-primary/80"
                      >
                        dpo@notch.ro
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Telefon: </span>
                      <span className="text-card-foreground">
                        +40 721 234 567 (ext. 100)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Program: </span>
                      <span className="text-card-foreground">
                        Luni-Vineri 09:00-17:00
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Întrebări Frecvente GDPR
                </h2>

                <div className="space-y-4">
                  <details className="bg-muted/20 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                      Cât timp durează procesarea unei cereri GDPR?
                    </summary>
                    <div className="p-4 pt-0 text-sm text-muted-foreground">
                      Procesăm cererile GDPR în maxim 30 zile de la primire.
                      Pentru cereri complexe, perioada poate fi extinsă cu încă
                      60 zile, cu notificare prealabilă.
                    </div>
                  </details>

                  <details className="bg-muted/20 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                      Pot exercita drepturile GDPR în numele altei persoane?
                    </summary>
                    <div className="p-4 pt-0 text-sm text-muted-foreground">
                      Da, cu o procură legală sau documentație care demonstrează
                      autoritatea de a acționa în numele respectivei persoane
                      (de ex. tutela legală).
                    </div>
                  </details>

                  <details className="bg-muted/20 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                      Există costuri pentru exercitarea drepturilor GDPR?
                    </summary>
                    <div className="p-4 pt-0 text-sm text-muted-foreground">
                      Nu, toate cererile GDPR sunt procesate gratuit. În cazuri
                      excepționale de cereri repetitive sau nejustificate, putem
                      aplica o taxă rezonabilă.
                    </div>
                  </details>

                  <details className="bg-muted/20 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-card-foreground hover:bg-muted/30 transition-colors">
                      Ce se întâmplă cu datele după ștergerea contului?
                    </summary>
                    <div className="p-4 pt-0 text-sm text-muted-foreground">
                      Datele personale sunt șterse în 30 zile. Păstrăm doar
                      informațiile necesare pentru conformitate legală (facturi,
                      logs de securitate) pentru perioadele obligatorii.
                    </div>
                  </details>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Contact pentru Chestiuni GDPR
                </h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Pentru orice întrebare legată de GDPR sau protecția datelor,
                    nu ezitați să ne contactați:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        Email general:{" "}
                      </span>
                      <a
                        href="mailto:gdpr@notch.ro"
                        className="text-primary hover:text-primary/80"
                      >
                        gdpr@notch.ro
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        DPO direct:{" "}
                      </span>
                      <a
                        href="mailto:dpo@notch.ro"
                        className="text-primary hover:text-primary/80"
                      >
                        dpo@notch.ro
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
