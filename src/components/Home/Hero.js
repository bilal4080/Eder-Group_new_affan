"use client";
import Image from "next/image";
import React from "react";
import {useState, useEffect} from "react";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter} from "react-icons/fa6";
import {LuMoveLeft, LuMoveRight} from "react-icons/lu";
const backgrounds = [
    "/hs1bg1.jpeg",
    "/hs1bg3.jpg",
    "/—Pngtree—factory scene showcasing an enormous_4090186.jpg",
    "/truck-with-trailer-is-driving-mo.png",
]; // Paths to your background images
const texts = [
    {
        heading: "NEXT-GEN LOGISTICS SOLUTIONS",
        text: "Logistics services offer comprehensive solutions for supply chain management and ensure seamless transport and delivery from the factory to the end customer. The Eder offers the best service in Germany.",
    },
    {
        heading: "EXPANSION OF THE 3PL MARKET<br/>SOLUTIONS",
        text: "The increasing demand for logistics outsourcing is driving the rise of third-party logistics companies (3PLs), leading to optimized processes and increased productivity.",
    },
    {
        heading: "STELL PRODUCTION <br/>WORLD WIDE",
        text: "Our tailored industry-specific steel production solutions ensure smooth manufacturing operations by carefully examining each step for efficiency and effectiveness to optimize the entire production process",
    },
    {
        heading: "SEAMLESS SHIPMENT TRACKING",
        text: "Experience the convenience and simplicity of our booking and shipment tracking service. Book shipments effortlessly and monitor their journey with real-time tracking.",
    },
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [timer, setTimer] = useState(5000);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, timer); // Change background every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[100vh] max-h-max w-full py-[6.5rem] flex flex-col items-center justify-between text-white overflow-hidden">
            {" "}
            {/* Add overflow-hidden */}
            {/* Background Image */}
            {backgrounds.map((bg, idx) => (
                <Image
                    key={idx}
                    width={1000}
                    height={1000}
                    src={bg}
                    className={`absolute inset-0 w-full h-auto min-h-full -z-10 object-cover bg-center ${
                        idx === index
                            ? "opacity-100 scale-125 transition-[scale,transform]  ease-linear duration-[10s]"
                            : "opacity-0"
                    }`}
                    alt="Background"
                />
            ))}
            {/* Black Shade Overlay */}
            <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-20 -z-10"></div>
            {/* Your Content Goes Here */}
            {/* Example content: */}
            <div className="relative min-w-[90%] min-h-[80%] mx-auto z-10 flex  h-auto ">
                <section className="flex  justify-center items-center ">
                    <li className="my-16 flex gap-5 text-md  md:text-xl flex-col">
                        <a href="https://www.facebook.com/theminuseder/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="cursor-pointer" />
                        </a>

                        <a href="https://www.instagram.com/edergmbh/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="cursor-pointer" />
                        </a>
                        <a href="https://x.com/edergmbh01" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className=" cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/in/edergmbh/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className=" cursor-pointer" />
                        </a>
                    </li>
                </section>
                <div className="relative px-8 w-full py-6 sm:py-24 ">
                    {texts.map((item, idx) => (
                        <div
                            key={idx}
                            className={`px-4 md:px-12 w-full  absolute  right-0 left-0 top-0 bottom-0 flex flex-col md:gap-4 justify-center items-center transition-transform ${
                                index === idx
                                    ? " transition-all duration-[1s]  ease-linear translate-x-0 opacity-100"
                                    : " translate-x-[50vw] opacity-0"
                            }`}
                        >
                            <h1
                                className="text-2xl lg:text-7xl text-start md:w-1/2 w-full  py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                                dangerouslySetInnerHTML={{__html: item.heading}}
                            />
                            <p
                                className="text-black-500 2xl:text-xl md:w-1/2 w-full text-start leading-4 sm:leading-normal  md:text-lg font-normal mb-6"
                                dangerouslySetInnerHTML={{__html: item.text}}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <section className="mb-6 gap-3 flex min-w-[90%] px-8 mx-auto justify-between mt-12 md:mt-0 items-end">
                <div className="flex gap-3">
                    {backgrounds.map((item, idx) => (
                        <div
                            onClick={() => {
                                setIndex(idx);
                                setTimer(5000);
                            }}
                            key={idx}
                            className={`w-5 h-5 md:w-8 md:h-8 rounded-full ${
                                idx === index ? "border-4 border-white" : null
                            } hover:border-4 hover:border-white flex justify-center items-center`}
                        >
                            {" "}
                            <p className="w-1 h-1 hover:bg-transparent bg-white rounded-full"></p>
                        </div>
                    ))}
                </div>
                <div className=" flex gap-3">
                    <div
                        onClick={() => {
                            setTimer(5000);
                            if (index === 0) {
                                setIndex(3);
                            } else {
                                setIndex(index - 1);
                            }
                        }}
                        className="hover:pl-8 transition-all  ease-linear duration-500 hover:py-3 p-3 hover:bg-black hover:rounded-l-full hover:rounded-r-none rounded-full border border-gray-500"
                    >
                        <LuMoveLeft color="white" />
                    </div>
                    <div
                        onClick={() => {
                            setTimer(5000);
                            if (index === 3) {
                                setIndex(0);
                            } else {
                                setIndex(index + 1);
                            }
                        }}
                        className="hover:pr-8 transition-all  ease-linear duration-500 hover:py-3 p-3 hover:bg-black hover:rounded-r-full rounded-full hover:rounded-l-none border border-gray-500"
                    >
                        <LuMoveRight color="white" />
                    </div>
                </div>
            </section>
        </div>
    );
}
