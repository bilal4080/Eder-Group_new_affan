import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "State-of-the-Art Facilities",
            description:
                "Eder offers state-of-the-art warehouse facilities that meet our customers' diverse storage needs. Our warehouses are equipped with advanced security systems, climate control, and efficient shelving solutions to ensure the safety and integrity of your goods. Whether you require short-term storage or long-term inventory management, our facilities provide a reliable and secure environment for your products.",
        },
        {
            title: "Strategic Locations",
            description:
                "We provide comprehensive inventory management services that offer real-time visibility and control over your inventory. Our advanced Warehouse Management System (WMS) tracks warehouse movements, manages inventory levels, and automates replenishment processes. This ensures accurate inventory records, minimizes stockouts and overstocks, and improves overall efficiency.",
        },
        {
            title: "Comprehensive Inventory Management",
            description:
                "Our warehouses are strategically located near major transportation hubs such as ports, railways, and highways to facilitate easy access and efficient distribution. This strategic positioning enables us to reduce transit times and transportation costs, ensuring your goods are always within reach of key markets. With Eder, you can trust that your inventory is stored in optimal locations to support your supply chain operations.",
        },
        {
            title: "Customized Warehouse Solutions",
            description:
                "At Eder, we understand that every business has unique warehouse requirements. We offer customized warehouse solutions tailored to meet your company's specific needs. Whether you need specialized handling for sensitive products, value-added services like kitting and packaging, or scalable storage options to handle seasonal fluctuations, we have the expertise and flexibility to deliver solutions aligned with your business objectives.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/warehouse.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white  w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "WAREHOUSE SERVICES FROM EDER",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Warehouse Services from Eder</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Warehouse</h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Eder stands out with top-notch warehouse services that support the dynamic requirements of modern
                    businesses. Our state-of-the-art facilities are equipped with the latest technology and security
                    measures to ensure the safe and efficient storage of your goods. With climate-controlled
                    environments and advanced shelving systems, we provide optimal conditions for a variety of products,
                    from perishable goods to high-value items.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air6.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Strategically located near major transportation nodes, our warehouses are designed to enhance
                        the efficiency of your distribution network. This strategic advantage reduces transit times and
                        transportation costs, allowing your products to reach the market quickly. Our warehouse
                        solutions are designed to seamlessly integrate into your supply chain, providing the flexibility
                        and reliability you need to remain competitive. Our comprehensive inventory management services
                        leverage advanced technology to give you real-time visibility and control over your inventory.
                        Our Warehouse Management System (WMS) tracks every warehouse movement and automates key
                        processes to ensure accuracy and efficiency. This helps you maintain optimal inventory levels,
                        reduce the risk of stockouts and overstocks, and improve overall supply chain performance. Eder
                        is committed to offering customized warehouse solutions that meet the unique needs of your
                        business. We provide specialized handling and storage options, value-added services such as
                        kitting and packaging, and scalable solutions to address seasonal demand fluctuations. Our
                        commitment to flexibility and customer-oriented service ensures that we adapt to your changing
                        needs and help you achieve your operational goals.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 className="font-semibold text-2xl md:text-4xl">
                    WHAT YOU GET WITH THE <span className="text-orange-600">LOGISTICS BUSINESS</span>
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
