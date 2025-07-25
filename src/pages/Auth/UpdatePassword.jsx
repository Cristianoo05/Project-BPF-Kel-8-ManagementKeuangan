import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/SupabaseClient';

export default function UpdatePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Ini penting: Supabase akan otomatis menangani sesi dari URL hash setelah reset password.
  // Anda bisa menggunakan useEffect untuk memverifikasi sesi atau langsung menampilkan form.
  useEffect(() => {
    // Supabase client secara otomatis membaca token dari URL hash setelah redirect
    // dan mencoba untuk mendapatkan sesi.
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        // Jika tidak ada sesi, mungkin link sudah expired atau tidak valid
        setError("Invalid or expired password reset link. Please try again.");
      }
    };
    getSession();
  }, []);


  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }
    if (password.length < 6) { // Min password length
        setError('Password must be at least 6 characters long.');
        setLoading(false);
        return;
    }

    try {
      const { data, error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      setMessage('Your password has been updated successfully!');
      // Setelah password diupdate, mungkin langsung login atau arahkan ke halaman login
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.message);
      console.error('Password update error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-poppins-extrabold text-center text-gray-800 mb-6">Update Password</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-sm text-center mb-4">{message}</p>}
        <form onSubmit={handleUpdatePassword} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
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
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
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
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
}