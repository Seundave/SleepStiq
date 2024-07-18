import React from "react";
import ReviewContent from "../../components/Review";
import { AllReviews } from "../../constants/data";
import Divider from "../../reusables/Divider";

const Reviews = () => {
  return (
    <div>
      <ReviewContent testimonialBy={AllReviews} />
      <Divider/>
    </div>
  );
};

export default Reviews;
