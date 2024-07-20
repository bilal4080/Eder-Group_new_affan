"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const GlobalTransport = () => {
    return (
        <>
            <div
                data-aos="fade-right"
                className="md:flex mt-20 relative md:space-x-10 items-center max-w-screen-2xl px-8 h-full"
            >
                <div className="h-full md:w-1/2 relative">
                    <Link href="/ground_dist">
                        <Image
                            width={1000}
                            height={1000}
                            src="/Global Transport.png"
                            className="w-full h-full rounded-md"
                            alt="Your Alt Text"
                        />
                    </Link>
                    {/* <div className="absolute inset-0 h-full w-2/3 bg-gradient-to-r from-black to-transparent"></div> */}
                </div>
                <div className="sm:w-1/2 my-3 md:my-0 relative">
                    <div className="rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
                    <div
                        data-translate
                        className=" gap-3 hidden md:flex items-center text-sm uppercase font-semibold my-5"
                    >
                        <span className="w-6 h-[2px] bg-blue-500"></span>OUR GLOBAL TRANSPORTATION
                    </div>
                    <h1
                        data-translate
                        className="font-semibold text-2xl md:text-4xl min-[1800px]:text-7xl relative text-darken lg:pr-10"
                    >
                        Seamless global transport solutions.
                    </h1>
                    <p data-translate className="py-5 lg:pr-32 md:text-lg">
                        Discover first-class logistics solutions with our extensive service portfolio, which covers 3PL,
                        4PL, freight handling and multimodal transportation. We offer global Connectivity for your
                        freight, backed by innovation and reliability, and ensure fast and safe deliveries, every time.
                    </p>
                    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
                </div>
            </div>
        </>
    );
};

export default GlobalTransport;
