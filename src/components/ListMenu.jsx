import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdList } from "react-icons/io";
import { MdDashboard, MdFastfood } from "react-icons/md";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-putih bg-Biruneon-200 font-extrabold"
            : "text-gray-600 hover:text-Biruneon hover:bg-Biruneon-200 hover:font-extrabold"
        }`;
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdDashboard className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            <IoMdList className="mr-4 text-xl" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/customers" className={menuClass}>
            <BsFillPeopleFill className="mr-4 text-xl" />
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/company-profile" className={menuClass}>
            <BsFillPeopleFill className="mr-4 text-xl" />
            company-profile
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-4" to="/faq" className={menuClass}>
            <BsQuestionCircle className="mr-4 text-xl" />
            F
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
