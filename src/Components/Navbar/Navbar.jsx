import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/logo.png";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('SuccessFully Logged Out !')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-red-800 font-semibold text-lg uppercase"
              : " font-semibold text-lg uppercase"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive
              ? "text-red-800 font-semibold text-lg uppercase"
              : " font-semibold text-lg uppercase"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-red-800 font-semibold text-lg uppercase"
              : " font-semibold text-lg uppercase"
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
              ? "text-red-800 font-semibold text-lg uppercase"
              : " font-semibold text-lg uppercase"
          }
        >
          About us
        </NavLink>
      </li>      
    </>
  );

  return (
    <div className="bg-base-100 w-full shadow-lg ">
      <div className="navbar container mx-auto px-5 bg-base-100">
        <div className="navbar-start z-10 ">
          <div className="dropdown">
            <button tabIndex={0} className="mr-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {/* Tablet view */}
            <ul
              tabIndex={0}
              className="  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-32"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex gap-2 items-center">
            <img className="md:h-12 h-5" src={logo} alt="Loading Logo" />
            <div className="text-center">
              <p
                style={{ letterSpacing: "3px" }}
                className="md:text-2xl font-semibold uppercase"
              >
                Employee
              </p>
              <p
                style={{ letterSpacing: "4px" }}
                className="text-sm font-semibold uppercase"
              >
                Management
              </p>
            </div>
          </Link>
        </div>
        {/* Desktop view */}
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-5 menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end z-10">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar online hover:cursor-pointer">
                <div className="h-10 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52"
              >
                <p className="text-xl mb-2 text-center font-semibold ">
                  {user?.displayName ? user?.displayName : "UserName"}
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full btn text-lg btn-active   rounded-none"
                >
                  LogOut
                </button>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-sm rounded-none">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
