import { MdDomainVerification } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { RiMenuLine } from "react-icons/ri";
import { useState } from "react";
import Loading from "../../../Shared/Loading";
import useEmployeePayment from "../../../Hooks/useEmployeePayment";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const [grid, setGrid] = useState(true);
  const {user} =useAuth();
  const [payment,paymentLoading] = useEmployeePayment(user.email);

  if (paymentLoading) {
    return <Loading></Loading>;
  }
  console.log(payment);

  return (
    <div>
      <div className="mb-10">
        <h1 className="uppercase text-2xl font-semibold text-center ">
          Payment History
        </h1>
        <hr className="w-32 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>
      <div className="mb-5">
        <button onClick={() => setGrid(!grid)}>
          {grid ? (
            <RiMenuLine className="text-2xl font-semibold" />
          ) : (
            <CgMenuGridR className="text-2xl font-semibold" />
          )}
        </button>
      </div>
      {payment?.length > 0 ? (
        <div>
          {grid ? (
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead className="bg-slate-400 text-black">
                  <tr>
                    <th></th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Month</th>
                    <th>Transaction Id</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {payment?.map((p, i) => (

                  <tr className="bg-base-200" key={p._id}>
                    <th>{i+1}</th>
                    <td>Success <MdDomainVerification className="inline  text-green-600 text-xl" /></td>
                    <td>${p.salary}</td>
                    <td>{p.month.slice(0,3)}/{p.year}</td>
                    <td>{p.transaction_id}</td>
                    <td><button className="btn btn-sm btn-outline rounded">Details</button></td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-10 ">
              {payment.map((p)=> (
              <div key={p._id} className="shadow-xl py-5 border border-green-600 mt-3 px-10">
                <div className="flex gap-2">
                  <div className="space-y-1">
                    <p className=" text-slate-500 ">Status</p>
                    <p className=" text-slate-500 ">Amount</p>
                    <p className=" text-slate-500 ">Month</p>
                    <p className=" text-slate-500 ">Transaction Id</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">
                      {" "}
                      : Successful
                      <MdDomainVerification className="inline  text-green-600" />
                    </p>
                    <p className="font-medium">: ${p.salary}</p>
                    <p className="font-medium">: {p.month}/{p.year}</p>
                    <p className="font-medium text-sm">: {p.transaction_id}</p>
                  </div>
                </div>
                <div className="flex items-center mt-5 justify-center">
                  <button className="btn btn-outline rounded  btn-sm">
                    Details
                  </button>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>No Payment History Available</p>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
