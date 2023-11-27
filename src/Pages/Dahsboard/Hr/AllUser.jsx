import useAllUser from "../../../Hooks/useAllUser";
import { ImCross } from "react-icons/im";
import { MdVerified } from "react-icons/md";
import PaymentModal from "./PaymentModal";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [users] = useAllUser();
  const employee = users.filter(user => user.role === "employee");
  console.log(employee);

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
            <th>Email</th>
            <th>Verified</th>
            <th>Bank Account</th>
            <th>Salary</th>
            <th>Pay</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {employee?.map((user, idx) => (
            <tr key={user._id}>
              <th>{idx + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.isPending ? (
                  <MdVerified className="text-green-600 text-lg" />
                ) : (
                  <ImCross className="text-rose-600 text-lg" />
                )}
              </td>
              <td>{user.bank_account}</td>
              <td>${user.salary}</td>
              <td>
                <button
                  // disabled={!user?.isPending}
                  className="btn btn-sm btn-outline rounded-none"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Pay
                </button>
              </td>
              <td>
                <Link to={`/dashboard/user/${user.email}`}>
                  <button className="btn btn-sm btn-outline rounded-none">
                    Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <dialog
          id="my_modal_5"
          className="h-[80vh] w-[80%] modal-bottom sm:modal-middle"
        >
          <PaymentModal />
        </dialog>
      </div>
    </div>
  );
};

export default AllUser;
