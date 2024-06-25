import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Expertise in globaler Handelskonformitäte",
            description:
                "Bei der Eder verfügen wir über ein engagiertes Team von Fachleuten, die mit den globalen Handelsvorschriften und Compliance-Richtlinien bestens vertraut sind. Unsere Expertise gewährleistet, dass Ihre Sendungen den internationalen Gesetzen entsprechen und das Risiko von Verzögerungen und Geldstrafen minimiert wird. Durch die ständige Aktualisierung mit den neuesten Änderungen in Handelspolitiken helfen wir, den Zollabfertigungsprozess für alle Arten von Waren zu optimieren.",
        },
        {
            title: " Umfassendes Dokumentenmanagement ",
            description:
                "Wir kümmern uns um alle erforderlichen Unterlagen und Dokumente, die für die Zollabfertigung benötigt werden, einschließlich Import-/Exportdeklarationen, Rechnungen und Ursprungszeugnisse. Unser akribischer Ansatz minimiert Fehler und beschleunigt den Genehmigungsprozess. Dieses gründliche Dokumentenmanagement gewährleistet einen reibungslosen und effizienten Transit Ihrer Fracht und verringert die Wahrscheinlichkeit von zollbedingten Störungen.",
        },
        {
            title: "Effiziente Zollmaklerdienste",
            description:
                "Die Eder bietet effiziente Zollmaklerdienste an, um den Zollabfertigungsprozess zu beschleunigen. Unsere erfahrenen Makler haben enge Beziehungen zu Zollbeamten und ein tiefes Verständnis der Verfahrensanforderungen. Dies ermöglicht es uns, schnell durch komplexe Zollvorschriften zu navigieren und Ihre Waren umgehend zu klären, damit sie rechtzeitig ihr Ziel erreichen.",
        },
        {
            title: "Maßgeschneiderte Lösungen für vielfältige Branchen",
            description:
                "Die Eder bietet maßgeschneiderte Luftfrachtlösungen, um Ihren einzigartigen Versandanforderungen gerecht zu werden. Ob Sie eine Expresslieferung benötigen, temperaturgesteuerten Transport wünschen oder übergroße Fracht versenden möchten, unser Expertenteam wird einen individuellen Plan entwerfen, der genau auf Ihre spezifischen Anforderungen zugeschnitten ist. Dieser personalisierte Ansatz gewährleistet, dass Ihre Fracht mit größter Sorgfalt und Präzision behandelt wird und somit Sicherheit und Effizienz optimiert werden.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/2333.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "ZOLLABFERTIGUNG NACH MASS: <br/> IHRE LIFERKETTE IN BEWEGUNG ",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Zollabfertigung</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Zollabfertigung</h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Die Eder hat sich auf die Bereitstellung nahtloser Zollabfertigungsdienstleistungen spezialisiert,
                    die den komplexen Anforderungen des internationalen Handels gerecht werden. Unser Team von Experten
                    gewährleistet die Einhaltung globaler Handelsvorschriften, verwaltet alle Dokumente und arbeitet mit
                    Zollbehörden zusammen, um die reibungslose Bewegung Ihrer Waren zu erleichtern. Durch Nutzung
                    unseres umfangreichen Wissens und unserer etablierten Beziehungen bieten wir effiziente
                    Zollabfertigungsdienste, die dazu beitragen, Verzögerungen zu minimieren und Kosten zu senken.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air3.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Unsere maßgeschneiderten Lösungen richten sich an vielfältige Branchen und berücksichtigen, dass
                        jeder Sektor einzigartige Anforderungen hat. Ob es sich um sensible Gesundheitsprodukte,
                        komplexe Fertigungskomponenten oder hochwertige Einzelhandelsartikel handelt, wir bieten
                        maßgeschneiderte Unterstützung, um sicherzustellen, dass Ihre Sendungen alle erforderlichen
                        Vorschriften erfüllen. Mit der Eder können Sie sicher sein, dass Ihre Waren mit größter Sorgfalt
                        und Präzision behandelt werden, von der Dokumentation bis zur endgültigen Lieferung. Unser
                        Streben nach Exzellenz und unser tiefes Verständnis der Zollabfertigungsumgebung machen uns zum
                        bevorzugten Partner für Unternehmen, die ihre globale Lieferkette optimieren möchten.
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
