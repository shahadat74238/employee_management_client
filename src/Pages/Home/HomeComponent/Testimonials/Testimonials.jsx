import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {  Pagination } from "swiper/modules";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const Testimonials = () => {
  const axiosPublic = useAxiosPublic();

  const {data: testimonials = []} = useQuery({
    queryKey: ["testimonials"],
    queryFn: async()=>{
     const res = await  axiosPublic.get("/testimonials")
     return res.data;
    }
  })

  return (
    <div className="">
      <div>
        <h1 className="uppercase text-3xl font-semibold text-center ">
          testimonials
        </h1>
        <hr className="w-24 border border-slate-950 mx-auto mt-2 mb-5 " />
      </div>
      <Swiper
         slidesPerView={1}
         spaceBetween={30}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
           640: {
             slidesPerView: 2,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 3,
             spaceBetween: 40,
           },
           1024: {
             slidesPerView: 4,
             spaceBetween: 50,
           },
         }}
         modules={[Pagination]}
         className="mySwiper"
      >
        {testimonials?.map((t, x) => (
          <SwiperSlide key={x}>
            <div className="hover:cursor-pointer">
              <div className="flex justify-center  -mb-10 ">
                <img
                  className="h-20 w-20 p-2 bg-white rounded-full object-cover"
                  src={t.image}
                  alt="Loading Image"
                />
              </div>
              <div className="p-5 bg-slate-100">
                <p className="text-center font-semibold text-xl my-5">
                  {t.name}
                </p>
                <p className=" text-sm text-justify font-medium text-gray-500">
                  {t.testimonials.slice(0, 190)} ...{" "}
                  <span className="text-red-500 ">more</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
