import { useEffect, useState } from "react";
import useWorks from "../../../Hooks/useWorks";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Progress = () => {
  const [filter, setFilter] = useState({});
  const [works, , worksReload] = useWorks(filter);
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const axiosSecure = useAxiosSecure();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleFilter = () => {
    const filterData = { name, month };
    setFilter(filterData);
  };
  useEffect(() => {
    worksReload();
  }, [filter, worksReload]);

  const { data: dropdownName, isLoading: nameLoading } = useQuery({
    queryKey: ["dropdownName"],
    queryFn: async () => {
      const res = await axiosSecure.get("/drop");
      return res.data;
    },
  });
  if (nameLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <div className="mb-10">
        <h1 className="uppercase text-2xl font-semibold text-center ">
          Progress Report
        </h1>
        <hr className="w-32 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>
      <div>
        <h1 className="text-lg font-semibold">Filter Work List</h1>
        <div className="flex gap-10">
          <div>
            <select
              name="name"
              onChange={(e) => setName(e.target.value)}
              defaultValue="name"
              className=" outline-none border-b-2 w-32 p-2 font-medium  border-[#706b6b] "
            >
              <option disabled value="name">
                Name
              </option>
              {dropdownName?.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="month"
              onChange={(e) => setMonth(e.target.value)}
              defaultValue="month"
              className=" outline-none border-b-2 w-32 p-2 font-medium  border-[#706b6b] "
            >
              <option disabled value="month">
                Month
              </option>
              {months?.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              onClick={handleFilter}
              className="text-lg font-semibold cursor-pointer btn-sm  btn-outline btn rounded"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
      <div>
        {works?.length > 0 ? (
          <div className="overflow-x-auto rounded mt-10">
            <table className="table table-zebra ">
              <thead className="bg-gray-200">
                <tr className="text-black">
                  <th></th>
                  <th>Name</th>
                  <th>Task</th>
                  <th>Hours</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {works?.map((work, idx) => (
                  <tr key={work?._id}>
                    <th>{idx + 1}</th>
                    <td>{work?.name}</td>
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
      </div>
    </div>
  );
};

export default Progress;
