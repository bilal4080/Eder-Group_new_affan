import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Speed and Efficiency",
            description:
                "Eder understands the critical importance of timely deliveries. Our air freight services prioritize speed and efficiency by using direct flights and optimized routes to minimize transit times. This ensures your urgent shipments reach their destination quickly, helping you meet tight deadlines and gain a competitive advantage in the market.",
        },
        {
            title: "Global Reach",
            description:
                "With an extensive network of airline partners and strategic alliances, Eder offers comprehensive global coverage. Our air freight services connect you to major international hubs, enabling seamless transportation to and from anywhere in the world. This global reach ensures your cargo can be delivered even to the most remote locations, expanding your business opportunities.",
        },
        {
            title: "Real-time Tracking and Transparency",
            description:
                "Transparency and real-time tracking are essential components of our air freight services. Eder utilizes advanced tracking systems that provide minute-by-minute updates on the status of your shipment. This level of transparency allows you to monitor your cargo's journey, make informed decisions, and provide accurate updates to your stakeholders, enhancing overall supply chain management.",
        },
        {
            title: "Customized Solutions",
            description:
                "Eder offers customized air freight solutions to meet your unique shipping requirements. Whether you need express delivery, temperature-controlled transport, or handling of oversized cargo, our expert team will design an individualized plan tailored to your specific needs. This personalized approach ensures your cargo is handled with utmost care and precision, optimizing security and efficiency.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/air.png')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        data-translate
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{__html: "AIR FREIGHT: YOUR <br/> Supply Chain in Motion"}}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 data-translate className="text-sm uppercase font-semibold">
                        Air Freight Services
                    </h3>
                    <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                        Air Freight
                    </h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p data-translate className="py-5 md:text-lg">
                    At Eder, our air freight services offer fast and reliable transport solutions for your time-critical
                    shipments. By leveraging an extensive network of global airline partners and advanced logistics
                    technology, we ensure your cargo reaches its destination quickly and safely. Our comprehensive air
                    freight solutions cater to various industries, providing flexibility, efficiency, and
                    cost-effectiveness. Whether you require express shipping or specialized handling, Eder is your
                    trusted partner for all your air freight needs.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air2.png" className="w-full md:w-1/2 h-auto" />
                    <p data-translate className="py-5 md:text-lg">
                        Our air freight services offer fast, reliable, and efficient transport solutions for your
                        time-critical shipments. We understand the crucial importance of fast deliveries in today's
                        global market, therefore we utilize an extensive network of premier global airline partners and
                        advanced logistics technologies to ensure your cargo reaches its destination quickly and safely.
                        Our air freight solutions are designed to meet a diverse range of industry needs, offering
                        unmatched flexibility, efficiency, and cost-effectiveness. Our services cover a wide spectrum of
                        air freight requirements, from urgent express shipments to specialized handling requirements.
                        Whether you're shipping perishable goods, high-value items, oversized cargo, or hazardous
                        materials, we have the expertise and resources to manage your shipment with utmost care and
                        precision. Our pursuit of excellence means we offer end-to-end solutions, including packaging,
                        documentation, customs clearance, and delivery to the final destination.
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
                                <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                                    {option.title}
                                </h2>
                                <p data-translate className="py-5 md:text-lg">
                                    {option.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Page;
