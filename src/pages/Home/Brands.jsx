import React from "react";
import {
  bloomberg,
  forbes,
  google,
  influencive,
  sleepReview,
} from "../../assets/Home";

const Brands = () => {
  return (
    <div className="h-[80px] md:h-[131px] justify-between  w-full flex items-center bg-white shadow-2xl gap-[20px] md:gap-[50px] px-[20px] md:pl-[72px] md:pr-[82px]">
      <ImageBox width="w-[146px]" image={google} />
      <ImageBox width="w-[129px]" image={forbes} />
      <ImageBox width="w-[226px]" image={bloomberg} />
      <ImageBox width="w-[201px]" image={sleepReview} />
      <ImageBox width="w-[220px]" image={influencive} />
    </div>
  );
};

export default Brands;

const ImageBox = ({ image, width }) => {
  return (
    <div className={`${width}`}>
      <img
        src={image}
        alt="brand-images"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
