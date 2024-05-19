import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HomeNavbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);
  const location = useLocation();
  console.log(location.pathname);

  const [state, setState] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Replace / paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Packages", path: "/packages" },
    { title: " Courses", path: "/course" },
    { title: "Gallery", path: "/gallery" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <div
      style={{
        backgroundColor: scrollY > 100 ? " rgb(137, 199, 226)" : "white",
      }}
      className="  z-50 fixed left-0 right-0 top-0 scroll-smooth  flex justify-center py-2 shadow-md shadow-slate-400"
    >
      <div className="  flex items-center w-full md:w-9/12">
        <nav className="  w-full md:static md:text-sm md:border-none">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
            <div className="flex items-center justify-between py-2 md:py-5 md:block">
              <a href="/">
                <p className=" text-3xl font-semibold text-orange-500">
                  Future<span className=" text-black">Tech</span>
                  <span className=" text-green-500">Academy</span>
                </p>
              </a>
              <div onClick={handleclick} className="md:hidden">
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                state ? "block" : "hidden"
              }`}
            >
              <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className={`${
                        location.pathname === item.path ? " text-white" : ""
                      }text-gray-300 font-semibold  text-[18px] hover:text-primary-450`}
                    >
                      <a href={item.path} className="block">
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {nav ? (
        <div className=" bg-black/80 fixed w-full h-screen z-10  top-96 left-0"></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeNavbar;
