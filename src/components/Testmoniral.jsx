import React, { useState } from "react";
import scroo7 from "../assets/scrools/scrool10.webp";
import { testimonials } from "../data/Testmoniral";

const Testmoniral = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <div className=" flex flex-col gap-10 justify-center items-center">
      <img
        className=" relative w-[100vw] md:h-[60vh] h-[50vh] object-cover"
        src={scroo7}
        alt=""
      />
      <section className=" absolute">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className=" flex flex-col gap-1 justify-center items-center text-center mb-5">
              <div className=" tracking-widest text-3xl   text-gray-100">
                <span className=" font-semibold text-primary-350">What </span>
                Client Say's
              </div>
              <span className=" flex flex-col gap-1">
                <span className=" border-b-2 border-primary-350  w-24"></span>
                <hspan className=" ml-8 border-b-2 border-gray-700  w-24"></hspan>
              </span>
            </div>
            <ul>
              {testimonials.map((item, idx) =>
                currentTestimonial === idx ? (
                  <li key={idx}>
                    <figure>
                      <blockquote>
                        <p className=" text-gray-100 text-xl font-semibold sm:text-2xl">
                          “{item.quote}“
                        </p>
                      </blockquote>
                      <div className="mt-6">
                        <img
                          alt=""
                          src={item.avatar}
                          className="w-16 h-16 mx-auto rounded-full"
                        />
                        <div className="mt-3">
                          <span className="block  text-gray-100 text-xl font-semibold">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    </figure>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-3 justify-center">
              {testimonials.map((item, idx) => (
                <li key={idx}>
                  <button
                    className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                      currentTestimonial === idx
                        ? " bg-primary-350 font-bold"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(idx)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testmoniral;
