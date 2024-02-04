import React from "react";
import partner1 from "../assets/partner/partner1.png";
import partner2 from "../assets/partner/partner2.png";
import partner3 from "../assets/partner/partner3.png";
import partner4 from "../assets/partner/partner4.png";
import partner5 from "../assets/partner/partner5.png";

const Marquee = () => {
  return (
    <div className="  bg-gray-100 border-b flex py-16 justify-center">
      <div className=" flex flex-col gap-10  justify-center items-center w-full md:w-9/12 ">
      <div className=" flex flex-col gap-1 justify-center items-center text-center">
          <div className=" tracking-widest text-3xl  text-gray-700">
            <span className=" text-primary-350"> Our</span> Partners
          </div>

          <div className=" flex flex-col gap-1">
            <span className=" border-b-2 border-primary-350  w-24"></span>
            <span className=" ml-8 border-b-2 border-gray-700  w-24"></span>
          </div>
        </div>
        <div className="  grid md:grid-cols-7 grid-cols-2 justify-between gap-16 items-center">
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
          <img src={partner3} alt="" />
          <img src={partner4} alt="" />
          <img src={partner5} alt="" />
          <img src={partner4} alt="" />
          <img className=" md:flex hidden" src={partner1} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
