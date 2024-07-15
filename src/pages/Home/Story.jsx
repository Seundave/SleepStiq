import React from "react";
import SliderContent from "../../components/Slider";
import { Testimonial } from "../../constants/data";

const Story = () => {
  return (
    <div className="px-[162px] mx-auto flex justify-between items-center max-h-[455px] w-full">
      <div className="w-[50%]">
        <p>Our Amazing Story</p>
        <p>10k+Happy Customers</p>
        <p>
          There’s no secret sauce, no wizard behind the curtain. What makes
          Aerolab tick is an interdisciplinary team with a framework that
          fosters candid collaboration.
        </p>
        <div>
          <img src="" alt="" />
          <p>More know About us</p>
        </div>
      </div>
      <div className="w-[50%]">
        <SliderContent testimonialBy={Testimonial} />
      </div>
    </div>
  );
};

export default Story;
