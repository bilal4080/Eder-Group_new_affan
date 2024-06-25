import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Umfassendes globales Netzwerk",
            description:
                "Mit dinem umfassenden globalen Netzwerk bietet die EDer eine breite Palette von Logistiklösungen, die darauf ausgerichtet sind, die weltweiten Versandanforderungen unserer Kunden zu erfüllen. Durch strategische Partnerschaften und eine weitreichende Präsenz in wichtigen Handelshäfen sind wir in der Lage, eine nahtlose Verbindung zwischen verschiedenen Standorten herzustellen und effiziente Transportlösungen anzubieten. Unser Netzwerk ermöglicht es uns, flexibel auf die Bedürfnisse unserer Kunden einzugehen und maßgeschneiderte Lösungen anzubieten, die sowohl kosteneffizient als auch zuverlässig sind.",
        },
        {
            title: "Flexible Versandoptionen",
            description:
                "Wir derstehen, dass verschiedene Unternehmen unterschiedliche Versandbedürfnisse haben. Aus diesem Grund bietet die EDer eine Reihe von flexiblen Versandoptionen, einschließlich Full Container Load (FCL) und Less than Container Load (LCL) Dienstleistungen. Ob Sie große Mengen an Waren haben oder kleinere Sendungen, wir können unsere Dienstleistungen an Ihre spezifischen Anforderungen anpassen. Unser Ziel ist es, kostengünstige Lösungen anzubieten, die die Effizienz maximieren und die Kosten für unsere Kunden minimieren.",
        },
        {
            title: "Fortgeschrittene Tracking- und Transparenzfunktionen",
            description:
                "In ddr heutigen schnelllebigen Welt ist es entscheidend, Echtzeitinformationen über Ihre Sendung zu haben. Die EDer setzt fortschrittliche Tracking-Technologien ein, die eine vollständige Transparenz und Echtzeit-Updates über den Status Ihrer Fracht bieten. Dies ermöglicht es Ihnen, den Fortschritt Ihrer Sendung zu jedem Zeitpunkt ihrer Reise zu überwachen, und gibt Ihnen Sicherheit und die Möglichkeit, effektiver zu planen.",
        },
        {
            title: " Betonung von Sicherheit und Einhaltung",
            description:
                "Sichdrheit und Einhaltung stehen im Mittelpunkt unserer Seefrachtdienste. Die EDer hält sich an die höchsten Branchenstandards und -vorschriften, um sicherzustellen, dass Ihre Fracht mit größter Sorgfalt behandelt wird. Unser Team von Experten ist mit den internationalen Versandvorschriften und bewährten Verfahren bestens vertraut und stellt sicher, dass alle erforderlichen Dokumente und Sicherheitsprotokolle vorhanden sind. Diese Verpflichtung zur Sicherheit und Einhaltung minimiert das Risiko von Verzögerungen, Bußgeldern oder anderen Problemen und gewährleistet eine reibungslose Versanderfahrung.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/Sea-Freight.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{__html: "Seefracht  <br/> Lieferkette in Bewegung"}}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Seefrachtdienste </h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Seefracht </h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Bei der Eder bieten unsere Seefrachtdienste zuverlässige und kostengünstige Lösungen für den
                    Transport von Gütern weltweit. Durch Nutzung eines umfangreichen Netzwerks von internationalen
                    Versandpartnern und strategisch günstig gelegenen Häfen gewährleisten wir eine effiziente und
                    rechtzeitige Lieferung Ihrer Fracht. Unsere umfassenden Seefrachtdienstleistungen umfassen Full
                    Container Load (FCL), Less than Container Load (LCL), Stückgut- und Projektfrachtbearbeitung.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/sea1.jpg.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Bei der Eder haben unsere Seefrachtdienste Sicherheit, Einhaltung gesetzlicher Vorschriften und
                        Echtzeit-Tracking als oberste Priorität, um den sicheren und reibungslosen internationalen
                        Versand Ihrer Waren zu gewährleisten. Durch Nutzung unseres umfangreichen Netzwerks globaler
                        Versandpartner und strategisch günstig gelegener Häfen bieten wir kostengünstige Full Container
                        Load (FCL) und Less than Container Load (LCL) Lösungen, die auf Ihre individuellen Anforderungen
                        zugeschnitten sind. Unser Expertenteam widmet sich der Handhabung Ihrer Fracht mit größter
                        Sorgfalt und Effizienz, um pünktliche Lieferungen zu gewährleisten und etwaige Unterbrechungen
                        zu minimieren. Indem wir uns auf Zuverlässigkeit konzentrieren und fortschrittliche
                        Tracking-Technologien nutzen, navigiert die Eder durch die Komplexitäten der Seefrachtlogistik
                        und bietet Ihnen Ruhe und außergewöhnlichen Service. Ganz gleich, ob Sie große Mengen oder
                        kleinere Sendungen versenden müssen, vertrauen Sie der Eder, um Ihre Fracht sicher und effizient
                        weltweit zu befördern.
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
