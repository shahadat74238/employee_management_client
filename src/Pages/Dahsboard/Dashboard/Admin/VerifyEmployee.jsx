import useAllUser from "../../../../Hooks/useAllUser";
import { FaUserCheck } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GiCampfire } from "react-icons/gi";

const VerifyEmployee = () => {
  const [users] = useAllUser();
  const verified = users?.filter(us => us.isPending === true);
  console.log(verified);

  return (
    <div className="overflow-x-auto">
      <div>
        <h1 className="uppercase text-3xl font-semibold text-center ">
          All Employee
        </h1>
        <hr className="w-24 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>
      <table className="table table-zebra table-pin-rows mt-5">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Role</th>
            <th>Make HR</th>
            <th>Fire</th>
          </tr>
        </thead>
        <tbody>
          {verified?.map((user, idx) => (
            <tr key={user._id}>
              <th>{idx + 1}</th>
              <td>{user.name}</td>
              <td>{user.designation}</td>
              <td className="uppercase">{user.role}</td>
              <td>
                <button disabled={user.role === "hr"}>
                  {user.role === "hr" ? (
                    <RiAdminFill className="text-2xl text-blue-600 " />
                  ) : (
                    <FaUserCheck className="text-2xl " />
                  )}
                </button>
              </td>
              <td>
                <button>
                  <GiCampfire className="text-3xl text-rose-900 " />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerifyEmployee;
