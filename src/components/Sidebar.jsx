// src/components/Sidebar.jsx
import ListMenu from "./ListMenu";

export default function Sidebar() {
    return (
        // Mengganti w-90 dengan w-64 yang valid di Tailwind CSS
        // Mengganti p-10 dengan px-4 py-8 untuk padding yang lebih umum di sidebar
        // Memastikan background putih (bg-white) dan tinggi minimal layar (min-h-screen)
        <div id="sidebar" className="flex min-h-screen w-64 flex-col bg-white px-4 py-8 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                {/* Mengubah text-gray-90 menjadi text-gray-900 karena 90 bukan skala standar */}
                <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-900">
                    Sedap <b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* ListMenu */}
            {/* Jika ListMenu memiliki margin-top yang besar, Anda mungkin ingin menghapusnya
                dari ListMenu.jsx untuk menghindari jarak ganda di bawah subtitle.
                Misalnya, jika ListMenu.jsx punya className="mt-10", Anda bisa menghapusnya. */}
            <ListMenu/>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span className="text-gray-600 flex items-center">Add Menus</span>
                        </div>
                    </div>
                    {/* Disarankan menambahkan alt text untuk gambar */}
                    <img id="footer-avatar" className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" alt="User Avatar" />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}   