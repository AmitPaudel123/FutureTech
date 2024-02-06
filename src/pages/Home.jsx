import React from "react";
import Slider from "./../components/Sliders";
import Expertise from "./../components/Expertise";
import Recent from "./../components/Recent";
import Pricing from "./../components/Pricing";
import Enrool from "./../components/Enrool";
import Choose from "./../components/Choose";
import Marquee from "./../components/Marquee";
import Testmoniral from "../components/Testmoniral";
import Partener from "../components/Partener";

const Home = () => {
  return (
    <div>
      <Slider />
      <Enrool />
      <Expertise />
      <Recent />
      <Choose />
      <Marquee />
      <Testmoniral/>
      <Partener/>
      <Pricing />
    </div>
  );
};

export default Home;
