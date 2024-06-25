"use client";
import React, { useState } from "react";
import LogisticsSoftware from "./Section7/logisticsSoftware";
import ShopIntegration from "./Section7/shopIntegration";
import Analytics from "./Section7/analytics";
import Tracking from "./Section7/tracking";

const Section7 = () => {
  const items = [
    {
      comp: LogisticsSoftware,
    },
    {
      comp: ShopIntegration,
    },
    // {
    //   comp: Analytics,
    // },
    // {
    //   comp: Tracking,
    // },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? items.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === items.length - 1 ? 0 : prevSlide + 1
    );
  };
  return (
    <>
      <div data-aos="flip-up" className="mx-auto text-center mt-24">
        <h1 className="my-3 text-2xl lg:text-6xl capitalize min-[1800px]:text-7xl font-semibold">
          Our Digital Solutions
        </h1>
        <p className="leading-relaxed md:text-2xl">
          Do you want to ship from one to more warehouses? Doesn't Matter Now!
        </p>
      </div>
      <div className="max-w-screen-xl px-8 flex-wrap flex justify-center items-center gap-4 mx-auto my-12">
        <div
          onClick={() => setCurrentSlide(0)}
          className={` ${
            currentSlide === 0
              ? " dark:bg-white dark:text-black dark:rounded-xl shadow-2xl"
              : "dark:border dark:rounded-xl shadow-md"
          } cursor-pointer`}
        >
          <h1 className="text-xl px-8 py-4 my-3 md:my-0 lg:text-2xl w-full capitalize font-semibold">
            3PL Logistics Software
          </h1>
        </div>
        <div
          onClick={() => setCurrentSlide(1)}
          className={` ${
            currentSlide === 1
              ? " dark:bg-white dark:text-black dark:rounded-xl shadow-2xl"
              : "dark:border dark:rounded-xl shadow-md"
          } cursor-pointer`}
        >
          <h1 className="text-xl px-8 py-4 my-3 md:my-0 lg:text-2xl w-full capitalize font-semibold">
            Freight Forwarding Software
          </h1>
        </div>
        {/* <div
          onClick={() => setCurrentSlide(2)}
          className={` ${
            currentSlide === 2 ? "active" : "de-active"
          } cursor-pointer`}
        >
          <h1 className="text-xl px-8 py-4 lg:text-2xl w-full capitalize font-semibold">
            Tracking
          </h1>
        </div>
        <div
          onClick={() => setCurrentSlide(3)}
          className={` ${
            currentSlide === 3 ? "active" : "de-active"
          } cursor-pointer`}
        >
          <h1 className="text-xl px-8 py-4 lg:text-2xl w-full capitalize font-semibold">
            Analytics
          </h1>
        </div> */}
      </div>
      <div
        id="default-carousel"
        className="relative w-full max-w-screen-xl mx-auto px-8"
        data-carousel="slide"
      >
        {items?.map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <item.comp />
          </div>
        ))}
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden"></div>
        {/* Slider controls */}
        {/* <div className="w-full flex justify-end max-w-screen-xl px-8 my-12">
          <button
            onClick={() => prevSlide()}
            className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#000a41]">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            onClick={() => nextSlide()}
            className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#000a41]">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Section7;
