import React from "react";
import Navbar from "../../components/Navbar";
import SearchInput from "../../reusables/SearchInput";

const Hero = () => {
  return (
    <div className=" bg-[#FBF9F2] max-md:h-[596px] h-[500px] pt-[150px] max-md:pt-[200px] max-lg:px-[30px] lg:px-[154px]">
      {/* <Navbar /> */}
      <div>
        <p className=" max-md:text-[18px] text-[14px] text-[#12305B]">
          We're here to help you
        </p>
        <h1 className="md:text-[60px] max-md:text-[30px] font-bold text-[#12305B]">
          How can we assist?
        </h1>
        <SearchInput />
      </div>
    </div>
  );
};

export default Hero;
