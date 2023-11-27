import { useState } from "react";

const PaymentModal = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
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
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 3;
  const endYear = currentYear + 20;

  console.log(selectedMonth, selectedYear);

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const handleMonthChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMonth(selectedValue);
  };
  const handleYearChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedYear(selectedValue);
  };

  return (
    <div className=" h-full w-full p-10 ">
      <div className="h-full w-full shadow-xl px-10 py-2">
      <div className="mb-5">
        <h1 className="uppercase text-2xl font-semibold text-center ">
          Payment Salary
        </h1>
        <hr className="w-24 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>
        <div className="flex justify-between">
        <div>
            <p className="text-xl font-semibold uppercase underline mb-2">Salary</p>
            <p className="text-lg">$ 5000</p>
          </div>
          <div>
            <p className="text-xl font-semibold uppercase text-center mb-2">Month</p>
            <select
              id="monthSelect"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="border p-2 cursor-pointer"
            >
              <option value="" disabled>
                Select a month
              </option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-xl font-semibold uppercase text-center  mb-2">Year</p>
            <select
              id="yearSelect"
              value={selectedYear}
              onChange={handleYearChange}
              className="border p-2 cursor-pointer"
            >
              <option value="" disabled>
                Select a year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-outline rounded-none btn-sm mt-10">Close</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
