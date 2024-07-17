import React from "react";
import PrimaryButton from "../../reusables/PrimaryButton";

const VisitShop = () => {
  return (
    <div className="md:mt-[159px] mt-[50px] flex flex-col justify-center items-center px-[30px] md:px-0">
      <h1 className="header-text">Visit Our Shop</h1>
      <p className="paragraph-text max-w-[915px] mx-auto justify-center mt-[30px] mb-[20px] text-center">
        Our Personal Diffuser is an aromatherapy device that contains a blend of
        melatonin, lavender, and chamomile. A few breaths of our plant-based
        essential oil mist will mellow you out, quiet the mind, and lull you to
        bed.
      </p>
      <PrimaryButton text={"Visit Shop"} />
      <div className="container">
        <hr className="md:mt-[165px] mt-[40px] border-1 border-[#213842] border-opacity-[9.56%]" />
      </div>
    </div>
  );
};

export default VisitShop;
