import React from "react";
import { mission } from "../../assets/Home";
import { Missions } from "../../constants/data";

const Mission = () => {
  return (
    <div className="flex mt-[165px] justify-between gap-[58px]">
      <div className="w-[40%] max-w-[475px] flex flex-col justify-center ml-[172px]">
        <h1 className="header-text">Our Mission</h1>
        <p className="paragraph-text">
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
      <div className="w-[55%]">
        <img src={mission} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Mission;
