// src/data/faqStorage.js
const STORAGE_KEY = "faq_data";

export const getFaqs = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveFaqs = (faqs) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(faqs));
};
