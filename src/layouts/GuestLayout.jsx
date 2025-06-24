import { Outlet } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import TopProduct from "../components/TopProduct";
import Testimoni from "../components/Testimoni";
import Footer from "../components/Footer";
import ProductChecker from "../pages/ProdukChecker";

export default function GuestLayout(){
    return (
    <div className="bg-gray-100 min-h-screen flex">

      <div className="flex-1">
        <NavigationBar />
        <HeroSection />
        <About />
        <TopProduct />
        <Testimoni />
        <ProductChecker />
        <Footer />

      </div>
    </div>
    )
}


