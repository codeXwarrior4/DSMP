import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-lg ${
      pathname === path
        ? "bg-green-500 text-black"
        : "text-gray-400 hover:bg-white/10"
    }`;

  return (
    <div className="w-60 h-screen bg-black/40 backdrop-blur-lg border-r border-white/10 p-4">
      <h1 className="text-green-400 font-bold text-xl mb-6">⚡ TruthLens</h1>

      <nav className="flex flex-col gap-3">
        <Link to="/" className={linkClass("/")}>Home</Link>
        <Link to="/upload" className={linkClass("/upload")}>Analyze</Link>
        <Link to="/history" className={linkClass("/history")}>History</Link>
      </nav>
    </div>
  );
}