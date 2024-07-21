import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Cost Savings and Efficiency",
            description:
                "By outsourcing logistics functions such as transport, storage, and distribution to Eder, companies can achieve significant cost savings. Our 3PL services leverage economies of scale and optimized route planning to reduce transport costs and transit times. Additionally, companies can avoid capital investments and overhead costs associated with maintaining their own logistics infrastructure.",
        },
        {
            title: "Scalability and Flexibility",
            description:
                "Our 3PL services provide the scalability and flexibility needed to respond to fluctuating market demands. Whether it's seasonal peaks or unexpected increases in order volume, Eder can quickly adjust resources and capacities to meet your needs. This ensures that your supply chain remains agile and can adapt to changing business conditions without compromising service quality.",
        },
        {
            title: "Comprehensive Supply Chain Optimization",
            description:
                "Eder's 4PL services offer a holistic approach to supply chain management by integrating various logistics functions into a seamless end-to-end solution. We provide strategic planning and execution of the supply chain, aligning all activities with your business goals to maximize efficiency and reduce overall costs. This comprehensive optimization enhances the performance of your entire supply chain, not just individual components.",
        },
        {
            title: "Advanced Technology and Real-Time Transparency",
            description:
                "With our 4PL services, businesses benefit from advanced technology and real-time transparency in their supply chain operations. Eder employs state-of-the-art data analytics and integrated systems to monitor and manage the entire supply chain. This real-time tracking and transparency enable better decision-making, proactive problem-solving, and improved risk management, ensuring a more resilient and responsive supply chain.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/3pl-vs-4pl-hero-short-desktop.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        data-translate
                        className="text-2xl lg:text-7xl text-start z-10 text-white  w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "3PL & 4PL BY EDER",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 data-translate className="text-sm uppercase font-semibold">
                        3PL vs 4PL
                    </h3>
                    <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                        Eder Premium Services
                    </h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p data-translate className="py-5 md:text-lg">
                    At Eder, we offer both Third-Party Logistics (3PL) and Fourth-Party Logistics (4PL) services, each
                    covering different levels of supply chain management. Our 3PL services focus on managing specific
                    logistics functions such as transport, storage, and distribution. As a 3PL provider, Eder acts as an
                    intermediary handling the physical movement and storage of goods while you retain control over your
                    supply chain strategy. This includes efficient transport management for air, sea, and land freight,
                    state-of-the-art warehouses for secure storage and inventory management, as well as expertise in
                    customs clearance and compliance to ensure smooth cross-border transactions.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air8.png" className="w-full md:w-1/2 h-auto" />
                    <p data-translate className="py-5 md:text-lg">
                        In contrast, our 4PL services offer a more comprehensive and integrated approach to supply chain
                        management. As a 4PL provider, Eder monitors and optimizes the entire supply chain from start to
                        finish, acting as a single point of contact. This includes strategic supply chain management
                        where we align logistics functions with your business goals to achieve optimal performance and
                        cost efficiency. We leverage advanced technology and data analytics to provide real-time
                        transparency and control over the supply chain, enhancing decision-making and risk management.
                        Additionally, we manage relationships with multiple service providers to ensure seamless
                        coordination and communication, committing to continuous improvement and innovation through
                        regular assessment and optimization of supply chain processes. While 3PL services are ideal for
                        companies looking to outsource specific logistics operations, 4PL services are suitable for
                        those seeking a holistic approach to supply chain management that integrates various logistics
                        functions and enhances overall efficiency.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                    WHAT YOU GET WITH <span className="text-orange-600">LOGISTICS BUSINESS</span>
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
