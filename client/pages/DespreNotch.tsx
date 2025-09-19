import { useEffect } from "react";

export default function DespreNotch() {
  useEffect(() => {
    // Redirect to homepage with anchor
    window.location.href = "/#cum-functioneaza";
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Redirecting...
        </h1>
        <p className="text-muted-foreground">
          Te redirecționez către secțiunea "Cum funcționează Notch?"
        </p>
      </div>
    </div>
  );
}
