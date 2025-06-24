// src/layouts/AdminLayouts.jsx
import { Outlet } from 'react-router-dom';
// import Sidebar from "../components/Sidebar"; // kalau ingin aktifkan sidebar

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet /> {/* <- ini wajib untuk render child route seperti /admin/faq */}
      </main>
    </div>
  );
}
