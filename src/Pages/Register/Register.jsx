import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const imgFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const name = data.name;
      const image = res?.data?.data?.display_url;
      const bank_account = data.bank_account;
      const email = data.email;
      const password = data.password;
      const role = data.role;
      const salary = parseInt(data.salary);
      const designation = data.designation;
      const isPending = false;

      const userInfo = {
        name,
        image,
        bank_account,
        email,
        role,
        salary,
        designation,
        isPending,
      };
      createUser(email, password)
        .then(async () => {
          await axiosPublic.post("/users", userInfo);
          
          updateUser(name, image)
            .then(() => {
              console.log("profile is updated!");
              navigate("/");
              // window.location.reload();
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <div className=" min-h-screen">
      <div className="max-w-7xl  mx-auto py-10 items-center justify-center ">
        <div className="md:w-2/5 mx-auto px-5 md:px-10 lg:px-0  md:pb-8 rounded-lg">
          <div className="md:px-14 px-8 py-6 rounded-md shadow-xl">
            <h1 className="font-bold text-2xl text-[#7cb908]">
              Create an Account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Full Name"
                  className="mt-6 outline-none border-b-2 border-[#706b6b] py-2 placeholder:text-[#706b6b] placeholder:font-medium font-medium bg-transparent  w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("bank_account", { required: true })}
                    name="bank_account"
                    placeholder="Bank Account No"
                    className="mt-6 outline-none border-b-2 border-[#706b6b] py-2 placeholder:text-[#706b6b] placeholder:font-medium font-medium bg-transparent  w-full"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    {...register("salary", { required: true })}
                    placeholder="Salary"
                    className="mt-6 outline-none border-b-2 border-[#706b6b] py-2 placeholder:text-[#706b6b] placeholder:font-medium font-medium bg-transparent  w-full"
                  />
                </div>
              </div>
              <div className="mt-6">
                <select
                  defaultValue="role"
                  {...register("role", { required: true })}
                  className=" outline-none border-b-2 font-medium  border-[#706b6b] w-full "
                >
                  <option disabled value="role">
                    Role
                  </option>
                  <option value="hr">HR</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  {...register("designation", { required: true })}
                  placeholder="Designation"
                  className="mt-6 outline-none border-b-2 border-[#706b6b] py-2 placeholder:text-[#706b6b] placeholder:font-medium font-medium bg-transparent  w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Username or Email"
                  className="mt-6 outline-none border-b-2 border-[#706b6b] py-2 placeholder:text-[#706b6b] placeholder:font-medium font-medium bg-transparent  w-full"
                />
              </div>
              <div>
                <input
                  type="password"
                  {...register("password", {
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]/i,
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  placeholder="Password"
                  className="mt-6 mb-2 outline-none border-b-2 border-[#706b6b] py-2 placeholder:text-[#706b6b] placeholder:font-medium font-medium bg-transparent  w-full"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-sm">Password is required !</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-sm">
                    Password must be 6 character !
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500 text-sm">
                    Password must be 20 character !
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-sm">
                    Password must one uppercase, one lowercase and one spacial
                    character !
                  </p>
                )}
              </div>
              <div className="mt-6 ">
                <p className="text-[#706b6b] font-medium">Profile Picture</p>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input file-input-ghost"
                />
              </div>

              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    className="cursor-pointer h-5 w-5 mr-3"
                  />
                  <label htmlFor="check" className="">
                    Trams and Condition
                  </label>
                </div>
              </div>
              <button className="w-full btn btn-outline rounded-none mt-6 text-lg ">
                Register
              </button>
            </form>
            <p className="mt-6 text-center">
              Already have an account?
              <Link to="/login" className="text-[#7cb908] ml-2 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
