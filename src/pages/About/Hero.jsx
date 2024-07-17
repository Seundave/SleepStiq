import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[500px] pt-[200px] md:pt-[200px] relative max-md:px-[30px]"
      style={{
        backgroundImage: "url(/about.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:ml-[162px] mx-[30px]">
        <p className="md:text-[18px] text-[14px] text-[#12305B]">We're here to help you</p>
        <h1 className="md:text-[60px] text-[30px] font-bold text-[#12305B]">Relax & Rest</h1>
      </div>
    </div>
  );
};

export default Hero;
