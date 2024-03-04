import React from "react";

export default function Demo() {
  return (
    <div>
      <div className="  relative    bg-gradient-to-br  from-cyan-500    to-sky-200 h-[100vh] w-full">
        <img
          src={dor}
          alt=""
          className="  object-cover absolute w-full h-full mix-blend-overlay"
        />

        <div className=" p-20">
          <h1 className="  text-white text-6xl  font-bold">
            Hello Rajan Bahadur Shahi
          </h1>
          <h1 className=" mt-5  text-white text-3xl font-light">
           Gita Bista
          </h1>
        </div>
      </div>
    </div>
  );
}
