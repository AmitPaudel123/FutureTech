import React from "react";
import scrool1 from "../assets/scrools/scrool10.webp";
import { items } from "../data/Expertise";
const Expertise = () => {
  return (
    <div className=" flex flex-col  justify-center items-center">
      <span className=" relative ">
        <img className="w-[100vw] md:h-[60vh] h-[115vh] object-cover" src={scrool1} alt="" />
      </span>
      <div className=" absolute z-20  grid md:grid-cols-3 grid-cols-1 justify-between md:gap-10 gap-14 items-center w-9/12">
        {items.map(
          (item, index) =>
          (
            <div key={index}  className=" hover:scale-105 duration-700 group bg-gray-100 px-10 py-10 rounded-md flex flex-col gap-3">
              <span className=" flex  ml-20 -mt-20  justify-center  items-center object-cover border-4 border-white bg-gray-100 text-primary-350 group-hover:bg-primary-350 group-hover:text-gray-100 duration-500  rounded-full p-4 w-max text-4xl cursor-pointer">{item.icon}</span>
              <span className=" md:text-2xl text-xl text-gray-700 font-bold">{item.name}</span>
              <span className=" text-gray-500">{item.desc}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Expertise;
