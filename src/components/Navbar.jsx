import React from "react";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";

const Navbar = () => {
  return (
    <div className=" z-50 fixed left-0 right-0   top-0 flex justify-center py-4 bg-[#012B47]">
      <div className=" flex justify-between items-center md:w-9/12">
        <div className=" flex items-center gap-2">
          <span>
            <IoIosCall size={20} className=" text-primary-400 font-bold " />
          </span>
          <span className=" font-semibold   text-gray-300">
            {" "}
            +1800 326 3264
          </span>
          <span>
            <HiOutlineMail
              size={20}
              className=" text-primary-400 font-bold ml-3 "
            />
          </span>
          <span className=" font-semibold   text-gray-300">
            example@website.com
          </span>
        </div>
        <div className=" flex items-center gap-4">
          <span className=" text-gray-300 font-bold cursor-pointer hover:text-primary-400 duration-300">
            <BiLogoFacebook size={20} />
          </span>
          <span className=" text-gray-300 font-bold cursor-pointer hover:text-primary-400 duration-300">
            <FaLinkedinIn size={16} />
          </span>
          <span className=" text-gray-300 font-bold cursor-pointer hover:text-primary-400 duration-300">
            <SiWhatsapp size={16} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
