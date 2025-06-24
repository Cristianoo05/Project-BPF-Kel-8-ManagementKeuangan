import { useEffect, useState } from "react";
import { getFaqs, saveFaqs } from "../../data/faqStorage";

export default function FAQManager() {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [editId, setEditId] = useState(null); // id sedang diedit
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");

  useEffect(() => {
    setFaqs(getFaqs());
  }, []);

  const handleAdd = () => {
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    const newFaq = {
      id: Date.now(),
      question: newQuestion,
      answer: newAnswer,
    };

    const updated = [...faqs, newFaq];
    setFaqs(updated);
    saveFaqs(updated);
    setNewQuestion("");
    setNewAnswer("");
  };

  const handleDelete = (id) => {
    const updated = faqs.filter((faq) => faq.id !== id);
    setFaqs(updated);
    saveFaqs(updated);
  };

  const handleEditClick = (faq) => {
    setEditId(faq.id);
    setEditQuestion(faq.question);
    setEditAnswer(faq.answer);
  };

  const handleSaveEdit = (id) => {
    const updated = faqs.map((faq) =>
      faq.id === id
        ? { ...faq, question: editQuestion, answer: editAnswer }
        : faq
    );
    setFaqs(updated);
    saveFaqs(updated);
    setEditId(null);
  };

  const handleCancelEdit = () => {
    setEditId(null);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#483DFF]">Manajemen FAQ</h2>

      {/* Form Tambah FAQ */}
      <div className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Pertanyaan baru"
          className="w-full p-2 border rounded"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <textarea
          placeholder="Jawaban baru"
          className="w-full p-2 border rounded"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        ></textarea>
        <button
          onClick={handleAdd}
          className="bg-[#483DFF] text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Tambah FAQ
        </button>
      </div>

      {/* Daftar FAQ */}
      <ul className="space-y-4">
        {faqs.map((faq) => (
          <li
            key={faq.id}
            className="bg-white p-4 rounded shadow space-y-2 border"
          >
            {editId === faq.id ? (
              <>
                <input
                  type="text"
                  className="w-full font-semibold text-indigo-700 p-2 border rounded"
                  value={editQuestion}
                  onChange={(e) => setEditQuestion(e.target.value)}
                />
                <textarea
                  className="w-full p-2 border rounded text-gray-700"
                  value={editAnswer}
                  onChange={(e) => setEditAnswer(e.target.value)}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSaveEdit(faq.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Simpan
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="text-gray-500 hover:underline"
                  >
                    Batal
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="font-semibold text-indigo-700">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleEditClick(faq)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(faq.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Hapus
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
