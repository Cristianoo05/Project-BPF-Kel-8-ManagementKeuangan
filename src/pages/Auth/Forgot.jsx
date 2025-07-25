import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../services/SupabaseClient'; // Import Supabase client Anda

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`, // URL ke halaman untuk update password
      });

      if (error) throw error;

      setMessage('Password reset link has been sent to your email.');
    } catch (err) {
      setError(err.message);
      console.error('Password reset error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-poppins-extrabold text-center text-gray-800 mb-6">Forgot Password</h2>
        <p className="text-center text-gray-600 mb-4">Enter your email address and we'll send you a link to reset your password.</p>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-sm text-center mb-4">{message}</p>}
        <form onSubmit={handleResetPassword} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-Biruneon text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Biruneon disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{' '}
          <Link to="/login" className="font-medium text-Biruneon hover:text-green-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}