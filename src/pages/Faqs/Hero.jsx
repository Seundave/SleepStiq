import React from "react";
import Navbar from "../../components/Navbar";
import SearchInput from "../../reusables/SearchInput";

const Hero = () => {
  return (
    <div className="h-screen bg-[#FBF9F2]">
      <Navbar />
      <div className="mt-[115px] ml-[162px]">
        <p className=" text-[18px]">We're here to help you</p>
        <h1 className="text-[60px] font-bold">How can we assist?</h1>
        <SearchInput/>
      </div>
    </div>
  );
};

export default Hero;
