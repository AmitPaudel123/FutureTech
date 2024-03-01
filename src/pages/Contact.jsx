import React from "react";
import { toast } from 'react-hot-toast';


const Contact = () => {

  const contacttost = () =>{
    toast.success("Success")

  }
  return (
    <div className=" flex justify-center items-center">
      <div className=" md:px-0 px-4  w-full md:w-9/12 flex flex-col gap-8 justify-center items-center">
        <div className=" md:flex  justify-center gap-10">
          <div>
            <main className="">
              <div className="max-w-screen-xl mx-auto  text-gray-600 ">
                <div className=" flex flex-col gap-1 justify-center items-center text-center">
                  <div className=" tracking-widest text-3xl  text-gray-700">
                    <span className=" text-primary-350">Contact </span>& Find
                  </div>
                  <span className=" flex flex-col gap-1">
                    <span className=" border-b-2 border-primary-350  w-24"></span>
                    <hspan className=" ml-8 border-b-2 border-gray-700  w-24"></hspan>
                  </span>
                </div>
                <div className=" mt-5 ">
                  <form
                    onSubmit={contacttost}
                    className="space-y-5"
                  >
                    <div className=" grid md:grid-cols-2 gap-8 ">
                      <div className=" md:w-80">
                        <input
                          type="text"
                          required
                          placeholder="User Name *"
                          className=" placeholder:text-gray-700 w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#087871] rounded-lg"
                        />
                      </div>
                      <div className=" md:w-80">
                        <input
                          type="email"
                          required
                          placeholder="Your Email  *"
                          className=" placeholder:text-gray-700 w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#087871] rounded-lg"
                        />
                      </div>
                      <div className=" md:w-80">
                        <input
                          type="text"
                          name="number"
                          required
                          placeholder="Your Phone Number"
                          className="  placeholder:text-gray-700 w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#087871] rounded-lg"
                        />
                      </div>
                      <div className=" md:w-80">
                        <input
                          type="text"
                          required
                          placeholder="Subject"
                          className="  placeholder:text-gray-700 w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#087871] rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        required
                        placeholder="Message/Note"
                        className="  placeholder:text-gray-700 w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-[#087871]   rounded-lg"
                      ></textarea>
                    </div>
                    <div className=" flex justify-center items-center">
                      <button className="   w-max px-20 py-2 text-white font-medium  bg-primary-350  hover:bg-gray-700   rounded-lg duration-500">
                        Submit
                      </button>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
          <div className=" md:w-5/12  md:py-0 py-4 flex flex-col gap-4">
            <h1 className="text-gray-800 text-2xl font-semibold ">
              Looking for support or chat with Info?
            </h1>
            <span className=" text-gray-500">
              If you are looking for information about a training institute in
              Kathmandu, Bagbazar, I recommend checking local directories,
              online platforms, or contacting local educational authorities for
              the most up-to-date and accurate information. You may also want to
              read reviews from students who have attended the institute to get
              insights into the quality of education and facilities provided.
            </span>
            <h1 className="text-gray-800 text-3xl font-semibold ">Address</h1>
            <span className=" text-gray-500">
              Training institute in Kathmandu, Bagbazar Nepal.
            </span>
          </div>
        </div>
        <div>
          <iframe title="Unique Title 1" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.381063729706!2d85.31685772517109!3d27.70551842557259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19075849239d%3A0x4ddaddd1271c3890!2sBagbazar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1707115261484!5m2!1sen!2snp"
            className=" md:w-[1200px] md:h-[450px] h-96 w-80"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
