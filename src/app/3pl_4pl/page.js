import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Kostenersparnis und Effizienz",
            description:
                "Durch die Auslagerung von Logistikfunktionen wie Transport, Lagerung und Distribution an Eder können Unternehmen erhebliche Kosteneinsparungen erzielen. Unsere 3PL-Dienstleistungen nutzen Skaleneffekte und optimierte Routenplanung, um Transportkosten und Transitzeiten zu reduzieren. Zudem können Unternehmen die Kapitalinvestitionen und Gemeinkosten vermeiden, die mit dem Unterhalt einer eigenen Logistikinfrastruktur verbunden sind.",
        },
        {
            title: "Skalierbarkeit und Flexibilität",
            description:
                "Unsere 3PL-Dienstleistungen bieten die Skalierbarkeit und Flexibilität, die erforderlich sind, um auf schwankende Marktanforderungen zu reagieren. Ob saisonale Spitzen oder unerwartete Anstiege im Bestellvolumen – Eder kann schnell Ressourcen und Kapazitäten anpassen, um Ihren Bedarf zu decken. Dies stellt sicher, dass Ihre Lieferkette agil bleibt und sich an wechselnde Geschäftsbedingungen anpassen kann, ohne die Servicequalität zu beeinträchtigen.",
        },
        {
            title: "Umfassende Optimierung der Lieferkette",
            description:
                "Eder's 4PL-Dienstleistungen bieten einen ganzheitlichen Ansatz für das Lieferkettenmanagement, indem verschiedene Logistikfunktionen zu einer nahtlosen End-to-End-Lösung integriert werden. Wir bieten strategische Planung und Ausführung der Lieferkette, wobei alle Aktivitäten auf Ihre Geschäftsziele abgestimmt werden, um die Effizienz zu maximieren und die Gesamtkosten zu senken. Diese umfassende Optimierung verbessert die Leistung Ihrer gesamten Lieferkette, nicht nur einzelner Komponenten.",
        },
        {
            title: "Fortschrittliche Technologie und Echtzeit-Transparenz",
            description:
                "Mit unseren 4PL-Dienstleistungen profitieren Unternehmen von fortschrittlicher Technologie und Echtzeit-Transparenz in ihren Lieferkettenoperationen. Eder setzt modernste Datenanalysen und integrierte Systeme ein, um die gesamte Lieferkette zu überwachen und zu verwalten. Diese Echtzeitverfolgung und Transparenz ermöglichen bessere Entscheidungsfindung, proaktives Problemlösen und verbessertes Risikomanagement, was eine widerstandsfähigere und reaktionsfähigere Lieferkette sicherstellt.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/3pl-vs-4pl-hero-short-desktop.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white  w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "3PL & 4PL VON EDER ",
                        }}
                    />
                </div>
                {/* Schwarze Schattierungsüberlagerung */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">3PL vs 4PL</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Eder Premium-Dienstleistungen</h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Bei Eder bieten wir sowohl Third-Party-Logistik (3PL) als auch Fourth-Party-Logistik (4PL)
                    Dienstleistungen an, die jeweils unterschiedliche Stufen des Lieferkettenmanagements abdecken.
                    Unsere 3PL-Dienstleistungen konzentrieren sich auf das Management spezifischer Logistikfunktionen
                    wie Transport, Lagerung und Distribution. Als 3PL-Anbieter fungiert Eder als Vermittler, der die
                    physische Bewegung und Lagerung von Waren übernimmt, während Sie die Kontrolle über Ihre
                    Lieferkettenstrategie behalten. Dies umfasst ein effizientes Transportmanagement für Luft-, See- und
                    Landfracht, modernste Lagerhäuser für sichere Lagerung und Bestandsmanagement sowie Expertise in
                    Zollabfertigung und Compliance, um reibungslose grenzüberschreitende Transaktionen zu gewährleisten.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air8.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Im Gegensatz dazu bieten unsere 4PL-Dienstleistungen einen umfassenderen und integrierten Ansatz
                        für das Lieferkettenmanagement. Als 4PL-Anbieter überwacht und optimiert Eder die gesamte
                        Lieferkette von Anfang bis Ende und fungiert als einzige Anlaufstelle. Dies umfasst
                        strategisches Lieferkettenmanagement, bei dem wir Logistikfunktionen mit Ihren Geschäftsziele in
                        Einklang bringen, um optimale Leistung und Kosteneffizienz zu erzielen. Wir nutzen
                        fortschrittliche Technologie und Datenanalysen, um Echtzeit-Transparenz und Kontrolle über die
                        Lieferkette zu bieten, was die Entscheidungsfindung und das Risikomanagement verbessert. Darüber
                        hinaus verwalten wir die Beziehungen zu mehreren Dienstleistern, um eine nahtlose Koordination
                        und Kommunikation sicherzustellen, und verpflichten uns zu kontinuierlicher Verbesserung und
                        Innovation durch regelmäßige Bewertung und Optimierung von Lieferkettenprozessen. Während
                        3PL-Dienstleistungen ideal für Unternehmen sind, die spezifische Logistikoperationen auslagern
                        möchten, sind 4PL-Dienstleistungen für diejenigen geeignet, die einen ganzheitlichen Ansatz für
                        das Lieferkettenmanagement suchen, der verschiedene Logistikfunktionen integriert und die
                        Gesamteffizienz steigert.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 className="font-semibold text-2xl md:text-4xl">
                    WAS SIE MIT <span className="text-orange-600">LOGISTIKGESCHÄFT</span> BEKOMMEN
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
