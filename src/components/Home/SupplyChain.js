"use client";
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {LuMoveLeft, LuMoveRight} from "react-icons/lu";

const SupplyChain = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    const data = [
        [
            {
                image: "/image_wKo5sGBx_1718264035623_raw.png",
                title: "SEA FREIGHT",
                text: "Our sea freight shipping services ensure efficient transport of your goods to distant shores with smooth and timely delivery across vast oceans.",
            },
            {
                image: "/Air Fright.jpg",
                title: "AIR FREIGHT",
                text: "We move your cargo quickly and securely through our comprehensive air freight services. Whether it’s an urgent matter or a distant destination, we demonstrate speed and expertise.",
            },
            {
                image: "/86a86b58-78a6-4249-b438-1973972257c7.png",
                title: "CUSTOMS CLEARANCE",
                text: "Experience fast and secure customs clearance for your shipments. Whether it’s an urgent delivery or a distant target, our services emphasize speed and competence.",
            },
        ],
        [
            {
                image: "/ground distbition.jpg",
                title: "GROUND DISTRIBUTION",
                text: "Fast and reliable ground transportation ensures that your goods arrive on time. This includes all aspects from local deliveries to nationwide distribution.",
            },
            {
                image: "/Inter Model.jpeg",
                title: "INTERMODAL",
                text: "Benefit from our fast and reliable ground transportation services that ensure timely delivery of your goods across all areas. From local deliveries to nationwide shipments, we are here for you.",
            },
            {
                image: "/H-Improve-Logistics-with-SaaS-Warehouse-Management-Software.jpg",
                title: "WAREHOUSE MANAGEMENT",
                text: "We offer comprehensive services for improved warehouse management. This enhances storage, checks inventory, and optimizes processes for maximum efficiency.",
            },
        ],
        [
            {
                image: "/Cold Logistics.jpeg",
                title: "COLD CHAIN LOGISTICS",
                text: "Unlock the potential of your warehouse with our comprehensive management services. From optimizing storage to inventory management, we streamline processes for maximum efficiency.",
            },
            {
                image: "/3rd party Logosutcs.jpeg",
                title: "THIRD-PARTY LOGISTICS",
                text: "We are experts in logistics management, including third-party logistics and supply chain support. Our reliable services optimize processes for maximum efficiency.",
            },
            {
                image: "/Trans Border.png",
                title: "TRANSBORDER",
                text: "Our comprehensive services streamline transborder logistics, facilitating smooth international transport of products.",
            },
        ],
    ];

    const smallScreen = [
        {
            image: "/Sea Fright.png",
            title: "SEA FREIGHT",
            text: "Our sea freight shipping services ensure efficient transport of your goods to distant shores with smooth and timely delivery across vast oceans.",
        },
        {
            image: "/Air Fright.jpg",
            title: "AIR FREIGHT",
            text: "We move your cargo quickly and securely through our comprehensive air freight services. Whether it’s an urgent matter or a distant destination, we demonstrate speed and expertise.",
        },
        {
            image: "/Custom Clearnce.jpg",
            title: "CUSTOMS CLEARANCE",
            text: "Experience fast and secure customs clearance for your shipments. Whether it’s an urgent delivery or a distant target, our services emphasize speed and competence.",
        },
        {
            image: "/ground distbition.jpg",
            title: "GROUND DISTRIBUTION",
            text: "Fast and reliable ground transportation ensures that your goods arrive on time. This includes all aspects from local deliveries to nationwide distribution.",
        },
        {
            image: "/Inter Model.jpeg",
            title: "INTERMODAL",
            text: "Benefit from our fast and reliable ground transportation services that ensure timely delivery of your goods across all areas. From local deliveries to nationwide shipments, we are here for you.",
        },
        {
            image: "/warehousemanagement.png",
            title: "WAREHOUSE MANAGEMENT",
            text: "We offer comprehensive services for improved warehouse management. This enhances storage, checks inventory, and optimizes processes for maximum efficiency.",
        },
        {
            image: "/Cold Logistics.jpeg",
            title: "COLD CHAIN LOGISTICS",
            text: "Unlock the potential of your warehouse with our comprehensive management services. From optimizing storage to inventory management, we streamline processes for maximum efficiency.",
        },
        {
            image: "/3rd party Logosutcs.jpeg",
            title: "THIRD-PARTY LOGISTICS",
            text: "We are experts in logistics management, including third-party logistics and supply chain support. Our reliable services optimize processes for maximum efficiency.",
        },
        {
            image: "/Trans Border.png",
            title: "TRANSBORDER",
            text: "Our comprehensive services streamline transborder logistics, facilitating smooth international transport of products.",
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set initial screen width

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // Set up the interval for automatic sliding
        intervalRef.current = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
        }, 9000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <>
            <div data-aos="flip-up" className="mx-auto text-center my-24">
                <h1 className="my-3 text-2xl lg:text-6xl capitalize min-[1800px]:text-7xl font-semibold">
                    Our valuable services
                </h1>
            </div>
            <div className={`relative gap-6 min-[786px]:flex hidden items-start mx-auto px-8 w-[97%] h-[35vw]`}>
                {data.map((items, idx) => (
                    <div
                        key={idx}
                        className={`absolute left-0 right-0 gap-6 inset-0 w-full h-auto flex justify-between items-start -z-10 ${
                            idx === index
                                ? " translate-x-0 transition-all opacity-100 ease-linear duration-[1s]"
                                : " translate-x-[100vw] opacity-0"
                        }`}
                    >
                        {items.map((item, IDX) => (
                            <div key={IDX} className="w-1/3 h-3/6 px-4 py-6 flex flex-col gap-4">
                                <Image
                                    width={1000}
                                    height={1000}
                                    alt="image"
                                    src={item.image}
                                    className="w-full h-full object-center rounded-md bg-center object-cover"
                                />
                                <h4 className="text-2xl md:text-3xl font-semibold pl-4 capitalize">{item.title}</h4>
                                <p className="text-sm md:text-lg pl-4 capitalize">{item.text}</p>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="flex gap-3 absolute left-0 right-0 bottom-0 top-[20%] justify-end items-start px-8">
                    <div
                        onClick={() => {
                            if (index === data.length - 1) {
                                setIndex(0);
                            } else {
                                setIndex(index + 1);
                            }
                        }}
                        className="text-white z-10 transition-all ease-linear duration-500 p-3 bg-orange-500 opacity-100 rounded-full border border-white"
                    >
                        <LuMoveRight />
                    </div>
                </div>
            </div>
            <div className={`flex relative gap-6 min-[786px]:hidden items-start mx-auto px-8 w-[97%] mb-10 h-[80vh]`}>
                {smallScreen.map((item, idx) => (
                    <div
                        key={idx}
                        className={`absolute left-0 right-0 gap-6 inset-0 w-full h-auto flex justify-between items-center -z-10 ${
                            idx === index
                                ? " translate-x-0 transition-all opacity-100 ease-linear duration-[1s]"
                                : " translate-x-[100vw] opacity-0"
                        }`}
                    >
                        <div className="w-full h-full px-4 py-6 flex flex-col gap-4">
                            <Image
                                width={1000}
                                height={1000}
                                alt="image"
                                src={item.image}
                                className="w-full h-full object-center rounded-md bg-center object-cover"
                            />
                            <h4 className="text-2xl md:text-3xl font-semibold pl-4 capitalize">{item.title}</h4>
                            <p className="text-sm md:text-lg pl-4 capitalize">{item.text}</p>
                        </div>
                    </div>
                ))}
                <div className="flex gap-3 absolute left-0 right-0 bottom-0 top-[20%] justify-end items-start px-8">
                    <div
                        onClick={() => {
                            if (index === smallScreen.length - 1) {
                                setIndex(0);
                            } else {
                                setIndex(index + 1);
                            }
                        }}
                        className="text-white z-10 transition-all ease-linear duration-500 p-3 hover:bg-black rounded-full border border-white"
                    >
                        <LuMoveRight />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupplyChain;
