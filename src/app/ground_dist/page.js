import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    const options = [
        {
            title: "Lückenlose Bodenverteilungslösungen und Zuverlässige Lieferung",
            description:
                "Die Eder bietet umfassende Bodenverteilungsdienste mit landesweiter Abdeckung an. Unser umfangreiches Netzwerk gewährleistet einen effizienten Transport Ihrer Güter zu jedem Ziel im ganzen Land. Wir sind stolz auf zuverlässige Lieferzeiten, sodass Ihre Fracht jedes Mal pünktlich ihr Ziel erreicht. Unsere Verpflichtung zur Pünktlichkeit und Zuverlässigkeit macht uns zu einem vertrauenswürdigen Partner im Bereich des Bodentransports.",
        },
        {
            title: "Flotte und Technologie auf dem neuesten Stand der Technik",
            description:
                "Unsere moderne Flotte von Fahrzeugen ist mit neuester Technologie ausgestattet, um den sicheren und effizienten Transport Ihrer Güter zu gewährleisten. Von Echtzeit-Tracking-Systemen bis hin zu fortschrittlicher Routenplanungssoftware nutzt die Eder modernste Technologie, um Lieferwege zu optimieren und Sendungen zu überwachen. Diese technologische Integration verbessert die Transparenz, ermöglicht es Ihnen, Ihre Sendungen in Echtzeit zu verfolgen, und bietet Ihnen Sicherheit.",
        },
        {
            title: "Maßgeschneiderte Vertriebslösungen",
            description:
                "Da wir verstehen, dass jedes Unternehmen einzigartige Logistikbedürfnisse hat, bietet die Eder maßgeschneiderte Bodenverteilungslösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind. Ob Sie eine effiziente Last-Mile-Lieferung, dedizierte Flottendienste oder spezialisierte Handhabung für empfindliche Güter benötigen, wir bieten flexible Optionen, um Ihren Anforderungen gerecht zu werden. Unser persönlicher Ansatz stellt sicher, dass Ihre Vertriebsstrategie mit Ihren Geschäftszielen und betrieblichen Anforderungen übereinstimmt.",
        },
        {
            title: "Kostengünstige und nachhaltige Praktiken",
            description:
                "Bei der Eder sind wir bestrebt, kostengünstige Bodenverteilungsdienste anzubieten, ohne die Qualität zu beeinträchtigen. Wir setzen effiziente Routen- und Ladungsoptimierungstechniken ein, um die Transportkosten zu senken. Darüber hinaus treibt uns unser Engagement für Nachhaltigkeit dazu an, umweltfreundliche Praktiken umzusetzen, wie die Nutzung von Kraftstoff sparenden Fahrzeugen und die Minimierung unseres CO2-Fußabdrucks, was zu einer grüneren Lieferkette beiträgt.",
        },
    ];

    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/ground-transport.png')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full flex justify-start max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white  w-full py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "UMFASSENDE BODENVERTEILUNGSLÖSUNGEN",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className="flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Comprehensive Ground Distribution Solutions </h3>
                    <h2 className="font-semibold text-2xl md:text-4xl"> Ground Distribution</h2>
                </div>
                <div className="w-full bg-gray-400 mx-auto my-4 h-[0.1px]"></div>
                <p className="py-5 md:text-lg">
                    Erfüllen Sie die spezifischen Anforderungen Ihres Unternehmens. Ob Sie eine effiziente
                    Last-Mile-Lieferung, dedizierte Flottendienste oder spezialisierte Handhabung für fragile oder
                    hochwertige Güter benötigen, bietet die Eder flexible und maßgeschneiderte Optionen, die sich mit
                    Ihren betrieblichen Zielen decken. Unsere Expertise in der Logistik ermöglicht es uns,
                    Vertriebsstrategien zu entwickeln, die sowohl effizient als auch effektiv sind und sicherstellen,
                    dass Ihre Produkte sicher und pünktlich ihr Ziel erreichen.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row-reverse flex-col">
                    <img src="/air4.png" className="w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Neben dem Bereitstellen außergewöhnlicher Dienstleistungen setzt sich die Eder für
                        Nachhaltigkeit und Wirtschaftlichkeit ein. Durch die Nutzung von Kraftstoff sparenden Fahrzeugen
                        und die Optimierung unserer Lieferwege reduzieren wir nicht nur die Transportkosten, sondern
                        minimieren auch unseren ökologischen Fußabdruck. Diese Hingabe an umweltfreundliche Praktiken
                        hilft uns, eine grünere Lieferkette zu unterstützen, von der sowohl unsere Kunden als auch der
                        Planet profitieren. Hauptvorteile, Landesweite Abdeckung und pünktliche Lieferung, Zuverlässige
                        und effiziente Lieferservices im ganzen Land, um sicherzustellen, dass Ihre Güter termingerecht
                        ihr Ziel erreichen. Integration fortschrittlicher Technologien, Echtzeit-Tracking und optimierte
                        Routen für verbesserte Sendungsverfolgung und Effizienz. Maßgeschneiderte Lösungen, Flexible
                        Bodenverteilungsoptionen, die auf die einzigartigen Bedürfnisse Ihres Unternehmens zugeschnitten
                        sind.
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
