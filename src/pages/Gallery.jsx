import React from "react";
import scrool1 from "../assets/scrools/scrool1.webp";
import scrool2 from "../assets/scrools/scrool2.webp";
import scrool3 from "../assets/scrools/scrool3.webp";
import scrool4 from "../assets/scrools/scrool7.webp";
import scrool5 from "../assets/scrools/scrool5.webp";
import scrool6 from "../assets/scrools/scrool6.webp";

const Gallery = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" md:px-0 px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:w-9/12">
        <img
          className=" w-96 object-cover h-96 cursor-pointer hover:scale-105 duration-500 rounded-xl"
          src={scrool6}
          alt=""
        />
        <img
          className="  md:w-96 w-80 object-cover md:h-96 h-80 cursor-pointer hover:scale-105 duration-500 rounded-xl"
          src={scrool1}
          alt=""
        />
        <img
          className=" w-96 object-cover h-96 cursor-pointer hover:scale-105 duration-500 rounded-xl"
          src={scrool2}
          alt=""
        />
        <img
          className=" w-96 object-cover h-96 cursor-pointer hover:scale-105 duration-500 rounded-xl"
          src={scrool3}
          alt=""
        />
        <img
          className=" w-96 object-cover h-96 cursor-pointer hover:scale-105 duration-500 rounded-xl"
          src={scrool4}
          alt=""
        />
        <img
          className=" w-96 object-cover h-96 cursor-pointer hover:scale-105 duration-500 rounded-xl"
          src={scrool5}
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
