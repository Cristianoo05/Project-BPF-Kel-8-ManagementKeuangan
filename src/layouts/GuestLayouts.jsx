import { Outlet } from "react-router-dom";
import NavbarGuest from "../components/navbarGuest"; // Huruf besar sesuai nama file

export default function GuestLayout() {
  return (
    <>
      <NavbarGuest />
      <main className="p-6">
        <Outlet />
      </main>
      <footer className="text-center p-4 text-gray-500">
        © 2025 YourCompany. All rights reserved.
      </footer>
    </>
  );
}
