import { BsFillPeopleFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";

import { IoMdList } from "react-icons/io";
import { MdDashboard, MdFastfood} from "react-icons/md";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function ListMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-purple bg-puple-200 font-extrabold" : 
            "text-gray-600 hover:text-purple hover:bg-purple-200 hover:font-extrabold"
        }`
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink
            id="menu-1"
            to="/admin"
            className={menuClass}
          >
            <MdDashboard className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-2"
            to="/profile"
            className={menuClass}
          >
            <BsGearFill className="mr-4 text-xl" />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-3"
            to="/users"
            className={menuClass}
          >
            <BsFillPeopleFill className="mr-4 text-xl" />
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-4"
            to="/faq"
            className={menuClass}
          >
            <BsQuestionCircle className="mr-4 text-xl" />
            FAQ
          </NavLink>
        </li>
      </ul>

    </div>
  );
}
