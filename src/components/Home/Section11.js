"use client";
import {useState} from "react";

const Section11 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Define your FAQ data as an array of objectsHäufig gestellte Fragen
    const faqs = [
        {
            question: "Was ist die Eder?",
            answer: "Die EDER GmbH ist ein Großhandels, Einfuhr, Ausfuhr und Speditionsunternehmen. Es befasst sich mit dem Export von Stahl, Metallen, Automobilteilen und Reifen aus Deutschland in die ganze Welt.Die EDER GmbH ist ein Großhandels, Einfuhr, Ausfuhr und Speditionsunternehmen. Es befasst sich mit dem Export von Stahl, Metallen, Automobilteilen und Reifen aus Deutschland in die ganze Welt.",
        },
        {
            question: "Wie trägt die Eder zur Steigerung der Produktivität bei?",
            answer: "Die Eder automatisiert wiederkehrende Aufgaben, optimiert Arbeitsabläufe und liefert wertvolle Erkenntnisse durch Datenanalyse, was Unternehmen ermöglicht, effizienter und effektiver zu arbeiten. Durch die Reduzierung manueller Arbeit und die Optimierung von Prozessen ermöglicht die Eder den Mitarbeitern, sich auf Aufgaben mit höherem Mehrwert zu konzentrieren, indem sie Zeit freisetzt.",
        },
        {
            question: "Kann die Eder mit unserem Unternehmen wachsen, wenn es sich entwickelt?",
            answer: "Ja, die Eder ist darauf ausgelegt, sich mit Ihrem Unternehmen zu skalieren. Egal, ob Sie ein kleines Startup oder ein großes Unternehmen sind, die Eder kann Ihr Wachstum und Ihre sich entwickelnden Bedürfnisse berücksichtigen. Ihre modulare Architektur und skalierbare Infrastruktur gewährleisten, dass sie auch bei der Expansion Ihres Unternehmens eine zuverlässige und effiziente Lösung bleibt.",
        },
        {
            question: "Welche spezifischen Logistikdienstleistungen bietet die Eder an?",
            answer: "Die Eder bietet eine breite Palette von Logistikdienstleistungen, die auf die vielfältigen Bedürfnisse von Unternehmen zugeschnitten sind. Diese Dienstleistungen können Frachtabfertigung, Lagerhaltung, Bestandsmanagement, Transportlösungen, Zollabfertigung und letzte Meile Lieferung umfassen.",
        },
        {
            question: "Wie gewährleistet die Eder rechtzeitige und effiziente Lieferungen?",
            answer: "Die Eder nutzt fortschrittliche Logistiktechnologie und strategische Partnerschaften, um Lieferwege zu optimieren, Transittzeiten zu minimieren und die Effizienz zu maximieren. Zusätzlich überwacht unser Team von Logistikexperten Sendungen in jeder Phase genau, um eine rechtzeitige Lieferung und Kundenzufriedenheit sicherzustellen.",
        },
        {
            question: "Ist die Eder in der Lage, internationale Logistikabläufe zu bewältigen?",
            answer: "Ja, die Eder ist auf Lösungen für Inlands- und internationale Logistik spezialisiert. Egal, ob Sie Waren lokal oder über Grenzen hinweg versenden, die Eder verfügt über die Expertise und Ressourcen, um Ihre Logistikbedürfnisse effizient und effektiv zu verwalten.",
        },
        {
            question: "Wie kann ich mit den Logistikdienstleistungen der Eder beginnen?",
            answer: "Der Einstieg bei der Eder ist einfach! Kontaktieren Sie einfach unser Team, um Ihre Logistikbedürfnisse und -ziele zu besprechen. Wir werden eng mit Ihnen zusammenarbeiten, um eine maßgeschneiderte Logistiklösung zu entwickeln, die Ihren Anforderungen entspricht und Ihre Erwartungen übertrifft. Kontaktieren Sie uns noch heute, um mehr darüber zu erfahren, wie die Eder Ihre Logistikbedürfnisse unterstützen kann.",
        },
        // Add more FAQ objects as needed
    ];

    return (
        <section className="py-24">
            <div className="mx-auto max-w-[80%] px-4 sm:px-6 lg:px-8">
                {" "}
                {/* Adjusted max-w-[80%] */}
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
