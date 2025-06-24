import { Outlet } from "react-router-dom";
import NavbarGuest from "../components/navbarGuest"; // Huruf besar sesuai nama file
import Footerguest from "../components/footerGuest"; // Huruf besar sesuai nama file

export default function GuestLayout() {
  return (
    <>
      <NavbarGuest />
      <main className="p-6">
        <Outlet />
      </main>
      
      <Footerguest />
    </>
  );
}
