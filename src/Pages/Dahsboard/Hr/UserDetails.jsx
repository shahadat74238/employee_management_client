/* eslint-disable no-unused-vars */
import Chart from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import {  useState } from "react";
import useEmployeePayment from "../../../Hooks/useEmployeePayment";
import Loading from "../../../Shared/Loading";

const UserDetails = () => {
  const { email } = useParams();
  console.log(email);
  const axiosSecure = useAxiosSecure();
  const  [payment] = useEmployeePayment(email);
  const salary = payment?.map(p => p.salary);
  const month = payment?.map(p => p.month.slice(0,3));

  console.log(salary);

  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: month,
      },
    },
    yaxis: {
      // Y-axis options...
      min: 1000, // Set the minimum value for the Y-axis
      max: 10000, // Set the maximum value for the Y-axis
      title: {
        text: "Y-axis Title",
        style: {
          fontSize: "16px",
        },
      },
    },
    series: [
      {
        name: "Salary",
        data: salary,
      },
    ],
  });

 

  const { data: employee, isLoading:employeeLoading, } = useQuery({
    queryKey: ["employee", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${email}`);
      return res.data;
    },
  });

  if (employeeLoading) {
    return <Loading />;
  }
  console.log(employee);
  

  return (
    <div>
      <div>
        <h1 className="uppercase text-3xl font-semibold text-center ">
          Employee Details
        </h1>
        <hr className="w-80 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>
      <div className="grid grid-cols-2  gap-6 ">
        <div className="border-2 p-5">
          <div className="mb-10">
            <img
              className="h-40 w-40 rounded-full"
              src={employee?.image}
              alt="Loading image"
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-semibold ">Name: {employee?.name}</h1>
            <p className="text-lg font-medium text-gray-500">
              <span className="text-black">Designation:</span> <br />
              {employee?.designation}
            </p>
          </div>
        </div>
        <div className="border-2 p-5">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="400"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
