import React from "react";
import {FaTruckMoving} from "react-icons/fa";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
const Page = () => {
    const options = [
        {
            title: "Comprehensive Global Network",
            description:
                "With our comprehensive global network, Eder offers a wide range of logistics solutions designed to meet the worldwide shipping requirements of our customers. Through strategic partnerships and extensive presence in key trading ports, we are able to establish seamless connections between different locations and provide efficient transport solutions. Our network allows us to flexibly respond to our customers' needs and offer tailored solutions that are both cost-effective and reliable.",
        },
        {
            title: "Flexible Shipping Options",
            description:
                "We understand that different businesses have different shipping needs. That's why Eder offers a range of flexible shipping options, including Full Container Load (FCL) and Less than Container Load (LCL) services. Whether you have large quantities of goods or smaller shipments, we can tailor our services to meet your specific requirements. Our goal is to provide cost-effective solutions that maximize efficiency and minimize costs for our customers.",
        },
        {
            title: "Advanced Tracking and Transparency Features",
            description:
                "In today's fast-paced world, having real-time information about your shipment is crucial. Eder employs advanced tracking technologies that provide complete transparency and real-time updates on the status of your cargo. This allows you to monitor the progress of your shipment at any point in its journey, giving you peace of mind and the ability to plan more effectively.",
        },
        {
            title: "Emphasis on Security and Compliance",
            description:
                "Security and compliance are at the heart of our sea freight services. Eder adheres to the highest industry standards and regulations to ensure that your cargo is handled with the utmost care. Our team of experts is well-versed in international shipping regulations and best practices, ensuring that all necessary documents and security protocols are in place. This commitment to security and compliance minimizes the risk of delays, fines, or other issues, ensuring a smooth shipping experience.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/Sea-Freight.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        data-translate
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{__html: "Sea Freight <br/> Supply Chain in Motion"}}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 data-translate className="text-sm uppercase font-semibold">
                        Sea Freight Services
                    </h3>
                    <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                        Sea Freight
                    </h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p data-translate className="py-5 md:text-lg">
                    At Eder, our sea freight services offer reliable and cost-effective solutions for transporting goods
                    globally. By leveraging an extensive network of international shipping partners and strategically
                    located ports, we ensure efficient and timely delivery of your cargo. Our comprehensive sea freight
                    services include Full Container Load (FCL), Less than Container Load (LCL), break-bulk, and project
                    cargo handling.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/sea1.jpg.png" className="w-full md:w-1/2 h-auto" />
                    <p data-translate className="py-5 md:text-lg">
                        At Eder, our sea freight services prioritize security, compliance, and real-time tracking to
                        ensure the safe and smooth international shipping of your goods. By leveraging our extensive
                        network of global shipping partners and strategically located ports, we offer cost-effective
                        Full Container Load (FCL) and Less than Container Load (LCL) solutions tailored to your
                        individual requirements. Our expert team is dedicated to handling your cargo with utmost care
                        and efficiency, ensuring timely deliveries and minimizing any disruptions. Focusing on
                        reliability and utilizing advanced tracking technologies, Eder navigates the complexities of sea
                        freight logistics, providing you with peace of mind and exceptional service. Whether you need to
                        ship large quantities or smaller consignments, trust Eder to transport your cargo safely and
                        efficiently worldwide.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                    WHAT YOU GET WITH <span className="text-orange-600">Logistics Business</span>
                </h2>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-2 md:p-5">
                    {options.map((option, idx) => (
                        <div key={idx} className="relative border border-gray-300 py-8 px-5 flex items-center">
                            <div className="p-5 rounded-full bg-orange-600 absolute -left-9">
                                <FaTruckMoving size={30} className="text-white" />
                            </div>
                            <div className="flex flex-col gap-2 pl-6 sm:pl-12 items-start justify-center">
                                <h2 className="font-semibold text-2xl md:text-4xl">{option.title}</h2>
                                <p className="py-5 md:text-lg">{option.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center my-8">
                    <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                        HOW TO USE INCOTERMS RULES <span className="text-orange-600">COMMON SHIPPING TERMS 2024</span>
                    </h2>
                    <Link href="/incoterms" passHref>
                        <button
                            data-translate
                            className="inline-flex items-center mt-4 bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                        >
                            Learn More
                            <FaArrowRight className="ml-2" />
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Page;
