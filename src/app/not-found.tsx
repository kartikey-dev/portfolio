import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[var(--bg-primary)]">
      <div className="glass-panel p-12 rounded-3xl border border-[var(--bg-card-border)] max-w-md w-full flex flex-col items-center gap-6 shadow-2xl">
        <span className="text-6xl animate-bounce">🚀</span>
        <h1 className="font-heading text-6xl font-black gradient-text">404</h1>
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Page Not Found</h2>
        <p className="text-sm text-[var(--text-secondary)]">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary" size="md">
            Return to Portfolio
          </Button>
        </Link>
      </div>
    </div>
  );
}
