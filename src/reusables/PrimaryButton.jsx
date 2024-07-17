import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <div>
      <button
        className={
          "rounded-md text-white bg-[#FC5959] h-[30px] md:text-[16px] text-[14px] md:h-[50px] w-[100px] md:w-[225px] mt-[23px]"
        }
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
