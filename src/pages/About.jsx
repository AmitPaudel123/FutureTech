import React from "react";
import scrool2 from "../assets/scrools/scrool2.webp";
import { items } from "../data/About";

const About = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="md:px-0 px-4 flex justify-center items-center md:w-9/12 flex-col md:gap-20 gap-12">
        <div className=" md:flex justify-between  gap-10">
          <div className=" flex flex-col gap-5">
            <span className=" md:mt-0 mt-5 text-xl text-gray-700 font-semibold">
              About The Training Institute
            </span>
            <span className=" flex flex-col gap-5">
              <h1 className=" text-gray-500">
                As of my last knowledge update in January 2024, I don't have
                specific information about a training institute in Kathmandu,
                Bagbazar. However, I can provide you with a general description
                of what you might expect from a training institute.
              </h1>
              <h1 className=" text-gray-500">
                Training institutes typically offer courses and programs
                designed to enhance skills and knowledge in a particular field.
                Common areas of focus include IT and computer skills, language
                proficiency, professional development, and vocational training.
                The specific offerings may vary widely depending on the
                institute's specialization.
              </h1>
              <h1 className=" text-gray-500">
                If you are looking for information about a training institute in
                Kathmandu, Bagbazar, I recommend checking local directories,
                online platforms, or contacting local educational authorities
                for the most up-to-date and accurate information. You may also
                want to read reviews from students who have attended the
                institute to get insights into the quality of education and
                facilities provided.
              </h1>
              <h1 className=" text-gray-500">
                Please note that the details provided here are general in
                nature, and it's important to verify specific information about
                any particular training institute you are interested in.
              </h1>
            </span>
          </div>
          <img
            className=" object-cover rounded-xl h-60 md:h-96"
            src={scrool2}
            alt=""
          />
        </div>
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

export default About;
