import useWorks from "../../../Hooks/useWorks";

const Progress = () => {
  const [works] = useWorks();
  console.log(works);
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

  const handleFilter =(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const month = form.month.value;
    console.log(name, month);
  };

  return (
    <div>
      <div>
        <h1 className="uppercase text-2xl font-semibold text-center ">
          Progress Report
        </h1>
        <hr className="w-32 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>
      <div>
        <h1 className="text-lg font-semibold">Filter Work List</h1>
        <form onSubmit={handleFilter}>
          <div className="flex gap-10">
            <div>
              <select
              name="name"
                defaultValue="name"
                className=" outline-none border-b-2 w-32 p-2 font-medium  border-[#706b6b] "
              >
                <option disabled value="name">
                  Name
                </option>
                {works?.map((w) => (
                  <option key={w._id} value={w.name}>
                    {w.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
              name="month"
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
              <input className="text-lg font-semibold cursor-pointer btn-sm  btn-outline btn rounded" type="submit" value="Filter" />
            </div>
          </div>
        </form>
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
