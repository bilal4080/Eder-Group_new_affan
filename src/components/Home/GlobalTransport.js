import Image from "next/image";
import React from "react";

const GlobalTransport = () => {
    return (
        <>
            {/* <div data-aos="flip-up" className="mx-auto text-center mt-24">
        <h1 className="my-3 white-headings text-2xl lg:text-6xl capitalize min-[1800px]:text-7xl font-bold">
          Outsource fulfilment with Nodex
        </h1>
        <p className="leading-relaxed white-content md:text-2xl">
          Do you want to ship from one to more warehouses? Doesn't Matter Now!
        </p>
      </div> */}
            <div
                data-aos="fade-right"
                className="md:flex mt-20 relative md:space-x-10 items-center max-w-screen-2xl px-8 h-full"
            >
                <div className="h-full md:w-1/2 relative">
                    <Image
                        width={1000}
                        height={1000}
                        src="/Global Transport.png"
                        className="w-full h-full rounded-md"
                        alt="Your Alt Text"
                    />
                    {/* <div className="absolute inset-0 h-full w-2/3 bg-gradient-to-r from-black to-transparent"></div> */}
                </div>
                <div className="sm:w-1/2 my-3 md:my-0 relative">
                    <div className="rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
                    <div className=" gap-3 hidden md:flex items-center text-sm uppercase font-semibold my-5">
                        <span className="w-6 h-[2px] bg-blue-500"></span>Unser globales Transportwesen
                    </div>
                    <h1 className="font-semibold text-2xl md:text-4xl min-[1800px]:text-7xl relative text-darken lg:pr-10">
                        Nahtlose globale Transportlösungen.
                    </h1>
                    <p className="py-5 lg:pr-32 md:text-lg">
                        Entdecken Sie erstklassige Logistiklösungen mit unserem umfangreichen Dienstleistungsportfolio,
                        das 3PL, 4PL, Frachtabfertigung und multimodalen Transport abdeckt. Wir bieten globale
                        Konnektivität für Ihre Fracht, unterstützt durch Innovation und Zuverlässigkeit, und
                        gewährleisten schnelle und sichere Lieferungen, jedes Mal.
                    </p>
                    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
                </div>
            </div>
        </>
    );
};

export default GlobalTransport;
