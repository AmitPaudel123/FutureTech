import React from "react";
import { chooses } from "./../data/ChooseUs";
import CountUp from "react-countup";

const Choose = () => {
  return (
    <div className=" md:px-0 px-4 flex justify-center items-center py-10">
      <div className=" flex  flex-col gap-10 items-center md:w-9/12">
        <div className=" flex flex-col gap-1 justify-center items-center text-center">
          <div className=" tracking-widest text-3xl  text-gray-700">
            <span className=" text-primary-350"> Why You</span> Choose Us
          </div>

          <div className=" flex flex-col gap-1">
            <span className=" border-b-2 border-primary-350  w-24"></span>
            <span className=" ml-8 border-b-2 border-gray-700  w-24"></span>
          </div>
        </div>
        <div className=" grid md:grid-cols-3 gap-24 ">
          {chooses.map((choose, index) => (
            <div
              key={index}
              className=" flex justify-center items-center flex-col gap-2"
            >
              <CountUp
                end={choose.number}
                start={0}
                duration={6}
                className=" md:text-5xl text-4xl mb-3 text-primary-350"
              >
                {choose.number}
              </CountUp>
              <h1 className=" md:text-3xl text-2xl text-gray-700">
                {choose.name}
              </h1>
              <span className=" text-sm text-gray-500 flex justify-center items-center  flex-col gap-1">
                <h1>{choose.desc}</h1> <span>{choose.link}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
