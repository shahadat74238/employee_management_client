import Service from "../Home/HomeComponent/Service/Service";
import Team from "../Home/HomeComponent/Team/Team";

const About = () => {
  return (
    <div className="pt-10 container mx-auto">
      <div className="grid items-center gap-10 md:gap-20 md:grid-cols-2">
        <div>
          <img
            className="w-full object-cover"
            src="https://img.freepik.com/premium-photo/business-people-meeting_53876-21725.jpg"
            alt="Loading Image"
          />
        </div>
        <div className="mr-10">
          <h1 className="text-3xl md:text-4xl font-semibold  uppercase underline">
            Why Choose Us
          </h1>
          <p className="md:text-lg font-medium text-justify mt-5">
          An employee management company specializes in optimizing workforce performance and organizational efficiency. Through strategic planning, talent acquisition, training, and performance evaluation, these firms help businesses streamline operations, cultivate a positive workplace culture, and maximize the potential of their human capital for sustained success.
          </p>
        </div>
      </div>
      <Service />
      <Team />
    </div>
  );
};

export default About;
