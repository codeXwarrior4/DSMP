import { Link, Outlet, useLocation } from "react-router-dom";

export default function DashboardLayout() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Analyze", path: "/analyze" },
    { name: "History", path: "/history" },
  ];

  return (
    <div className="flex h-screen bg-[#020617] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#020617]/80 border-r border-white/10 p-6">
        <h1 className="text-2xl font-bold mb-10 text-green-400">
          ⚡ TruthLens
        </h1>

        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-2 rounded-lg transition ${
                pathname === item.path
                  ? "bg-green-500/20 text-green-400"
                  : "hover:bg-white/10"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}