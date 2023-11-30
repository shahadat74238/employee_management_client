/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = ({ salary, email }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 3;
  const endYear = currentYear + 20;

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { paidSalary: salary })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [salary]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const month = form.month.value;
    const year = form.year.value;

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      setError("");
    }

    // Conform payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("Confirmation Error");
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setSuccess("Successfully Payment!");
        console.log(paymentIntent.id);
        const payInfo = {
          month: month,
          year: year,
          salary: salary,
          transaction_id: paymentIntent.id,
          employee_email: email,
        };
        // console.log(payInfo);

        await axiosSecure.post("/paySalary", payInfo);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between mb-10">
          <div>
            <p className="text-xl font-semibold uppercase underline mb-2">
              Salary
            </p>
            <p className="text-lg">$ {salary}</p>
          </div>
          <div>
            <p className="text-xl font-semibold uppercase text-center mb-2">
              Month
            </p>
            <select
              required
              defaultValue="January"
              name="month"
              className="border p-2 cursor-pointer"
            >
              <option>Selected Year</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-xl font-semibold uppercase text-center  mb-2">
              Year
            </p>
            <select
              required
              defaultValue="2023"
              name="year"
              className="border p-2 cursor-pointer"
            >
              <option disabled>Select a year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline rounded-none btn-sm my-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-700">{error}</p>
        <p className="text-green-700">{success}</p>
      </form>
    </div>
  );
};

export default CheckOutForm;
