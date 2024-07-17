import React from "react";
import ProductReview from "../../components/ProductReview";
import { prodReview } from "../../constants/data";

const ProductReviews = () => {
  return (
    <div className="mt-[92px] ml-[165px]">
      <h1 className="text-[36px] text-[#4D533C] font-bold mb-[52px]">Product Reviews</h1>
      <ProductReview review={prodReview}/>
      
    </div>
  );
};

export default ProductReviews;
