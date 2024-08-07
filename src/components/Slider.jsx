import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const SliderContent = ({ testimonialBy }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // handles responsiveness
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

  // cards shown per page
  const groupedTestimonials = [];
  const itemsPerGroup = 1; // set to 1 for mobile, tablet, and desktop as per your original logic

  for (let i = 0; i < testimonialBy.length; i += itemsPerGroup) {
    groupedTestimonials.push(testimonialBy.slice(i, i + itemsPerGroup));
  }

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % groupedTestimonials.length
      ),
    onSwipedRight: () =>
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + groupedTestimonials.length) %
          groupedTestimonials.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative" {...handlers}>
      <div className="overflow-hidden h-auto">
        <div
          className="flex transition-transform duration-300 ease-in-out  w-full justify-between"
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
                  className="max-sm:w-[100%] shadow-lg bg-[#FBF9F2] h-auto md:h-[474px] lg:w-[100%] flex flex-col items-center xl:pt-[55px] p-[20px] md:px-[40px] justify-center"
                >
                  <div>
                    <p className="md:text-[24px] max-md:text-[16px] text-justify italic lg:leading-[40px]">
                      {item.testimony}
                    </p>
                  </div>
                  <div className="flex w-full items-center xl:gap-[35px] xl:mt-[90px]">
                    <div className="w-[120px] h-[120px] rounded-full p-[20px] justify-center items-center flex">
                      <img
                        src={item.image}
                        alt="image"
                        className="w-[110px] h-[80px] rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div>
                        <p className="text-center text-[16px] md:text-[22px] text-[#4D533C] font-bold">
                          {item.name}
                        </p>
                        <p className="text-center text-[#152934] text-[12px] md:text-[16px]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 flex space-x-2">
          {groupedTestimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index ? "bg-[#12305B]" : "bg-gray-500"
              }`}
              style={{
                backgroundColor: currentIndex === index ? "#12305B" : "gray",
              }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
