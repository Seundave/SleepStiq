import React from "react";
import Navbar from "../../components/Navbar";

const Hero = () => {
  return (
    <div
      className="h-[596px] pt-[200px] relative"
      style={{
        backgroundImage: "url(/about.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Navbar /> */}
      <div className="ml-[162px]">
        <p className=" text-[18px] text-[#12305B]">We're here to help you</p>
        <h1 className="text-[60px] font-bold text-[#12305B]">Relax & Rest</h1>
      </div>
    </div>
  );
};

export default Hero;
