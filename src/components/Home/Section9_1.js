'use client'
import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const CarouselBox = () => {
  const images = ["/hs8.webp", "/hs1.png", "/hs2.png", "/hs3.png"];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-[60vh] overflow-hidden rounded-lg md:h-[70vh]">
        {images.map((item, index) => (
          <div
            className={`duration-700 ${
              index === currentSlide ? null : "hidden"
            } ease-in-out`}
          >
            <img
              src={item}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        ))}
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse my-6 left-1/2">
        {images.map((item, index) => (
          <button
            type="button"
            className={`w-4 ${
              index === currentSlide ? "bg-white" : "bg-black"
            } h-1`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Section9_1 = () => {
  return (
    <section className="md:flex py-40 md:space-x-10 relative items-center max-w-screen-xl px-8 mx-auto h-full">
      <CarouselBox />
      <div className="h-auto py-5 px-8 w-1/3 text-start absolute bottom-0 flex flex-col gap-3 right-10 bg-black">
        <h3 className="white-content uppercase text-2xl md:text-4xl">
          Meet Nodex
        </h3>
        <p className="md:text-3xl white-content font-semibold">
          one e-commerce <br /> 3PL three warehouse locations: Poland and
          Germany
        </p>
        <div>
          <button
            className={` de-active flex items-center px-8 py-4 gap-3 my-8 cursor-pointer`}
            style={{
              border: "1px solid white",
            }}
          >
            <h1 className="text-xl lg:text-2xl white-content capitalize font-semibold">
              Check Now
            </h1>
            <GoArrowUpRight
              size={25}
              className="mt-2 font-extralight"
              color="white"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section9_1;
