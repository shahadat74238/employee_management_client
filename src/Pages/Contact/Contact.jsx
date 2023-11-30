import Swal from "sweetalert2";

const Contact = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
      Swal.fire({
         icon: "success",
         title: "Successfully Send Your Message!",
         showConfirmButton: false,
         timer: 1500
       });
   };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-5 md:px-10 my-10 lg:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="">
            <h1 className="text-4xl font-bold">Employee Management</h1>
            <div className="mt-10 space-y-1  ">
               <p className="text-xl font-medium">Phone Number: <span className="text-base font-normal text-slate-500">+008 01000-000000</span></p>
               <p className="text-xl font-medium">Email: <span className="text-base font-normal text-slate-500">management@gmail.com</span></p>
               <p className="text-xl font-medium">Our Office</p>
               <hr className="border w-32" />
               <p className="text-base font-normal text-slate-500">Puran Bogura-5830, Rajshahi, Bangladesh</p>
            </div>
          </div>
          <div className="bg-[#f5f5f5] p-5">
            <h1 className=" uppercase font-bold text-lg">
              Send Message
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <textarea
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Type Your Message"
                />
              </div>
              <div className="mt-8">
                <button className="btn btn-outline rounded-none text-lg font-semibold uppercase">
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
