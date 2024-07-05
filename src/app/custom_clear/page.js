import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Expertise in Global Trade Compliance",
            description:
                "At Eder, we have a dedicated team of professionals well-versed in global trade regulations and compliance guidelines. Our expertise ensures that your shipments comply with international laws, minimizing the risk of delays and fines. By staying up-to-date with the latest changes in trade policies, we help optimize the customs clearance process for all types of goods.",
        },
        {
            title: "Comprehensive Document Management",
            description:
                "We handle all the necessary paperwork and documents required for customs clearance, including import/export declarations, invoices, and certificates of origin. Our meticulous approach minimizes errors and speeds up the approval process. This thorough document management ensures smooth and efficient transit of your cargo, reducing the likelihood of customs-related disruptions.",
        },
        {
            title: "Efficient Customs Brokerage Services",
            description:
                "Eder offers efficient customs brokerage services to expedite the customs clearance process. Our experienced brokers have close relationships with customs officials and a deep understanding of procedural requirements. This allows us to navigate complex customs regulations quickly and clear your goods promptly, ensuring timely delivery.",
        },
        {
            title: "Tailored Solutions for Diverse Industries",
            description:
                "Eder provides customized air freight solutions to meet your unique shipping needs. Whether you require express delivery, temperature-controlled transport, or oversized cargo shipment, our expert team will design a personalized plan tailored to your specific requirements. This personalized approach ensures that your cargo is handled with utmost care and precision, optimizing safety and efficiency.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/2333.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "CUSTOMS CLEARANCE TAILORED: <br/> YOUR SUPPLY CHAIN IN MOTION ",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Customs Clearance</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Customs Clearance</h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Eder specializes in providing seamless customs clearance services that meet the complex requirements
                    of international trade. Our team of experts ensures compliance with global trade regulations,
                    manages all documents, and collaborates with customs authorities to facilitate the smooth movement
                    of your goods. By leveraging our extensive knowledge and established relationships, we offer
                    efficient customs clearance services that help minimize delays and reduce costs.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air3.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Our tailored solutions cater to diverse industries, recognizing that each sector has unique
                        requirements. Whether it's sensitive healthcare products, complex manufacturing components, or
                        high-value retail items, we provide customized support to ensure your shipments meet all
                        necessary regulations. With Eder, you can be confident that your goods are handled with the
                        utmost care and precision, from documentation to final delivery. Our commitment to excellence
                        and deep understanding of the customs clearance environment make us the preferred partner for
                        companies looking to optimize their global supply chain.
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
