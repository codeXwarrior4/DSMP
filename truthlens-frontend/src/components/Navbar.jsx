import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/15 text-xl text-green-400 shadow-neon">
            ⚡
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide text-white">TruthLens</p>
            <p className="text-xs text-gray-400">AI Media Verification</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <Link to="/" className="transition hover:text-green-400">Home</Link>
          <Link to="/upload" className="transition hover:text-green-400">Analyze</Link>
          <Link to="/history" className="transition hover:text-green-400">History</Link>
        </nav>

        <Link
          to="/upload"
          className="rounded-xl px-5 py-2.5 text-sm font-semibold transition neon-button hover:scale-[1.02]"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}