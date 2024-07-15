import React from "react";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../reusables/PrimaryButton";
import Brands from "./Brands";
import Story from "./Story";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[115px] ml-[162px] w-full">
        <p className=" text-[18px]">We're here to help you</p>
        <h1 className="text-[60px] font-bold">Relax & Rest</h1>
        <p className="paragraph-text max-w-[581px]">
          With the aid of our Melatonin Sleepstiq, we can assure you that you
          can get quality sleep.
        </p>
        <PrimaryButton text="Visit Shop" />
      </div>
      <Brands />
      <Story />
    </div>
  );
};

export default Hero;
