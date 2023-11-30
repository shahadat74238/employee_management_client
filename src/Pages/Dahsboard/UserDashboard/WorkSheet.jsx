import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "../../../Shared/Loading";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useUserWorks from "../../../Hooks/useUserWorks";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const WorkSheet = () => {
  const axiosSecure = useAxiosSecure();
  const [userWorks, userWorksLoading, userWorksReload] = useUserWorks();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();

  const { data: Verified, isLoading } = useQuery({
    queryKey: ["Verified", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user.email}`);
      return res?.data;
    },
  });
  if (isLoading) {
    return <p>Loading..</p>;
  }

  console.log(Verified.isPending);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Intl.DateTimeFormat("en-US", options).format(startDate);

  if (userWorksLoading) {
    return <Loading />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const task = form.tasks.value;
    const hoursWorked = form.hoursWorked.value;
    const userEmail = user?.email;
    const name = user?.displayName;
    const work = { name, task, hoursWorked, date, userEmail };

    await axiosSecure.post("/works", work);
    Swal.fire({
      icon: "success",
      title: "Your work has been added !",
      showConfirmButton: false,
      timer: 2000,
    });
    userWorksReload();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-10">
        <h1 className="uppercase text-2xl font-semibold text-center ">
          Work Sheet
        </h1>
        <hr className="w-24 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>

        {
          Verified?.isPending ?
          <>
           <form onSubmit={handleSubmit} className="flex gap-4">
        <div className="flex-grow">
          <label
            htmlFor="tasks"
            className="block text-sm font-medium text-gray-700"
          >
            Tasks
          </label>
          <select
            defaultValue="select"
            name="tasks"
            className="mt-1 p-2 border  rounded-md "
          >
            <option disabled value="select">
              Select Task
            </option>
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="Content">Content</option>
            <option value="Paper-work">Paper-work</option>
          </select>
        </div>

        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-700">
            Hours Worked
          </label>
          <input
            type="number"
            name="hoursWorked"
            placeholder="hours"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <DatePicker
            className="w-full border outline-none text-black text-center font-semibold text-lg"
            showIcon
            dateFormat="MMMM d, yyyy "
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
          />
        </div>
        <div className="flex items-center">
          <input
            className="btn btn-outline rounded-none btn-sm"
            type="submit"
            value="Submit"
          />
        </div>
      </form>

      {/* Table */}

      {userWorks?.length > 0 ? (
        <div className="overflow-x-auto rounded mt-10">
          <table className="table table-zebra ">
            <thead className="bg-gray-200">
              <tr className="text-black">
                <th></th>
                <th>Task</th>
                <th>Hours</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userWorks?.map((work, idx) => (
                <tr key={work?._id}>
                  <th>{idx + 1}</th>
                  <td>{work.task}</td>
                  <td>{work.hoursWorked}</td>
                  <td>{work.date}</td>
                  <td>
                    <button className="btn btn-outline rounded btn-sm ">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-20">
          <h1 className="text-center font-semibold text-4xl ">
            No Work Available!
          </h1>
        </div>
      )}
          </>
          :
          <div className="flex justify-center items-center h-full">
            <h1 className="text-3xl font-bold text-red-900">You Are Unverified Employee!</h1>
          </div>
        }

     
    </div>
  );
};

export default WorkSheet;
