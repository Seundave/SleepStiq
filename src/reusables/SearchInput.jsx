import React from "react";
import { searchIcon } from "../assets/Faq";

const SearchInput = () => {
  return (
    <div className="flex max-w-[859px] bg-white md:py-[23px] py-[10px] md:px-[58px] px-[20px] mt-[10px] md:mt-0">
      <img src={searchIcon} alt="" className="w-[20px] h-[20px] md:w-[32px] md:h-[32px]"/>
      <input
        type="text"
        placeholder="Search FAQs here"
        className="outline-none md:ml-[27px] ml-[10px] w-full rounded-lg md:text-[16px] text-[14px]"
      />
    </div>
  );
};

export default SearchInput;
