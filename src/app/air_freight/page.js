import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Schnelligkeit und Effizienz",
            description:
                "Die Eder versteht die entscheidende Bedeutung termingerechter Lieferungen. Unsere Luftfrachtdienste priorisieren Geschwindigkeit und Effizienz, indem sie Direktflüge und optimierte Routen nutzen, um die Transitzeiten zu minimieren. Dadurch erreichen Ihre dringenden Sendungen schnell ihr Ziel, was Ihnen hilft, enge Fristen einzuhalten und sich einen Wettbewerbsvorteil auf dem Markt zu sichern.",
        },
        {
            title: "Weltweite Reichweite",
            description:
                "Mit einem umfangreichen Netzwerk von Fluglinienpartnern und strategischen Allianzen bietet die Eder eine umfassende globale Abdeckung. Unsere Luftfrachtdienste verbinden Sie mit den wichtigsten internationalen Drehkreuzen und ermöglichen einen nahtlosen Transport zu und von jedem Ort der Welt. Diese globale Reichweite gewährleistet, dass Ihre Fracht selbst an die entlegensten Orte geliefert werden kann, was Ihre Geschäftsmöglichkeiten erweitert.",
        },
        {
            title: "Echtzeit-Tracking und Transparenz",
            description:
                "Transparenz und Echtzeit-Tracking sind wesentliche Bestandteile unserer Luftfrachtdienste. Die Eder setzt fortschrittliche Tracking-Systeme ein, die minutengenaue Informationen zum Status Ihrer Sendung liefern. Dieses Maß an Transparenz ermöglicht es Ihnen, die Reise Ihrer Fracht zu überwachen, fundierte Entscheidungen zu treffen und genaue Updates an Ihre Stakeholder zu liefern, was das gesamte Supply Chain Management verbessert.",
        },
        {
            title: " Maßgeschneiderte Lösungen",
            description:
                "Die Eder bietet maßgeschneiderte Luftfrachtlösungen, um Ihren einzigartigen Versandanforderungen gerecht zu werden. Ob Sie eine Expresslieferung, temperaturkontrollierten Transport oder die Handhabung übergroßer Fracht benötigen, unser Expertenteam wird einen individuellen Plan entwerfen, der sich an Ihre spezifischen Anforderungen anpasst. Dieser personalisierte Ansatz gewährleistet, dass Ihre Fracht mit größter Sorgfalt und Präzision behandelt wird, wodurch Sicherheit und Effizienz optimiert werden.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/air.png')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{__html: "LUFTFRACHT: IHRE <br/> Lieferkette in Bewegung"}}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Luftfrachtdienste</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Luftfracht</h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Bei der Eder bieten unsere Luftfrachtdienste schnelle und zuverlässige Transportlösungen für Ihre
                    zeitkritischen Sendungen. Durch Nutzung eines umfangreichen Netzwerks globaler Fluglinienpartner und
                    fortschrittlicher Logistiktechnologie stellen wir sicher, dass Ihre Fracht schnell und sicher ihr
                    Ziel erreicht. Unsere umfassenden Luftfrachtlösungen decken verschiedene Branchen ab und bieten
                    Flexibilität, Effizienz und Kosteneffizienz. Ob Sie Expressversand oder spezialisierte Abwicklung
                    benötigen, die Eder ist Ihr vertrauenswürdiger Partner für alle Ihre Luftfrachtbedürfnisse.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air2.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        ChatGPT Unsere Luftfrachtdienste bieten schnelle, zuverlässige und effiziente Transportlösungen
                        für Ihre zeitkritischen Sendungen. Wir verstehen die entscheidende Bedeutung schneller
                        Lieferungen im heutigen globalen Markt, daher nutzen wir ein umfangreiches Netzwerk
                        erstklassiger globaler Fluggesellschaftspartner und fortschrittlicher Logistiktechnologien, um
                        sicherzustellen, dass Ihre Fracht schnell und sicher ihr Ziel erreicht. Unsere
                        Luftfrachtlösungen sind darauf ausgerichtet, eine vielfältige Palette von Branchenbedürfnissen
                        zu erfüllen, und bieten unübertroffene Flexibilität, Effizienz und Kosteneffizienz. Unsere
                        Dienstleistungen decken ein breites Spektrum an Luftfrachtbedürfnissen ab, von dringenden
                        Expresssendungen bis hin zu spezialisierten Handhabungsanforderungen. Ob Sie verderbliche Waren,
                        hochwertige Artikel, übergroße Fracht oder Gefahrgut versenden, wir verfügen über das Fachwissen
                        und die Ressourcen, um Ihre Sendung mit höchster Sorgfalt und Präzision zu verwalten. Unser
                        Streben nach Exzellenz bedeutet, dass wir end-to-end Lösungen anbieten, einschließlich
                        Verpackung, Dokumentation, Zollabfertigung und Lieferung bis zum Bestimmungsort.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 className="font-semibold text-2xl md:text-4xl">
                    WAS SIE BEKOMMEN MIT <span className="text-orange-600">Logistikgeschäft</span>
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
