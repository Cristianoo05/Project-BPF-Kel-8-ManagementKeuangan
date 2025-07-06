import React from 'react';
import { Link } from 'react-router-dom';

export default function Forgot() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Password reset request submitted!');
    // Logika reset password Anda di sini
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-poppins-extrabold text-center text-gray-800 mb-6">Forgot Password</h2>
        <p className="text-center text-gray-600 mb-4">Enter your email address and we'll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-hijau focus:border-hijau sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-hijau text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hijau"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{' '}
          <Link to="/login" className="font-medium text-hijau hover:text-green-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}