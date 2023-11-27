import AboutUs from "./HomeComponent/About/AboutUs";
import Banner from "./HomeComponent/Banner/Banner";
import Service from "./HomeComponent/Service/Service";
import Team from "./HomeComponent/Team/Team";
import Testimonials from "./HomeComponent/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-5">
        <Service />
        <AboutUs />
        <Testimonials />
        <Team />
      </div>
    </div>
  );
};

export default Home;
