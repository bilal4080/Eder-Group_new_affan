import React from "react";
import {FaTruckMoving} from "react-icons/fa";
import {MdOutlineLocalShipping} from "react-icons/md";
const options = [
    {
        title: "Maßgeschneiderte Expertise und spezialisierte Abwicklung",
        description:
            "Die Eder bietet branchenspezifische Lösungen, die den einzigartigen Anforderungen verschiedener Sektoren gerecht werden, wie beispielsweise Pharma, Automobil, Einzelhandel und Technologie. Unser Team von Experten verfügt über fundiertes Wissen und Erfahrung in jedem dieser Bereiche, was es uns ermöglicht, eine spezialisierte Abwicklung und maßgeschneiderte Logistikstrategien anzubieten. Dies stellt sicher, dass Ihre Produkte gemäß höchster Branchenstandards transportiert und verwaltet werden, wodurch Sicherheit, Einhaltung und Effizienz verbessert werden.",
    },
    {
        title: "Verbesserte Effizienz der Lieferkette",
        description:
            "Unsere Branchenlösungen sind darauf ausgelegt, die Abläufe in der Lieferkette zu optimieren, die Durchlaufzeiten zu verkürzen und die Gesamteffizienz zu verbessern. Indem wir branchenspezifische Best Practices und innovative Technologien nutzen, kann die Eder Prozesse wie Lagerverwaltung, Auftragsabwicklung und Distribution optimieren. Dies führt zu schnelleren Bearbeitungszeiten, reduzierten Betriebskosten und einer verbesserten Kundenzufriedenheit.",
    },
    {
        title: "Regulatorische Einhaltung und Risikomanagement",
        description:
            "Verschiedene Branchen sehen sich mit unterschiedlichen regulatorischen Anforderungen und Risiken konfrontiert. Die Branchenlösungen der Eder umfassen umfassende Compliance- und Risikomanagement-Dienstleistungen, um diese Komplexitäten zu bewältigen. Unsere Expertise in regulatorischen Standards stellt sicher, dass Ihre Sendungen alle erforderlichen Gesetze und Vorschriften einhalten, wodurch das Risiko von Verzögerungen, Geldstrafen und anderen Komplikationen minimiert wird. Darüber hinaus implementieren wir robuste Risikomanagementstrategien, um Ihre Lieferkette vor möglichen Störungen zu schützen.",
    },
    {
        title: "Skalierbare und flexible Lösungen",
        description:
            "Unsere Branchenlösungen sind skalierbar und flexibel, sodass Sie sich an sich ändernde Marktbedingungen und Geschäftsanforderungen anpassen können. Egal, ob Sie in neue Märkte expandieren, neue Produkte einführen oder saisonale Nachfrageschwankungen erleben - die Eder kann Ressourcen und Kapazitäten entsprechend anpassen. Diese Skalierbarkeit gewährleistet, dass Ihre Lieferkette widerstandsfähig und reaktionsschnell bleibt und Ihr Wachstum sowie Ihre operative Agilität unterstützt",
    },
];
const Page = () => {
    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/industry_solution.jpeg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full  flex justify-start  max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full  py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{__html: "Branchenlösungen Für<br/> Ihre Lieferkette"}}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className=" flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">könnte auf Deutsch als </h3>
                    <h2 className="font-semibold text-2xl md:text-4xl ">Branchenlösungen</h2>
                </div>
                <div className={" w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <p className="py-5 md:text-lg">
                    Die Eder ist stolz darauf, branchenspezifische Lösungen im Bereich der Logistikdienstleistungen
                    anzubieten. Unser Unternehmen versteht die vielfältigen Anforderungen und Herausforderungen, denen
                    Unternehmen in verschiedenen Branchen gegenüberstehen, und strebt danach, maßgeschneiderte
                    Dienstleistungen anzubieten, die diesen Bedürfnissen gerecht werden. Ein Schlüsselelement unserer
                    Dienstleistungen ist das Transportmanagement. Wir bieten eine breite Palette von Transportlösungen
                    an, die speziell auf die Anforderungen Ihrer Branche zugeschnitten sind. Unser Ziel ist es, Ihnen
                    effiziente und kostengünstige Transportlösungen anzubieten, die dazu beitragen, den reibungslosen
                    Ablauf Ihrer Lieferkette zu gewährleisten.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row flex-col">
                    <img src="/sky_truck.jpeg" className=" w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Darüber hinaus bieten wir umfassende Lager- und Lagerverwaltungsdienste an. Unsere Lagerlösungen
                        sind darauf ausgerichtet, die Effizienz und Sicherheit Ihrer Lageraktivitäten zu maximieren. Wir
                        verwenden fortschrittliche Technologien und bewährte Verfahren, um sicherzustellen, dass Ihre
                        Waren sicher und effizient gelagert werden. Unsere Distributionsdienste sind darauf
                        ausgerichtet, Ihre Waren effektiv zu verteilen, um sicherzustellen, dass sie rechtzeitig und in
                        einwandfreiem Zustand an ihr Ziel gelangen. Wir arbeiten eng mit unseren Kunden zusammen, um
                        ihre spezifischen Anforderungen zu verstehen und maßgeschneiderte Distributionslösungen
                        anzubieten, die ihren individuellen Anforderungen gerecht werden. Ein weiterer Schwerpunkt
                        unserer Dienstleistungen liegt auf der Optimierung der Lieferkette. Wir analysieren Ihre
                        Lieferkette gründlich und entwickeln Lösungen, um Kosten zu senken, Engpässe zu beseitigen und
                        die Effizienz zu steigern. Unser Ziel ist es, Ihnen dabei zu helfen, Ihre Wettbewerbsfähigkeit
                        zu verbessern und Ihr Unternehmen voranzubringen. Darüber hinaus bieten wir kundenspezifische
                        Lösungen an, die speziell auf die Bedürfnisse unserer Kunden zugeschnitten sind. Unser
                        erfahrenes Team arbeitet eng mit Ihnen zusammen, um Ihre Anforderungen zu verstehen und Lösungen
                        zu entwickeln, die Ihren individuellen Anforderungen gerecht werden. Schließlich bieten wir
                        fortschrittliche IT-Integration an, um Ihre logistischen Prozesse zu optimieren.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 className="font-semibold text-2xl md:text-4xl  ">
                    Was Sie mit einem <span className=" text-orange-600">Logistikunternehmen erhalten</span>
                </h2>
                <div className={" w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 p-2 md:p-5">
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
