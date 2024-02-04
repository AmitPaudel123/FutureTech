import React from "react";
import Slider from "./../components/Sliders";
import Expertise from "./../components/Expertise";
import Recent from "./../components/Recent";
import Pricing from "./../components/Pricing";
import Enrool from "./../components/Enrool";
import Choose from "./../components/Choose";
import Marquee from "./../components/Marquee";

const Home = () => {
  return (
    <div>
      <Slider />
      <Recent />
      <Enrool />
      <Expertise />
      <Choose />
      <Marquee />

    <Pricing />
    </div>
  );
};

export default Home;
