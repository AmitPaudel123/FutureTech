import React from "react";
import recent1 from "../assets/recent/recent3.jpg";
const ImportantCall = () => {
  return (
    <div className=" md:px-0 px-4 flex flex-col  md:py-24  py-10 justify-center items-center">
      <img
        className=" z-0 absolute md:w-[100vw] w-full md:h-[40vh] h-[20vh]  object-cover"
        src={recent1}
        alt=""
      />
      <div className=" z-30 relative flex justify-center items-center  flex-col w-full gap-5 md:w-9/12">
        <span className="  tracking-widest md:text-3xl text-gray-100 text-xl font-bold ">
          Let us inform you about everything important directly.
        </span>
        <form className=" flex">
          <input required className=" caret-slate-100 bg-transparent border  md:w-[35vw]  w-[70vw] px-2 md:py-3 py-2 border-gray-100 rounded-md placeholder:text-white  md:placeholder:font-bold outline-none" type="email" name="email" placeholder="Enter Your Email Address" />
          <button type="submit" className=" bg-primary-350 text-white px-8 md:py-2 hover:bg-gray-700 duration-500 rounded-r-md -ml-7 ">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ImportantCall;
