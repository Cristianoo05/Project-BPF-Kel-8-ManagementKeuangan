import {
  FiHome,
  FiUser,
  FiSettings,
  FiMessageCircle,
  FiHelpCircle,
  FiPlus,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-72 min-h-screen bg-gradient-to-b from-[#B2D600] to-[#4A6000] shadow-2xl text-white">
      
      {/* Logo minimal kiri atas */}
      <div className="flex items-center gap-2 px-6 pt-6 pb-4">
        <div className="w-10 h-10 bg-[#483DFF] rounded-full flex items-center justify-center text-xl font-bold">
          F
        </div>
        <h1 className="text-lg font-extrabold text-white tracking-wide">FinMate</h1>
      </div>

      {/* Navigasi utama */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        <SidebarItem icon={<FiHome />} label="Dashboard" to="/admin" />
        <SidebarItem icon={<FiUser />} label="User Management" to="/users" />
        <SidebarItem icon={<FiSettings />} label="Profile Setting" to="/profile" />
        <SidebarItem icon={<FiMessageCircle />} label="Contact" to="/contact" />
        <SidebarItem icon={<FiHelpCircle />} label="FAQ" to="/faq" />
      </nav>

      {/* Tombol Add Menu */}
      <div className="px-6 py-4">
        <button className="w-full flex items-center justify-center gap-2 bg-[#D4FF00] text-black font-semibold px-4 py-2 rounded-lg hover:bg-white transition">
          <FiPlus /> Add Menu
        </button>
      </div>

      {/* Footer mini */}
      <footer className="text-center text-sm text-white/60 pb-4">
        <p>FinMate Admin</p>
        <p className="text-xs">&copy; 2025 All Rights Reserved</p>
      </footer>
    </aside>
  );
}

function SidebarItem({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
        ${
          isActive
            ? "bg-[#483DFF] text-white"
            : "text-white/80 hover:bg-white/20 hover:text-white"
        }`
      }
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </NavLink>
  );
}
