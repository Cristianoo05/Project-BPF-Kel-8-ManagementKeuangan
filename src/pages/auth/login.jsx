// src/pages/auth/login.jsx
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#483DFF]">Login ke FinMate</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#483DFF]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#483DFF]"
              placeholder="********"
              required
            />
          </div>
          <div className="text-right text-sm">
            <a href="/forgot-password" className="text-[#483DFF] hover:underline">
              Lupa Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#483DFF] text-white py-2 rounded-md hover:bg-[#372fcc] transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Belum punya akun? <a href="/register" className="text-[#483DFF] hover:underline">Daftar di sini</a>
        </p>
      </div>
    </div>
  );
}
