"use client";
import {useState} from "react";

const Section11 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Define your FAQ data as an array of objects
    const faqs = [
        {
            question: "What is Eder?",
            answer: "Eder GmbH is a wholesale, import, export, and logistics company. It deals with exporting steel, metals, automotive parts, and tires from Germany to the world. Eder GmbH is a wholesale, import, export, and logistics company. It deals with exporting steel, metals, automotive parts, and tires from Germany to the world.",
        },
        {
            question: "How does Eder contribute to increasing productivity?",
            answer: "Eder automates repetitive tasks, optimizes workflows, and provides valuable insights through data analysis, enabling businesses to operate more efficiently and effectively. By reducing manual work and optimizing processes, Eder enables employees to focus on higher-value tasks, freeing up time.",
        },
        {
            question: "Can Eder scale with our company as it grows?",
            answer: "Yes, Eder is designed to scale with your company. Whether you are a small startup or a large enterprise, Eder can accommodate your growth and evolving needs. Its modular architecture and scalable infrastructure ensure that it remains a reliable and efficient solution even as your business expands.",
        },
        {
            question: "What specific logistics services does Eder offer?",
            answer: "Eder offers a wide range of logistics services tailored to diverse business needs. These services may include freight forwarding, warehousing, inventory management, transportation solutions, customs clearance, and last-mile delivery.",
        },
        {
            question: "How does Eder ensure timely and efficient deliveries?",
            answer: "Eder leverages advanced logistics technology and strategic partnerships to optimize delivery routes, minimize transit times, and maximize efficiency. In addition, our team of logistics experts closely monitors shipments at every stage to ensure timely delivery and customer satisfaction.",
        },
        {
            question: "Is Eder capable of handling international logistics operations?",
            answer: "Yes, Eder specializes in solutions for domestic and international logistics. Whether you are shipping goods locally or across borders, Eder has the expertise and resources to efficiently manage your logistics needs.",
        },
        {
            question: "How can I get started with Eder's logistics services?",
            answer: "Getting started with Eder is easy! Simply contact our team to discuss your logistics needs and goals. We will work closely with you to develop a customized logistics solution that meets your requirements and exceeds your expectations. Contact us today to learn more about how Eder can support your logistics needs.",
        },
        // Add more FAQ objects as needed
    ];

    return (
        <section className="py-24">
            <div className="mx-auto max-w-[80%] px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
                        Frequently asked questions
                    </h2>
                </div>
                <div className="accordion-group" data-accordion="default-accordion">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 ${
                                activeIndex === index
                                    ? "accordion-active:bg-indigo-50 accordion-active:border-indigo-600"
                                    : ""
                            } mb-8 lg:p-4`}
                            id={`basic-heading-${index}-with-icon`}
                        >
                            <button
                                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                                aria-controls={`basic-collapse-${index}-with-icon`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <h5>{faq.question}</h5>
                                <svg
                                    className={`w-6 h-6 text-gray-900 transition duration-500 block ${
                                        activeIndex === index
                                            ? "accordion-active:text-indigo-600"
                                            : "accordion-active:hidden"
                                    } group-hover:text-indigo-600 origin-center`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 12H18M12 18V6"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                                <svg
                                    className={`w-6 h-6 text-gray-900 transition duration-500 ${
                                        activeIndex !== index ? "hidden" : "accordion-active:block"
                                    } group-hover:text-indigo-600`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 12H18"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id={`basic-collapse-${index}-with-icon`}
                                className="accordion-content w-full overflow-hidden pr-4"
                                aria-labelledby={`basic-heading-${index}`}
                                style={{maxHeight: activeIndex === index ? "250px" : "0"}}
                            >
                                <p className="text-base text-gray-900 font-normal leading-6">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section11;
