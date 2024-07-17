import React from "react";
import PrimaryButton from "../../reusables/PrimaryButton";
import { shopImage } from "../../assets/Home";

const Shop = () => {
  return (
    <div className="flex pr-[187px] gap-[56px] items-center justify-center">
      <div className="w-[62%] flex justify-end max-h-[580px] ">
        <img src={shopImage} alt="" className=" h-full placeholder:shadow-2xl" />
      </div>
      <div className="w-[38%]">
        <h2 className="header-text">Shop Now</h2>
        <p className="paragraph-text mt-[27px] mb-[20px]">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <PrimaryButton text={"Visit Shop"} />
      </div>
    </div>
  );
};

export default Shop;
