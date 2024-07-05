import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Comprehensive Ground Distribution Solutions and Reliable Delivery",
            description:
                "Eder offers comprehensive ground distribution services with nationwide coverage. Our extensive network ensures efficient transportation of your goods to any destination across the country. We pride ourselves on reliable delivery times, ensuring your cargo reaches its destination on time, every time. Our commitment to punctuality and reliability makes us a trusted partner in ground transportation.",
        },
        {
            title: "State-of-the-Art Fleet and Technology",
            description:
                "Our modern fleet of vehicles is equipped with the latest technology to ensure the safe and efficient transport of your goods. From real-time tracking systems to advanced route planning software, Eder utilizes cutting-edge technology to optimize delivery routes and monitor shipments. This technological integration enhances transparency, allows you to track your shipments in real-time, and provides security.",
        },
        {
            title: "Customized Distribution Solutions",
            description:
                "Understanding that every business has unique logistics needs, Eder offers customized ground distribution solutions tailored to your specific requirements. Whether you need efficient last-mile delivery, dedicated fleet services, or specialized handling for delicate goods, we provide flexible options to meet your needs. Our personalized approach ensures your distribution strategy aligns with your business goals and operational requirements.",
        },
        {
            title: "Cost-effective and Sustainable Practices",
            description:
                "At Eder, we strive to offer cost-effective ground distribution services without compromising quality. We employ efficient route and load optimization techniques to reduce transportation costs. Furthermore, our commitment to sustainability drives us to implement eco-friendly practices, such as using fuel-efficient vehicles and minimizing our CO2 footprint, contributing to a greener supply chain.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/ground-transport.png')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "COMPREHENSIVE GROUND DISTRIBUTION SOLUTIONS",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Comprehensive Ground Distribution Solutions</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Ground Distribution</h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Meet the specific requirements of your company. Whether you need efficient last-mile delivery,
                    dedicated fleet services, or specialized handling for fragile or high-value goods, Eder offers
                    flexible and customized options that align with your operational goals. Our expertise in logistics
                    enables us to develop distribution strategies that are both efficient and effective, ensuring your
                    products reach their destination safely and on time.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air4.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        In addition to providing exceptional services, Eder is committed to sustainability and
                        cost-effectiveness. By using fuel-efficient vehicles and optimizing our delivery routes, we not
                        only reduce transportation costs but also minimize our environmental footprint. This dedication
                        to eco-friendly practices helps support a greener supply chain, benefiting both our customers
                        and the planet. Key benefits, Nationwide coverage and timely delivery, Reliable and efficient
                        delivery services across the country, ensuring your goods reach their destination on time.
                        Integration of advanced technologies, real-time tracking and optimized routes for improved
                        shipment tracking and efficiency. Customized solutions, Flexible ground distribution options
                        tailored to the unique needs of your business.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 className="font-semibold text-2xl md:text-4xl">
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
            </section>
        </>
    );
};

export default Page;
