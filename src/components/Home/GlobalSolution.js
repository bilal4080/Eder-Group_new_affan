"use client";
import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./supplychain.css";

// import required modules
import {Zoom, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";
const GlobalSolution = () => {
    const data = [
        {
            image: "/hs5.jpg",
            title: "SEA FREIGHT",
            text: "Sea freight services ensure that your cargo is safely and timely transported, navigating vast oceans and reaching distant shores.",
        },
        {
            title: " AIR FREIGHT",
            image: "/hs5.jpg",
            text: "The speed and efficiency of air freight are experienced through our comprehensive services, ensuring that cargo reaches its destination swiftly and securely, from urgent deliveries to long-haul shipments.",
        },
        {
            image: "/hs5.jpg",
            title: "CUSTOMS CLEARANCE",
            text: "Seamless customs clearance is ensured by our services, allowing your business to focus on growth while compliance with regulations is taken care of.",
        },
        {
            image: "/hs5.jpg",
            title: "GROUND DISTRIBUTION",
            text: "Efficient ground distribution services ensure timely delivery of your goods. From local deliveries to nationwide distribution, we cover it all.",
        },
        {
            image: "/hs5.jpg",
            title: "INTERMODAL",
            text: "Experience the dynamic world of intermodal transportation with our comprehensive services, seamlessly connecting different modes of transportation to deliver your goods efficiently.",
        },
        {
            image: "/hs5.jpg",
            title: "WAREHOUSE MANAGEMENT",
            text: "Seamless warehouse management is facilitated by our comprehensive services, optimizing storage, inventory, and operations for maximum efficiency.",
        },
        {
            image: "/hs5.jpg",
            title: "COLD CHAIN LOGISTICS",
            text: "Efficient management of the cold chain logistics is ensured by our comprehensive services, maintaining the integrity of temperature-sensitive goods throughout the supply chain.",
        },
        {
            image: "/hs5.jpg",
            title: "THIRD PARTY LOGISTICS",
            text: "Our comprehensive services ensure that third-party logistics are seamlessly managed, providing efficient and reliable support for your supply chain needs.",
        },
        {
            image: "/hs5.jpg",
            title: "TRANSBORDER",
            text: "Seamless handling of transborder logistics is ensured by our comprehensive services, facilitating smooth cross-border movement of goods.",
        },
        {
            image: "/hs5.jpg",
            title: "TRANSPORTATION TECHNOLOGY",
            text: "Our comprehensive services ensure that transportation technology is seamlessly integrated, enhancing efficiency and innovation in logistics operations.",
        },
        {
            image: "/hs5.jpg",
            title: "WHITE GLOVE OPTIONS",
            text: "Seamless integration of white glove options is ensured by our comprehensive services, providing personalized and high-quality logistics solutions.",
        },
    ];

    return (
        <>
            <div data-aos="flip-up" className="mx-auto text-center mt-24">
                <h1 className="my-3 white-headings text-2xl lg:text-6xl capitalize min-[1800px]:text-7xl font-bold">
                    GLOBAL SOLUTIONS
                </h1>
                <p className="leading-relaxed white-content md:text-2xl">
                    Do you want to ship from one to more warehouses? Doesn't Matter Now!
                </p>
            </div>
            <div className=" max-w-screen-xl mx-auto px-8 my-20">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    slidesPerView={1}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 8,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper h-auto"
                >
                    {data?.map((item, index) => (
                        <SwiperSlide>
                            <div key={index} className={` mx-16 flex flex-col gap-1 h-full bg-blue-500 px-5 py-4`}>
                                {/* <Image
                  width={500}
                  height={500}
                  alt="image"
                  src={item.image}
                  className=""
                /> */}
                                <h1 className="font-medium capitalize text-left text-xl mb-3 text-darken">
                                    {item?.title}
                                </h1>
                                <p className="text-md text-left leading-5 font-extralight">{item.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default GlobalSolution;
