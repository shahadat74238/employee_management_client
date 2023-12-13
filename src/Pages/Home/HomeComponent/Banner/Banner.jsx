import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[50vh] lg:h-screen w-full bg-[url('https://www.niagarainstitute.com/hubfs/16%20Stealworthy%20Team%20Meeting%20Ideas.png')] bg-no-repeat bg-center bg-cover">
            <div className="h-full bg-black/70 w-full flex items-center justify-center">
              <div data-aos="fade-down" data-aos-duration="2000">
                <div className="w-3/5 mx-auto">
                  <h1 className="text-3xl text-center uppercase md:text-6xl font-semibold text-white mb-3">
                    Employee Meeting
                  </h1>
                  <p className="text-gray-300 text-center">
                    Employee meetings are essential gatherings where team
                    members come together to discuss goals, share updates, and
                    collaborate on projects. These sessions foster
                    communication, alignment, and teamwork, contributing to a
                    positive and productive work environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] lg:h-screen w-full bg-[url('https://thumbs.dreamstime.com/b/hand-touching-brain-ai-symbolic-machine-learning-artificial-intelligence-futuristic-technology-network-business-analysis-197013452.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="h-full bg-black/60 w-full flex items-center justify-center">
              <div data-aos="fade-down" data-aos-duration="2000">
                <div className="w-3/5 mx-auto">
                  <h1 className="text-3xl text-center uppercase md:text-6xl font-semibold text-white mb-3">
                    Grow Employee Knowledge
                  </h1>
                  <p className="text-gray-300 text-center">
                  Growing employee knowledge involves providing continuous learning opportunities and resources to enhance skills, deepen expertise, and foster professional development. This proactive approach contributes to a skilled, adaptable workforce, driving individual and organizational success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] lg:h-screen w-full bg-[url('https://24slides.com/presentbetter/content/images/wordpress/2018/12/company-profile-presentation-tips.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="h-full bg-black/70 w-full flex items-center justify-center">
              <div data-aos="fade-down" data-aos-duration="2000">
              <div className="w-3/5 mx-auto">
                  <h1 className="text-3xl text-center uppercase md:text-6xl font-semibold text-white mb-3">
                   Office Discussion
                  </h1>
                  <p className="text-gray-300 text-center">
                  Office discussions are dynamic exchanges of ideas and information among colleagues within the workplace. These sessions facilitate collaboration, problem-solving, and decision-making, fostering a culture of open communication and shared insights for enhanced team effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
