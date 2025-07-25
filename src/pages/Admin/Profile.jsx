import { useState, useEffect } from "react";
import { supabase } from "../../services/SupabaseClient"; // Sesuaikan path
import { Link } from 'react-router-dom' 

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getProfile() {
      try {
        setLoading(true);

        // 1. Ambil sesi pengguna yang sedang login
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) throw sessionError;

        if (session) {
          const { user } = session;
          setUser(user);

          // 2. Ambil data dari tabel 'profiles' berdasarkan user.id
          // .single() digunakan karena kita hanya mengharapkan satu baris data
          const { data, error, status } = await supabase
            .from("profiles")
            .select(`username, full_name, website, avatar_url`)
            .eq("id", user.id)
            .single();

          if (error && status !== 406) {
            throw error;
          }

          if (data) {
            setProfile(data);
          }
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }

    getProfile();
  }, []); // Jalankan sekali saat komponen dimuat

  if (loading) {
    return <div className="p-8">Loading profile...</div>;
  }

  if (!user) {
    return <div className="p-8">Please log in to see your profile.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-6">
        {/* Foto Profil */}
        <img
          src={profile?.avatar_url || `https://i.pravatar.cc/150?u=${user.id}`} // Tampilkan avatar atau gambar default
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          {/* Nama dan Username */}
          <h1 className="text-3xl font-bold text-gray-800">
            {profile?.full_name || "No Name Set"}
          </h1>
          <p className="text-md text-gray-500">
            @{profile?.username || "no_username"}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Informasi Pengguna</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <p className="text-lg text-gray-800 bg-gray-100 p-2 rounded">
              {user.email}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Website
            </label>
            <p className="text-lg text-gray-800">
              {profile?.website || "Not set"}
            </p>
          </div>
        </div>
      </div>

      {/* Tambahkan tombol untuk edit profil di sini */}
      <div className="mt-2 text-right">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
      <div className="mt-2 text-right">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Log Out
        </button>
      </div>
      <Link
        to="/dashboard"
        className="flex items-center space-x-4 border-l pl-4 border-gray-200 cursor-pointer"
      >
        <div className="mt-2 text-left">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Back
          </button>
        </div>
      </Link>
    </div>
  );
}
