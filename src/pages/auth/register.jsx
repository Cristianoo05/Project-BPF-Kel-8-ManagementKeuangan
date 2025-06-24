// src/pages/auth/register.jsx
export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#D4FF00]">Buat Akun FinMate</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4FF00]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4FF00]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4FF00]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#D4FF00] text-black py-2 rounded-md hover:bg-lime-400 transition"
          >
            Daftar
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Sudah punya akun? <a href="/login" className="text-[#483DFF] hover:underline">Login sekarang</a>
        </p>
      </div>
    </div>
  );
}
