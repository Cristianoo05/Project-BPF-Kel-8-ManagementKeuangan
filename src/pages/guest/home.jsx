import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="p-10 bg-[#483DFF] mb-12">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md">
            Aplikasi <span className="text-[#D4FF00]">Trading</span> dan{" "}
            <span className="text-[#D4FF00]">Investasi</span> Beragam Aset
          </h1>
          <h5 className="text-lg sm:text-xl text-white/90">
            Jual, Beli, dan Trading Saham AS, Aset Kripto, Emas, dan Reksa Dana
          </h5>
          <div className="mt-6 space-x-4">
            <a
              href="/register"
              className="inline-block px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-[#1B1B1B] transition"
            >
              Go To FinMate Trade
            </a>
            <Link
              to="/faq"
              className="inline-block px-6 py-3 border border-yellow-300 text-yellow-300 rounded-md font-medium hover:bg-yellow-300 hover:text-[#1B1B1B] transition"
            >
              Lihat FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1B1B1B]">
          Fitur Unggulan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2 text-[#483DFF]">
              Manajemen Keuangan
            </h3>
            <p className="text-gray-700">
              Atur pemasukan dan pengeluaranmu dengan dashboard yang mudah
              digunakan.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2 text-[#483DFF]">
              Statistik & Grafik
            </h3>
            <p className="text-gray-700">
              Lihat ringkasan keuangan kamu dalam bentuk grafik interaktif.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2 text-[#483DFF]">
              Tips Keuangan
            </h3>
            <p className="text-gray-700">
              Akses artikel dan tips pengelolaan uang yang cocok untuk
              mahasiswa.
            </p>
          </div>
        </div>
      </section>

      {/* Biografi Founder (FAQ Icon Bio Section) */}
      {/* Biografi Founder (FAQ Icon Bio Section) */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-12 border border-gray-200">
        <h2 className="text-5xl font-bold text-[#483DFF] mb-4 text-center">
          Our Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F9F9F9] rounded-lg p-4 shadow-sm text-center">
            <img
              src="/public/images/john1.jpg"
              alt="Daniel John Tomsanit"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-[#1B1B1B]">
              Daniel John Tomsanit
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              CEO & Visionary. Seorang pemimpin dengan visi membangun masa depan finansial yang inklusif dan cerdas.
            </p>
          </div>
          <div className="bg-[#F9F9F9] rounded-lg p-4 shadow-sm text-center">
            <img
              src="/images/cristiano.jpg"
              alt="Cristiano"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-[#1B1B1B]">
              Cristiano
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              CTO & Developer. Ahli teknologi yang membangun solusi manajemen keuangan berbasis AI dan data.
            </p>
          </div>
          <div className="bg-[#F9F9F9] rounded-lg p-4 shadow-sm text-center">
            <img
              src="/images/Tasya1.JPG"
              alt="Tasya Berliana"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-[#1B1B1B]">
              Tasya Berliana
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              CMO & Designer. Menggabungkan estetika dengan fungsi dalam membangun branding dan pengalaman pengguna.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center p-8 rounded-lg bg-gradient-to-r from-[#B2D600] to-[#4A6000] text-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Siap menjadi lebih cerdas secara finansial?
        </h2>
        <p className="mb-6">
          Bergabung sekarang dan mulai atur keuanganmu dengan lebih mudah dan
          efisien!
        </p>
        <a
          href="/register"
          className="bg-[#1B1B1B] text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#1B1B1B] transition border border-white"
        >
          Mulai Sekarang
        </a>
      </section>
    </div>
  );
}
