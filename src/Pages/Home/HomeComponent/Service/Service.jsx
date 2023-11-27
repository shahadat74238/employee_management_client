import { FaUserCircle } from "react-icons/fa";
import { MdMobileFriendly } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdRateReview } from "react-icons/md";

const Service = () => {
  return (
    <div className="my-20">
      <div>
        <h1 className="uppercase text-3xl font-semibold text-center ">
          Our Services
        </h1>
        <hr className="w-24 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-6 gap-10">
        <div className="text-center scale-100 hover:scale-105 hover:cursor-pointer shadow-xl duration-500 p-5">
          <div className="flex justify-center">
            <p>
              <FaUserCircle className="text-8xl" />
            </p>
          </div>
          <h1 className="text-2xl font-semibold mt-3">Employee Profiles</h1>
          <hr className="w-24 border-2 border-slate-950 mx-auto my-5" />
          <p className="text-center">
            Allow employees to create and manage their profiles with ....
          </p>
          <button className="mt-5 font-medium text-slate-950">Learn More</button>
        </div>
        <div className="text-center scale-100 hover:scale-105 hover:cursor-pointer shadow-xl duration-500 p-5">
          <div className="flex justify-center">
            <p>
              <MdRateReview className="text-8xl" />
            </p>
          </div>
          <h1 className="text-2xl font-semibold mt-3">Attendance Tracking</h1>
          <hr className="w-24 border-2 border-slate-950 mx-auto my-5" />
          <p className="mx-auto flex items-center ">
            Implement a system for tracking employee attendance and ....
          </p>
          <button className="mt-5 font-medium text-slate-950">Learn More</button>
        </div>
        <div className="text-center scale-100 hover:scale-105 hover:cursor-pointer shadow-xl duration-500 p-5">
          <div className="flex justify-center ">
            <p>
              <SiLevelsdotfyi className="text-8xl" />
            </p>
          </div>
          <h1 className="text-2xl font-semibold mt-3">Leave Management</h1>
          <hr className="w-24 border-2 border-slate-950 mx-auto my-5" />
          <p className="text-center">
            Provide a feature for requesting and managing leaves ....
          </p>
          <button className="mt-5 font-medium text-slate-950">Learn More</button>
        </div>
        <div className="text-center scale-100 hover:scale-105 hover:cursor-pointer shadow-xl duration-500 p-5">
          <div className="flex justify-center">
            <p>
              <MdMobileFriendly className="text-8xl" />
            </p>
          </div>
          <h1 className="text-2xl font-semibold mt-3">Mobile Accessibility</h1>
          <hr className="w-24 border-2 border-slate-950 mx-auto my-5" />
          <p className="text-center">
            Develop a mobile-friendly version or a dedicated mobile app for ....
          </p>
          <button className="mt-5 font-medium text-slate-950">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
