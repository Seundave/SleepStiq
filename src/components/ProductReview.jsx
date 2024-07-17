import React, { useState, useEffect } from "react";
import { rating } from "../assets/Home";
// import { Testimonial } from "../pages/Home/data";

const ProductReview = ({ review }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const groupedReview = [];
  const itemsPerGroup = isMobile ? 1 : isTablet ? 2 : 4;

  for (let i = 0; i < review.length; i += itemsPerGroup) {
    groupedReview.push(review.slice(i, i + itemsPerGroup));
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedReview.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + groupedReview.length) % groupedReview.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-full">
      <div className="overflow-hidden h-auto">
        <div
          className="flex transition-transform duration-300 ease-in-out  w-full justify-between"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {groupedReview.map((group, index) => (
            <div
              key={index}
              className="flex w-full flex-shrink-0 max-sm:justify-center md:justify-between gap-[53px] overflow-hidden h-[420px]"
              style={{ width: "100%" }}
            >
              {group.map((item) => (
                <div
                  key={item.id}
                  className="max-sm:w-[100%] shadow-2xl  rounded-md  bg-white lg:w-[45%] flex flex-col gap-5 "
                >
                  <div className="h-[210px] ">
                    <img src={item.image} alt="" className="w-full h-full" />
                  </div>
                  <div className="flex flex-col justify-between mt-[16px]">
                    <div className="max-h-[90px] px-[15px] md:px-[30px]">
                      <p className="md:text-[16px] text-[14px] text-justify text-[#4D533C] italic">
                        {item.review}
                      </p>
                    </div>
                    <div className="mb-[9px] px-[15px] md:px-[30px] mt-[38px]">
                      <p className="md:text-[16px] text-[14px] text-[#4D533C] font-bold mb-[9px]">
                        {item.reviewer}
                      </p>
                      <img src={rating} alt="rating" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2">
          {groupedReview.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full bg-gray-500 ${
                currentIndex === index ? "bg-[#12305B]" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* <button
        className="absolute top-[20%] md:bottom-0 md:top-[20%] left-4 transform -translate-y-1/2 text-[30px] text-[#22C55E] p-2 rounded-full font-bold"
        onClick={prevSlide}
      >
        {"<"}
      </button>

      <button
        className="absolute top-[20%] md:bottom-0 md:top-[20%] right-4 transform -translate-y-1/2 text-[30px] text-[#22C55E] p-2 rounded-full font-bold"
        onClick={nextSlide}
      >
        {">"}
      </button> */}
    </div>
  );
};

export default ProductReview;
