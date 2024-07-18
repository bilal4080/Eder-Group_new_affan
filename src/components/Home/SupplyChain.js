import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {LuMoveLeft, LuMoveRight} from "react-icons/lu";

const SupplyChain = () => {
    const [chunkIndex, setChunkIndex] = useState(0);

    const data = [
        {
            image: "/image_wKo5sGBx_1718264035623_raw.png",
            title: "SEA FREIGHT",
            text: "Our sea freight shipping services ensure efficient transport of your goods to distant shores with smooth and timely delivery across vast oceans.",
            route: "/sea_freight",
        },
        {
            image: "/Air Fright.jpg",
            title: "AIR FREIGHT",
            text: "We move your cargo quickly and securely through our comprehensive air freight services. Whether it’s an urgent matter or a distant destination, we demonstrate speed and expertise.",
            route: "/air_freight",
        },
        {
            image: "/86a86b58-78a6-4249-b438-1973972257c7.png",
            title: "CUSTOMS CLEARANCE",
            text: "Experience fast and secure customs clearance for your shipments. Whether it’s an urgent delivery or a distant target, our services emphasize speed and competence.",
            route: "/custom_clear",
        },
        {
            image: "/ground distbition.jpg",
            title: "GROUND DISTRIBUTION",
            text: "Fast and reliable ground transportation ensures that your goods arrive on time. This includes all aspects from local deliveries to nationwide distribution.",
            route: "/ground_dist",
        },
        {
            image: "/Inter Model.jpeg",
            title: "INTERMODAL",
            text: "Benefit from our fast and reliable ground transportation services that ensure timely delivery of your goods across all areas. From local deliveries to nationwide shipments, we are here for you.",
            route: "/inter_model",
        },
        {
            image: "/H-Improve-Logistics-with-SaaS-Warehouse-Management-Software.jpg",
            title: "WAREHOUSE MANAGEMENT",
            text: "We offer comprehensive services for improved warehouse management. This enhances storage, checks inventory, and optimizes processes for maximum efficiency.",
            route: "/ware_house",
        },
        {
            image: "/Cold Logistics.jpeg",
            title: "COLD CHAIN LOGISTICS",
            text: "Unlock the potential of your warehouse with our comprehensive management services. From optimizing storage to inventory management, we streamline processes for maximum efficiency.",
            route: "/commodity_logistics",
        },
        {
            image: "/3rd party Logosutcs.jpeg",
            title: "THIRD-PARTY LOGISTICS",
            text: "We are experts in logistics management, including third-party logistics and supply chain support. Our reliable services optimize processes for maximum efficiency.",
            route: "/3pl_4pl",
        },
        {
            image: "/Trans Border.png",
            title: "TRANSBORDER",
            text: "Our comprehensive services streamline transborder logistics, facilitating smooth international transport of products.",
            route: "/trans_border",
        },
    ];

    const handleScroll = (direction) => {
        if (direction === "left") {
            setChunkIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (direction === "right") {
            setChunkIndex((prevIndex) => Math.min(prevIndex + 1, Math.ceil(data.length / 3) - 1));
        }
    };

    const currentDataChunk = data.slice(chunkIndex * 3, chunkIndex * 3 + 3);

    return (
        <>
            <div className="mx-auto text-center my-6 md:my-24">
                <h1 className="my-3 text-2xl lg:text-6xl capitalize min-[1800px]:text-7xl font-semibold">
                    Our valuable services
                </h1>
            </div>
            <div className="relative mx-auto px-2 md:px-8 w-full md:w-[97%]">
                <div className="flex flex-col gap-6 md:flex-row md:gap-0 overflow-hidden relative">
                    {/* Slider container */}
                    <div className="flex gap-2 md:gap-6 md:overflow-hidden relative w-full">
                        {currentDataChunk.map((item, index) => (
                            <div
                                key={index}
                                className="w-full md:w-[33.33%] flex flex-col gap-4 rounded-md overflow-hidden shadow-md relative"
                            >
                                {/* Link to navigate to each item's route */}
                                <Link href={item.route} passHref>
                                    <div className="h-52 md:h-72 relative cursor-pointer">
                                        <Image
                                            layout="fill"
                                            objectFit="cover"
                                            alt="image"
                                            src={item.image}
                                            className="rounded-t-md w-full h-full object-center rounded-md bg-center object-cover"
                                        />
                                    </div>
                                </Link>
                                <div className="p-2 md:p-4">
                                    <h4 className="text-xl md:text-3xl font-semibold capitalize">{item.title}</h4>
                                    <p className="text-xs md:text-lg capitalize">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    {/* Navigation buttons */}
                    <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                        <button
                            onClick={() => handleScroll("left")}
                            className={`p-2 md:p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 ${
                                chunkIndex === 0 ? "opacity-0 pointer-events-none" : ""
                            }`}
                        >
                            <LuMoveLeft />
                        </button>
                    </div>

                    <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 flex items-center">
                        <button
                            onClick={() => handleScroll("right")}
                            className={`p-2 md:p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 ${
                                chunkIndex === Math.ceil(data.length / 3) - 1 ? "opacity-0 pointer-events-none" : ""
                            }`}
                        >
                            <LuMoveRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupplyChain;
