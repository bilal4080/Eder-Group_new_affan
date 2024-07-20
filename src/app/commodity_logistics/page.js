import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const options = [
    {
        title: "End-to-End Supply Chain Management",
        description:
            "Eder offers comprehensive supply chain management for raw materials, covering everything from procurement and transportation to storage and distribution. Our integrated approach ensures that all aspects of the supply chain are seamlessly coordinated to reduce bottlenecks and increase efficiency. We manage the entire logistics process so you can focus on your core business activities.",
    },
    {
        title: "Specialized Transport Solutions",
        description:
            "Transporting raw materials requires specialized equipment and expertise. Eder provides customized transport solutions tailored to the specific needs of each raw material. Our fleet includes bulk carriers, tankers, and specialized vehicles designed for the transportation of heavy loads and hazardous materials. We ensure that your raw materials are transported safely and in compliance with all relevant regulations to minimize the risk of damage or loss.",
    },
    {
        title: "Advanced Warehousing and Storage",
        description:
            "Our state-of-the-art warehouses are equipped for a wide variety of raw materials. We offer secure storage solutions that include climate-controlled environments, bulk storage areas, and specialized handling equipment. Eder uses advanced inventory management systems to provide real-time visibility and control over your stock, ensuring optimal storage conditions and efficient inventory turnover.",
    },
    {
        title: "Regulatory Compliance and Risk Management",
        description:
            "Navigating the regulatory landscape is crucial in raw material logistics. Eder has a dedicated team of experts to ensure your shipments comply with all international and local regulations. We handle the necessary documentation, customs clearance, and adherence to safety standards to mitigate risks associated with non-compliance. Our comprehensive risk management strategies protect your supply chain from potential disruptions and ensure a smooth flow of goods.",
    },
];

const Page = () => {
    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/9412cda4644ffa40a40ccd6cd1176578.jpg')] bg-opacity-50 flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        data-translate
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "Commodity Solutions <br/> Your Supply Chain in Action",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 data-translate className="text-sm uppercase font-semibold">
                        Supply Chain Solutions
                    </h3>
                    <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                        Commodity Logistics
                    </h2>
                </div>
                <div className={"w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <p data-translate className="py-5 md:text-lg">
                    Commodity logistics refers to the comprehensive process of managing the transportation and storage
                    of goods from the point of origin to the final destination. This involves a complex and
                    interconnected network of activities that ensure goods are delivered efficiently, cost-effectively,
                    and safely. Key aspects include meticulous planning, execution, and control of procedures to
                    optimize the transportation of goods. Essential components of commodity logistics include inventory
                    management, warehousing, transportation, and seamless supply chain coordination.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row flex-col">
                    <img src="/log-322.png" className="w-full md:w-1/2 h-auto" />
                    <p data-translate className="py-5 md:text-lg">
                        Technological advancements play a crucial role in enhancing logistics operations by enabling
                        real-time tracking and improving communication along the supply chain. Effective commodity
                        logistics is vital for global trade, impacting economic growth and market competitiveness.
                        Additionally, logistics strategies must adapt to challenges such as regulatory changes,
                        environmental considerations, and fluctuating market demand. Ensuring that goods are available
                        when and where needed requires meticulous planning and execution. Therefore, logistics
                        professionals must continuously innovate and improve processes to meet the evolving demands of
                        global trade. Companies like NODEX are at the forefront of this innovation, offering top-tier
                        services that ensure efficiency and reliability. With a commitment to excellence, Eder Group
                        leverages cutting-edge technology and expertise to provide the best logistics solutions, meeting
                        the highest industry standards and exceeding customer expectations.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                    What You Get with a <span className="text-orange-600">Logistics Company</span>
                </h2>
                <div className={"w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
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
