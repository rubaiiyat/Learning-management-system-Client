import { CornerRightDown, Menu, Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#F16623] font-bold underline text-base"
              : "hover:underline text-base"
          }
        >
          Home
        </NavLink>
      </li>
      {
        <li>
          <NavLink
            to="/Courses"
            className={({ isActive }) =>
              isActive
                ? "text-[#F16623] font-bold underline text-base"
                : "hover:underline text-base"
            }
          >
            Courses
          </NavLink>
        </li>
      }
      <li>
        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            isActive
              ? "text-[#F16623] font-bold underline text-base"
              : "hover:underline text-base"
          }
        >
          Our Teachers
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive
              ? "text-[#F16623] font-bold underline text-base"
              : "hover:underline text-base"
          }
        >
          My Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#F16623] font-bold underline text-base"
              : "hover:underline text-base"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#F16623] font-bold underline text-base"
              : "hover:underline text-base"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-0 md:px-24 lg:px-28">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <h1 className="text-xl md:text-4xl font-bold italic">
              <span className="text-[#F16623]">E</span>DUPORT
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-5"> {navLinks}</ul>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <Sun />
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller"
            />
            <Moon />
          </label>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[#F16623] text-white"
            >
              {user ? (
                "Dashboard"
              ) : (
                <div className="flex">
                  Profile <CornerRightDown />
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              {user ? (
                <>
                  <li>
                    <Link to={"/dashboard"} className="hover:text-[#F16623]">
                      Go Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={userLogout}
                      className="hover:text-[#F16623]"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/login"} className="hover:text-[#F16623]">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to={"/register"} className="hover:text-[#F16623]">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
