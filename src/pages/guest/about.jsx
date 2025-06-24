export default function About() {
  return (
    <div className="p-6">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[#483DFF] mb-4">
          Tentang FinMate
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          FinMate adalah platform pengelolaan keuangan digital yang dibuat khusus
          untuk mahasiswa dan fresh graduate agar dapat mengatur keuangannya secara
          mudah, cerdas, dan aman.
        </p>
      </section>

      {/* Visi Misi */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#D4FF00] mb-2">Visi Kami</h2>
          <p className="text-gray-700">
            Menjadi aplikasi keuangan nomor satu untuk generasi muda Indonesia yang
            ingin mandiri secara finansial.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#D4FF00] mb-2">Misi Kami</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Membantu pengguna mencatat dan menganalisis keuangan harian</li>
            <li>Memberikan edukasi keuangan yang mudah dipahami</li>
            <li>Menghubungkan pengguna dengan peluang investasi yang aman</li>
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-[#4A6000] mb-4">
          Tim di Balik FinMate
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          FinMate dikembangkan oleh tim muda yang berpengalaman dalam teknologi,
          keuangan, dan pendidikan. Kami percaya bahwa pengelolaan uang tidak
          harus rumit—cukup dimulai dari kebiasaan kecil.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-[#483DFF]">Daniel</h3>
            <p className="text-sm text-gray-600">CEO & Product Designer</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-[#483DFF]">Nadia</h3>
            <p className="text-sm text-gray-600">CTO & Backend Developer</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-[#483DFF]">Arif</h3>
            <p className="text-sm text-gray-600">CMO & Financial Advisor</p>
          </div>
        </div>
      </section>
    </div>
  );
}
