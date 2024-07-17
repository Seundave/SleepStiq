import React from "react";
import { IoIosPlay } from "react-icons/io";
import SliderContent from "../../components/Slider";
import { Testimonial } from "../../constants/data";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="px-[30px] md:px-[154px] md:flex md:flex-row flex flex-col justify-between items-center mt-[150px] mb-[152px] h-[474px]">
      <div className="md:w-[45%] w-full">
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
      <div className="mt-[30px] md:mt-0 md:w-[45%] w-full h-[474px] shadow-2xl">
        <SliderContent testimonialBy={Testimonial} />
      </div>
    </div>
  );
};

export default Story;
