import React from "react";
import { aboutImageTwo } from "../../assets/About";
import { AboutSleepStiq } from "../../constants/data";
import PrimaryButton from "../../reusables/PrimaryButton";
import Reviews from "../Home/Reviews";

const About = () => {
  return (
    <div>
      <div className="md:flex md:flex-row flex flex-col mx-[30px] lg:mx-[152px] gap-[30px] md:gap-[203px] items-center mt-[73px]">
        {/* product image container */}
        <div className="md:w-[48%] w-full">
          <img
            src={aboutImageTwo}
            alt="about-image"
            className="w-full h-full"
          />
        </div>

        {/* About product page content */}
        <div className="md:w-[52%] w-full">
          <h1 className="header-text md:text-start text-center">
            About Product
          </h1>
          <p className="paragraph-text mt-[27px] mb-[13px]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          {AboutSleepStiq.map((el, index) => (
            <p
              className="text-[#4D533C] md:text[-[16px] text-[14px] italic"
              key={index}
            >
              {el.about}
            </p>
          ))}
          <div className="flex justify-between mt-[18px] w-[172px]">
            <div className="w-[56px] flex flex-col gap-[6px]">
              <p className="md:text-[16px] text-[14px]">Price</p>
              <p className="font-semibold text-[14px]">USD 50</p>
            </div>
            <div className="w-[63px] flex flex-col gap-[6px]">
              <p className="md:text-[16px] text-[14px]">Unit</p>
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

      {/* Divider */}
      <div className="container md:mb-[66px] mb-[30px] px-[30px] md:px-0">
        <hr className="md:mt-[165px] mt-[30px] border-1 border-[#213842] border-opacity-[9.56%]" />
      </div>
      <Reviews />
    </div>
  );
};

export default About;
