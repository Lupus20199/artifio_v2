import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Linking,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";

const NotchLandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openLink = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert("Error", "Could not open link");
    }
  };

  const handleNavigation = (route: string) => {
    console.log(`Navigate to: ${route}`);
    // Handle navigation based on your navigation library (React Navigation, etc.)
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <View style={styles.headerTop}>
              <Image
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets%2Fd06f9482d48b40d59259ba9c3de99335%2F54accc928a0d4b658b78f6cb3cfd354e?format=webp&width=800",
                }}
                style={styles.logo}
                resizeMode="contain"
              />

              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Text style={styles.menuIcon}>
                  {isMobileMenuOpen ? "✕" : "☰"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <View style={styles.mobileMenu}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleNavigation("/solutii")}
                >
                  <Text style={styles.menuItemText}>Soluții</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleNavigation("/about")}
                >
                  <Text style={styles.menuItemText}>Despre Noi</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleNavigation("/contact")}
                >
                  <Text style={styles.menuItemText}>Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleNavigation("/planuri")}
                >
                  <Text style={styles.menuItemText}>Planuri</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.menuItem, styles.loginButton]}
                  onPress={() => handleNavigation("/login")}
                >
                  <Text style={styles.loginButtonText}>Conectare</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContainer}>
            <Text style={styles.heroTitle}>
              Optimizează-ți Vizibilitatea în{"\n"}
              <Text style={styles.heroTitleHighlight}>Căutările AI</Text>
            </Text>
            <Text style={styles.heroSubtitle}>
              Domină rezultatele AI înainte ca concurența să-și dea seama de
              importanța lor. Notch te ajută să apari în răspunsurile ChatGPT,
              Claude, Bard și alte modele AI.
            </Text>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => handleNavigation("/solutii/vizibilitate-ai")}
            >
              <Text style={styles.primaryButtonText}>
                Verifică vizibilitatea afacerii tale în AI →
              </Text>
            </TouchableOpacity>

            <View style={styles.benefitsRow}>
              <View style={styles.benefitItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.benefitText}>Analiză gratuită</Text>
              </View>
              <View style={styles.benefitItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.benefitText}>Raport complet</Text>
              </View>
              <View style={styles.benefitItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.benefitText}>Rezultate în 30s</Text>
              </View>
            </View>
          </View>
        </View>

        {/* How it Works Section */}
        <View style={styles.section}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Cum Funcționează Notch?</Text>
            <Text style={styles.sectionSubtitle}>
              În doar trei pași simpli, îți optimizăm prezența în ecosystemul AI
              și te ajutăm să domini rezultatele
            </Text>

            <View style={styles.stepsContainer}>
              <View style={styles.stepItem}>
                <View style={styles.stepIconContainer}>
                  <Text style={styles.stepIcon}>🔍</Text>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>1</Text>
                  </View>
                </View>
                <Text style={styles.stepTitle}>Analizăm Prezența Actuală</Text>
                <Text style={styles.stepDescription}>
                  Scanăm peste 50 de modele AI pentru a vedea cât de des apare
                  afacerea ta în răspunsurile generate pentru întrebări
                  relevante din industria ta.
                </Text>
              </View>

              <View style={styles.stepItem}>
                <View style={styles.stepIconContainer}>
                  <Text style={styles.stepIcon}>🧠</Text>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>2</Text>
                  </View>
                </View>
                <Text style={styles.stepTitle}>Optimizăm Strategia</Text>
                <Text style={styles.stepDescription}>
                  Creăm o strategie personalizată de optimizare AI, cu
                  recomandări specifice pentru conținut, structură și cuvinte
                  cheie AI-friendly.
                </Text>
              </View>

              <View style={styles.stepItem}>
                <View style={styles.stepIconContainer}>
                  <Text style={styles.stepIcon}>📈</Text>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>3</Text>
                  </View>
                </View>
                <Text style={styles.stepTitle}>Monitorizăm Rezultatele</Text>
                <Text style={styles.stepDescription}>
                  Urmărim progresul în timp real și îți oferim rapoarte
                  detaliate despre creșterea vizibilității tale în căutările AI.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Benefits Section */}
        <View style={styles.section}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>De Ce Să Alegi Notch?</Text>
            <Text style={styles.sectionSubtitle}>
              Oferim cea mai avansată tehnologie de optimizare AI din România
            </Text>

            <View style={styles.featuresGrid}>
              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>📊</Text>
                <Text style={styles.featureTitle}>Analiză Avansată</Text>
                <Text style={styles.featureDescription}>
                  Algoritmii noștri analizează peste 50 de modele AI pentru a-ți
                  oferi cea mai completă imagine a vizibilității tale.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>🚀</Text>
                <Text style={styles.featureTitle}>Rezultate Rapide</Text>
                <Text style={styles.featureDescription}>
                  Obții primul raport de analiză în doar 30 de secunde și vezi
                  îmbunătățiri în primele 7 zile.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>🛡️</Text>
                <Text style={styles.featureTitle}>Strategie Sigură</Text>
                <Text style={styles.featureDescription}>
                  Folosim doar tehnici white-hat aprobate de marile companii AI
                  pentru rezultate durabile.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>🌍</Text>
                <Text style={styles.featureTitle}>Acoperire Globală</Text>
                <Text style={styles.featureDescription}>
                  Optimizăm prezența ta în modele AI din întreaga lume, inclusiv
                  ChatGPT, Claude, Bard și altele.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>👥</Text>
                <Text style={styles.featureTitle}>Suport Expert</Text>
                <Text style={styles.featureDescription}>
                  Echipa noastră de specialiști AI îți oferă suport personalizat
                  pentru fiecare etapă a procesului.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>⚡</Text>
                <Text style={styles.featureTitle}>Automatizare Completă</Text>
                <Text style={styles.featureDescription}>
                  Odată configurat, sistemul nostru lucrează automat pentru a-ți
                  menține și îmbunătăți poziția în AI.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Testimonials Section */}
        <View style={styles.section}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Ce Spun Clienții Noștri</Text>
            <Text style={styles.sectionSubtitle}>
              Peste 500 de afaceri din România și-au crescut vizibilitatea AI cu
              Notch
            </Text>

            <View style={styles.testimonialsContainer}>
              <View style={styles.testimonialCard}>
                <View style={styles.starsContainer}>
                  <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
                </View>
                <Text style={styles.testimonialText}>
                  "În doar 2 săptămâni, compania noastră a început să apară în 8
                  din 10 răspunsuri AI pentru întrebări din domeniul nostru.
                  Incredibil!"
                </Text>
                <View style={styles.testimonialAuthor}>
                  <View style={styles.authorAvatar} />
                  <View>
                    <Text style={styles.authorName}>Maria Popescu</Text>
                    <Text style={styles.authorTitle}>
                      CEO, TechStart Romania
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.testimonialCard}>
                <View style={styles.starsContainer}>
                  <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
                </View>
                <Text style={styles.testimonialText}>
                  "Notch ne-a ajutat să înțelegem cum funcționează AI-ul și să
                  ne optimizăm conținutul. Rezultatele au fost spectaculoase."
                </Text>
                <View style={styles.testimonialAuthor}>
                  <View style={styles.authorAvatar} />
                  <View>
                    <Text style={styles.authorName}>Alexandru Ionescu</Text>
                    <Text style={styles.authorTitle}>
                      Marketing Director, eCommerce Plus
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.testimonialCard}>
                <View style={styles.starsContainer}>
                  <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
                </View>
                <Text style={styles.testimonialText}>
                  "ROI-ul a fost evident din prima lună. Acum primim clienți
                  care ne găsesc prin recomandările AI."
                </Text>
                <View style={styles.testimonialAuthor}>
                  <View style={styles.authorAvatar} />
                  <View>
                    <Text style={styles.authorName}>Elena Marin</Text>
                    <Text style={styles.authorTitle}>
                      Fondator, ConsultingPro
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Final CTA Section */}
        <View style={styles.ctaSection}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              Începe Astăzi Optimizarea AI
            </Text>
            <Text style={styles.sectionSubtitle}>
              Nu lăsa concurența să te depășească în era AI. Verifică gratuit
              vizibilitatea afacerii tale acum.
            </Text>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => handleNavigation("/solutii/vizibilitate-ai")}
            >
              <Text style={styles.primaryButtonText}>
                Verifică vizibilitatea afacerii tale în AI →
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <View style={styles.footerContent}>
              <View style={styles.footerSection}>
                <Image
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets%2Fd06f9482d48b40d59259ba9c3de99335%2F54accc928a0d4b658b78f6cb3cfd354e?format=webp&width=800",
                  }}
                  style={styles.footerLogo}
                  resizeMode="contain"
                />
                <Text style={styles.footerDescription}>
                  Liderul în optimizarea vizibilității AI pentru afaceri din
                  România.
                </Text>
                <Text style={styles.copyright}>
                  © 2025 Notch. Toate drepturile rezervate.
                </Text>
              </View>

              <View style={styles.footerSection}>
                <Text style={styles.footerSectionTitle}>Servicii</Text>
                <TouchableOpacity style={styles.footerLink}>
                  <Text style={styles.footerLinkText}>Analiză AI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerLink}>
                  <Text style={styles.footerLinkText}>Optimizare Conținut</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerLink}>
                  <Text style={styles.footerLinkText}>Monitorizare</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerLink}>
                  <Text style={styles.footerLinkText}>Consultanță</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.footerSection}>
                <Text style={styles.footerSectionTitle}>Contact</Text>
                <TouchableOpacity
                  style={styles.contactItem}
                  onPress={() => openLink("mailto:contact@notch.ro")}
                >
                  <Text style={styles.contactIcon}>✉️</Text>
                  <Text style={styles.contactText}>contact@notch.ro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.contactItem}
                  onPress={() => openLink("tel:+40721234567")}
                >
                  <Text style={styles.contactIcon}>📞</Text>
                  <Text style={styles.contactText}>+40 760 560 346</Text>
                </TouchableOpacity>
                <View style={styles.contactItem}>
                  <Text style={styles.contactIcon}>📍</Text>
                  <Text style={styles.contactText}>București, România</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
  },

  // Header Styles
  header: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    paddingVertical: 12,
  },
  headerContainer: {
    paddingHorizontal: 16,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 32,
    width: 120,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    fontSize: 24,
    color: "#666",
  },
  mobileMenu: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuItemText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginTop: 8,
  },
  loginButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },

  // Hero Section
  heroSection: {
    paddingVertical: 48,
    paddingHorizontal: 16,
  },
  heroContainer: {
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 16,
    lineHeight: 40,
  },
  heroTitleHighlight: {
    color: "#6366f1",
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  primaryButton: {
    backgroundColor: "#6366f1",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 32,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  benefitsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
  },
  checkmark: {
    color: "#22c55e",
    fontSize: 16,
    marginRight: 6,
  },
  benefitText: {
    fontSize: 14,
    color: "#666",
  },

  // Section Styles
  section: {
    paddingVertical: 48,
    paddingHorizontal: 16,
  },
  sectionContainer: {
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 16,
  },

  // Steps
  stepsContainer: {
    gap: 32,
  },
  stepItem: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  stepIconContainer: {
    position: "relative",
    marginBottom: 16,
  },
  stepIcon: {
    fontSize: 40,
    backgroundColor: "#6366f1",
    width: 80,
    height: 80,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 40,
    overflow: "hidden",
  },
  stepNumber: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#6366f1",
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  stepNumberText: {
    color: "#6366f1",
    fontSize: 14,
    fontWeight: "bold",
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  stepDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },

  // Features Grid
  featuresGrid: {
    gap: 16,
  },
  featureCard: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },

  // Testimonials
  testimonialsContainer: {
    gap: 20,
  },
  testimonialCard: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 12,
    padding: 20,
  },
  starsContainer: {
    marginBottom: 12,
  },
  stars: {
    fontSize: 16,
  },
  testimonialText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 16,
  },
  testimonialAuthor: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorAvatar: {
    width: 40,
    height: 40,
    backgroundColor: "#e5e5e5",
    borderRadius: 20,
    marginRight: 12,
  },
  authorName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  authorTitle: {
    fontSize: 12,
    color: "#666",
  },

  // CTA Section
  ctaSection: {
    backgroundColor: "#f8fafc",
    paddingVertical: 48,
    paddingHorizontal: 16,
  },

  // Footer
  footer: {
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    paddingVertical: 32,
  },
  footerContainer: {
    paddingHorizontal: 16,
  },
  footerContent: {
    gap: 24,
  },
  footerSection: {
    alignItems: "center",
  },
  footerLogo: {
    height: 24,
    width: 90,
    marginBottom: 12,
  },
  footerDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 8,
  },
  copyright: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
  footerSectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  footerLink: {
    paddingVertical: 4,
  },
  footerLinkText: {
    fontSize: 14,
    color: "#666",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  contactIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  contactText: {
    fontSize: 14,
    color: "#666",
  },
});

export default NotchLandingPage;
