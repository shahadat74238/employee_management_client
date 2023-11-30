import useAllUser from "../../../../Hooks/useAllUser";
import { FaUserCheck } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GiCampfire } from "react-icons/gi";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const VerifyEmployee = () => {
  const axiosSecure = useAxiosSecure();
  const [users, , userReload] = useAllUser();
  const verified = users?.filter((us) => us.isPending === true);

  const handelUpdateRole = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Make HR!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make HR!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/hr/${id}`);
        console.log(res.data);
        userReload();
        Swal.fire({
          title: "Make HR!",
          text: "Successfully Make Hr!",
          icon: "success",
        });
      }
    });
  };

  const handleDeleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Fire!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Fire!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/users/${id}`);
        console.log(res.data);
        userReload();
        Swal.fire({
          title: "Fired!",
          text: "Successfully Fired!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <div>
        <h1 className="uppercase text-3xl font-semibold text-center ">
          All Employee
        </h1>
        <hr className="w-24 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>

      {verified?.length > 0 ? (
        <table className="table table-zebra table-pin-rows mt-5">
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
                  <button
                    disabled={user.role === "hr"}
                    onClick={() => handelUpdateRole(user?._id)}
                  >
                    {user.role === "hr" ? (
                      <RiAdminFill className="text-2xl text-blue-600 " />
                    ) : (
                      <FaUserCheck className="text-2xl " />
                    )}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(user?._id)}>
                    <GiCampfire className="text-3xl text-rose-900 " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="mt-20">
          <h1 className="text-center font-semibold text-4xl ">
            No Verified Employee Available!
          </h1>
        </div>
      )}
    </div>
  );
};

export default VerifyEmployee;
