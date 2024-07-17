import React from "react";
import { searchIcon } from "../assets/Faq";

const SearchInput = () => {
  return (
    <div className="flex max-w-[859px] bg-white py-[23px] px-[58px]">
      <img src={searchIcon} alt="" />
      <input
        type="text"
        placeholder="Search FAQs here"
        className="outline-none ml-[27px] w-full rounded-lg"
      />
    </div>
  );
};

export default SearchInput;
