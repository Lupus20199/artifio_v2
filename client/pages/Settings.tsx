import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  updateDisplayName,
  updateProfilePhoto,
  updatePasswordWithReauth,
  updateEmailWithReauth,
  deleteAccountWithReauth,
} from "@/lib/auth";
import { Lock, User2, Image as ImageIcon, Trash2 } from "lucide-react";

export default function Settings() {
  const { user, loading } = useAuth();
  const { toast } = useToast();

  const [displayName, setDisplayName] = useState("");

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailPassword, setEmailPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [deletePassword, setDeletePassword] = useState("");

  const passwordProviderLinked = useMemo(
    () => !!user?.providerData.find((p) => p.providerId === "password"),
    [user],
  );

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setNewEmail(user.email || "");
    }
  }, [user]);

  function nameInitials(name: string) {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || "";
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar currentPage="settings" />
        <main className="py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-6 animate-pulse" />
          </div>
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar currentPage="settings" />
        <main className="py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Ai nevoie de autentificare</CardTitle>
                <CardDescription>
                  Conectează-te pentru a gestiona setările contului.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <a href="/login">Mergi la autentificare</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="settings" />
      <main className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
              <div className="p-6 relative z-10">
                <h1 className="text-2xl font-semibold mb-2">Setări cont</h1>
                <p className="text-muted-foreground">
                  Gestionează-ți profilul, securitatea și preferințele.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ImageIcon className="h-5 w-5 text-primary" /> Fotografie
                    profil
                  </CardTitle>
                  <CardDescription>
                    Încarcă o fotografie clară pentru contul tău.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Avatar className="h-20 w-20 ring-2 ring-primary/20">
                      <AvatarImage
                        src={photoPreview || user.photoURL || undefined}
                      />
                      <AvatarFallback className="text-lg">
                        {nameInitials(user.displayName || user.email || "")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0] || null;
                          setPhotoFile(f);
                          if (f) {
                            const url = URL.createObjectURL(f);
                            setPhotoPreview(url);
                          } else {
                            setPhotoPreview(null);
                          }
                        }}
                      />
                      <div className="flex flex-col gap-2 w-full sm:w-auto">
                        <Button
                          type="button"
                          variant="secondary"
                          className="w-full sm:w-auto"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          Alege fotografie
                        </Button>
                        <Button
                          type="button"
                          className="w-full sm:w-auto"
                          disabled={!photoFile}
                          onClick={async () => {
                            try {
                              if (!photoFile) return;
                              const max = 5 * 1024 * 1024;
                              if (photoFile.size > max) {
                                throw new Error("Fișierul depășește 5MB.");
                              }
                              const url = await updateProfilePhoto(photoFile);
                              setPhotoFile(null);
                              setPhotoPreview(null);
                              toast({
                                title: "Fotografie actualizată",
                                description:
                                  "Imaginea de profil a fost schimbată cu succes.",
                              });
                            } catch (e: any) {
                              toast({
                                title: "Eroare la încărcare",
                                description:
                                  e?.message ||
                                  "Nu am putut actualiza fotografia.",
                                variant: "destructive" as any,
                              });
                            }
                          }}
                        >
                          Salvează
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        PNG/JPG, max 5MB.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <User2 className="h-5 w-5 text-primary" /> Informații profil
                  </CardTitle>
                  <CardDescription>
                    Actualizează numele afișat și adresa de email.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        if (displayName !== (user.displayName || "")) {
                          await updateDisplayName(displayName.trim());
                        }
                        if (newEmail && newEmail !== user.email) {
                          if (!emailPassword) {
                            throw new Error(
                              "Pentru schimbarea emailului este necesară parola curentă.",
                            );
                          }
                          await updateEmailWithReauth(
                            emailPassword,
                            newEmail.trim(),
                          );
                          setEmailPassword("");
                        }
                        toast({
                          title: "Profil actualizat",
                          description: "Modificările au fost salvate.",
                        });
                      } catch (e: any) {
                        toast({
                          title: "Eroare la salvare",
                          description:
                            e?.message || "Verifică datele introduse.",
                          variant: "destructive" as any,
                        });
                      }
                    }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="displayName">Nume afișat</Label>
                      <Input
                        id="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Numele tău"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="adresa@email.com"
                      />
                    </div>
                    {newEmail !== user.email && (
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="emailPassword">
                          Parola curentă (pentru schimbarea emailului)
                        </Label>
                        <Input
                          id="emailPassword"
                          type="password"
                          value={emailPassword}
                          onChange={(e) => setEmailPassword(e.target.value)}
                          placeholder="Parola curentă"
                        />
                      </div>
                    )}
                    <div className="md:col-span-2">
                      <Button type="submit">Salvează modificările</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Lock className="h-5 w-5 text-primary" /> Schimbă parola
                  </CardTitle>
                  <CardDescription>
                    Alege o parolă puternică și nu o reutiliza pe alte site-uri.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {passwordProviderLinked ? (
                    <form
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                          if (newPassword.length < 6) {
                            throw new Error(
                              "Parola trebuie să aibă cel puțin 6 caractere.",
                            );
                          }
                          if (newPassword !== confirmPassword) {
                            throw new Error("Parolele nu coincid.");
                          }
                          await updatePasswordWithReauth(
                            currentPassword,
                            newPassword,
                          );
                          setCurrentPassword("");
                          setNewPassword("");
                          setConfirmPassword("");
                          toast({
                            title: "Parolă actualizată",
                            description: "Parola a fost schimbată cu succes.",
                          });
                        } catch (e: any) {
                          toast({
                            title: "Eroare la schimbare",
                            description:
                              e?.message || "Nu am putut schimba parola.",
                            variant: "destructive" as any,
                          });
                        }
                      }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Parola curentă</Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="Parola curentă"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">Parolă nouă</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Parolă nouă"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmă parola</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirmă parola"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <Button type="submit">Actualizează parola</Button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      Contul tău este conectat printr-un furnizor extern (de
                      exemplu Google sau Facebook). Schimbarea parolei se face
                      din contul furnizorului respectiv.
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Trash2 className="h-5 w-5 text-destructive" /> Zonă
                    periculoasă
                  </CardTitle>
                  <CardDescription>
                    Ștergerea contului este permanentă și ireversibilă.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {passwordProviderLinked ? (
                    <div className="space-y-2">
                      <Label htmlFor="deletePassword">
                        Confirmă parola pentru a șterge contul
                      </Label>
                      <Input
                        id="deletePassword"
                        type="password"
                        value={deletePassword}
                        onChange={(e) => setDeletePassword(e.target.value)}
                        placeholder="Parola curentă"
                      />
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Pentru conturile conectate prin furnizor extern,
                      confirmarea se va face prin re-autentificare.
                    </p>
                  )}
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={async () => {
                      try {
                        if (passwordProviderLinked) {
                          if (!deletePassword) {
                            throw new Error(
                              "Introdu parola pentru a confirma.",
                            );
                          }
                          await deleteAccountWithReauth(deletePassword);
                        } else {
                          toast({
                            title: "Confirmare necesară",
                            description:
                              "Te rugăm să te deconectezi și să folosești autentificarea furnizorului pentru a șterge contul.",
                          });
                          return;
                        }
                        toast({
                          title: "Cont șters",
                          description: "Ne pare rău să te vedem plecând.",
                        });
                        window.location.href = "/";
                      } catch (e: any) {
                        toast({
                          title: "Eroare la ștergere",
                          description:
                            e?.message || "Nu am putut șterge contul.",
                          variant: "destructive" as any,
                        });
                      }
                    }}
                  >
                    Șterge contul
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
