import React from "react";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../reusables/PrimaryButton";

const Hero = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="mt-[115px] container">
        <p className=" text-[18px] text-[#12305B]">We're here to help you</p>
        <h1 className="text-[60px] font-bold text-[#12305B]">Relax & Rest</h1>
        <p className="text-[#12305B] max-w-[581px] text-[16px]">
          With the aid of our Melatonin Sleepstiq, we can assure you that you
          can get quality sleep.
        </p>
        <PrimaryButton text="Visit Shop" />
      </div>
    </div>
  );
};

export default Hero;
