"use client";
import React, {useEffect, useState, useRef} from "react";
import Image from "next/image";
import {LuMoveLeft, LuMoveRight} from "react-icons/lu";

const Section6 = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [indexLarge, setIndexLarge] = useState(0);
    const [indexSmall, setIndexSmall] = useState(0);
    const autoScrollRef = useRef(null);

    const data = [
        {
            image1: "/imgC1.jpg",
            image2: "/imgC2.png",
        },
        {
            image1: "/truck-logistics-operations-dusk.png",
            image2: "/imgC4.png",
        },
        {
            image1: "/imgC1.jpg",
            image2: "/imgC2.png",
        },
        {
            image1: "/truck-logistics-operations-dusk.png",
            image2: "/imgC5.jpg",
        },
    ];

    const smallScreen = [
        {
            image: "/imgC1.jpg",
        },
        {
            image: "/imgC2.png",
        },
        {
            image: "/truck-logistics-operations-dusk.png.png",
        },
        {
            image: "/imgC4.png",
        },
        {
            image: "/imgC1.jpg",
        },
        {
            image: "/imgC2.png",
        },
        {
            image: "/truck-logistics-operations-dusk.png.png",
        },
        {
            image: "/imgC5.jpg",
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // Start auto-scrolling
        autoScrollRef.current = setInterval(() => {
            handleNextLarge();
            handleNextSmall();
        }, 3000); // Change image every 3 seconds

        // Clean up on unmount
        return () => {
            clearInterval(autoScrollRef.current);
        };
    }, []);

    const handleNextLarge = () => {
        setIndexLarge((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevLarge = () => {
        setIndexLarge((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const handleNextSmall = () => {
        setIndexSmall((prevIndex) => (prevIndex === smallScreen.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevSmall = () => {
        setIndexSmall((prevIndex) => (prevIndex === 0 ? smallScreen.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <div className="min-[786px]:flex hidden mt-20 relative gap-6 items-center mx-auto px-8 w-[97%]  h-[50vh]">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className={`absolute left-0 right-0 gap-6 inset-0 w-full h-auto flex justify-between items-center -z-10 ${
                            idx === indexLarge
                                ? " translate-x-0 transition-all opacity-100  ease-linear duration-[1s]"
                                : " translate-x-[100vw] opacity-0"
                        }`}
                    >
                        <Image
                            width={1000}
                            height={1000}
                            alt="image"
                            src={item.image1}
                            className="md:w-1/2 h-3/4 object-center bg-center object-cover"
                        />
                        <Image
                            width={1000}
                            height={1000}
                            alt="image"
                            src={item.image2}
                            className="md:w-1/2 h-3/4 object-center bg-center object-cover"
                        />
                    </div>
                ))}
                <div className=" flex gap-3 absolute left-0 right-0 bottom-0 top-0 justify-start items-center px-8">
                    <div
                        onClick={handlePrevLarge}
                        className="text-white   z-10 transition-all  ease-linear duration-500 p-3 bg-orange-500 rounded-full border border-white"
                    >
                        <LuMoveLeft />
                    </div>
                </div>
                <div className=" flex gap-3 absolute left-0 right-0 bottom-0 top-0 justify-end items-center px-8">
                    <div
                        onClick={handleNextLarge}
                        className="text-white   z-10 transition-all  ease-linear duration-500 p-3 bg-orange-500 opacity-100 rounded-full border border-white"
                    >
                        <LuMoveRight />
                    </div>
                </div>
            </div>
            <div className="flex min-[786px]:hidden mt-20 relative gap-6 items-center mx-auto px-8 w-[97%]  h-[50vh]">
                {smallScreen.map((item, idx) => (
                    <div
                        key={idx}
                        className={`absolute left-0 right-0 gap-6 inset-0 w-full h-auto flex justify-between items-center -z-10 ${
                            idx === indexSmall
                                ? " translate-x-0 transition-all opacity-100  ease-linear duration-[1s]"
                                : " translate-x-[100vw] opacity-0"
                        }`}
                    >
                        <Image
                            width={1000}
                            height={1000}
                            alt="image"
                            src={item.image}
                            className="w-full h-3/4 object-center bg-center object-cover"
                        />
                    </div>
                ))}
                <div className=" flex gap-3 absolute left-0 right-0 bottom-0 top-0 justify-start items-center px-8">
                    <div
                        onClick={handlePrevSmall}
                        className="text-white   z-10 transition-all  ease-linear duration-500 p-3 hover:bg-black rounded-full border border-white"
                    >
                        <LuMoveLeft />
                    </div>
                </div>
                <div className=" flex gap-3 absolute left-0 right-0 bottom-0 top-0 justify-end items-center px-8">
                    <div
                        onClick={handleNextSmall}
                        className="text-white   z-10 transition-all  ease-linear duration-500 p-3 bg-orange-500 opacity-100 rounded-full border border-white"
                    >
                        <LuMoveRight />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section6;
