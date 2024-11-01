import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { Icons } from "./components/Icons";
import Placeholder from "./assets/images/placeholder.png";

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
  return (
    <div className="flex flex-col">
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
