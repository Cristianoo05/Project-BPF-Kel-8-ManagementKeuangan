import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import { FiUsers, FiUserCheck, FiMail, FiUser } from "react-icons/fi";

export default function User() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => setUsers(res.data.users))
      .catch(err => console.error(err));
  }, []);

  const userCount = users.length;
  const activeCount = users.filter(u => u.gender === "male" || u.gender === "female").length;

  return (
    <div className="p-6 bg-gradient-to-tr from-white via-blue-50 to-emerald-50 min-h-screen">
      <PageHeader title="User Management" breadcrumb={["Admin", "Users"]} />

      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <StatCard icon={<FiUsers />} title="Total Pengguna" value={userCount} color="text-blue-600" />
        <StatCard icon={<FiUserCheck />} title="Pengguna Aktif" value={activeCount} color="text-emerald-600" />
        <StatCard icon={<FiMail />} title="Email Terverifikasi" value={`${Math.round(userCount * 0.75)}+`} color="text-yellow-500" />
      </div>

      {/* Konten Utama */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Tabel User */}
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Daftar Pengguna</h3>
          <div className="overflow-auto rounded-lg">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-blue-50 text-blue-700">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Nama</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Kota</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => setSelected(user)}
                    className="hover:bg-blue-50 transition cursor-pointer border-b"
                  >
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.firstName} {user.lastName}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.address.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Panel Samping */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          {selected ? (
            <>
              <div className="flex items-center space-x-4 mb-4">
                <img src={selected.image} alt="avatar" className="w-16 h-16 rounded-full shadow" />
                <div>
                  <h4 className="text-lg font-bold text-gray-700">{selected.firstName} {selected.lastName}</h4>
                  <p className="text-sm text-gray-400">{selected.email}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li><b>Role:</b> {selected.role}</li>
                <li><b>Gender:</b> {selected.gender}</li>
                <li><b>Phone:</b> {selected.phone}</li>
                <li><b>Age:</b> {selected.age}</li>
                <li><b>Address:</b> {selected.address.address}, {selected.address.city}</li>
                <li><b>Company:</b> {selected.company.name}</li>
                <li><b>Crypto:</b> {selected.crypto.coin}</li>
              </ul>
              <button
                onClick={() => setSelected(null)}
                className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Tutup Detail
              </button>
            </>
          ) : (
            <div className="text-gray-400 text-center">
              <FiUser className="text-5xl mx-auto mb-3" />
              <p>Pilih pengguna untuk melihat detail.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, color }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition hover:scale-[1.01] border">
      <div className="flex items-center space-x-4">
        <div className={`text-3xl ${color}`}>{icon}</div>
        <div>
          <h4 className="text-sm text-gray-500">{title}</h4>
          <p className="text-xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}
