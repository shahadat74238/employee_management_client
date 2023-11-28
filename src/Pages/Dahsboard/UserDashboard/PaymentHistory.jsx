import { MdDomainVerification } from "react-icons/md";

const PaymentHistory = () => {
  return (
    <div>
      <div>
        <h1 className="uppercase text-2xl font-semibold text-center ">
          Payment History
        </h1>
        <hr className="w-32 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>
      <div className="space-y-3">
        <div className="grid grid-cols-5 justify-center rounded-lg bg-gray-200 py-5 px-10">
          <div>
            <p className="text-sm text-slate-500 mb-1">Status</p>
            <p className="font-medium"><MdDomainVerification className="inline text-xl text-green-600" /> Successful</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Amount</p>
            <p className="font-medium">amount</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Month</p>
            <p className="font-medium">month</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Transaction Id</p>
            <p className="font-medium">id</p>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn btn-outline rounded  btn-sm">Details</button>
          </div>
        </div>
        <div className="grid grid-cols-5 justify-center rounded-lg bg-gray-200 py-5 px-10">
          <div>
            <p className="text-sm text-slate-500 mb-1">Status</p>
            <p className="font-medium">Successful</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Amount</p>
            <p className="font-medium">amount</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Month</p>
            <p className="font-medium">month</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Transaction Id</p>
            <p className="font-medium">id</p>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn btn-outline rounded-none  btn-sm">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
