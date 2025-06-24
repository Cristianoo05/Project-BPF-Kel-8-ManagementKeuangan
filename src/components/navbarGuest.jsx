import { Link, useLocation } from "react-router-dom";

export default function NavbarGuest() {
  const { pathname } = useLocation();

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition ${
        pathname === to ? "bg-blue-600 text-white" : "text-blue-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-blue-100 p-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold text-blue-800">FinMate</div>
      <div className="flex gap-4">
        {navLink("/", "Beranda")}
        {navLink("/about", "Tentang")}
        {navLink("/contact", "Kontak")}
        {/* Tambahkan menu lain sesuai kebutuhan */}
      </div>
    </nav>
  );
}
