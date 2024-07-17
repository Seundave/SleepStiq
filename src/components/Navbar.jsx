import React, { useEffect, useState } from "react";
import { logo } from "../assets/Home";
import { Link, NavLink } from "react-router-dom";
import { navData } from "../constants/data";
import { MdCancel } from "react-icons/md";

// Navigation bar
const Navbar = () => {
  const activeStyle = "text-[#12305B] font-bold";
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      {/* Mobile Navigation Bar */}
      <div className="lg:hidden bg-white p-3.5 flex items-center justify-between">
        <Link to="/">
          <div className="w-[90px] h-[50px]">
            <img
              src={logo}
              alt="Tees bridal"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>
        <button onClick={toggleDropdown}>
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation bar */}
      <div className="hidden lg:flex md:flex-row md:items-center justify-between container py-[23px] absolute pl-[162px] top-0 z-[1000]">
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
                  : "text-[#12305B] transition duration-300 hover:font-bold text-[18px]"
              }
            >
              {el.page}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <div
        className={`lg:hidden bg-white transition-all duration-300 ${
          showDropdown ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <ul className="px-[30px] py-3">
          {navData.map((el, index) => (
            <li key={index} className="mt-[15px]">
              <NavLink
                to={el.link}
                onClick={closeDropdown}
                className={({ isActive }) =>
                  isActive ? activeStyle : "text-[#202020]"
                }
              >
                {el.page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
