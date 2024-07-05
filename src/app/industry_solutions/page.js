import React from "react";
import {FaTruckMoving} from "react-icons/fa";
import {MdOutlineLocalShipping} from "react-icons/md";

const options = [
    {
        title: "Tailored Expertise and Specialized Handling",
        description:
            "Eder offers industry-specific solutions that cater to the unique requirements of various sectors, such as pharmaceuticals, automotive, retail, and technology. Our team of experts has deep knowledge and experience in each of these areas, enabling us to provide specialized handling and tailored logistics strategies. This ensures that your products are transported and managed according to the highest industry standards, improving safety, compliance, and efficiency.",
    },
    {
        title: "Enhanced Supply Chain Efficiency",
        description:
            "Our industry solutions are designed to optimize supply chain operations, reduce lead times, and improve overall efficiency. By leveraging industry-specific best practices and innovative technologies, Eder can streamline processes such as warehouse management, order fulfillment, and distribution. This results in faster processing times, reduced operating costs, and improved customer satisfaction.",
    },
    {
        title: "Regulatory Compliance and Risk Management",
        description:
            "Different industries face varying regulatory requirements and risks. Eder's industry solutions include comprehensive compliance and risk management services to address these complexities. Our expertise in regulatory standards ensures that your shipments comply with all necessary laws and regulations, minimizing the risk of delays, fines, and other complications. Additionally, we implement robust risk management strategies to protect your supply chain from potential disruptions.",
    },
    {
        title: "Scalable and Flexible Solutions",
        description:
            "Our industry solutions are scalable and flexible, allowing you to adapt to changing market conditions and business requirements. Whether you are expanding into new markets, launching new products, or experiencing seasonal demand fluctuations, Eder can adjust resources and capacities accordingly. This scalability ensures that your supply chain remains resilient and responsive, supporting your growth and operational agility.",
    },
];

const Page = () => {
    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/industry_solution.jpeg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{__html: "Industry Solutions For<br/> Your Supply Chain"}}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">could be in German as</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Industry Solutions</h2>
                </div>
                <div className={"w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <p className="py-5 md:text-lg">
                    Eder is proud to offer industry-specific solutions in the field of logistics services. Our company
                    understands the diverse requirements and challenges that businesses in various industries face, and
                    strives to provide tailored services that meet these needs. A key element of our services is
                    transport management. We offer a wide range of transport solutions specifically tailored to the
                    requirements of your industry. Our goal is to provide you with efficient and cost-effective
                    transport solutions that help ensure the smooth operation of your supply chain.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row flex-col">
                    <img src="/sky_truck.jpeg" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        In addition, we offer comprehensive warehousing and warehouse management services. Our warehouse
                        solutions are designed to maximize the efficiency and safety of your warehousing activities. We
                        use advanced technologies and proven practices to ensure that your goods are stored securely and
                        efficiently. Our distribution services are designed to effectively distribute your goods,
                        ensuring they arrive at their destination on time and in perfect condition. We work closely with
                        our customers to understand their specific requirements and offer customized distribution
                        solutions that meet their individual needs. Another focus of our services is supply chain
                        optimization. We thoroughly analyze your supply chain and develop solutions to reduce costs,
                        eliminate bottlenecks, and increase efficiency. Our goal is to help you improve your
                        competitiveness and advance your business. In addition, we offer custom solutions tailored to
                        the specific needs of our customers. Our experienced team works closely with you to understand
                        your requirements and develop solutions that meet your individual needs. Finally, we offer
                        advanced IT integration to optimize your logistics processes.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 className="font-semibold text-2xl md:text-4xl">
                    What You Get With a <span className="text-orange-600">Logistics Company</span>
                </h2>
                <div className={"w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-2 md:p-5">
                    {options.map((option, idx) => (
                        <div key={idx} className="relative border border-gray-300 py-8 px-5 flex items-center">
                            <div className="p-5 rounded-full bg-orange-600 absolute -left-9">
                                <MdOutlineLocalShipping size={30} className="text-white" />
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
