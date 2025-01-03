import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600">
      <div className="absolute inset-0 bg-white/[0.025] bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
        <div className="max-w-3xl space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Auth.js Demo
            </span>
          </h1>

          {/* Subtitle with improved contrast */}
          <p className="mx-auto max-w-xl text-lg text-white/80 md:text-xl">
            A modern authentication system built with security and simplicity in
            mind
          </p>

          <div className="flex flex-col items-center gap-4">
            <LoginButton mode="redirect">
              <Button
                size="lg"
                variant="secondary"
                className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <span className="relative flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </LoginButton>

            <p className="text-sm text-white/60">Secure • Fast • Open Source</p>
          </div>
        </div>
      </div>
    </main>
  );
}
