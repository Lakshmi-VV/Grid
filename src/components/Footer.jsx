import React from "react";
import logo from "../assets/images/logo.png";
import { Icons } from "./Icons";

function Footer() {
  return (
    <section>
      <div className="2xl:container w-[100%] mx-auto border-t-[1px] border-[#EFF0F6]">
        <div className=" md:px-[70px] px-[24px] w-[98%] mx-auto pt-[120px] flex flex-col gap-[80px]">
          <div className="flex flex-col gap-[80px] md:flex-row md: justify-between">
            <div className="flex flex-col gap-[24px] ">
              <img src={logo} width={138} height={43} alt="logo" />
              <p className="text">
                Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                aliquam
              </p>
              <div className="flex gap-[22px] items-center ">
                <a href="#">
                  <Icons icon="facebook" />
                </a>
                <a href="#">
                  <Icons icon="twitter" />
                </a>
                <a href="#">
                  <Icons icon="insta" />
                </a>
                <a href="#">
                  <Icons icon="linkedin" />
                </a>
                <a href="#">
                  <Icons icon="youtube" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-[80px] ">
              <div className=" flex flex-col gap-[40px]">
                <h4>Product</h4>
                <ul className="flex flex-col gap-[18px]">
                  <li className="text">Features</li>
                  <li className="text">Pricing</li>
                  <li className="text">Reviews</li>
                  <li className="text">Updates</li>
                </ul>
              </div>
              <div className=" flex flex-col gap-[40px]">
                <h4>Company</h4>
                <ul className="flex flex-col gap-[18px]">
                  <li className="text">About</li>
                  <li className="text">Contact us</li>
                </ul>
              </div>
              <div className=" flex flex-col gap-[40px]">
                <h4>Support</h4>
                <ul className="flex flex-col gap-[18px]">
                  <li className="text">Getting started</li>
                  <li className="text">Help center</li>
                  <li className="text">Server status</li>
                  <li className="text">Report a bug</li>
                  <li className="text">Chat support</li>
                </ul>
              </div>
              <div className=" flex flex-col gap-[40px]">
                <h4>Contacts us</h4>
                <ul className="flex flex-col gap-[18px]">
                  <li className="text flex gap-[6px] items-center ">
                    <div className="w-5 h-5 flex justify-center items-center ">
                      <Icons icon="email" />
                    </div>

                    <span>contact @company .com</span>
                  </li>

                  <li className="text flex gap-[6px] items-center">
                    <div className="w-5 h-5 ">
                      <Icons icon="phone" />
                    </div>
                    <span>(414) 687 - 5892</span>
                  </li>
                  <li className="text flex gap-[6px] items-center">
                    <div className="w-5 h-5 ">
                      <Icons icon="location" />
                    </div>
                    <span>
                      794 Mcallister St
                      <br /> San Francisco, 94102
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className="h-[1px] bg-[#D9DBE9]"></div>
            <div className="flex flex-col gap-[30px] lg:flex lg:flex-row justify-between px-5">
              <p className="text text-center">Copyright © 2024 grid</p>
              <p className="text text-center">
                All Rights Reserved |
                <span className="text-[#4A3AFF]"> Terms and Conditions </span>|
                <span className="text-[#4A3AFF]"> Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
