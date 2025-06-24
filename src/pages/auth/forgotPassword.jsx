// src/pages/auth/forgotPassword.jsx
export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#4A6000]">Reset Password</h2>
        <p className="text-center text-gray-600 mb-4 text-sm">
          Masukkan email kamu untuk mendapatkan tautan reset password.
        </p>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A6000]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4A6000] text-white py-2 rounded-md hover:bg-[#3a4d00] transition"
          >
            Kirim Tautan Reset
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Ingat password? <a href="/login" className="text-[#483DFF] hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
