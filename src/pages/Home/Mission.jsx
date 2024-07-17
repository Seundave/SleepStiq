import React from "react";
import { mission } from "../../assets/Home";
import { Missions } from "../../constants/data";

const Mission = () => {
  return (
    <div className="md:flex md:flex-row flex flex-col md:mt-[165px] mt-[50px]  lg:mx-0 px-[30px] md:px-0  md:gap-[58px] lg:ml-[172px]">
      <div className="md:w-[37%] w-full max-w-[475px] flex flex-col justify-center">
        <h1 className="header-text text-center md:text-start">Our Mission</h1>
        <p className="paragraph-text md:mt-[28px] mt-[20px]">
          We started Sleepstiq with 1 simple goal: to be your best friend at
          bedtime. We, just like you, deal with stress, unease, and trouble
          sleeping from a number of silly things like school, work, screens,
          numbers, and people. That's why we created products that aim to -{" "}
        </p>
        <div className="mt-3">
          {Missions.map((el, index) => (
            <p className="paragraph-text" key={index}>
              {el.mission}
            </p>
          ))}
        </div>
      </div>
      <div className="md:w-[61%]  w-full mt-[30px] md:mt-0">
        <img src={mission} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Mission;
