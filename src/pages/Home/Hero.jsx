import React from "react";
import PrimaryButton from "../../reusables/PrimaryButton";
import Brands from "./Brands";

const Hero = () => {
  return (
    <div
      className="h-[500px] md:h-[811px] pt-[150px] md:pt-[200px] lg:pt-[250px] lg:px-[154px] px-[30px] relative"
      style={{
        backgroundImage: "url(/Slider.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <p className="md:text-[18px] text-[14px] text-[#12305B]">
          We're here to help you
        </p>
        <h1 className="md:text-[60px] text-[30px] font-bold text-[#12305B]">
          Relax & Rest
        </h1>
        <p className="text-[#12305B] max-w-[581px] md:text-[16px] text-[12px]">
          With the aid of our Melatonin Sleepstiq, we can assure you that you
          can get quality sleep.
        </p>
        <PrimaryButton text="Visit Shop" />
      </div>
      {/* Brands */}
      <div className="absolute bottom-[-66px] w-full right-0 flex justify-end md:pl-[154px]">
        <Brands />
      </div>
    </div>
  );
};

export default Hero;
