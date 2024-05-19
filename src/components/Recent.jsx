import React from "react";
import recent1 from "../assets/recent/recent1.jpg";
import recent2 from "../assets/recent/recent2.jpg";
import recent3 from "../assets/recent/recent3.jpg";
import recent4 from "../assets/recent/recent4.jpg";
const Recent = () => {
  return (
    <div className=" bg-[#F6F6F7] py-16 border-b border-gray-300">
      <section className="  md:px-0 px-4 md:w-9/12 w-full mx-auto  max-w-screen-xl ">
        <div className=" flex flex-col gap-1 justify-center items-center text-center">
          <div className=" tracking-widest text-3xl  text-gray-700">
            <span className=" text-primary-350"> Recent </span>Added Courses
          </div>
          <span className=" flex flex-col gap-1">
            <span className=" border-b-2 border-primary-350  w-24"></span>
            <hspan className=" ml-8 border-b-2 border-gray-700  w-24"></hspan>
          </span>
        </div>
        <div className=" mt-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <div
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-500 hover:shadow-sm hover:scale-105"
              key={key}
            >
              <a href={items.href}>
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className=" md:w-96 w-80 object-cover h-64 rounded-t-md"
                />
                <div className="pt-3 ml-4 mr-2">
                  <h3 className="text-xl text-gray-900">{items.title}</h3>
                </div>
                <div className="flex items-center  pb-4 ml-4 mr-2">
                  <div className="ml-3">
                    <span className="block text-gray-500">
                      {items.authorName}
                    </span>
                    <span className="block  text-primary-350 font-bold text-md">
                      {items.date}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recent;

const posts = [
  {
    title: "Management Prog.",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorName: " Traininginstitute",
    date: "$95.00",
  },
  {
    title: "Project Learning",
    img: recent4,
    authorName: " Traininginstitute",
    date: "Free",
  },
  {
    title: "Javascript Campus",
    img: recent1,
    authorName: " Traininginstitute",
    date: "$50.00",
  },
  {
    title: "Model Specificity",
    img: recent3,
    authorName: " Traininginstitute",
    date: "$250.00",
  },
  {
    title: "Sample Course",
    img: recent2,
    authorName: " Traininginstitute",
    date: "Free",
  },
  {
    title: "Learning Seminar",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorName: " Traininginstitute",
    date: "Free",
  },
];
