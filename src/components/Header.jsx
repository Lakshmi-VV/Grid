import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Icons } from "./Icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="2xl:container w-[100%] mx-auto border-t-[1px] flex justify-center px-[16px] py-[20px] absolute">
      <div className="w-[720px] border-[#EFF0F6] bg-white flex flex-col gap-3 md:flex-row items-center justify-between p-[12px] rounded-xl shadow-[0px_4px_9.6px_0px_rgba(4, 0, 209, 0.10)]">
        <div className="flex justify-between w-full md:w-fit">
          <div>
            <img src={Logo} alt="Logo-image" height="24px" width="77px" />
          </div>
          <div className="block md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <Icons icon="close-icon" />
              ) : (
                <Icons icon="menu-icon" />
              )}
            </button>
          </div>
        </div>
        <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row ">
            <li className="py-2 px-3">
              <a href="#">About</a>
            </li>
            <li className="py-2 px-3">
              <a href="#">Solution</a>
            </li>
            <li className="py-2 px-3">
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className=" rounded-xl bg-[#0400D1] py-2 px-3 text-white flex gap-2 items-center">
            <span className="text-sm font-normal">Get Started</span>
            <Icons icon="right-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
