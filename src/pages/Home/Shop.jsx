import React from "react";
import PrimaryButton from "../../reusables/PrimaryButton";
import { shopImage } from "../../assets/Home";

const Shop = () => {
  return (
    <div className="flex justify-between container bg-red-400">
      <div className="w-[50%] max-h-[580px] bg-black">
        <img src={shopImage} alt="" className="w-full h-full"/>
      </div>
      <div className="w-[50%]">
        <h2 className="header-text">Shop Now</h2>
        <p className="paragraph-text">
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
