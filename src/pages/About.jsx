import React from "react";
import scrool2 from "../assets/scrools/scrool2.webp";

const About = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" flex justify-center items-center w-9/12 flex-col gap-20">
        <div className=" flex justify-between gap-10">
          <img className=" object-cover rounded-xl h-96" src={scrool2} alt="" />
          <div className=" flex flex-col gap-5">
            <span className=" text-xl text-gray-700 font-semibold">About The Training Institute</span>
            <span className=" flex flex-col gap-5">
              <h1 className=" text-gray-500">
                As of my last knowledge update in January 2024, I don't have
                specific information about a training institute in Kathmandu,
                Bagbazar. However, I can provide you with a general description
                of what you might expect from a training institute.
              </h1>
              <h1 className=" text-gray-500">Training institutes typically offer courses and programs designed to enhance skills and knowledge in a particular field. Common areas of focus include IT and computer skills, language proficiency, professional development, and vocational training. The specific offerings may vary widely depending on the institute's specialization.</h1>
              <h1 className=" text-gray-500">If you are looking for information about a training institute in Kathmandu, Bagbazar, I recommend checking local directories, online platforms, or contacting local educational authorities for the most up-to-date and accurate information. You may also want to read reviews from students who have attended the institute to get insights into the quality of education and facilities provided.</h1>
              <h1 className=" text-gray-500">Please note that the details provided here are general in nature, and it's important to verify specific information about any particular training institute you are interested in.</h1>
            </span>
          </div>
        </div>
        <div>button</div>
      </div>
    </div>
  );
};

export default About;
