import React from "react";
import { facebook, footerLogo, gmail, linkedin, twitter } from "../assets/Home";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="md:px-[58px] px-[30px] bg-[#043C50] py-[35px]"
      style={{
        backgroundImage: "url(/Object.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
      }}
    >
      <div className="mx-auto">
        <div className="flex justify-center">
          <Link to={"/"}>
            <img
              src={footerLogo}
              alt="logo"
              className="md:w-[134px] md:h-[88px] w-[88px] h-[60px]"
            />
          </Link>
        </div>
        <div className="lg:flex lg:flex-row flex flex-col w-full mt-[48px] justify-between">
          <div className="flex xl:w-[32%] w-full justify-between gap-7 md:gap-0">
            <div className="w-[50%]">
              <h1 className="footer-header-text font-semibold">COMPANY</h1>
              <div className="text-[#ABABAB] flex flex-col gap-[10px]">
                <Link
                  to={"/about"}
                  className="hover:underline md:text-[16px] text-[14px] "
                >
                  {" "}
                  About
                </Link>
                <Link
                  to={"#"}
                  className="hover:underline md:text-[16px] text-[14px]"
                >
                  {" "}
                  Blog
                </Link>
                <Link
                  to={"#"}
                  className="hover:underline md:text-[16px] text-[14px]"
                >
                  {" "}
                  Contact
                </Link>
                <Link
                  to={"#"}
                  className="hover:underline md:text-[16px] text-[14px]"
                >
                  {" "}
                  Jobs
                </Link>
              </div>
            </div>
            <div className="w-[50%]">
              <h1 className="footer-header-text font-semibold">CONTACT</h1>
              <p className="text-[#ABABAB] md:text-[16px] text-[14px]">Phone</p>
              <p className="text-white my-[10px] md:text-[16px] text-[14px]">
                +234 708 507 3128
              </p>
              <p className="text-[#ABABAB] md:text-[16px] text-[14px]">
                Address
              </p>
              <p className="text-white mt-[10px] md:text-[16px] text-[14px]">
                16, Ogindipe Close, Upston Close
              </p>
            </div>
          </div>
          <div className="xl:w-[32%] w-full mt-4 lg:mt-0">
            <h1 className="footer-header-text font-semibold">
              CONSUMER ADVISORY
            </h1>
            <p className="md:text-[16px] text-[14px] text-white">
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. This product should be used only as
              directed on the label. All trademarks and copyrights are property
              of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary. By using our website or
              product, you agree to follow our{" "}
              <span>
                {" "}
                <Link to="/" className="text-[#8FE2FF]">
                  terms of service.
                </Link>
              </span>
            </p>
          </div>
          <div className="xl:w-[32%] md:flex md:flex-row flex flex-col w-full">
            <div className="hidden lg:block">
              <div className="w-[1px] bg-[#5D6544] h-[200px]" />
            </div>
            <div className="block lg:hidden">
              <div className="w-full bg-[#5D6544] h-[1px] mt-6" />
            </div>
            <div className="lg:ml-[55px]">
              <h1 className="footer-header-text font-semibold mt-4 lg:mt-0">
                Get in Touch
              </h1>
              <p className="text-[#ABABAB] md:text-[16px] text-[14px] mt-[23px]">
                Feel free to get in touch with us vai email
              </p>
              <p className="md:text-[24px] text-[16px] my-[23px] text-white">
                hello@sleepstiq.com
              </p>
              <div className="flex gap-[11px]">
                <img src={facebook} alt="facebook" className="cursor-pointer" />
                <img src={twitter} alt="twitter" className="cursor-pointer" />
                <img src={gmail} alt="gmail" className="cursor-pointer" />
                <img src={linkedin} alt="linkedin" className="cursor-pointer" />
              </div>
              <p className="mt-[55px] text-[#ABABAB] text-[14px]">
                © 2020@sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
