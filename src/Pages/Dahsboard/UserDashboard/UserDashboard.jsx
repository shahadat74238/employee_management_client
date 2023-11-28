import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { MdVerified } from "react-icons/md";

const UserDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user.email}`);
      return res?.data;
    },
  });
  if (isLoading) {
    return <p>Loading..</p>;
  }

  console.log(profile, "profile data");
  return (
    <div className="grid grid-cols-1 gap-10  md:grid-cols-3 ">
      <div className="border p-5 rounded-lg col-span-1">
        <img
          className="h-52 w-52 object-cover rounded-full"
          src={profile.image}
          alt=" Loading image"
        />
        <p className="mt-10 text-center    text-2xl font-semibold">
          {profile.name}
        </p>
      </div>
      <div className="col-span-2 border-2 rounded-lg p-5">
        {profile.role === "admin" ? (
          <div>
            <h1 className="text-center uppercase font-semibold text-5xl">
              {profile.role}
            </h1>
            <p className="text-xl font-medium">
              Designation: <br />{" "}
              <span className="text-slate-600">{profile.designation}</span>
            </p>
          </div>
        ) : (
          <div>
            <div className="flex justify-between mb-5">
              <h1 className=" uppercase font-semibold text-5xl">{profile.role}</h1>
              {profile.role === "employee" && (
                <div>
                  {profile.role === "employee" ? (
                    <p className="uppercase text-center  text-lg font-semibold text-blue-600 w-32">
                      Verified <MdVerified className="inline text-xl" />
                    </p>
                  ) : (
                    <p className="py-2 text-center text-white text-lg font-semibold bg-red-800 w-32">
                      Unverified
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium ">
                Designation <br />
                <span className="text-slate-500 text-base">{profile.designation}</span>
              </p>
              <p className="text-lg font-medium ">
                Bank Account No:{" "}
                <span className="text-slate-500 text-base"> {profile.bank_account}</span>
              </p>
              <p className="text-lg font-medium ">
                Salary:
                <span className="text-slate-500 text-base"> ${profile.salary}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
