const Team = () => {
  return (
    <div className="my-10 md:my-20">
      <div className="mb-10">
        <h1 className="uppercase text-3xl font-semibold text-center ">
          OUR TEam
        </h1>
        <hr className="w-24 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-10 md:gap-20 grid-cols-1">
        <div className="">
          <div className="flex justify-center">
            <div>
              <img
                className="rounded-full object-cover h-52 w-52"
                src="https://img.freepik.com/free-photo/outdoor-businessman-having-his-arms-crossed_23-2148763885.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="text-center px-5">
            <h1 className="text-2xl font-semibold mb-2 ">Elena Evergreen</h1>
            <p className="text-lg font-medium">BOSS</p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center">
            <div>
              <img
                className="rounded-full object-cover h-52 w-52"
                src="https://media.licdn.com/dms/image/D5603AQFB-TDGjbkEWQ/profile-displayphoto-shrink_800_800/0/1670449340633?e=2147483647&v=beta&t=s5szD0qTShTYkrfGemW0zWWFZnidWKSPBRiguf2THe4"
                alt=""
              />
            </div>
          </div>
          <div className="text-center px-5">
            <h1 className="text-2xl font-semibold mb-2 ">Elena Evergreen</h1>
            <p className="text-lg font-medium">CEO</p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center">
            <div>
              <img
                className="rounded-full object-cover h-52 w-52"
                src="https://media.istockphoto.com/id/1401557224/photo/confident-businesswoman-in-modern-office.webp?b=1&s=170667a&w=0&k=20&c=Fpkcc3TzSAaHV2d7iuAuKeS0zBDbAczzPPtfFUBc0Qg="
                alt=""
              />
            </div>
          </div>
          <div className="text-center px-5">
            <h1 className="text-2xl font-semibold mb-2 ">Maximilian Nexus</h1>
            <p className="text-lg font-medium">Sustainability Director</p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center">
            <div>
              <img
                className="rounded-full object-cover h-52 w-52"
                src="https://i.insider.com/5d2f66d79e07552f4a1b3aa3?width=600&format=jpeg&auto=webp"
                alt=""
              />
            </div>
          </div>
          <div className="text-center px-5">
            <h1 className="text-2xl font-semibold mb-2 ">Sophia Stellaris</h1>
            <p className="text-lg font-medium">Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
