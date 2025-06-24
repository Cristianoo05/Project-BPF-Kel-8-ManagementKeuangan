// src/layouts/GuestLayout.jsx
import { Outlet } from "react-router-dom";
import NavbarGuest from "../components/navbarGuest";
import Footerguest from "../components/footerGuest";

export default function GuestLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavbarGuest />
      
      {/* Konten Utama */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      
      {/* Footer selalu di bawah */}
      <Footerguest />
    </div>
  );
}
