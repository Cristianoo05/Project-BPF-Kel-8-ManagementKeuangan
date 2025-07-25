import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Tambahkan state untuk input
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form
    setNama("");
    setEmail("");
    setPesan("");

    // Hilangkan alert setelah 4 detik
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[#483DFF] mb-4">
          Hubungi Kami
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Kami senang mendengar masukan, pertanyaan, atau kerja sama dari kamu.
          Silakan hubungi tim FinMate melalui formulir di bawah ini.
        </p>
      </section>

      {/* Alert */}
      {submitted && (
        <div className="max-w-2xl mx-auto mb-6 text-green-700 bg-green-100 border border-green-300 p-4 rounded-md text-center font-medium transition">
          Terima kasih telah menghubungi pihak kami!
        </div>
      )}

      {/* Form */}
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#483DFF]"
              placeholder="Masukkan nama kamu"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#483DFF]"
              placeholder="contoh@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">Pesan</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#483DFF]"
              placeholder="Tulis pesan kamu di sini..."
              required
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#D4FF00] hover:bg-[#b7e700] text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Kirim Pesan
          </button>
        </form>
      </section>

      {/* Info Kontak */}
      <section className="text-center mt-16 text-gray-700">
        <h2 className="text-xl font-semibold mb-2">Atau hubungi kami di</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:support@finmate.com"
            className="text-[#483DFF] hover:underline"
          >
            support@finmate.com
          </a>
        </p>
        <p>
          Telepon: <span className="text-[#4A6000]">+62 812-3456-7890</span>
        </p>
        <p>Alamat: Jl. Finansial No. 88, Jakarta</p>
      </section>
    </div>
  );
}
