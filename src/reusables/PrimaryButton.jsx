import React from "react";

const PrimaryButton = ({ text, mt }) => {
  return (
    <div>
      <button
        className={
          "rounded-md text-white bg-[#FC5959] h-[50px] w-[225px] mt-[23px]"
        }
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
