import Navbar from "@/components/Navbar";

export default function Settings() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage="settings" />
      <main className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-6">
            <h1 className="text-2xl font-semibold mb-2 text-card-foreground">
              Setări cont
            </h1>
            <p className="text-muted-foreground">
              Aici vei putea gestiona informațiile contului tău și preferințele.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
