import React from "react";
import {FaTruckMoving} from "react-icons/fa";
const options = [
    {
        title: " Weltweite Reichweite und Marktzugang",
        description:
            "Die Offshore-Logistikdienstleistungen der Eder ermöglichen es Unternehmen, effizient und effektiv auf globale Märkte zuzugreifen. Durch die Nutzung unseres umfangreichen Netzwerks internationaler Partner und strategisch gelegener Offshore-Einrichtungen erleichtern wir den nahtlosen Einstieg in neue Märkte. Diese globale Reichweite ermöglicht es Unternehmen, ihre Aktivitäten auszuweiten, neue Kundenbasen zu erschließen und ihren Wettbewerbsvorteil zu stärken.",
    },
    {
        title: "Kosteneffiziente Lösungen",
        description:
            "Unsere Offshore-Logistiklösungen sind darauf ausgelegt, die Kosteneffizienz zu optimieren. Durch die Nutzung von Offshore-Lager- und Vertriebszentren an strategischen Standorten hilft die Eder Unternehmen, die mit Lagerung, Arbeitskräften und Transport verbundenen Betriebskosten zu senken. Darüber hinaus gewährleistet unser Fachwissen im internationalen Handel und in Zollvorschriften, dass Sie von kostensenkenden Möglichkeiten wie Steuervorteilen und Zollbefreiungen profitieren, wodurch Ihr Ergebnis weiter verbessert wird",
    },
    {
        title: " Verbesserte Flexibilität der Lieferkette",
        description:
            "Die Offshore-Logistikdienstleistungen der Eder bieten eine größere Flexibilität bei der Verwaltung Ihrer Lieferkette. Unsere Lösungen umfassen skalierbare Lagerhaltung, Just-in-Time-Inventarverwaltung und effiziente Vertriebsnetzwerke, die es Ihnen ermöglichen, sich an schwankende Nachfrage und Marktbedingungen anzupassen. Diese Flexibilität gewährleistet, dass Ihre Lieferkette agil und reaktionsschnell bleibt, um Kundenanforderungen zu erfüllen und unerwartete Änderungen problemlos zu bewältigen.",
    },
    {
        title: " Risikominderung und Compliance",
        description:
            "Die Bewältigung der Komplexitäten der Offshore-Logistik erfordert ein tiefes Verständnis der internationalen Vorschriften und des Risikomanagements. Die Eder bietet umfassende Risikominderungs- und Compliance-Dienstleistungen, um sicherzustellen, dass Ihre Operationen allen relevanten Gesetzen und Standards entsprechen. Unser erfahrenes Team verwaltet die regulatorische Compliance, Zollabwicklung und potenzielle Risiken im Zusammenhang mit der Offshore-Logistik, um Störungen zu minimieren und die Integrität Ihrer Lieferkette zu schützen.",
    },
];

const Page = () => {
    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/off-sure.jpeg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full  flex justify-start  max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full  py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "OFFSHORE LOGISTIK FÜR  <br/> IHRE LIEFERKETTE",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className=" flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Lieferkettenlösungen</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl ">Offshore-Logistik</h2>
                </div>
                <div className={" w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <p className="py-5 md:text-lg">
                    Die Offshore-Logistikdienstleistungen der Eder spielen eine entscheidende Rolle bei der
                    Erleichterung des internationalen Handels und der Unterstützung globaler Lieferketten. Mit der
                    zunehmenden Globalisierung der Märkte erweitern Unternehmen ihre Aktivitäten auf Offshore-Standorte,
                    um neue Chancen zu nutzen und Zugang zu Ressourcen, Märkten und Arbeitskräften zu erhalten. Die Eder
                    Gruppe erkennt die Bedeutung effizienter und zuverlässiger Offshore-Logistik, um Unternehmen zu
                    ermöglichen, nahtlos über Grenzen hinweg zu arbeiten und die Komplexitäten des internationalen
                    Handels zu bewältigen.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row flex-col">
                    <img src="/offf-sure1.png" className=" w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Bei der Eder sind unsere Offshore-Logistikdienstleistungen darauf ausgelegt, die einzigartigen
                        Anforderungen und Herausforderungen von Unternehmen zu erfüllen, die in Offshore-Umgebungen
                        tätig sind. Ob es darum geht, Waren zu entlegenen Offshore-Installationen zu transportieren,
                        Offshore-Explorations- und Produktionsaktivitäten zu unterstützen oder Lieferketten für
                        Offshore-Fertigungsanlagen zu verwalten, wir verfügen über das Fachwissen und die Fähigkeiten,
                        maßgeschneiderte Lösungen anzubieten, die den Anforderungen unserer Kunden gerecht werden. Ein
                        Schlüsselaspekt unserer Offshore-Logistikdienstleistungen ist der effiziente und sichere
                        Transport von Gütern zu und von Offshore-Standorten. Wir verfügen über umfangreiche Erfahrung in
                        der Koordination komplexer Logistikoperationen mit verschiedenen Transportmitteln, darunter
                        See-, Luft- und Landtransport. Unser gut etabliertes Netzwerk von Partnern und Lieferanten
                        ermöglicht es uns, eine rechtzeitige Lieferung von Gütern zu gewährleisten, während wir die
                        höchsten Standards für Sicherheit und Schutz einhalten. Neben dem Transport bieten wir eine
                        Reihe von Mehrwertdiensten zur Unterstützung von Offshore-Operationen an. Dazu gehören
                        Lagerverwaltung, Zollabfertigung und Projektfrachtabwicklung. Unser integrierter Ansatz
                        ermöglicht es uns, End-to-End-Lösungen anzubieten, die die Lieferkettenprozesse optimieren und
                        Störungen minimieren, damit sich unsere Kunden auf ihre Kerngeschäftsaktivitäten konzentrieren
                        können.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 className="font-semibold text-2xl md:text-4xl  ">
                    Was Sie mit einem <span className=" text-orange-600"> Logistikunternehmen erhalten</span>
                </h2>
                <div className={" w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 p-2 md:p-5">
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
