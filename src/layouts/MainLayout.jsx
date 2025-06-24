import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header"

export default function MainLayout(){
    return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 px-0 py-0">
        <Header/>
        <Outlet/>
      </div>
    </div>
    )
}