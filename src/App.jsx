import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { Icons } from "./components/Icons";
import Placeholder from "./assets/images/placeholder.png";
import Users from "./assets/images/users.png";
import Header from "./components/Header";

function App() {
  const pricing = [
    {
      name: "Essential",
      description: "Description",
      price: 29,
      points: ["Point 1", "Point 2", "Point 3", "Point 4"],
      btn: "Get Started",
    },
    {
      name: "Pro",
      description: "Description",
      price: 79,
      points: ["Point 1", "Point 2", "Point 3", "Point 4"],
      btn: "Go Pro",
    },
    {
      name: "Customise",
      description: "Description",
      price: 29,
      points: ["Point 1", "Point 2", "Point 3", "Point 4"],
      btn: "Contact Us",
    },
  ];

  const featuresCareer = [
    {
      heading: "Reach",
      description:
        "Reach your potential employer faster than anyone. Check Out or See how it works.",
      icon: "reach",
    },
    {
      heading: "Check",
      description:
        "Check your resume for its format and ensure that it aligns with the best industry standards for optimal hiring.",
      icon: "check",
    },
    {
      heading: "The Wall",
      description:
        "The Walls are built using laying over bricks same as your career is built on  bricks of skills you obtain. ",
      icon: "wall",
    },
  ];
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero section */}
      <div className="2xl:container w-[100%] mx-auto hero-bg">
        <div className="w-[98%] mx-auto pt-[120px] md:pt-[150px] pb-[40px] md:pb-[120px] px-[16px] lg:px-[80px] flex flex-col gap-8 lg:gap-10 items-center">
          <div
            className="bg-white flex gap-2 rounded-[40px] border border-[#D6E1FF] shadow-[0px_3px_8px_4px_#ECEFF3] py-2 px-3
          items-center"
          >
            <img src={Users} alt="users" width={56} height={24} />
            <p>Join 1.5k+ members</p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <h1 className="max-w-[736px] text-center text-[32px] leading-[36px]  md:text-[64px] font-semibold md:leading-[73px]">
              Take the first initiative in your choosing career path.
            </h1>
            <p className="max-w-[600px] text-base md:text-lg font-normal text-center text-[#0D0E14CC]">
              Find your dream job with #grid—personalized listings that match
              your skills and goals.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-4 items-center justify-center">
            <button className="btn-primary flex gap-2 items-center">
              <span className="text-sm font-normal">Get Started</span>
              <Icons icon="right-arrow" />
            </button>
            <button className="btn-secondary flex gap-2 items-center">
              <span className="text-sm font-normal">Join Waitlist</span>
              <Icons icon="right-arrow-blue" />
            </button>
          </div>
        </div>
      </div>

      {/* Placeholder */}
      <div className="2xl:container w-[100%] mx-auto ">
        <div className="w-[98%] mx-auto py-[40px] px-[16px]  lg:py-[40px] lg:px-[80px]">
          <img
            src={Placeholder}
            alt="placeholder-img"
            className="rounded-lg shadow-custom md:rounded-[32px]"
          />
        </div>
      </div>

      {/* Features for career */}
      <div className="2xl:container w-[100%] mx-auto ">
        <div className="w-[98%] mx-auto py-[40px] px-[16px]  lg:py-[120px] lg:px-[80px] relative ">
          <div className=" py-[20px] px-[12px] rounded-[20px] shadow-[0px_4px_12px_2px_#ECEFF3] md:shadow-none flex flex-col gap-[24px] md:gap-[64px] ">
            <div className="text-left md:text-center flex flex-col gap-6 items-start md:items-center ">
              <span className="text-white bg-[#100F14] px-4 py-2 rounded-[200px] w-fit text-xs md:text-sm">
                #Features for <span className="font-semibold">Career</span>
              </span>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-5xl font-semibold md:w-[776px] md:leading-[74px]">
                  Your Website Should Be Clear, Not Confusing
                </h2>
              </div>
              <Icons
                icon="gradient-hash"
                className="hidden md:block absolute md:left-[20px] md:top-[10px] lg:left-[px] lg:top-[33px]"
              />
            </div>
            <div className=" flex flex-col gap-6 md:hidden">
              {featuresCareer.map((feature) => {
                return (
                  <>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <Icons icon={feature.icon} width={24} height={24} />
                        <span className="text-[#100F14] text-base font-semibold">
                          {feature.heading}
                        </span>
                      </div>
                      <div>
                        <p className="text-[#100F14] text-sm font-normal">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#E1E9FF] h-[171px] rounded-2xl"></div>
                  </>
                );
              })}
            </div>

            <div className="hidden md:flex gap-6">
              <div></div>

              <div>
                <div className="flex flex-col gap-3 max-w-[302px] sticky top-[70px]">
                  {featuresCareer.map((feature) => {
                    return (
                      <>
                        <div>{feature.heading}</div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-5 flex-grow">
                {featuresCareer.map((feature) => {
                  return (
                    <>
                      <div className=" bg-[#F4F7FF] border border-[#D9E0EC] rounded-xl p-10 flex flex-col gap-10">
                        <div className="flex gap-2 items-center">
                          <Icons icon={feature.icon} width={40} height={40} />
                          <span className="text-[#100F14] text-3xl font-semibold">
                            {feature.heading}
                          </span>
                        </div>
                        <div className="flex items-center justify-center w-full">
                          <div className="bg-white h-[400px] w-full rounded-2xl"></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-[#414438] text-lg font-normal max-w-[520px]">
                            {feature.description}
                          </p>
                          <div className="bg-[#0D0E140D] border border-[#0D0E141A] p-[10px] rounded-full">
                            <a href="#">
                              <Icons icon="cross-arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features for companies */}
      <div className="2xl:container w-[100%] mx-auto ">
        <div
          className="w-[98%] mx-auto py-[40px] px-[16px]  lg:py-[120px] lg:px-[80px] relative 
        flex flex-col gap-10 radial-gradient"
        >
          <div className="text-center flex flex-col gap-6 items-center ">
            <span className="text-white bg-[#100F14] px-4 py-2 rounded-[200px] w-fit text-xs md:text-sm">
              #Features for <span className="font-semibold">Companies</span>
            </span>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-5xl font-semibold">Heading </h2>
              <p className="text !text-[#2c2643]">Description</p>
            </div>
            <Icons
              icon="gradient-hash"
              className="hidden md:block absolute md:right-[20px] md:top-[10px] lg:right-[59px] lg:top-[91px]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10">
            <div className="bg-white h-[350px] rounded-2xl shadow-[0px_4px_12px_2px_#ECEFF3]"></div>
            <div className="bg-white h-[350px] rounded-2xl shadow-[0px_4px_12px_2px_#ECEFF3] md:col-span-2"></div>
            <div className="bg-white h-[350px] rounded-2xl shadow-[0px_4px_12px_2px_#ECEFF3]"></div>
            <div className="bg-white h-[350px] rounded-2xl shadow-[0px_4px_12px_2px_#ECEFF3]"></div>
            <div className="bg-white h-[350px] rounded-2xl shadow-[0px_4px_12px_2px_#ECEFF3]"></div>
          </div>
        </div>
      </div>
      <Faq />
      {/* Pricing */}
      <div className="2xl:container w-[100%] mx-auto ">
        <div className="w-[98%] mx-auto py-[40px] px-[16px] grid grid-cols-1 gap-10 lg:py-[96px] lg:px-[80px]">
          <div className="text-center flex flex-col gap-6 items-center">
            <span className="text-white bg-[#100F14] px-4 py-2 rounded-[200px] w-fit text-xs md:text-sm">
              #Pricing
            </span>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-5xl font-semibold">
                Simple Plans for Every Need
              </h2>
              <p className="text !text-[#100F14]">
                Start small or go all-in—there’s a plan for you.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-center ">
            {pricing.map((price) => {
              const isPro = price.name === "Pro";
              return (
                <div
                  className={`w-full md:w-[320px] p-6 flex flex-col gap-6 rounded-[20px] ${
                    isPro
                      ? "bg-[linear-gradient(178deg,_#DFE8FF_1.89%,_#FFF_120.85%)]"
                      : "bg-white  shadow-[0px_4px_12px_2px_#ECEFF3]"
                  }`}
                >
                  <div>
                    <h3 className="text-xl font-bold ">{price.name}</h3>
                    <p className="font-normal text-sm text-[#565B72]">
                      {price.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#100F14] text-5xl font-bold">
                      ${price.price}{" "}
                      <span className="text-[#6A6D8C] text-base font-semibold">
                        /month
                      </span>
                    </p>
                  </div>
                  <div className="py-5 flex flex-col gap-[10px]">
                    {price.points.map((point) => {
                      return (
                        <div className="flex gap-[10px]">
                          <Icons icon="price-check" />
                          <p className="text-[#474A5F] text-sm font-normal">
                            {point}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    className={`rounded-md py-3 ${
                      isPro
                        ? "bg-[#0400D1] text-white"
                        : "bg-[linear-gradient(178deg,_#DFE8FF_1.89%,_#FFF_120.85%)]  text-[#0400D1] "
                    }`}
                  >
                    {price.btn}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
