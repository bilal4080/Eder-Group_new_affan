import Image from "next/image";
import React from "react";

const Section4 = () => {
    return (
        <>
            <div
                data-aos="fade-right"
                className="md:flex mt-20 relative flex flex-col-reverse md:flex-row md:space-x-10 items-center max-w-screen-2xl px-8 h-full"
            >
                <div className="sm:w-1/2 relative">
                    <div className="rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
                    <div className=" gap-3 items-center hidden md:flex text-sm uppercase font-semibold my-5">
                        <span className="w-6 h-[2px] bg-blue-500"></span>OUnsere 3PL- und 4PL-Lösungen
                    </div>
                    <h1 className="font-semibold text-2xl uppercase md:text-4xl min-[1800px]:text-7xl relative text-darken lg:pr-10">
                        3pl & 4pl
                    </h1>
                    <p className="py-5 lg:pr-32 md:text-lg">
                        Eine effiziente Supply-Chain-Verwaltung gedeiht, wenn sie nahtlos mit Lösungen für
                        Drittanbieter-Logistik (3PL) und Viertanbieter-Logistik (4PL) verbunden ist. Die Integration
                        dieser Dienstleistungen optimiert jeden Aspekt, von der Beschaffung bis zur Distribution, und
                        verbessert das Bestandsmanagement sowie die Gesamteffizienz. Während sich 3PL auf Transport und
                        Lagerung spezialisiert, orchestriert 4PL das gesamte Supply-Chain-Netzwerk
                    </p>
                    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
                </div>
                <div className="h-full md:w-1/2 relative">
                    <Image
                        width={1000}
                        height={1000}
                        src="/3PL 4PL SOLUTION.png"
                        className="w-full h-full rounded-md"
                        alt="Your Alt Text"
                    />
                    {/* <div className="absolute inset-0 h-full w-2/3 bg-gradient-to-r from-black to-transparent"></div> */}
                </div>
            </div>
        </>
    );
};

export default Section4;
