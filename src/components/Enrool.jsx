import React from "react";
 import enroll1 from "../assets/enroll/en1.jpg"
const Enrool = () => {
  return (
    <div className=" bg-gray-100 flex justify-center items-center py-10">
      <div className=" md:px-0 px-4 md:flex py-10 justify-between items-center md:w-9/12">
        <form className=" flex flex-col gap-6 bg-[#EA7E1C] rounded-md px-8 py-10 pb-24 md:w-5/12">
          <span className=" flex justify-center items-center text-2xl text-gray-100 font-bold cursor-pointer">Enroll Now</span>
          <input
          required
            className=" placeholder:text-gray-500 rounded-md  px-2 py-2 outline-none"
            type="text"
            placeholder=" Name"
          />
          <input
          required
            className=" placeholder:text-gray-500 rounded-md  px-2 py-2 outline-none"
            type="email"
            name="email"
            placeholder=" Email"
          />
          <input
          required
            className=" placeholder:text-gray-500 rounded-md  px-2 py-2 outline-none"
            type="text"
            name="number"
            placeholder=" Number"
          />
          <select className=" placeholder:text-gray-500 rounded-md  px-2 py-2 outline-none">
            <option  className=""
              value="
             "
            >
              Course Types
            </option>
            <option
              value="
             "
            >
             Web Designing
            </option>
            <option
              value="
             "
            >
              Web Development
            </option>
            <option
              value="
             "
            >
             Managenent Programs
            </option>
            <option
              value="
             "
            >
              Mobile Application
            </option>
          </select>
          <button type="submit" className=" bg-gray-800 py-2  text-gray-100  rounded-md hover:bg-gray-700 duration-500">Submit</button>
        </form>
        <div className=" md:w-5/12">
          <img className=" md:-mt-2  mt-10 rounded-md object-cover" src={enroll1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Enrool;
