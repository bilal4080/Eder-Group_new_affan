import React from "react";

const ShopIntegration = () => {
  return (
    <div className="md:flex mt-40 md:space-x-10 items-center max-w-screen-xl px-8 mx-auto h-full">
      <div data-aos="fade-right" className="sm:w-1/2 relative">
        <div className="rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
        <h1 className="font-semibold text-2xl md:text-3xl min-[1800px]:text-7xl relative text-darken lg:pr-10">
          Efficient Freight Management Solutions
        </h1>
        <p className="py-5 lg:pr-32 md:text-2xl">
          Optimize logistics operations with our intuitive freight software,
          offering streamlined solutions for efficient management, tracking, and
          coordination of shipments.
        </p>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      </div>
      <div className="h-full md:w-7/12">
        <img src="/hs7F.png" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ShopIntegration;
