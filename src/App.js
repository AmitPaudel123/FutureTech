import "./App.css";
import Footer from "./components/Footer";
import HomeNavbar from "./components/HomeNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import ImportantCall from "./components/ImportantCall";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Packages from "./pages/Packages";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className=" overflow-x-hidden">
      <Toaster />
      <BrowserRouter>
        {/* <Navbar /> */}
        <HomeNavbar />
        <div className="  md:py-28 py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="course" element={<Courses />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="packages" element={<Packages />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ImportantCall />
      <Footer />
    </div>
  );
}

export default App;
