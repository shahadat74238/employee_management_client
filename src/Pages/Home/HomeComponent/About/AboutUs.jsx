import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-20 items-center shadow-xl">
      <div>
        <img
          className="object-cover "
          src="https://images.deccanherald.com/deccanherald/import/sites/dh/files/articleimages/2021/01/05/group-discussion-istock-603992138-935358-1609832067.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
          alt=""
        />
      </div>
      <div className="p-5 md:p-10 lg:p-20">
        <h1 className="uppercase text-3xl font-semibold text-center ">
          About Us
        </h1>
        <hr className="w-24 border border-slate-950 mx-auto mt-2 mb-5 " />
        <p className="text-justify text-slate-500">
          Welcome to our Employee Management Website, your all-in-one solution
          for efficient HR operations. Seamlessly navigate through employee
          profiles, monitor attendance, and conduct performance evaluations with
          ease. Our platform simplifies leave management, task assignments, and
          fosters internal communication, ensuring your organization operates
          smoothly.
        </p>
        <div className="flex justify-center mt-5">
          <Link to="/about">
            <button className="btn btn-outline rounded-none">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
