import React from "react";
import Navbar from "../../components/Navbar";
import SearchInput from "../../reusables/SearchInput";

const Hero = () => {
  return (
    <div className=" bg-[#FBF9F2] h-[596px] pt-[200px] px-[154px]">
      {/* <Navbar /> */}
      <div>
        <p className=" text-[18px] text-[#12305B]">We're here to help you</p>
        <h1 className="text-[60px] font-bold text-[#12305B]">How can we assist?</h1>
        <SearchInput/>
      </div>
    </div>
  );
};

export default Hero;
