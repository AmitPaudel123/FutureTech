import React from "react";
import { plans } from "../data/Pricing";

const Pricing = () => {
  return (
    <div className=" md:px-0 px-4 flex justify-center ">
      <div className=" flex justify-between items-center w-full md:w-9/12">
        <section className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className=" flex flex-col gap-1 justify-center items-center text-center">
              <div className=" tracking-widest text-3xl  text-gray-700">
                <span className=" text-primary-350">Pricing</span>Table
              </div>
              <span className=" flex flex-col gap-1">
                <span className=" border-b-2 border-primary-350  w-24"></span>
                <hspan className=" ml-8 border-b-2 border-gray-700  w-24"></hspan>
              </span>
            </div> 
            <div className="md:mt-16 mt-5 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
              {plans.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2"
                >
                  <div>
                    <span className=" text-gray-800 text-2xl font-medium">
                      {item.name}
                    </span>
                    <div className="mt-4 border-b  py-2 border-gray-700  text-primary-350 text-3xl font-semibold">
                      ${item.price}{" "}
                      <span className="text-xl text-gray-600 font-normal">
                        /mo
                      </span>
                    </div>
                  </div>
                  <ul className="py-8 space-y-3">
                    {item.features.map((featureItem, idx) => (
                      <li key={idx} className="flex items-center gap-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary-350"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        {featureItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
