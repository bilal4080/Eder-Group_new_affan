import Image from "next/image";
import React from "react";

const Section6_1 = () => {
    const data = [
        {
            id: 1,
            title: "Receiving",
            text: "At the Eder Group, we excel in precise shipping processing and conduct meticulous inspections using advanced systems to ensure fast and error-free delivery.",
            image: "/receiving.jpg",
        },
        {
            id: 2,
            title: "Storage",
            text: "Storage in logistics involves the careful management of items within the supply chain, monitored by third-party logistics providers (3PLs).",
            image: "/storing.jpg",
        },
        {
            id: 3,
            title: "Picking",
            text: "Picking in shipping refers to the process of selecting and retrieving items from storage. This essential task serves two main purposes: fulfilling customer orders and replenishing inventory.",
            image: "/picking.png",
        },
        {
            id: 4,
            title: "Packing",
            text: "Packing does more than just keeping things in order. It ensures safety during transport or storage in the supply chain.",
            image: "/packing.jpg",
        },
        {
            id: 5,
            title: "Shipping",
            text: "Logistics revolves around moving goods from one place to another. We use various methods like trucks or ships.",
            image: "/shipping.jpg",
        },
        {
            id: 6,
            title: "Feedback",
            text: "In logistics, feedback ensures continuous improvement by gathering insights and addressing concerns to enhance the overall efficiency and effectiveness of operations.",
            image: "/imgC3.png",
        },
    ];

    return (
        <>
            <div data-aos="flip-up" className="mx-auto text-center mt-24">
                <h1 data-translate className="my-3 text-2xl lg:text-6xl capitalize min-[1800px]:text-7xl font-semibold">
                    At the Eder
                </h1>
                <p data-translate className="leading-relaxed md:text-2xl">
                    Here is the complete process.
                </p>
            </div>
            <section className="md:px-8 max-w-screen-xl mx-auto flex flex-wrap mt-20">
                {data?.map((item) => (
                    <div
                        key={item.id}
                        className="md:flex gap-2 w-ful flex flex-col-reverse md:flex-row items-center md:w-1/2 p-8 dark:border border-gray-900"
                    >
                        <div className="w-full flex-1 flex flex-col gap-4">
                            <h4
                                data-translate
                                className="text-2xl md:text-3xl font-semibold flex items-center gap-4 capitalize"
                            >
                                <span className="text-sm md:text-md font-bold text-blue-500">0{item.id} -</span>
                                {item.title}
                            </h4>
                            <p data-translate className="text-sm md:text-lg capitalize">
                                {item.text}
                            </p>
                            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
                        </div>
                        <div className="h-auto w-full md:w-[40%] relative">
                            <Image
                                width={500}
                                height={500}
                                src={item.image}
                                className="w-full h-auto rounded-md"
                                alt="Your Alt Text"
                            />
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Section6_1;
