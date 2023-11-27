import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useHr from "../../../Hooks/useHr";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isHr] = useHr();
  console.log(isHr);
  console.log(isAdmin);

  return (
    <div className="container min-h-screen mx-auto gap-6 grid grid-cols-5">
      <div className="col-span-1 border bg-gray-200 p-10 ">
        {isAdmin ? (
          <ul className="space-y-2">
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
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-800 font-semibold text-lg uppercase"
                    : " font-semibold text-lg uppercase"
                }
              >
                Admin Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/verifyEmployee"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-800 font-semibold text-lg uppercase"
                    : " font-semibold text-lg uppercase"
                }
              >
                Verify User
              </NavLink>
            </li>
          </ul>
        ) :
        isHr ?
        (
          <ul className="space-y-2">
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
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-semibold text-lg uppercase"
                  : " font-semibold text-lg uppercase"
              }
            >
               HR
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/user"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-semibold text-lg uppercase"
                  : " font-semibold text-lg uppercase"
              }
            >
              All Employee
            </NavLink>
          </li>
        </ul>
        )
        :
        (
          <ul className="space-y-2">
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
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-800 font-semibold text-lg uppercase"
                    : " font-semibold text-lg uppercase"
                }
              >
                Dashboard
              </NavLink>
            </li>
            
          </ul>
        )}
      </div>
      <div className="col-span-4 border p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
