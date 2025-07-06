import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdList } from "react-icons/io";
import { MdDashboard, MdFastfood} from "react-icons/md";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function ListMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink
            id="menu-1"
            to="/"
            className={menuClass}
          >
            <MdDashboard className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-2"
            to="/orders"
            className={menuClass}
          >
            <IoMdList className="mr-4 text-xl" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-3"
            to="/customers"
            className={menuClass}
          >
            <BsFillPeopleFill className="mr-4 text-xl" />
            Customers
          </NavLink>
        </li>
      </ul>

    </div>
  );
}
