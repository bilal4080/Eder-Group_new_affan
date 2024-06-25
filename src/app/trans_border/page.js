import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Nahtloser grenzüberschreitender Transport",
            description:
                "Eder bietet nahtlose grenzüberschreitende Transportdienstleistungen, die die Komplexität des internationalen Versands vereinfachen. Unsere Expertise in der grenzüberschreitenden Logistik gewährleistet, dass Ihre Waren effizient zwischen Ländern transportiert werden und dabei mühelos durch Zollvorschriften und Grenzkontrollen navigieren. Wir kümmern uns um alle Aspekte des grenzüberschreitenden Transports, von der Dokumentation und Einhaltung bis hin zum Transport und zur Lieferung, um einen reibungslosen und problemlosen Prozess sicherzustellen.",
        },
        {
            title: "Expertise in Zoll und Einhaltung",
            description:
                "Unser Team von Zoll-Experten ist versiert in den Vorschriften und Anforderungen verschiedener Länder. Wir bieten umfassende Zollabfertigungsdienstleistungen und stellen sicher, dass alle erforderlichen Dokumente korrekt ausgefüllt und eingereicht werden. Diese Expertise minimiert das Risiko von Verzögerungen und Strafen und hilft dabei, dass Ihre Sendungen schnell und effizient den Zoll passieren. Mit Eder können Sie sicher sein, dass Ihre Waren allen internationalen Handelsgesetzen und -vorschriften entsprechen.",
        },
        {
            title: "Zuverlässige und sichere Transportlösungen",
            description:
                "Wir bieten zuverlässige und sichere Transportlösungen für Ihre grenzüberschreitenden Sendungen. Unsere fortschrittlichen Tracking-Systeme bieten Echtzeit-Sichtbarkeit über den Status Ihrer Sendungen und ermöglichen es Ihnen, ihren Fortschritt jederzeit zu überwachen. Wir setzen auch strenge Sicherheitsmaßnahmen ein, um Ihre Waren während des Transports zu schützen und sicher an ihr Ziel zu bringen. Unser Engagement für Zuverlässigkeit und Sicherheit macht uns zu einem vertrauenswürdigen Partner für den grenzüberschreitenden Transport.",
        },
        {
            title: "Maßgeschneiderte grenzüberschreitende Lösungen",
            description:
                "Bei Eder verstehen wir, dass jedes Unternehmen einzigartige Anforderungen an die grenzüberschreitende Logistik hat. Wir bieten maßgeschneiderte grenzüberschreitende Lösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind. Ob Sie einen beschleunigten Versand, eine spezialisierte Handhabung für empfindliche Waren oder Unterstützung bei komplexen Zollverfahren benötigen, unser Team arbeitet eng mit Ihnen zusammen, um eine Lösung zu entwickeln, die Ihren Bedürfnissen entspricht. Unser individueller Ansatz stellt sicher, dass Ihre grenzüberschreitende Logistik effizient, kosteneffektiv und auf Ihre betrieblichen Ziele ausgerichtet ist.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/cross-border-feature_nologo.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white  w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "GRENZÜBERSCHREITENDE DIENSTLEISTUNGEN VON Eder",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Grenzüberschreitende Dienstleistungen von Eder</h3>
                    <h2 className="font-semibold text-2xl md:text-4xl">Grenzüberschreitend</h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Eder ist auf die Bereitstellung umfassender grenzüberschreitender Dienstleistungen spezialisiert,
                    die den internationalen Versand optimieren und die Komplexität der grenzüberschreitenden Logistik
                    vereinfachen. Unsere nahtlosen Transportlösungen gewährleisten, dass Ihre Waren effizient die
                    Grenzen überqueren, und erleichtern die Navigation durch Zollvorschriften und Grenzkontrollen. Indem
                    wir alle Aspekte des grenzüberschreitenden Transports, von der Dokumentation und Einhaltung bis hin
                    zum Transport und zur Lieferung, abdecken, bieten wir eine problemlose Erfahrung für Ihre
                    internationalen Sendungen.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air7.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Unser Team von Zoll-Experten beherrscht die komplizierten Vorschriften und Anforderungen
                        verschiedener Länder. Wir bieten umfassende Zollabfertigungsdienstleistungen und stellen sicher,
                        dass alle erforderlichen Dokumente korrekt ausgefüllt und zeitnah eingereicht werden. Diese
                        Expertise minimiert das Risiko von Verzögerungen und Strafen und ermöglicht es Ihren Sendungen,
                        den Zoll schnell und effizient zu passieren. Mit Eder können Sie sicher sein, dass Ihre Waren
                        allen internationalen Handelsgesetzen und -vorschriften entsprechen. Zuverlässigkeit und
                        Sicherheit stehen im Mittelpunkt unserer grenzüberschreitenden Dienstleistungen. Unsere
                        fortschrittlichen Tracking-Systeme bieten Echtzeit-Sichtbarkeit über den Status Ihrer Sendungen
                        und geben Ihnen Sicherheit und Kontrolle über Ihre Lieferkette. Wir setzen auch strenge
                        Sicherheitsmaßnahmen ein, um Ihre Waren während des Transports zu schützen und sicher an ihr
                        Ziel zu bringen. Unser Engagement für zuverlässige und sichere Transportlösungen macht uns zu
                        einem bevorzugten Partner für Unternehmen, die sich mit grenzüberschreitender Logistik befassen.
                        Eder bietet maßgeschneiderte grenzüberschreitende Lösungen, die den einzigartigen Anforderungen
                        Ihres Unternehmens gerecht werden.
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
