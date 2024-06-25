import React from "react";
import {FaTruckMoving} from "react-icons/fa";
const options = [
    {
        title: " End-to-End-Management der Lieferkette",
        description:
            "Die Eder bietet umfassendes Supply-Chain-Management für Rohstoffe an, das alles von Beschaffung und Transport bis hin zu Lagerung und Distribution umfasst. Unser integrierter Ansatz gewährleistet, dass alle Aspekte der Lieferkette nahtlos koordiniert werden, um Engpässe zu reduzieren und die Effizienz zu steigern. Wir verwalten den gesamten Logistikprozess, damit Sie sich auf Ihre Kerngeschäftsaktivitäten konzentrieren können.",
    },
    {
        title: "Spezialisierte Transportlösungen",
        description:
            "Der Transport von Rohstoffen erfordert spezialisierte Ausrüstung und Fachkenntnisse. Die Eder bietet maßgeschneiderte Transportlösungen, die auf die spezifischen Anforderungen jedes Rohstoffs zugeschnitten sind. Unsere Flotte umfasst Massengutfrachter, Tanker und spezialisierte Fahrzeuge, die für den Transport schwerer Lasten und gefährlicher Materialien ausgelegt sind. Wir stellen sicher, dass Ihre Rohstoffe sicher und unter Einhaltung aller relevanten Vorschriften transportiert werden, um das Risiko von Schäden oder Verlusten zu minimieren.",
    },
    {
        title: "Fortgeschrittene Lagerhaltung und Lagerung",
        description:
            "Unsere hochmodernen Lageranlagen sind für eine Vielzahl von Rohstoffen ausgestattet. Wir bieten sichere Lagerlösungen, die klimatisierte Umgebungen, Bereiche für Massenlagerung und spezialisierte Handhabungsausrüstung umfassen. Die Eder setzt fortschrittliche Bestandsführungssysteme ein, um Echtzeit-Sichtbarkeit und Kontrolle über Ihre Lagerbestände zu ermöglichen und optimale Lagerbedingungen sowie eine effiziente Lagerumschlagshäufigkeit sicherzustellen..",
    },
    {
        title: "Regulatorische Einhaltung und Risikomanagement",
        description:
            "Die Navigation durch das regulatorische Umfeld ist entscheidend im Rohstoff-Logistikbereich. Die Eder verfügt über ein dediziertes Team von Experten, die sicherstellen, dass Ihre Sendungen allen internationalen und lokalen Vorschriften entsprechen. Wir kümmern uns um die erforderliche Dokumentation, Zollabfertigung und Einhaltung von Sicherheitsstandards, um Risiken im Zusammenhang mit Nichtkonformität zu mindern. Unsere umfassenden Risikomanagementstrategien schützen Ihre Lieferkette vor möglichen Störungen und gewährleisten einen reibungslosen Warenfluss.",
    },
];
const page = () => {
    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/9412cda4644ffa40a40ccd6cd1176578.jpg')] bg-opacity-50 flex justify-center items-center bg-cover bg-center">
                <div className="w-full  flex justify-start  max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full  py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "Warenlösungen <br/> Ihre Lieferkette in Aktion",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className=" flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Lieferkettenlösungen </h3>
                    <h2 className="font-semibold text-2xl md:text-4xl ">Warenlogistik</h2>
                </div>
                <div className={" w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <p className="py-5 md:text-lg">
                    Die Warenlogistik bezieht sich auf den umfassenden Prozess der Verwaltung des Transports und der
                    Lagerung von Gütern vom Ursprungsort bis zum endgültigen Bestimmungsort. Dies umfasst ein komplexes
                    und vernetztes Netzwerk von Aktivitäten, das sicherstellt, dass Waren effizient, kosteneffektiv und
                    sicher geliefert werden. Zu den wesentlichen Aspekten gehören eine akribische Planung, die Umsetzung
                    und Kontrolle von Verfahren zur Optimierung des Warentransports. Wesentliche Bestandteile der
                    Warenlogistik umfassen Bestandsmanagement, Lagerhaltung, Transport und nahtlose Koordination der
                    Lieferkette
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row flex-col">
                    <img src="/log-322.png" className=" w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Technologische Fortschritte spielen eine wesentliche Rolle bei der Verbesserung von
                        Logistikoperationen, indem sie Echtzeit-Tracking ermöglichen und die Kommunikation entlang der
                        Lieferkette verbessern. Eine effektive Warenlogistik ist für den globalen Handel von
                        entscheidender Bedeutung und wirkt sich auf das Wirtschaftswachstum und die Wettbewerbsfähigkeit
                        auf dem Markt aus. Darüber hinaus müssen Logistikstrategien auf Herausforderungen wie
                        regulatorische Änderungen, Umweltüberlegungen und schwankende Marktnachfrage reagieren. Die
                        Sicherstellung, dass Waren dann verfügbar sind, wenn und wo sie benötigt werden, erfordert
                        akribische Planung und Ausführung. Daher müssen Logistikfachleute kontinuierlich innovieren und
                        Prozesse verbessern, um den sich wandelnden Anforderungen des globalen Handels gerecht zu
                        werden. Unternehmen wie NODEX stehen an vorderster Front dieser Innovation und bieten
                        erstklassige Dienstleistungen, die Effizienz und Zuverlässigkeit gewährleisten. Mit einem
                        Engagement für Exzellenz nutzt die Eder Gruppe modernste Technologie und Fachkenntnisse, um die
                        besten Logistiklösungen anzubieten, die den höchsten Branchenstandards entsprechen und die
                        Erwartungen der Kunden übertreffen
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

export default page;
