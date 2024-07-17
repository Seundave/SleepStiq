import React from "react";
import ReviewContent from "../../components/Review";
import { AllReviews } from "../../constants/data";

const Reviews = () => {
  return (
    <div>
      <ReviewContent testimonialBy={AllReviews} />
      <div className="mb-[66px] md:px-[30px]  max-md:mx-[30px] lg:mx-[165px]">
        <hr className="mt-[64px] border-1 border-[#213842] border-opacity-[9.56%]" />
      </div>
    </div>
  );
};

export default Reviews;
