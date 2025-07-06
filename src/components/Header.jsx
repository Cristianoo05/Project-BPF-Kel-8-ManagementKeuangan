import { FaBell, FaSearch } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { FiBarChart2 } from "react-icons/fi";

export default function Header() {
  return (
    <header
      id="dashboard-header"
      className="flex justify-between items-center bg-white px-6 py-4 shadow-md"
    >
      {/* Kiri: Judul & Search */}
      <div className="flex items-center gap-6 w-1/2">
        <h2 className="text-xl font-extrabold text-[#483DFF]">Dashboard</h2>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2 rounded-md border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-[#D4FF00]"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Kanan: Ikon & Profil */}
      <div className="flex items-center gap-4">
        <HeaderIcon icon={<FaBell />} badge="3" color="blue" />
        <HeaderIcon icon={<FiBarChart2 />} color="emerald" />
        <HeaderIcon icon={<SlSettings />} color="red" />

        <div className="flex items-center gap-3 pl-4 border-l border-gray-300">
          <span className="text-sm text-gray-600">
            Hello, <b className="text-[#483DFF]">Admin</b>
          </span>
          <img
            src="https://avatar.iran.liara.run/public/28"
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full border-2 border-[#D4FF00]"
          />
        </div>
      </div>
    </header>
  );
}

// Komponen Icon dengan Badge Opsional
function HeaderIcon({ icon, badge, color = "blue" }) {
  const bgColor = {
    blue: "bg-blue-100 text-blue-600",
    emerald: "bg-emerald-100 text-emerald-600",
    red: "bg-red-100 text-red-500",
  };

  return (
    <div className={`relative p-3 rounded-xl cursor-pointer ${bgColor[color]}`}>
      {icon}
      {badge && (
        <span className="absolute -top-1 -right-1 bg-[#D4FF00] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}
