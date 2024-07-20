import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const options = [
    {
        title: "Global Reach and Market Access",
        description:
            "Eder's offshore logistics services enable companies to access global markets efficiently and effectively. By leveraging our extensive network of international partners and strategically located offshore facilities, we facilitate seamless entry into new markets. This global reach allows companies to expand their operations, tap into new customer bases, and strengthen their competitive advantage.",
    },
    {
        title: "Cost-Effective Solutions",
        description:
            "Our offshore logistics solutions are designed to optimize cost efficiency. By utilizing offshore warehousing and distribution centers at strategic locations, Eder helps companies reduce operational costs associated with storage, labor, and transportation. Additionally, our expertise in international trade and customs regulations ensures that you benefit from cost-saving opportunities such as tax advantages and duty exemptions, further enhancing your bottom line.",
    },
    {
        title: "Enhanced Supply Chain Flexibility",
        description:
            "Eder's offshore logistics services provide greater flexibility in managing your supply chain. Our solutions include scalable warehousing, just-in-time inventory management, and efficient distribution networks that allow you to adapt to fluctuating demand and market conditions. This flexibility ensures that your supply chain remains agile and responsive to meet customer demands and handle unexpected changes seamlessly.",
    },
    {
        title: "Risk Mitigation and Compliance",
        description:
            "Navigating the complexities of offshore logistics requires a deep understanding of international regulations and risk management. Eder offers comprehensive risk mitigation and compliance services to ensure that your operations adhere to all relevant laws and standards. Our experienced team manages regulatory compliance, customs clearance, and potential risks associated with offshore logistics to minimize disruptions and protect the integrity of your supply chain.",
    },
];

const Page = () => {
    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/off-sure.jpeg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        data-translate
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "OFFSHORE LOGISTICS FOR <br/> YOUR SUPPLY CHAIN",
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
                        Offshore Logistics
                    </h2>
                </div>
                <div className={"w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <p data-translate className="py-5 md:text-lg">
                    Eder's offshore logistics services play a crucial role in facilitating international trade and
                    supporting global supply chains. With the increasing globalization of markets, companies are
                    expanding their operations to offshore locations to seize new opportunities and gain access to
                    resources, markets, and labor. The Eder Group recognizes the importance of efficient and reliable
                    offshore logistics to enable businesses to operate seamlessly across borders and manage the
                    complexities of international trade.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row flex-col">
                    <img src="/offf-sure1.png" className="w-full md:w-1/2 h-auto" />
                    <p data-translate className="py-5 md:text-lg">
                        At Eder, our offshore logistics services are designed to meet the unique requirements and
                        challenges of companies operating in offshore environments. Whether it involves transporting
                        goods to remote offshore installations, supporting offshore exploration and production
                        activities, or managing supply chains for offshore manufacturing facilities, we have the
                        expertise and capabilities to provide tailored solutions that meet our customers' needs. A key
                        aspect of our offshore logistics services is the efficient and secure transportation of goods to
                        and from offshore locations. We have extensive experience coordinating complex logistics
                        operations with various modes of transport, including sea, air, and land transportation. Our
                        well-established network of partners and suppliers allows us to ensure timely delivery of goods
                        while adhering to the highest standards of safety and protection. In addition to transportation,
                        we offer a range of value-added services to support offshore operations. These include
                        warehousing, customs clearance, and project cargo management. Our integrated approach enables us
                        to provide end-to-end solutions that optimize supply chain processes and minimize disruptions,
                        allowing our customers to focus on their core business activities.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                    What You Get With a <span className="text-orange-600">Logistics Company</span>
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
