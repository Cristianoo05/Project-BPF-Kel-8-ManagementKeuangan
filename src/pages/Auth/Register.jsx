import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../services/SupabaseClient'; // Import Supabase client Anda

export default function Register() {
  const [username, setUsername] = useState('');     // <-- TAMBAHKAN INI
  const [fullName, setFullName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      // Perhatikan: Supabase akan otomatis membuat entri di tabel 'users'
      // Untuk menyimpan data profil tambahan seperti 'name', Anda perlu membuat tabel terpisah (misal: 'profiles')
      // dan mengaturnya melalui trigger atau setelah signup.
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
        data: {
          // Data tambahan ini akan disimpan di kolom raw_user_meta_data
          // di tabel auth.users Supabase Anda.
          username: username, 
          full_name: fullName 
        }
      }
      });

      if (error) throw error;

      // Supabase secara default mengirimkan email konfirmasi jika fitur itu aktif di dashboard Anda
      setMessage('Registration successful! Please check your email to verify your account.');
      console.log('User registered (check email for verification):', data);
      // Anda mungkin tidak langsung mengarahkan ke dashboard, tapi minta verifikasi email dulu
      // navigate('/login'); // Atau biarkan di halaman ini dengan pesan sukses
    } catch (err) {
      setError(err.message);
      console.error('Registration error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-poppins-extrabold text-center text-gray-800 mb-6">Register</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-sm text-center mb-4">{message}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Untuk Name:
             Supabase Auth hanya menyimpan email dan password. Untuk nama,
             Anda perlu membuat tabel 'profiles' di database Supabase Anda
             dan menyimpannya di sana setelah user signup (misalnya dengan trigger fungsi).
             Untuk kesederhanaan, saya hapus input 'name' dari form ini.
             Jika Anda ingin menambahkannya, Anda perlu logika backend/trigger di Supabase.
          */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="username"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon sm:text-sm"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="full_name"
              id="fullName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon sm:text-sm"
              placeholder="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
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
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Biruneon focus:border-Biruneon sm:text-sm"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-Biruneon text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Biruneon disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/" className="font-medium text-Biruneon hover:text-green-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}