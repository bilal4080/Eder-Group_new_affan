import Image from "next/image";
import React from "react";

const Section6_1 = () => {
    const data = [
        {
            id: 1,
            title: "Empfang.",
            text: "Bei der Eder-Gruppe zeichnen wir uns durch präzise Versandabwicklung aus und führen akribische Kontrollen unter Verwendung fortschrittlicher Systeme durch, um eine schnelle und fehlerfreie Lieferung zu gewährleiste",
            image: "/receiving.jpg",
        },
        {
            id: 2,
            title: "Lagerung",
            text: "Die Lagerung in der Logistik umfasst das sorgfältige Management von Artikeln innerhalb der Lieferkette, überwacht von Drittanbieter-Logistikdienstleistern (3PLs).",
            image: "/storing.jpg",
        },
        {
            id: 3,
            title: "Auswahl",
            text: "Das Picken beim Versand bezieht sich auf den Prozess der Auswahl und Entnahme von Artikeln aus dem Lager. Diese wesentliche Aufgabe dient zwei Hauptzwecken: der Erfüllung von Kundenbestellungen und der Auffüllung der Lagerbestände",
            image: "/picking.png",
        },
        {
            id: 4,
            title: "Verpacken",
            text: "Das Zusammenpacken erledigt mehr als nur die Ordnung zu bewahren. Es garantiert Sicherheit während des Transports oder der Lagerung in der Lieferkette.",
            image: "/packing.jpg",
        },
        {
            id: 5,
            title: "Versand",
            text: "Logistik dreht sich darum, Waren zu bewegen, sei es von einem Ort zum anderen. Wir verwenden verschiedene Methoden wie Lastwagen oder Schiffe",
            image: "/shipping.jpg",
        },
        {
            id: 6,
            title: "Feedback",
            text: "In der Logistik gewährleistet Feedback eine kontinuierliche Verbesserung, indem Erkenntnisse gesammelt und Anliegen angegangen werden, um die Gesamteffizienz und Wirksamkeit der Operationen zu verbessern.",
            image: "/imgC3.png",
        },
    ];

    return (
        <>
            <div data-aos="flip-up" className="mx-auto text-center mt-24">
                <h1 className="my-3 text-2xl lg:text-6xl capitalize min-[1800px]:text-7xl font-semibold">
                    Bei der Eder
                </h1>
                <p className="leading-relaxed md:text-2xl">Hier ist der vollständige Prozess.</p>
            </div>
            <section className="md:px-8 max-w-screen-xl mx-auto flex flex-wrap mt-20">
                {data?.map((item) => (
                    <div
                        key={item.id}
                        className="md:flex gap-2 w-ful flex flex-col-reverse md:flex-row items-center md:w-1/2 p-8 dark:border border-gray-900"
                    >
                        <div className="w-full flex-1 flex flex-col gap-4">
                            <h4 className=" text-2xl md:text-3xl font-semibold flex items-center gap-4  capitalize">
                                <span className=" text-sm md:text-md font-bold text-blue-500">0{item.id} -</span>
                                {item.title}
                            </h4>
                            <p className=" text-sm md:text-lg  capitalize">{item.text}</p>
                            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
                        </div>
                        <div className="h-auto w-full md:w-[40%] relative">
                            <Image
                                width={500}
                                height={500}
                                src={item.image}
                                className="w-full h-auto rounded-md"
                                alt="Your Alt Text"
                            />
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Section6_1;
