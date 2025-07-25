import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../services/SupabaseClient'; // Import Supabase client Anda

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    // 1. Proses login seperti biasa
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (authError) throw authError;

    // 2. Jika login berhasil, ambil ID pengguna
    const user = authData.user;
    if (!user) throw new Error("User not found after login.");

    // 3. Ambil data 'role' dari tabel 'profiles' menggunakan ID pengguna
    const { data: profileData, error: profileError } = await supabase
      .from('profiles') // Pastikan nama tabelnya 'profiles'
      .select('role')
      .eq('id', user.id) // Cari profil dengan id yang cocok
      .single(); // Ambil satu baris data

    if (profileError) throw profileError;

    // 4. Arahkan berdasarkan role
    if (profileData.role === 'admin') {
      navigate('/dashboard'); // Admin ke halaman manajemen pengguna
    } else {
      navigate('/'); // Pengguna biasa ke halaman utama
    }

  } catch (err) {
    setError(err.message);
    console.error('Login error:', err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Container kartu putih utama */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

        {/* --- Bagian Logo "Sedap." di dalam kartu putih --- */}
        <div className="text-center mb-8"> {/* mb-8 untuk jarak antara logo dan judul Login */}
            {/* <h1 className="font-poppins-extrabold text-[48px] text-gray-900">
                Sedap <b className="text-Biruneon">.</b>
            </h1> */}
            {/* Opsional: Jika ingin ada subtitle seperti di sidebar */}
            {/* <p className="text-sm text-gray-500 mt-1">Modern Admin Dashboard</p> */}
        </div>
        {/* -------------------------------------------------- */}

        <h2 className="text-3xl font-poppins-extrabold text-center text-gray-800 mb-6">Login</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon sm:text-sm"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon sm:text-sm"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <Link to="/forgot-password" className="font-medium text-Biruneon hover:text-Biruneon-700">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-Biruneon text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Biruneon disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-Biruneon hover:text-Biruneon-700">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}