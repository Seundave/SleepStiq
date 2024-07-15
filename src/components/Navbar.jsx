import React from "react";
import { logo } from "../assets/Home";
import { Link } from "react-router-dom";
import { navData } from "../constants/data";

// Navigation bar

const Navbar = () => {
  return (
    <div className="flex justify-between w-full container py-[23px]">
      <div className="w-[11%]">
        <img src={logo} alt="logo" className="w-[92px] h-[62px]" />
      </div>
      <div className="w-[89%] ml-[171px] flex gap-[65px]">
        {navData.map((el, index) => (
          <Link to={el.link} key={index}  className="text-black transition duration-300 hover:font-bold text-[18px]">
            {el.page}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
