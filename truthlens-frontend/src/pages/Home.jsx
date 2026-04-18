import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-heroGlow opacity-100" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-10" />

        <section className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center justify-center px-6 py-16 lg:px-8">
          
          {/* CENTER CONTENT */}
          <div className="flex flex-col items-center text-center max-w-3xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-green-300">
              For journalists, researchers and fact-checkers
            </div>

            {/* Heading (FIXED) */}
           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug text-white">
           Fake content travels fast. <br />
             <span className="text-green-400 italic">
             Truth deserves verification.
             </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-6 text-gray-400 max-w-xl text-sm md:text-base">
              Verify images and videos in under 15 seconds before publishing.
              Detect manipulated content with modern AI analysis and present a
              clean, confidence-based verdict.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                to="/upload"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm md:text-base font-semibold transition neon-button hover:scale-[1.02]"
              >
                Analyze free now →
              </Link>

             <Link
               to="/how-it-works"
               className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm md:text-base font-semibold text-white transition hover:bg-white/10"
                   >
                  How it works →
                 </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>⏱ &lt; 15s per analysis</span>
              <span>🎯 95%+ confidence workflow</span>
              <span>🧪 Multi-layer AI review</span>
            </div>

          </div>
        </section>

        {/* Feature Cards */}
        <section className="relative mx-auto max-w-5xl px-6 pb-16 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="mb-4 text-2xl">⚡</div>
              <h3 className="text-xl font-semibold text-white">Fast</h3>
              <p className="mt-2 text-gray-400 text-sm">
                High-speed verification in seconds
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="mb-4 text-2xl">🔍</div>
              <h3 className="text-xl font-semibold text-white">Accurate</h3>
              <p className="mt-2 text-gray-400 text-sm">
                AI-powered detection system
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="mb-4 text-2xl">📊</div>
              <h3 className="text-xl font-semibold text-white">Reliable</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Clean and detailed results
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}