import React, { useState } from "react";
import { FaqCategory, FaqData } from "../../constants/data";

const Faq = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (itemId) => {
    setExpandedItem((prevItem) => (prevItem === itemId ? null : itemId));
  };
  return (
    <div className="flex  max-w-[1044px] mx-auto pb-[165px] pt-[70px]">
      <div className="w-[212px] flex flex-col gap-[30px]">
        {FaqCategory.map((el, index) =>
          el.id === 1 ? (
            <div key={index} className="flex items-center space-x-2">
              <p className="font-bold text-[18px]">Sleepstiq</p>
              <div key={index} className="flex items-center space-x-2">
                <p
                  className="text-[18px] rounded-md text-black font-bold w-[126px] h-[47px] flex items-center"
                  style={{ backgroundColor: "rgba(255, 215, 35, 0.1)" }}
                >
                  Product
                </p>
              </div>
            </div>
          ) : (
            <p key={index}>{el.title}</p>
          )
        )}
      </div>
      <div className="flex flex-wrap w-full justify-between px-[10px] md:px-[138px] ">
        {FaqData.map((item) => (
          <div key={item.id} className={`w-full rounded`}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleItem(item.id)}
            >
              <div className="w-[100%] border-t border-[#BDBDBD]">
                <h3 className="md:text-[16px] text-[10px] text-[#12305B] font-semibold my-[20px]">
                  {item.question}
                </h3>
              </div>
            </div>
            {expandedItem === item.id && (
              <div>
                <p className="md:text-[16px] text-[10px] text-black mb-[20px]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
