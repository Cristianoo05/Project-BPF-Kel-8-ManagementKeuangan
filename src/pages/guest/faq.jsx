// src/pages/guest/faq.jsx
import { useEffect, useState } from "react";
import { getFaqs } from "../../data/faqStorage";
import { Link } from "react-router-dom";

export default function GuestFAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const storedFaqs = getFaqs();
    setFaqs(storedFaqs);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-8">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          to="/"
          className="inline-flex items-center bg-blue-600 py-3 px-3 rounded-2xl text-white hover:text-gray-200 font-medium"
        >
          <span className="text-xl mr-1">←</span> Kembali ke Beranda
        </Link>
      </div>

      {/* Judul */}
      <h1 className="text-4xl font-bold mb-8 text-indigo-700 text-center">
        Pertanyaan Umum (FAQ)
      </h1>

      {/* Daftar FAQ */}
      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.length === 0 ? (
          <p className="text-gray-600 text-center">Belum ada FAQ yang tersedia.</p>
        ) : (
          faqs.map((faq) => (
            <details
              key={faq.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <summary className="font-semibold cursor-pointer text-indigo-700">
                {faq.question}
              </summary>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </details>
          ))
        )}
      </div>
    </div>
  );
}
