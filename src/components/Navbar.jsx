import React, { useEffect, useState } from "react";
import { logo } from "../assets/Home";
import { Link, NavLink } from "react-router-dom";
import { navData } from "../constants/data";
import { MdCancel } from "react-icons/md";

// Navigation bar

const Navbar = () => {
  const activeStyle = "text-green-500";
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  const closeAboutDropdown = () => {
    setShowAboutDropdown(false);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleSidebar = () => {
    const body = document.body;

    setShowSidebar(!showSidebar);

    // Toggle body overflow based on the sidebar visibility
    if (!showSidebar) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  };
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
        <button onClick={toggleSidebar}>
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
      <div className="hidden md:flex  md:flex-row md:items-center justify-between container py-[23px] absolute pl-[162px] top-0 z-[1000]">
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

      {/* Mobile Navigation bar */}
      <div
        className={`lg:hidden fixed w-[185px] inset-0 bg-white z-[5000]   transition-transform transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-[80px] flex justify-end p-4 items-center">
          <MdCancel onClick={toggleSidebar} />
          {/* <IconButton onClick={toggleSidebar}>
            <X size={32} color="red" />
          </IconButton> */}
        </div>

        <ul className="px-[30px] lg:flex lg:space-x-8">
          <li>
            <NavLink
              to="/"
              onClick={closeAboutDropdown}
              className={({ isActive }) =>
                isActive ? activeStyle : "text-[#202020]"
              }
            >
              HOME
            </NavLink>
          </li>

          <li className="mt-[15px]">
            <NavLink
              to="/blog"
              onClick={closeAboutDropdown}
              className={({ isActive }) =>
                isActive ? activeStyle : "text-[#202020]"
              }
            >
              BLOG
            </NavLink>
          </li>
          <li className="mt-[15px]">
            <NavLink
              to="/testimonial"
              onClick={closeAboutDropdown}
              className={({ isActive }) =>
                isActive ? activeStyle : "text-[#202020]"
              }
              id="Testimonial"
            >
              TESTIMONIALS
            </NavLink>
          </li>
          <li className="mt-[15px]">
            <NavLink
              to="/vacancies"
              onClick={closeAboutDropdown}
              className={({ isActive }) =>
                isActive ? activeStyle : "text-[#202020]"
              }
            >
              VACANCIES
            </NavLink>
          </li>
          <li className="mt-[15px]">
            <NavLink
              to="/contact"
              onClick={closeAboutDropdown}
              className={({ isActive }) =>
                isActive ? activeStyle : "text-[#202020]"
              }
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <Link to={"https://gomal.edossier.app/admission/"}>
              <button className="bg-green-500 rounded-md w-[100px] p-2 text-white mt-[20px]">
                Register
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
