import { CornerRightDown, Menu, Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/");
  };
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/users?email=${user.email}`)
        .then((res) => {
          const userRole = res.data.result?.[0]?.role;
          setRole(userRole);
        })
        .catch((err) => console.error(err));
    } else {
      setRole(null);
    }
  }, [user]);

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
          to="/my-classes"
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

      {role === "Admin" && (
        <li>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-[#F16623] font-bold underline text-base"
                : "hover:underline text-base"
            }
          >
            Admin Dashboard
          </NavLink>
        </li>
      )}
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
              {user && user.email ? (
                <>
                  <span className="font-semibold">
                    {user.email.split("@")[0].charAt(0).toUpperCase() +
                      user.email.split("@")[0].slice(1)}
                  </span>
                </>
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
                    <Link
                      to={"/user/dashboard"}
                      className="hover:text-[#F16623]"
                    >
                      Go Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
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
