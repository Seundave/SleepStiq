import React from "react";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../reusables/PrimaryButton";
import Brands from "./Brands";

const Hero = () => {
  return (
    <div
      className="h-[811px] pt-[200px] px-[154px] relative"
      style={{
        backgroundImage: "url(/Slider.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Navbar /> */}
      <div>
        <p className=" text-[18px] text-[#12305B]">We're here to help you</p>
        <h1 className="text-[60px] font-bold text-[#12305B]">Relax & Rest</h1>
        <p className="text-[#12305B] max-w-[581px] text-[16px]">
          With the aid of our Melatonin Sleepstiq, we can assure you that you
          can get quality sleep.
        </p>
        <PrimaryButton text="Visit Shop" />
      </div>
      <div className="absolute bottom-[-66px] w-full right-0 flex justify-end pl-[154px]">
      <Brands/>
      </div>
     
    </div>
  );
};

export default Hero;
