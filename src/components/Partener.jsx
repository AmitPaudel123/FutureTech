import React from "react";
import { items } from "../data/About";

const Partener = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" py-5 md:px-0 px-4 flex justify-center items-center md:w-9/12 ">
        <div className=" flex flex-col gap-5 justify-center items-center">
          <div className=" flex flex-col gap-1 justify-center items-center text-center relative max-w-xl mx-auto sm:text-center">
            <div className=" tracking-widest text-gray-700 text-xl  sm:text-3xl">
              <span className=" text-primary-350">Our</span> Trainers
            </div>
            <div className=" flex flex-col gap-1">
              <span className=" border-b-2 border-primary-350  w-24"></span>
              <span className=" ml-8 border-b-2 border-gray-700  w-24"></span>
            </div>
          </div>
          <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-7">
            {items.map((item, index) => (
              <div
                key={index}
                className=" hover:shadow-2xl duration-500 flex flex-col gap-3 px-4 py-7"
              >
                <img
                  className="  md:h-64 md:w-64  h-44 rounded-full w-44 object-cover"
                  src={item.img}
                  alt=""
                />
                <div className=" flex flex-col gap-2">
                  <span className=" text-xl text-primary-300 hover:text-primary-200 duration-300 cursor-pointer">
                    {item.name}
                  </span>
                  <span className=" text-gray-700 font-semibold">
                    {item.work}
                  </span>
                  <span className=" text-gray-500">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partener;
