import React from "react";
import { Icons } from "./Icons";

function Banner() {
  return (
    <section>
      <div className="2xl:container w-[100%] mx-auto ">
        <div className="w-[98%] mx-auto py-[40px] px-[16px] lg:py-[96px] lg:px-[120px]">
          <div className="bg-[#0400D1] rounded-[28px] px-[12px] py-[48px] lg:px-[48px] lg:py-[80px] flex flex-col gap-[40px] justify-center items-center relative ">
            <Icons
              icon="banner-hash-big"
              className="w-[106px] h-[119px] right-0 bottom-[-0.53px] absolute md:right-[-0.184px] md:bottom-[0.012px] md:w-[269px] md:h-[303px]"
            />
            <Icons
              icon="banner-hash-small"
              className="hidden md:block absolute left-[48px] top-[80.25px]"
            />
            <span className=" rounded-[100px] bg-white px-5 py-3 text-bold">
              #grit_is_grid
            </span>
            <h2 className="max-w-[978px] text-2xl font-semibold text-white text-center lg:text-5xl">
              Let’s help each other in the journey of life. By helping one
              another.
            </h2>
            <p className=" text !text-white max-w-[524px] text-center">
              Take your SaaS from zero to hero with our flexible and
              conversion-focused template.
            </p>
            <button className="rounded-[100px] bg-white px-5 py-3 text-bold">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
