import React from "react";
import { logo } from "../assets/Home";
import { Link, NavLink } from "react-router-dom";
import { navData } from "../constants/data";

// Navigation bar

const Navbar = () => {
  return (
    <div className="flex justify-between container py-[23px]">
      <div className="w-[11%]">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[92px] h-[62px]" />
        </Link>
      </div>
      <div className="w-[89%] ml-[171px] flex gap-[65px]">
        {navData.map((el, index) => (
          <NavLink
            to={el.link}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "text-[#12305B] font-bold text-[18px]"
                : "text-black transition duration-300 hover:font-bold text-[18px]"
            }
          >
            {el.page}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
