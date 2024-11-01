import React from "react";
import { Icons } from "./Icons";

function Faq() {
  const accordian = [
    {
      question: "Question 1",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.necessitatibus illo! Exercitationem vel distinctio eaque natus, doloribus assumenda amet in eos ducimus.",
    },
    {
      question: "Question 2",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.necessitatibus illo! Exercitationem vel distinctio eaque natus, doloribus assumenda amet in eos ducimus.",
    },
    {
      question: "Question 3",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.necessitatibus illo! Exercitationem vel distinctio eaque natus, doloribus assumenda amet in eos ducimus.",
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="2xl:container w-[100%] mx-auto ">
      <div className="w-[98%] mx-auto py-[40px] px-[16px] lg:py-[96px] lg:px-[320px] grid grid-cols-1 gap-6">
        <div>
          <h2 className="text-2xl text-center md:text-5xl font-semibold">
            FAQ
          </h2>
        </div>
        <div className="bg-[#ECEFF3] rounded-2xl p-1 flex flex-col gap-1">
          {accordian.map((item, index) => (
            <div
              key={index}
              className="bg-white px-6 py-4 rounded-xl flex flex-col gap-2"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between">
                <p className="text-lg font-medium">{item.question}</p>

                {activeIndex === index ? (
                  <Icons icon="faq-minus" />
                ) : (
                  <Icons icon="faq-add" />
                )}
              </div>
              <div
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } flex flex-col gap-2`}
              >
                <div className="bg-[#ECEFF3] h-[1px]"></div>
                <p className="text-lg font-medium">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
