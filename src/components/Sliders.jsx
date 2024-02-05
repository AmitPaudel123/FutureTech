import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { items } from "../data/SliderData";

export default function Slider() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
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
                  className=" relative md:h-[100vh] md:w-[100vw] h-[35vh] w-[100vw]  object-cover"
                  src={item.image}
                  alt=""
                />
                <span className=" md:mt-0 mt-12 md:px-0 px-4 z-20 flex flex-col gap-2 justify-center items-center absolute tracking-widest  text-gray-100 font-bold">
                  <span
                  data-aos="fade-right"
               data-aos-duration="1500"
                    className=" md:pl-0 pl-8 text-3xl md:text-6xl tracking-widest text-primary-350 font-bold"
                  >
                    {item.name}
                  </span>
                  <span
                  data-aos="fade-left"
                    data-aos-duration="1500"
                    className=" tracking-widest md:text-5xl text-2xl"
                  >
                    {item.desc}
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
