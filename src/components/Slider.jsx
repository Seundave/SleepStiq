import React, { useState, useEffect } from "react";
// import { Testimonial } from "../pages/Home/data";

const SliderContent = ({ testimonialBy }) => {
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
  const itemsPerGroup = isMobile ? 1 : isTablet ? 1 : 1;

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
          className="flex transition-transform duration-300 ease-in-out  w-full justify-between  mt-[20px]"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {groupedTestimonials.map((group, index) => (
            <div
              key={index}
              className="flex w-full flex-shrink-0 max-sm:justify-center md:justify-between gap-5 overflow-hidden"
              style={{ width: "100%" }}
            >
              {group.map((item) => (
                <div
                  key={item.id}
                  className="max-sm:w-[100%] lg:w-[45%] flex flex-col items-center gap-5 py-[30px] p-[15px]"
                >
                  <div className="border border-gray-300 w-[120px] h-[120px] rounded-full p-[20px] justify-center items-center flex">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[110px] h-[80px] rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-center text-[18px] text-green-500 font-bold">
                      {item.name}
                    </p>
                    <p className="text-center text-[14px]">{item.role}</p>
                  </div>

                  <div className="p-[30px] bg-[#F0FBFC] h-auto">
                    <p className="text-[12px] text-justify">{item.testimony}</p>
                  </div>

                  {/* <div className="  h-[200px]  justify-center items-center flex">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[600px] h-[200px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <p className="text-center text-[18px] text-green-500 font-bold">
                        {item.name}
                      </p>
                      <p className="text-center text-[14px]">{item.role}</p>
                    </div>

                    <div className="p-[30px] bg-[#F0FBFC] h-auto">
                      <p className="text-[12px] text-justify">
                        {item.testimony}
                      </p>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
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

      <div className="absolute  left-1/2 transform -translate-x-1/2 flex space-x-2">
        {groupedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full bg-gray-500 ${
              currentIndex === index ? "bg-green-500" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderContent;
