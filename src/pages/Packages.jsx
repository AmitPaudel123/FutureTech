import React from "react";


const Packages = () => {
  return (
    <div className=" flex  justify-center items-center flex-col gap-10">
     <section className="">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className=" flex flex-col gap-1 justify-center items-center text-center">
              <div className=" tracking-widest text-3xl  text-gray-700">
                <span className=" text-primary-350">Our</span>Packages
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
      <div className=" flex flex-col gap-5 w-9/12">
        <div className=" flex flex-col gap-1 justify-center items-center text-center">
          <div className=" tracking-widest text-3xl  text-gray-700">
            <span className=" text-primary-350">Contact </span>& Find
          </div>
          <span className=" flex flex-col gap-1">
            <span className=" border-b-2 border-primary-350  w-24"></span>
            <hspan className=" ml-8 border-b-2 border-gray-700  w-24"></hspan>
          </span>
        </div>
        <div className=" flex justify-center items-center ">
          <iframe title="Unique Title 1" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.381063729706!2d85.31685772517109!3d27.70551842557259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19075849239d%3A0x4ddaddd1271c3890!2sBagbazar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1707115261484!5m2!1sen!2snp"
            className=" md:w-[1200px] md:h-[450px] h-96 w-96"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Packages;


export const plans = [
  {
    name: "Starter",
    price: 12,
    features: [
      "One Day Trial",
      "Limited Courses",
      "Free 3 Lessons",
      "No Supporter",
      "No Ebook",
      "No Tutorial",
      "Limited Registered User",
    ],
  },
  {
    name: "Basic",
    price: 35,
    features: [
      "One Day Standard Access",
      "Limited Courses",
      "300+ Lessons",
      "Random Supporter",
      "View Only Ebook",
      "Standard Tutorials",
      "Unlimited Registered User",
    ],
  },
  {
    name: "Premium",
    price: 60,
    features: [
      "Unlimited Registered User",
      "Unlimited Courses",
      "1000+ Lessons & Growing ",
      "Random Supporter",
      "Free Ebook Downloads",
      "Premium Tutorials",
      "Unlimited Registered User",
    ],
  },
];
