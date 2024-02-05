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
import Event from "./pages/Event";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
        {/* <Navbar /> */}
        <HomeNavbar />
        <div className="  md:py-28 py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="course" element={<Courses />} />
            <Route path="event" element={<Event />} />
            <Route path="gallery" element={<Gallery />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ImportantCall />
      <Footer />
    </div>
  );
}

export default App;
