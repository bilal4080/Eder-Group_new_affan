import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const options = [
    {
        title: "Strategic Port Locations and Network Access",
        description:
            "Eder provides access to a network of strategically located ports facilitating efficient and timely movement of goods worldwide. Our longstanding relationships with port authorities and terminal operators ensure smooth operations and preferential handling of your shipments. This extensive network reduces transit times and enhances connectivity, enabling you to reach key markets more effectively.",
    },
    {
        title: "Efficient Customs Clearance and Compliance",
        description:
            "Managing the complexity of customs regulations can be challenging. Eder's port solutions include comprehensive customs clearance services to ensure your shipments comply with all required regulations and documentation requirements. Our experienced team manages all aspects of the customs process, reducing the risk of delays, penalties, and other compliance-related issues, ensuring a smooth flow of goods through the ports.",
    },
    {
        title: "Efficient Freight Handling and Storage",
        description:
            "Our port solutions include advanced freight handling and storage services utilizing state-of-the-art equipment and facilities to manage your goods accurately and carefully. Eder offers secure, flexible storage options at port locations enabling efficient cargo storage, consolidation, and deconsolidation. This optimized handling reduces the risk of damage, improves turnaround times, and enhances overall supply chain efficiency.",
    },
    {
        title: "Integrated Technology and Real-Time Tracking",
        description:
            "Eder utilizes integrated technology solutions to provide real-time visibility and tracking of your shipments through the ports. Our advanced systems allow you to monitor the status and location of your cargo at every phase of the port clearance process. This transparency enables better planning and coordination, proactive issue resolution, and improved decision-making, keeping your supply chain responsive and efficient.",
    },
];

const Page = () => {
    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/port_logistics.jpeg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full  flex justify-start  max-w-screen-2xl mx-auto px-8">
                    <h1
                        data-translate
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full  py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{__html: "Port Logistics: YOUR <br/> Supply Chain in Motion"}}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className=" flex flex-col gap-3 justify-center items-start">
                    <h3 data-translate className="text-sm uppercase font-semibold">
                        Supply Chain Solutions{" "}
                    </h3>
                    <h2 data-translate className="font-semibold text-2xl md:text-4xl ">
                        Port Logistics
                    </h2>
                </div>
                <div className={" w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <p data-translate className="py-5 md:text-lg">
                    The port logistics services offered by Eder play a crucial role in promoting global trade and
                    commerce. Ports serve as vital hubs for the movement of goods, connecting manufacturers, suppliers,
                    and consumers across continents. Eder recognizes the importance of efficient and reliable port
                    logistics for smooth flow of goods and optimization of supply chain processes. At Eder, our port
                    logistics services are designed to meet the diverse needs of our customers, ranging from
                    multinational corporations to small and medium-sized enterprises. We offer a comprehensive range of
                    services tailored to the unique requirements of each client, ensuring smooth and cost-effective
                    operations.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/port_logistics2.jpeg" className=" w-full md:w-1/2 h-auto" />
                    <p data-translate className="py-5 md:text-lg">
                        An important aspect of our port logistics services is efficient freight handling. We have
                        state-of-the-art facilities and equipment to handle a variety of cargo, including containers,
                        bulk goods, and specialty items. Our skilled staff and advanced technology enable us to manage
                        cargo flows efficiently, resulting in minimal turnaround times and maximum productivity. In
                        addition to freight handling, we offer a range of value-added services to enhance port
                        operations. These include storage and distribution, customs clearance, freight forwarding, and
                        transportation services. Our integrated approach allows us to offer end-to-end solutions that
                        optimize supply chain processes and deliver tangible benefits to our customers. Furthermore, we
                        understand the importance of compliance and risk management in port operations. Our expert team
                        stays informed about the latest regulations and industry practices to ensure our customers'
                        shipments comply with all relevant laws and regulations. We also implement robust risk
                        management strategies to minimize potential disruptions and secure our customers' supply chains.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 data-translate className="font-semibold text-2xl md:text-4xl  ">
                    What You Get with a <span className=" text-orange-600">Logistics Company</span>
                </h2>
                <div className={" w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 p-2 md:p-5">
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
