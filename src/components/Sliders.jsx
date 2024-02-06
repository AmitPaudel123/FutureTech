import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { items } from "../data/SliderData";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
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
        {items.map((item, index) => (
          <SwiperSlide>
            <div key={index} className=" ">
              <div className=" flex justify-center items-center flex-col   ">
                <img
                  className=" md:h-full h-60 relative  object-cover"
                  src={item.image}
                  alt=""
                />
                <span className=" md:mt-0 mt-12 md:px-0 px-4 z-20 flex flex-col gap-2 justify-center items-center absolute tracking-widest  text-gray-100 font-bold">
                  <span
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className=" md:pl-0 pl-5  text-3xl md:text-6xl tracking-widest text-primary-350 font-bold"
                  >
                    {item.name}
                  </span>
                  <span
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className=" text-gray-700 font-semibold tracking-widest md:text-5xl text-2xl"
                  >
                    {item.desc}
                  </span>
                  <span className=" md:flex hidden md:mt-4">
                    <Link to={"/contact"} className="   bg-[#3282B8] hover:bg-primary-300 duration-500 text-gray-100 px-8 py-2">
                      CONTACT US
                    </Link>
                  </span>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
