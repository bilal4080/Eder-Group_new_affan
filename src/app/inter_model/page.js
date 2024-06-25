import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Nahtlose Integration mehrerer Transportarten",
            description:
                "Bei Eder bieten wir intermodale Transportdienstleistungen an, die verschiedene Transportarten wie Schiene, LKW und Seefracht nahtlos integrieren. Dieser multimodale Ansatz ermöglicht es uns, flexible und effiziente Lösungen für den Transport Ihrer Fracht anzubieten. Durch die Nutzung der Stärken jeder Transportart stellen wir sicher, dass Ihre Sendungen auf kostengünstige und zeitnahe Weise geliefert werden.",
        },
        {
            title: "Verbesserte Effizienz und kürzere Transitzeiten",
            description:
                "Unsere intermodalen Lösungen sind darauf ausgelegt, Transitzeiten zu optimieren und die Gesamteffizienz zu verbessern. Durch die Kombination verschiedener Transportarten können wir überlastete Routen umgehen und Verzögerungen vermeiden, die bei einheitlichem Transport häufig auftreten. Dies führt zu kürzeren Lieferzeiten und einer verbesserten Zuverlässigkeit, sodass Ihre Lieferkette agil und reaktionsschnell auf Marktanforderungen bleibt.",
        },
        {
            title: "Kostengünstige Versandlösungen",
            description:
                "Intermodaler Transport mit Eder bietet erhebliche Kosteneinsparungen. Die Nutzung der Schiene für Langstreckenabschnitte kann beispielsweise wirtschaftlicher sein als die ausschließliche Nutzung von LKW. Durch die strategische Planung der Route und die Kombination von Transportarten senken wir die Treibstoffkosten, reduzieren die Arbeitskosten und minimieren das Risiko von Schäden an Ihren Gütern. Letztendlich bieten wir Ihnen dadurch erschwinglichere Versandoptionen.",
        },
        {
            title: "Umweltfreundlichkeit",
            description:
                "Eder setzt sich für nachhaltige Praktiken ein, und unsere intermodalen Transportdienstleistungen spiegeln dieses Engagement wider. Durch die Nutzung von Schienen- und Seetransportarten, die im Vergleich zum Straßentransport eine geringere Kohlenstoffemission aufweisen, tragen wir dazu bei, die Umweltauswirkungen Ihrer Sendungen zu verringern. Unser umweltfreundlicher Ansatz unterstützt nicht nur Nachhaltigkeitsziele, sondern verbessert auch die grünen Referenzen Ihres Unternehmens.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/inter_m.jpeg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white  w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "INTERMODALE TRANSPORTLÖSUNGEN",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Intermodale Distributionslösungen</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Intermodal</h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Eder bietet innovative intermodale Transportlösungen, die darauf ausgelegt sind, die Effizienz und
                    Flexibilität Ihrer Lieferkette zu erhöhen. Durch die Integration mehrerer Transportarten wie
                    Schiene, LKW und Seefracht bieten wir ein nahtloses und zusammenhängendes Versanderlebnis. Dieser
                    multimodale Ansatz ermöglicht es uns, die einzigartigen Vorteile jeder Transportart zu nutzen und
                    optimierte Transitzeiten sowie kostengünstige Lösungen für Ihre Fracht anzubieten.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air5.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Unsere intermodalen Dienstleistungen sind darauf ausgerichtet, die spezifischen Bedürfnisse
                        Ihres Unternehmens zu erfüllen. Durch die Kombination verschiedener Transportarten können wir
                        Engpässe umgehen und Transitzeiten reduzieren, sodass Ihre Waren rechtzeitig ihr Ziel erreichen.
                        Diese strategische Routenführung minimiert Verzögerungen und verbessert die Zuverlässigkeit
                        Ihrer Lieferkette, damit Sie im heutigen schnelllebigen Markt wettbewerbsfähig bleiben. Neben
                        Effizienz und Kosteneinsparungen engagiert sich Eder für Umweltfreundlichkeit. Unsere
                        intermodalen Lösungen nutzen Transportarten mit geringeren Kohlenstoffemissionen wie Schiene und
                        Seefracht, um die Gesamtauswirkungen Ihrer Sendungen auf die Umwelt zu reduzieren. Dieses
                        Bekenntnis zur grünen Logistik hilft Ihnen, Ihre Nachhaltigkeitsziele zu erreichen, während hohe
                        Servicestandards beibehalten werden. Die intermodalen Transportdienstleistungen von Eder bieten
                        eine intelligente und nachhaltige Möglichkeit, Ihre Fracht zu transportieren. Durch die
                        Kombination der Stärken verschiedener Transportarten bieten wir effiziente, zuverlässige und
                        umweltfreundliche Versandlösungen, die das Wachstum und die Nachhaltigkeitsziele Ihres
                        Unternehmens unterstützen. Vertrauen Sie uns, Ihre intermodalen Anforderungen mit der
                        Fachkompetenz und Hingabe zu erfüllen, die uns in der Logistikbranche auszeichnet.
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
