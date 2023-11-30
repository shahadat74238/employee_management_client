import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
        toast.success('Successfully Logged!')
      })
      .catch((err) => {
        console.log(err);
        setError("Please Check your email and password and try again!");
      });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-10 justify-center">
        <div className="md:w-2/5 mx-auto px-5 md:px-10 lg:px-0  md:pb-8 rounded-lg">
          <div className="md:px-14 px-8 py-6 rounded-md shadow-xl">
            <h1 className="font-bold text-2xl ">Login</h1>
            <form onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Username or Email"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Password"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div className="mt-3">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="check"
                    id="check "
                    className="cursor-pointer h-5 w-5 mr-3"
                  />
                  <label htmlFor="check" className="">
                    Remember Me
                  </label>
                </div>
                <p className=" underline cursor-pointer">
                  Forgot Password
                </p>
              </div>
              <button className="btn text-lg btn-outline w-full rounded-none mt-6">
                Login
              </button>
            </form>
            <p className="mt-6 ">
              Don’t have an account?{" "}
              <Link to="/register" className=" underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
