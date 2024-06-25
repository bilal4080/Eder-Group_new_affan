import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Modernste Einrichtungen",
            description:
                "Eder bietet modernste Lager-Einrichtungen, die den vielfältigen Lagerbedarf unserer Kunden erfüllen. Unsere Lager sind mit fortschrittlichen Sicherheitssystemen, Klimaregelung und effizienten Regallösungen ausgestattet, um die Sicherheit und Integrität Ihrer Waren zu gewährleisten. Ob Sie kurzfristige Lagerung oder langfristiges Lagermanagement benötigen, unsere Einrichtungen bieten eine zuverlässige und sichere Umgebung für Ihre Produkte.",
        },
        {
            title: "Strategische Standorte",
            description:
                "Wir bieten umfassende Lagerbestandsmanagement-Dienstleistungen, die Echtzeit-Sichtbarkeit und Kontrolle über Ihre Lagerbestände bieten. Unser fortschrittliches Lagerverwaltungssystem (WMS) verfolgt Lagerbewegungen, verwaltet Lagerbestände und automatisiert Auffüllprozesse. Dies gewährleistet genaue Lagerbestandsaufzeichnungen, minimiert Lagerengpässe und Überbestände und verbessert die Gesamteffizienz.",
        },
        {
            title: "Umfassendes Lagerbestandsmanagement",
            description:
                "Unsere Lager befinden sich strategisch in der Nähe wichtiger Verkehrsknotenpunkte wie Häfen, Eisenbahnen und Autobahnen, um einen einfachen Zugang und eine effiziente Distribution zu ermöglichen. Diese strategische Positionierung ermöglicht es uns, Transitzeiten und Transportkosten zu reduzieren und sicherzustellen, dass Ihre Waren immer in Reichweite wichtiger Märkte sind. Mit der Eder können Sie darauf vertrauen, dass Ihr Bestand an optimalen Standorten gelagert ist, um Ihre Supply-Chain-Operationen zu unterstützen.",
        },
        {
            title: "Maßgeschneiderte Lagerlösungen",
            description:
                "Bei der Eder verstehen wir, dass jedes Unternehmen einzigartige Lageranforderungen hat. Wir bieten maßgeschneiderte Lagerlösungen, die auf die spezifischen Bedürfnisse Ihres Unternehmens zugeschnitten sind. Ob Sie eine spezialisierte Handhabung für empfindliche Produkte, Mehrwertdienste wie Kit- und Verpackungsservices oder skalierbare Lageroptionen zur Bewältigung saisonaler Schwankungen benötigen, wir haben die Expertise und Flexibilität, um Lösungen zu liefern, die sich mit Ihren Geschäftszielen vereinbaren lassen.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/warehouse.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white  w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "LAGERDIENSTLEISTUNGEN VON Eder",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Lagerdienstleistungen von Eder</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Lager</h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Die Eder zeichnet sich durch erstklassige Lagerdienstleistungen aus, die die dynamischen
                    Anforderungen moderner Unternehmen unterstützen. Unsere modernsten Einrichtungen sind mit neuester
                    Technologie und Sicherheitsmaßnahmen ausgestattet, um die sichere und effiziente Lagerung Ihrer
                    Waren zu gewährleisten. Mit klimatisierten Umgebungen und fortschrittlichen Regalsystemen bieten wir
                    optimale Bedingungen für eine Vielzahl von Produkten, von verderblichen Gütern bis hin zu
                    hochwertigen Artikeln.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air6.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Strategisch in der Nähe wichtiger Verkehrsknotenpunkte gelegen, sind unsere Lager darauf
                        ausgerichtet, die Effizienz Ihres Distributionsnetzwerks zu steigern. Dieser strategische
                        Vorteil reduziert Transitzeiten und Transportkosten, sodass Ihre Produkte schnell auf den Markt
                        gelangen können. Unsere Lagerlösungen sind darauf ausgerichtet, nahtlos in Ihre Supply Chain zu
                        integrieren und die Flexibilität und Zuverlässigkeit zu bieten, die Sie benötigen, um
                        wettbewerbsfähig zu bleiben. Unsere umfassenden Lagerbestandsmanagement-Dienstleistungen nutzen
                        fortschrittliche Technologie, um Ihnen Echtzeit-Sichtbarkeit und Kontrolle über Ihren Bestand zu
                        geben. Unser Lagerverwaltungssystem (WMS) verfolgt jede Lagerbewegung und automatisiert wichtige
                        Prozesse, um Genauigkeit und Effizienz sicherzustellen. Dies hilft Ihnen, optimale Lagerbestände
                        zu halten, das Risiko von Lagerbestandsengpässen und Überbeständen zu reduzieren und die
                        allgemeine Leistungsfähigkeit der Supply Chain zu verbessern. Die Eder ist bestrebt,
                        maßgeschneiderte Lagerlösungen anzubieten, die den einzigartigen Anforderungen Ihres
                        Unternehmens gerecht werden. Wir bieten spezialisierte Handhabung und Lagerungsmöglichkeiten,
                        Mehrwertdienste wie Kit- und Verpackungsservices sowie skalierbare Lösungen, um saisonale
                        Nachfrageschwankungen zu bewältigen. Unser Engagement für Flexibilität und kundenorientierten
                        Service stellt sicher, dass wir uns an Ihre sich ändernden Bedürfnisse anpassen und Ihnen helfen
                        können, Ihre betrieblichen Ziele zu erreichen.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 className="font-semibold text-2xl md:text-4xl">
                    WAS SIE MIT DEM <span className="text-orange-600">LOGISTIKGESCHÄFT ERHALTEN</span>
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
