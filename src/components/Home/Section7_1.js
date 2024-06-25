import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const Section7_1 = () => {
  return (
    <div className="md:flex mt-40 md:space-x-10 relative items-center max-w-screen-xl px-8 mx-auto h-full">
      <div data-aos="fade-right" className="sm:w-2/3 relative">
        <div className="rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
        <h1 className="font-semibold text-2xl md:text-5xl min-[1800px]:text-7xl relative text-darken lg:pr-10">
          Proficient and Adaptable Storage Facilities
        </h1>
        <p className="py-5 lg:pr-32 md:text-2xl">
          Our sustainable international logistics network features modern
          shelving systems and pallet spaces, allowing for adaptable inventory
          divisions to reduce shipping costs and delivery times.
        </p>
        <div className="flex flex-col gap-12 py-4 px-4">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="flex gap-4  items-center">
              <div className="rounded-full bg-[#000a41] w-12 h-12 flex items-center justify-center mx-auto shadow-lg p-4">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 12.25L8.5 17L20.5 5"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>
                Ship to other countries with ease, using standard and expedited
                shipping options.
              </p>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

            </div>
          ))}
        </div>
        <button
          className={` de-active flex items-center px-8 py-4 gap-3 my-8 cursor-pointer w-auto`}
        >
          <h1 className="text-xl lg:text-2xl capitalize font-semibold">
            Check Now
          </h1>
          <GoArrowUpRight
            size={25}
            className="mt-2 font-extralight"
            color="black"
          />
        </button>
      </div>
      <div className="h-full  md:w-7/12">
        <img src="/hs8.webp" className="w-full h-full rounded-2xl" />
      </div>
    </div>
  );
};

export default Section7_1;
