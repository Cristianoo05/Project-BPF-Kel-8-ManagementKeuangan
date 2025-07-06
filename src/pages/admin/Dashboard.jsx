import PageHeader from "../../components/PageHeader";
import dashboardBanner from "../../assets/images/dashboard-banner.png";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { FiUsers, FiMail, FiHelpCircle, FiActivity } from "react-icons/fi";

const trafficData = [
  { name: "Sen", visits: 120 },
  { name: "Sel", visits: 200 },
  { name: "Rab", visits: 180 },
  { name: "Kam", visits: 250 },
  { name: "Jum", visits: 300 },
  { name: "Sab", visits: 220 },
  { name: "Min", visits: 170 },
];

export default function Dashboard() {
  return (
    <div className="bg-white min-h-screen px-6 pb-20">
      <PageHeader title="Dashboard Admin" breadcrumb={["Admin", "Dashboard"]}>
        <button className="bg-[#483DFF] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Pengaturan Sistem
        </button>
      </PageHeader>

      {/* Banner */}
      <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
        <img src={dashboardBanner} className="w-full h-64 object-cover" alt="Banner" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/60 to-[#483DFF]/70 p-6 flex items-center">
          <div>
            <h2 className="text-white text-3xl font-bold mb-2">Selamat Datang Admin!</h2>
            <p className="text-gray-200 max-w-xl">
              Kelola sistem, pantau statistik, dan atur seluruh aktivitas platform keuangan secara efisien.
            </p>
          </div>
        </div>
      </div>

      {/* Statistik Panel */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Kunjungan Minggu Ini" value="1.320" color="border-blue-600" icon={<FiActivity />}>
          <ResponsiveContainer width="100%" height={60}>
            <LineChart data={trafficData}>
              <Tooltip />
              <Line type="monotone" dataKey="visits" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </StatCard>

        <StatCard title="Akun Terdaftar" value="584" color="border-[#D4FF00]" icon={<FiUsers />}>
          <p className="text-sm text-gray-500 mt-2">+32 dalam 7 hari terakhir</p>
        </StatCard>

        <StatCard title="Pesan Kontak Masuk" value="27" color="border-yellow-400" icon={<FiMail />}>
          <p className="text-sm text-gray-500 mt-2">Periksa halaman kontak</p>
        </StatCard>

        <StatCard title="FAQ Aktif" value="12" color="border-purple-500" icon={<FiHelpCircle />}>
          <p className="text-sm text-gray-500 mt-2">Perbarui informasi berkala</p>
        </StatCard>
      </div>

      {/* Tambahan Bawah */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Info Sistem */}
        <div className="bg-gradient-to-br from-[#B2D600]/20 to-[#4A6000]/20 rounded-xl shadow-md p-6 border border-[#B2D600]">
          <h3 className="text-lg font-semibold text-[#4A6000] mb-2">Status Sistem</h3>
          <p className="text-gray-700">✅ Semua layanan berjalan normal.</p>
          <p className="text-gray-700">🕒 Terakhir backup: 23 Juni 2025, 03:45</p>
        </div>

        {/* Aktivitas Admin */}
        <div className="bg-gradient-to-br from-[#483DFF]/10 to-blue-100/20 rounded-xl shadow-md p-6 border border-[#483DFF]">
          <h3 className="text-lg font-semibold text-[#483DFF] mb-2">Aktivitas Admin Terakhir</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Menambah 2 pertanyaan baru ke FAQ.</li>
            <li>Menonaktifkan akun pengguna spam.</li>
            <li>Membalas 3 pesan kontak masuk.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, color, icon, children }) {
  return (
    <div
      className={`bg-white shadow-md rounded-xl p-5 border-l-4 ${color} hover:shadow-lg transition hover:scale-[1.01]`}
    >
      <div className="flex items-center gap-3 mb-3 text-gray-800">
        <div className="text-xl text-[#483DFF]">{icon}</div>
        <h4 className="text-sm font-medium">{title}</h4>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {children}
    </div>
  );
}
