import React from "react";

const Tracking = () => {
  return (
    <div className="md:flex mt-40 md:space-x-10 items-center max-w-screen-xl px-8 mx-auto h-full">
      <div className="h-full md:w-7/12">
        <img src="/hs3.png" className="w-full h-full" />
      </div>
      <div data-aos="fade-right" className="sm:w-1/2 relative">
        <div className="rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
        <h1 className="font-semibold text-2xl md:text-3xl min-[1800px]:text-7xl relative z-50 text-darken lg:pr-10">
          Shipping with Reliable Courier Services
        </h1>
        <p className="py-5 lg:pr-32 md:text-2xl">
          As soon as we receive an order in our online shop, the order details
          are then transferred to us. Then process the fulfilment and send it to
          the customer the same day. We find the economical shipping partner or
          sustainable logistics for each package at the best price through our
          algorithm.
        </p>
      </div>
    </div>
  );
};

export default Tracking;
