import React from "react";
import {FaTruckMoving} from "react-icons/fa";
const options = [
    {
        title: " Strategische Hafenstandorte und Netzwerkzugang",
        description:
            "Die Eder bietet Zugang zu einem Netzwerk strategisch gelegener Häfen, das eine effiziente und rechtzeitige Bewegung von Waren weltweit ermöglicht. Unsere langjährigen Beziehungen zu Hafenbehörden und Terminalbetreibern gewährleisten reibungslose Abläufe und eine bevorzugte Abwicklung Ihrer Sendungen. Dieses umfangreiche Netzwerk reduziert die Transitzeiten und verbessert die Konnektivität, was es Ihnen ermöglicht, wichtige Märkte effektiver zu erreichen.",
    },
    {
        title: " Effiziente Zollabfertigung und Compliance",
        description:
            "Die Komplexität der Zollvorschriften zu bewältigen, kann herausfordernd sein. Die Hafenlösungen der Eder umfassen umfassende Zollabfertigungsdienstleistungen, um sicherzustellen, dass Ihre Sendungen allen erforderlichen Vorschriften und Dokumentationsanforderungen entsprechen. Unser erfahrenes Team übernimmt alle Aspekte des Zollprozesses und reduziert das Risiko von Verzögerungen, Geldstrafen und anderen mit der Einhaltung verbundenen Problemen, wodurch ein reibungsloser Warenfluss durch die Häfen sichergestellt wird.",
    },
    {
        title: "Effiziente Frachtabwicklung und Lagerung",
        description:
            "Unsere Hafenlösungen umfassen fortschrittliche Frachtabfertigungs- und Lagerdienstleistungen, wobei modernste Ausrüstung und Einrichtungen eingesetzt werden, um Ihre Waren präzise und sorgfältig zu verwalten. Die Eder bietet sichere, flexible Lageroptionen an Hafenstandorten, die eine effiziente Lagerung, Konsolidierung und De-Konsolidierung von Fracht ermöglichen. Diese optimierte Abwicklung reduziert das Risiko von Schäden, verbessert die Umlaufzeiten und steigert insgesamt die Effizienz der gesamten Lieferkette.",
    },
    {
        title: "Integrierte Technologie und Echtzeit-Tracking",
        description:
            "Die Eder nutzt integrierte Technologielösungen, um eine Echtzeit-Sichtbarkeit und Nachverfolgung Ihrer Sendungen durch die Häfen zu ermöglichen. Unsere fortschrittlichen Systeme ermöglichen es Ihnen, den Status und den Standort Ihrer Fracht in jeder Phase des Hafenabfertigungsprozesses zu überwachen. Diese Transparenz ermöglicht eine bessere Planung und Koordination, proaktive Problemlösung und verbesserte Entscheidungsfindung, so dass Ihre Lieferkette reaktionsschnell und effizient bleibt",
    },
];

const Page = () => {
    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/port_logistics.jpeg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full  flex justify-start  max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full  py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{__html: "Hafenlogistik: YOUR <br/> Lieferkette in Bewegung"}}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className=" flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Lieferkettenlösungen </h3>
                    <h2 className="font-semibold text-2xl md:text-4xl ">Hafenlogistik</h2>
                </div>
                <div className={" w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <p className="py-5 md:text-lg">
                    Die Hafenlogistikdienstleistungen, die von der Eder angeboten werden, spielen eine entscheidende
                    Rolle bei der Förderung des globalen Handels und des Handels. Häfen dienen als wichtige Drehscheiben
                    für den Warenverkehr und verbinden Hersteller, Lieferanten und Verbraucher auf verschiedenen
                    Kontinenten miteinander. Die Eder erkennt die Bedeutung effizienter und zuverlässiger Hafenlogistik
                    für einen reibungslosen Warenfluss und die Optimierung der Lieferkettenprozesse. Bei der Eder sind
                    unsere Hafenlogistikdienstleistungen darauf ausgerichtet, die vielfältigen Bedürfnisse unserer
                    Kunden zu erfüllen, angefangen von multinationalen Unternehmen bis hin zu kleinen und
                    mittelständischen Unternehmen. Wir bieten eine umfassende Palette von Dienstleistungen, die auf die
                    einzigartigen Anforderungen jedes Kunden zugeschnitten sind, und gewährleisten so einen
                    reibungslosen und kosteneffizienten Betrieb.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/port_logistics2.jpeg" className=" w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Ein wichtiger Aspekt unserer Hafenlogistikdienstleistungen ist die effiziente Frachtabwicklung.
                        Wir verfügen über hochmoderne Einrichtungen und Ausrüstungen, um eine Vielzahl von Frachtgütern
                        zu handhaben, einschließlich Container, Massengüter und Spezialgüter. Unsere qualifizierten
                        Mitarbeiter und die fortschrittliche Technologie ermöglichen es uns, Frachtströme effizient zu
                        verwalten, was zu minimalen Umlaufzeiten und maximaler Produktivität führt. Neben der
                        Frachtabwicklung bieten wir eine Reihe von Mehrwertdiensten an, um die Effizienz der
                        Hafenbetriebe zu steigern. Dazu gehören Lagerhaltung und Distribution, Zollabfertigung,
                        Spedition und Transportdienstleistungen. Unser integrierter Ansatz ermöglicht es uns,
                        End-to-End-Lösungen anzubieten, die die Lieferkettenprozesse optimieren und konkrete Vorteile
                        für unsere Kunden bringen. Darüber hinaus verstehen wir die Bedeutung von Compliance und
                        Risikomanagement in den Hafenbetrieben. Unser Expertenteam bleibt stets über die neuesten
                        Vorschriften und branchenüblichen Praktiken informiert, um sicherzustellen, dass die Sendungen
                        unserer Kunden allen relevanten Gesetzen und Vorschriften entsprechen. Wir implementieren auch
                        robuste Risikomanagementstrategien, um potenzielle Störungen zu minimieren und die Lieferketten
                        unserer Kunden abzusichern.
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
