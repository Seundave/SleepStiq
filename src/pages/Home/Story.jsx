import React from "react";
import { IoIosPlay } from "react-icons/io";
import SliderContent from "../../components/Slider";
import { Testimonial } from "../../constants/data";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="container flex justify-between  mt-[113px] mb-[152px] h-[474px]">
      <div className="w-[45%]">
        <p className="text-[14px] text-[#12305B]">Our Amazing Story</p>
        <p className="mt-[29px] mb-[56px] header-text">10k+Happy Customers</p>
        <p className="paragraph-text mb-[29px]">
          There’s no secret sauce, no wizard behind the curtain. What makes
          Aerolab tick is an interdisciplinary team with a framework that
          fosters candid collaboration.
        </p>
        <div className="flex underline gap-1 items-center">
          <IoIosPlay size={14} color="#12305B" />
          <Link to="/about" className="text-[16px] text-[#12305B] font-bold">
            {" "}
            More know About us
          </Link>
        </div>
      </div>
      <div className="bg-green-400 w-[45%] h-[474px]">
        <SliderContent testimonialBy={Testimonial} />
      </div>
      {/* <div className="w-[50%]">
        <SliderContent testimonialBy={Testimonial} />
      </div> */}
    </div>
  );
};

export default Story;
