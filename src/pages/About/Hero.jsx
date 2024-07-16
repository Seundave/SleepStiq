import React from "react";
import Navbar from "../../components/Navbar";

const Hero = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="mt-[115px] ml-[162px]">
        <p className=" text-[18px]">We're here to help you</p>
        <h1 className="text-[60px] font-bold">Relax & Rest</h1>
      </div>
    </div>
  );
};

export default Hero;
