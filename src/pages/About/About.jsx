import React from "react";
import { aboutImageTwo } from "../../assets/About";
import { AboutSleepStiq } from "../../constants/data";
import PrimaryButton from "../../reusables/PrimaryButton";
import Reviews from "../Home/Reviews";

const About = () => {
  return (
    <div>
      <div className="flex mx-[152px] gap-[203px] items-center mt-[73px]">
        <div className="w-[48%]">
          <img src={aboutImageTwo} alt="" />
        </div>
        <div className="w-[52%] ">
          <h1 className="header-text">About Product</h1>
          <p className="paragraph-text mt-[27px] mb-[13px]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          {AboutSleepStiq.map((el, index) => (
            <p className="text-[#4D533C] text[-[16px]] italic">{el.about}</p>
          ))}
          <div className="flex justify-between mt-[18px] w-[172px]">
            <div className="w-[56px] flex flex-col gap-[6px]">
              <p className="text-[16px]">Price</p>
              <p className="font-semibold text-[16px]">USD 50</p>
            </div>
            <div className="w-[63px] flex flex-col gap-[6px]">
              <p className="text-[16px]">Unit</p>
              <input
                type="number"
                name="unit"
                className="outline-none border border-[#12305B] w-full rounded-md text-center"
              />
            </div>
          </div>
          <PrimaryButton text={"Buy"} />
        </div>
      </div>
      <div className="container mb-[66px]">
        <hr className="mt-[165px] border-1 border-[#213842] border-opacity-[9.56%]" />
      </div>
      <Reviews />
    </div>
  );
};

export default About;
