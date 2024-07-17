import React from "react";
import ProductReview from "../../components/ProductReview";
import { prodReview } from "../../constants/data";

const ProductReviews = () => {
  return (
    <div className="md:mt-[92px] mt-5  px-[30px] lg:ml-[165px] mb-[50px]">
      <h1 className="md:text-[36px] text-[20px] text-[#4D533C] font-bold mb-[52px] text-center md:text-start">
        Product Reviews
      </h1>
      <ProductReview review={prodReview} />
    </div>
  );
};

export default ProductReviews;
