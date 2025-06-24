export default function Footer() {
  return (
    <footer className="mt-16 bg-[#483DFF] text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">&copy; 2025 FinMate. All rights reserved.</p>

        <div className="flex space-x-4 text-sm">
          <a href="/about" className="hover:underline">
            Tentang
          </a>
          <a href="/contact" className="hover:underline">
            Kontak
          </a>
          <a href="/privacy" className="hover:underline">
            Privasi
          </a>
        </div>
      </div>
    </footer>
  );
}
