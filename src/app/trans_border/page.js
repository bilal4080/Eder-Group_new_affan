import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Seamless Cross-Border Transport",
            description:
                "Eder offers seamless cross-border transport services that simplify the complexity of international shipping. Our expertise in cross-border logistics ensures efficient transportation of your goods between countries, effortlessly navigating customs regulations and border controls. We take care of all aspects of cross-border transport, from documentation and compliance to transport and delivery, ensuring a smooth and hassle-free process.",
        },
        {
            title: "Customs and Compliance Expertise",
            description:
                "Our team of customs experts is well-versed in the regulations and requirements of various countries. We provide comprehensive customs clearance services and ensure that all necessary documents are filled out and submitted correctly. This expertise minimizes the risk of delays and penalties, helping your shipments pass through customs quickly and efficiently. With Eder, you can be assured that your goods comply with all international trade laws and regulations.",
        },
        {
            title: "Reliable and Secure Transport Solutions",
            description:
                "We offer reliable and secure transport solutions for your cross-border shipments. Our advanced tracking systems provide real-time visibility into the status of your shipments, allowing you to monitor their progress at any time. We also implement strict security measures to protect your goods during transport and ensure they reach their destination safely. Our commitment to reliability and security makes us a trusted partner for cross-border transport.",
        },
        {
            title: "Customized Cross-Border Solutions",
            description:
                "At Eder, we understand that every business has unique requirements for cross-border logistics. We offer customized cross-border solutions tailored to meet your specific needs. Whether you need expedited shipping, specialized handling for sensitive goods, or assistance with complex customs procedures, our team works closely with you to develop a solution that meets your requirements. Our personalized approach ensures that your cross-border logistics are efficient, cost-effective, and aligned with your operational goals.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/cross-border-feature_nologo.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        data-translate
                        className="text-2xl lg:text-7xl text-start z-10 text-white  w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "CROSS-BORDER SERVICES FROM Eder",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 data-translate className="text-sm uppercase font-semibold">
                        Cross-Border Services from Eder
                    </h3>
                    <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                        Cross-Border
                    </h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p data-translate className="py-5 md:text-lg">
                    Eder specializes in providing comprehensive cross-border services that optimize international
                    shipping and simplify the complexity of cross-border logistics. Our seamless transport solutions
                    ensure efficient crossing of borders for your goods, facilitating navigation through customs
                    regulations and border controls. By covering all aspects of cross-border transport, from
                    documentation and compliance to transport and delivery, we offer a seamless experience for your
                    international shipments.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air7.png" className="w-full md:w-1/2 h-auto" />
                    <p data-translate className="py-5 md:text-lg">
                        Our team of customs experts is proficient in the complex regulations and requirements of various
                        countries. We provide comprehensive customs clearance services and ensure that all necessary
                        documents are filled out correctly and submitted promptly. This expertise minimizes the risk of
                        delays and penalties, allowing your shipments to pass through customs quickly and efficiently.
                        With Eder, you can be confident that your goods comply with all international trade laws and
                        regulations. Reliability and security are at the heart of our cross-border services. Our
                        advanced tracking systems provide real-time visibility into the status of your shipments, giving
                        you confidence and control over your supply chain. We also implement rigorous security measures
                        to protect your goods during transport and ensure their safe delivery to their destination. Our
                        commitment to reliable and secure transport solutions makes us a preferred partner for
                        businesses engaged in cross-border logistics. Eder offers customized cross-border solutions
                        tailored to meet the unique requirements of your business.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 data-translate className="font-semibold text-2xl md:text-4xl">
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
