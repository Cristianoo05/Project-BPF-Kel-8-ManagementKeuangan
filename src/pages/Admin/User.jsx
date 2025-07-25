import { useEffect, useState } from "react";
import { supabase } from '../../services/SupabaseClient'; 
// import PageHeader from "../../components/PageHeader";
// import axios from "axios";
// import { FiUsers, FiUserCheck, FiMail, FiUser } from "react-icons/fi";
// Komponen untuk ikon sederhana (opsional, tapi membuat tampilan lebih baik)
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9a4 4 0 01-4-4V10a4 4 0 014-4h6a4 4 0 014 4v7a4 4 0 01-4 4z" />
  </svg>
);
export default function User() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        
        // Ambil data profil pengguna
        // Pastikan nama tabel dan kolom sudah benar
        let { data, error } = await supabase
          .from('profiles') // GANTI 'profiles' DENGAN NAMA TABEL ANDA
          .select('nomor_pengguna, username, full_name, role'); // Ambil kolom yang dibutuhkan

        if (error) throw error;

        if (data) {
          setProfiles(data);
          setTotalUsers(data.length);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Gagal mengambil data pengguna: ' + error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
        <p className="text-gray-500 mt-1">Admin / Users</p>

        {/* Kartu Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <UserIcon />
            </div>
            <div className="ml-4">
              <p className="text-gray-500">Total Pengguna</p>
              <p className="text-2xl font-bold text-gray-800">{loading ? '...' : totalUsers}</p>
            </div>
          </div>
          {/* Anda bisa menambahkan kartu statistik lain di sini */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
             {/* Ganti dengan ikon dan data yang relevan */}
             <div className="bg-green-100 p-3 rounded-full"><UserIcon/></div>
             <div className="ml-4"><p className="text-gray-500">Pengguna Aktif</p><p className="text-2xl font-bold text-gray-800">{loading ? '...' : totalUsers}</p></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
             {/* Ganti dengan ikon dan data yang relevan */}
             <div className="bg-yellow-100 p-3 rounded-full"><UserIcon/></div>
             <div className="ml-4"><p className="text-gray-500">Email Terverifikasi</p><p className="text-2xl font-bold text-gray-800">{loading ? '...' : 'N/A'}</p></div>
          </div>
        </div>

        {/* Konten Utama (Tabel dan Detail) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Kolom Tabel Pengguna */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Daftar Pengguna</h2>
            <div className="overflow-x-auto">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="p-4 font-semibold text-gray-600">Nomor Pengguna</th>
                      <th className="p-4 font-semibold text-gray-600">Username</th>
                      <th className="p-4 font-semibold text-gray-600">Full Name</th>
                      <th className="p-4 font-semibold text-gray-600">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.map((profile) => (
                      <tr 
                        key={profile.nomor_pengguna} 
                        className="border-b hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleRowClick(profile)}
                      >
                        <td className="p-4 text-gray-700">{profile.nomor_pengguna}</td>
                        <td className="p-4 text-gray-700">{profile.username}</td>
                        <td className="p-4 text-gray-700">{profile.full_name}</td>
                        <td className="p-4 text-gray-700">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            profile.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {profile.role}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Kolom Detail Pengguna */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
            {selectedUser ? (
              <>
                <h2 className="text-xl font-semibold text-gray-800">Detail Pengguna</h2>
                <div className="mt-4">
                  <p className="text-gray-500">nomor_pengguna</p>
                  <p className="font-mono text-sm bg-gray-100 p-2 rounded">{selectedUser.nomor_pengguna}</p>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500">Username</p>
                  <p className="text-lg font-bold">{selectedUser.username}</p>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500">Full Name</p>
                  <p className="text-lg font-bold">{selectedUser.full_name}</p>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500">Role</p>
                  <p className="text-lg font-bold">{selectedUser.role}</p>
                </div>
              </>
            ) : (
              <>
                <UserIcon />
                <p className="mt-4 text-gray-500">Pilih pengguna untuk melihat detail</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
