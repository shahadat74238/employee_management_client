/* eslint-disable react/prop-types */
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const PaymentModal = ({ salary, email }) => {
  return (
    <div className=" h-full w-full p-5 ">
      <div className="h-full w-full shadow-xl px-10 py-2">
        <div className="mb-5">
          <h1 className="uppercase text-2xl font-semibold text-center ">
            Payment Salary
          </h1>
          <hr className="w-24 border border-slate-950 mx-auto mt-2 mb-5 " />
        </div>

        <div className="mt-10">
          <Elements stripe={stripePromise}>
            <CheckOutForm
              salary={salary}
              email={email}
            />
          </Elements>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-outline rounded-none btn-sm">
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
