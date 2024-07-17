import React, { useState, useEffect } from "react";
import { rating } from "../assets/Home";
// import { Testimonial } from "../pages/Home/data";

const ReviewContent = ({ testimonialBy }) => {
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

  const groupedTestimonials = [];
  const itemsPerGroup = isMobile ? 1 : isTablet ? 2 : 4;

  for (let i = 0; i < testimonialBy.length; i += itemsPerGroup) {
    groupedTestimonials.push(testimonialBy.slice(i, i + itemsPerGroup));
  }

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % groupedTestimonials.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + groupedTestimonials.length) %
        groupedTestimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-full">
      <div className="overflow-hidden h-auto">
        <div
          className="flex transition-transform duration-300 ease-in-out  w-full justify-between  md:mt-[20px]"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {groupedTestimonials.map((group, index) => (
            <div
              key={index}
              className="flex w-full flex-shrink-0 max-sm:justify-center px-[30px] lg:mx-[30px]  lg:pl-[154px] md:justify-between gap-5 overflow-hidden"
              style={{ width: "100%" }}
            >
              {group.map((item) => (
                <div
                  key={item.id}
                  className="max-md:w-[100%] rounded-md justify-between bg-[#FBF9F2] lg:w-[45%] flex flex-col md:gap-5 py-[20px] px-[30px]"
                >
                 <div className="h-auto">
                    <p className="md:text-[16px] text-[14px] text-justify text-[#4D533C] italic">{item.review}</p>
                  </div>
                  <div className="mb-[9px] mt-[15px] md:mt-0">
                    <p className="md:text-[16px] text-[14px] text-[#4D533C] font-bold">
                      {item.reviewer}
                    </p>
                    <img src={rating} alt="rating" />
                  </div>

                  

                  
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute top-[107%]  left-1/2 transform -translate-x-1/2 flex space-x-2">
        {groupedTestimonials.map((_, index) => (
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

export default ReviewContent;
