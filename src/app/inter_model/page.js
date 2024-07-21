import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Seamless Integration of Multiple Transport Modes",
            description:
                "At Eder, we offer intermodal transport services that seamlessly integrate various modes of transport such as rail, truck, and sea freight. This multimodal approach allows us to offer flexible and efficient solutions for the transportation of your cargo. By leveraging the strengths of each mode of transport, we ensure that your shipments are delivered cost-effectively and in a timely manner.",
        },
        {
            title: "Improved Efficiency and Shorter Transit Times",
            description:
                "Our intermodal solutions are designed to optimize transit times and improve overall efficiency. By combining different modes of transport, we can avoid congested routes and prevent delays that often occur with single-mode transport. This results in shorter delivery times and improved reliability, keeping your supply chain agile and responsive to market demands.",
        },
        {
            title: "Cost-Effective Shipping Solutions",
            description:
                "Intermodal transport with Eder offers significant cost savings. Utilizing rail for long-distance segments, for instance, can be more economical than relying solely on trucks. By strategically planning the route and combining transport modes, we lower fuel costs, reduce labor expenses, and minimize the risk of damage to your goods. Ultimately, we provide you with more affordable shipping options.",
        },
        {
            title: "Environmental Friendliness",
            description:
                "Eder is committed to sustainable practices, and our intermodal transport services reflect this commitment. By utilizing rail and sea transport modes, which have lower carbon emissions compared to road transport, we help reduce the environmental impact of your shipments. Our eco-friendly approach not only supports sustainability goals but also enhances your company's green credentials.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/inter_m.jpeg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        data-translate
                        className="text-2xl lg:text-7xl text-start z-10 text-white  w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "INTERMODAL TRANSPORT SOLUTIONS",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 data-translate className="text-sm uppercase font-semibold">
                        Intermodal Distribution Solutions
                    </h3>
                    <h2 data-translate className="font-semibold text-2xl md:text-4xl">
                        Intermodal
                    </h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p data-translate className="py-5 md:text-lg">
                    Eder offers innovative intermodal transport solutions designed to increase the efficiency and
                    flexibility of your supply chain. By integrating multiple modes of transport such as rail, truck,
                    and sea freight, we provide a seamless and cohesive shipping experience. This multimodal approach
                    allows us to leverage the unique advantages of each mode of transport, offering optimized transit
                    times and cost-effective solutions for your cargo.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air5.png" className="w-full md:w-1/2 h-auto" />
                    <p data-translate className="py-5 md:text-lg">
                        Our intermodal services are designed to meet the specific needs of your business. By combining
                        different modes of transport, we can bypass bottlenecks and reduce transit times, ensuring that
                        your goods reach their destination on time. This strategic routing minimizes delays and improves
                        the reliability of your supply chain, helping you stay competitive in today's fast-paced market.
                        In addition to efficiency and cost savings, Eder is committed to environmental friendliness. Our
                        intermodal solutions utilize transport modes with lower carbon emissions, such as rail and sea
                        freight, to reduce the overall environmental impact of your shipments. This commitment to green
                        logistics helps you achieve your sustainability goals while maintaining high service standards.
                        Eder's intermodal transport services offer an intelligent and sustainable way to move your
                        cargo. By combining the strengths of different transport modes, we provide efficient, reliable,
                        and environmentally friendly shipping solutions that support your company's growth and
                        sustainability goals. Trust us to meet your intermodal needs with the expertise and dedication
                        that sets us apart in the logistics industry.
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
