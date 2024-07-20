import Image from "next/image";
import React from "react";

const MapChart = () => {
    return (
        <>
            <div data-aos="flip-up" className="mx-auto text-center mt-24">
                <h1
                    data-translate
                    className="my-3 white-headings text-2xl lg:text-6xl capitalize min-[1800px]:text-7xl font-bold"
                >
                    Our Global Coverage
                </h1>
                <p data-translate className="leading-relaxed white-content md:text-2xl">
                    Want to ship from one to multiple warehouses? It doesn't matter anymore!
                </p>
            </div>
            <div className="max-w-screen-xl relative px-8 mx-auto mt-10">
                <Image
                    src={"/worldmap.png"}
                    width={1000}
                    height={1000}
                    className="object-contain w-full h-full"
                    alt="worldmap"
                />
                <div className="flex gap-2 absolute top-[34%] left-[12%] items-center">
                    <p
                        data-translate
                        className="w-6 h-6 bg-orange-600 dark:bg-white rounded-full flex justify-center items-center bg-opacity-25 animate-pulse"
                    >
                        <span className="w-[50%] h-[50%] bg-orange-600 dark:bg-white rounded-full"></span>
                    </p>
                    <span
                        data-translate
                        className="md:font-bold text-xs text-orange-600 dark:text-white md:text-lg font-normal capitalize"
                    >
                        United States
                    </span>
                </div>

                <div className="flex gap-2 absolute top-[70%] left-[29%] items-center">
                    <p className="w-6 h-6 bg-orange-600 dark:bg-white rounded-full flex justify-center items-center bg-opacity-25 animate-pulse">
                        <span
                            data-translate
                            className="w-[50%] h-[50%] bg-orange-600 dark:bg-white rounded-full"
                        ></span>
                    </p>
                    <span className="md:font-bold text-xs text-orange-600 dark:text-white md:text-lg font-normal capitalize">
                        Brazil
                    </span>
                </div>
                <div className="flex gap-2 absolute top-[30%] right-[20%] items-center">
                    <p className="w-6 h-6 bg-orange-600 dark:bg-white rounded-full flex justify-center items-center bg-opacity-25 animate-pulse">
                        <span
                            data-translate
                            className="w-[50%] h-[50%] bg-orange-600 dark:bg-white rounded-full"
                        ></span>
                    </p>
                    <span className="md:font-bold text-xs text-orange-600 dark:text-white md:text-lg font-normal capitalize">
                        Russia
                    </span>
                </div>
                <div className="flex gap-2 absolute top-[43%] left-[54%] items-center">
                    <p className="w-6 h-6 bg-orange-600 dark:bg-white rounded-full flex justify-center items-center bg-opacity-25 animate-pulse">
                        <span className="w-[50%] h-[50%] bg-orange-600 dark:bg-white rounded-full"></span>
                    </p>
                    <span
                        data-translate
                        className="md:font-bold text-xs text-orange-600 dark:text-white md:text-lg font-normal capitalize"
                    >
                        Germany
                    </span>
                </div>
            </div>
        </>
    );
};

export default MapChart;
