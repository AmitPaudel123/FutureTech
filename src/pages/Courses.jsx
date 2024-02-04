import React from "react";
import { items } from "../data/AllCourses";

const Courses = () => {
  return (
    <div className="  flex justify-center items-center">
      <div className=" md:px-0 px-4   flex  flex-col gap-10 items-center justify-center w-full md:w-9/12">
        {items.map((item, index) => (
          <div
            key={index}
            className=" border hover:border-primary-250 duration-500 px-6 py-10 md:flex items-center  gap-16"
          >
            <img
              className=" w-96 h-96 object-cover rounded-2xl"
              src={item.image}
              alt=""
            />
            <div className=" flex flex-col  gap-1">
              <span className=" text-2xl  text-gray-700  font-semibold cursor-pointer hover:text-primary-250 duration-500">
                {item.name}
              </span>
              <span className=" text-md text-gray-400 hover:text-gray-800 duration-500">
                {item.work}
              </span>
              <div className="  grid md:grid-cols-5 grid-cols-2 gap-7">
                <div className=" flex gap-2 items-center">
                  <span className=" text-primary-300">{item.clockIcon}</span>
                  <span className=" text-gray-500">{item.clock}</span>{" "}
                </div>
                <div className=" flex gap-2 items-center">
                  <span className=" text-primary-300">{item.levelIcon}</span>
                  <span className=" text-gray-500">{item.level}</span>
                </div>
                <div className=" flex gap-2 items-center">
                  <span className=" text-primary-300">{item.lesionIcon}</span>
                  <span className=" text-gray-500">{item.lession}</span>
                </div>
                <div className=" flex gap-2 items-center">
                  <span className=" text-primary-300">{item.quizeIcon}</span>
                  <span className=" text-gray-500">{item.quizes}</span>
                </div>
                <div className=" flex gap-2 items-center">
                  <span className=" text-primary-300">{item.studentIcon}</span>
                  <span className=" text-gray-500">{item.student}</span>
                </div>
              </div>
              <span className=" mt-5  text-gray-700 text-xl  font-medium">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
