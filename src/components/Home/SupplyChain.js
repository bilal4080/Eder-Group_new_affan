"use client";
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {LuMoveLeft, LuMoveRight} from "react-icons/lu";

const SupplyChain = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    const data = [
        [
            {
                image: "/image_wKo5sGBx_1718264035623_raw.png",
                title: "Seefracht",
                text: "Unsere Seefrachtversanddienste gewährleisten einen effizienten Transport Ihrer Waren zu fernen Stränden mit reibungsloser und schneller Lieferung über weite Meere hinweg.",
            },
            {
                image: "/Air Fright.jpg",
                title: "Luftfracht",
                text: "Wir bewegen Ihre Fracht schnell und sicher durch unsere umfangreichen Luftfrachtdienste. Ob es sich um eine dringende oder eine entfernte Angelegenheit handelt, wir zeigen Schnelligkeit und Kompetenz.",
            },
            {
                image: "/86a86b58-78a6-4249-b438-1973972257c7.png",
                title: "Zollabfertigung",
                text: "Erleben Sie schnelle und sichere Luftfrachtdienste für Ihre Sendungen. Ob es sich um eine eilige Lieferung oder ein entferntes Ziel handelt, unsere Dienstleistungen setzen auf Geschwindigkeit und Kompetenz.",
            },
        ],
        [
            {
                image: "/ground distbition.jpg",
                title: "Bodendistribution",
                text: "Schneller und zuverlässiger Landtransport stellt sicher, dass Ihre Waren pünktlich eintreffen. Dies umfasst alle Bereiche, vom Transport um die Ecke bis hin zur landesweiten Lieferung.",
            },
            {
                image: "/Inter Model.jpeg",
                title: "Intermodal",
                text: "Profitieren Sie von unseren schnellen und zuverlässigen Landtransportdiensten, die eine rechtzeitige Lieferung Ihrer Waren in allen Bereichen gewährleisten. Von lokalen Lieferungen um die Ecke bis hin zu landesweiten Sendungen sind wir für Sie da.",
            },
            {
                image: "/H-Improve-Logistics-with-SaaS-Warehouse-Management-Software.jpg",
                title: "Warehouse Management",
                text: "Wir bieten umfassende Dienstleistungen für ein besseres Lagermanagement an. Dies verbessert die Lagerung, überprüft den Bestand und optimiert die Abläufe..",
            },
        ],
        [
            {
                image: "/Cold Logistics.jpeg",
                title: "Kühlkettenlogistik",
                text: "Entfesseln Sie das Potenzial Ihres Lagers mit unseren umfassenden Managementdienstleistungen. Von der Optimierung der Lagerung bis zur Verwaltung des Bestands optimieren wir die Abläufe für maximale Effizienz",
            },
            {
                image: "/3rd party Logosutcs.jpeg",
                title: "Logistik von Drittanbietern",
                text: "Wir sind Experten im Bereich Logistikmanagement, einschließlich Drittanbieterlogistik und Unterstützung der Lieferkette. Mit unseren zuverlässigen Dienstleistungen optimieren wir die Abläufe für maximale Effizienz.",
            },
            {
                image: "/Trans Border.png",
                title: "Transgrenz-",
                text: "Unsere umfassenden Dienstleistungen optimieren die grenzüberschreitende Logistik und erleichtern den reibungslosen Transport von Produkten international.",
            },
        ],
    ];

    const smallScreen = [
        {
            image: "/Sea Fright.png",
            title: "Seefracht",
            text: "Unsere Seefrachtversanddienste gewährleisten einen effizienten Transport Ihrer Waren zu fernen Stränden mit reibungsloser und schneller Lieferung über weite Meere hinweg.",
        },
        {
            image: "/Air Fright.jpg",
            title: "Luftfracht",
            text: "Wir bewegen Ihre Fracht schnell und sicher durch unsere umfangreichen Luftfrachtdienste. Ob es sich um eine dringende oder eine entfernte Angelegenheit handelt, wir zeigen Schnelligkeit und Kompetenz.",
        },
        {
            image: "/Custom Clearnce.jpg",
            title: "Zollabfertigung",
            text: "Erleben Sie schnelle und sichere Luftfrachtdienste für Ihre Sendungen. Ob es sich um eine eilige Lieferung oder ein entferntes Ziel handelt, unsere Dienstleistungen setzen auf Geschwindigkeit und Kompetenz.",
        },
        {
            image: "/ground distbition.jpg",
            title: "Bodendistribution",
            text: "Schneller und zuverlässiger Landtransport stellt sicher, dass Ihre Waren pünktlich eintreffen. Dies umfasst alle Bereiche, vom Transport um die Ecke bis hin zur landesweiten Lieferung.",
        },
        {
            image: "/Inter Model.jpeg",
            title: "Intermodal",
            text: "Profitieren Sie von unseren schnellen und zuverlässigen Landtransportdiensten, die eine rechtzeitige Lieferung Ihrer Waren in allen Bereichen gewährleisten. Von lokalen Lieferungen um die Ecke bis hin zu landesweiten Sendungen sind wir für Sie da.",
        },
        {
            image: "/warehousemanagement.png",
            title: "Warehouse Management",
            text: "Wir bieten umfassende Dienstleistungen für ein besseres Lagermanagement an. Dies verbessert die Lagerung, überprüft den Bestand und optimiert die Abläufe..",
        },
        {
            image: "/Cold Logistics.jpeg",
            title: "Kühlkettenlogistik",
            text: "Entfesseln Sie das Potenzial Ihres Lagers mit unseren umfassenden Managementdienstleistungen. Von der Optimierung der Lagerung bis zur Verwaltung des Bestands optimieren wir die Abläufe für maximale Effizienz",
        },
        {
            image: "/3rd party Logosutcs.jpeg",
            title: "Logistik von Drittanbietern",
            text: "Wir sind Experten im Bereich Logistikmanagement, einschließlich Drittanbieterlogistik und Unterstützung der Lieferkette. Mit unseren zuverlässigen Dienstleistungen optimieren wir die Abläufe für maximale Effizienz.",
        },
        {
            image: "/Trans Border.png",
            title: "Transgrenz-",
            text: "Unsere umfassenden Dienstleistungen optimieren die grenzüberschreitende Logistik und erleichtern den reibungslosen Transport von Produkten international.",
        },
    ];
    //     {
    //         image: "/Sea Fright.png",
    //         title: "Sea Freight",
    //         text: "Shipping services for ocean cargo ensure your items are moved smoothly and swiftly across enormous seas to touch distant beaches.",
    //     },
    //     {
    //         image: "/Air Fright.jpg",
    //         title: "Air Freight",
    //         text: "We move your cargo fast and safely through our wide-ranging air services. Be it an urgent or a distant affair, we demonstrate quickness and competence.",
    //     },
    //     {
    //         image: "/Custom Clearnce.jpg",
    //         title: "Customs Clearance",
    //         text: "We provide a service that guards against any hitches in customs clearance. It helps your business enlargement.",
    //     },
    //     {
    //         image: "/ground distbition.jpg",
    //         title: "Ground Distribution",
    //         text: "Quick and reliable land transport makes sure your goods arrive on time. This covers all areas, from delivering around the corner to across the nation.",
    //     },
    //     {
    //         image: "/Inter Model.jpeg",
    //         title: "Intermodal",
    //         text: "Dive into the busy world of shipping with our wide-ranging services. We smoothly tie together all travel modes, so your products reach their destination effectively.",
    //     },
    //     {
    //         image: "/warehousemanagement.png",
    //         title: "Warehouse Management",
    //         text: "We offer comprehensive services for better warehouse management. This enhances storage, checks inventory, and streamlines operations.",
    //     },
    //     {
    //         image: "/Cold Logistics.jpeg",
    //         title: "Cold Chain Logistics",
    //         text: "We provide all-inclusive services for proficient cold chain logistics control. This guarantees the quality of goods needing certain temperatures throughout their entire supply journey.",
    //     },
    //     {
    //         image: "/3rd party Logosutcs.jpeg",
    //         title: "Logistics of Third Parties",
    //         text: "We simply make things work. From dealing with third-party logistics to backing up your supply chain, our services are reliable and streamline.",
    //     },
    //     {
    //         image: "/Trans Border.png",
    //         title: "Transborder",
    //         text: "We provide numerous services that make cross-border logistics a breeze. This ensures products move across borders without a hitch.",
    //     },
    // ];

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set initial screen width

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // Set up the interval for automatic sliding
        intervalRef.current = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
        }, 9000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <>
            <div data-aos="flip-up" className="mx-auto text-center my-24">
                <h1 className="my-3 text-2xl lg:text-6xl capitalize min-[1800px]:text-7xl font-semibold">
                    Unsere wertvollen Dienstleistungen
                </h1>
            </div>
            <div className={`relative gap-6 min-[786px]:flex hidden items-start mx-auto px-8 w-[97%] h-[35vw]`}>
                {data.map((items, idx) => (
                    <div
                        key={idx}
                        className={`absolute left-0 right-0 gap-6 inset-0 w-full h-auto flex justify-between items-start -z-10 ${
                            idx === index
                                ? " translate-x-0 transition-all opacity-100 ease-linear duration-[1s]"
                                : " translate-x-[100vw] opacity-0"
                        }`}
                    >
                        {items.map((item, IDX) => (
                            <div key={IDX} className="w-1/3 h-3/6 px-4 py-6 flex flex-col gap-4">
                                <Image
                                    width={1000}
                                    height={1000}
                                    alt="image"
                                    src={item.image}
                                    className="w-full h-full object-center rounded-md bg-center object-cover"
                                />
                                <h4 className="text-2xl md:text-3xl font-semibold pl-4 capitalize">{item.title}</h4>
                                <p className="text-sm md:text-lg pl-4 capitalize">{item.text}</p>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="flex gap-3 absolute left-0 right-0 bottom-0 top-[20%] justify-end items-start px-8">
                    <div
                        onClick={() => {
                            if (index === data.length - 1) {
                                setIndex(0);
                            } else {
                                setIndex(index + 1);
                            }
                        }}
                        className="text-white z-10 transition-all ease-linear duration-500 p-3 bg-orange-500 opacity-100 rounded-full border border-white"
                    >
                        <LuMoveRight />
                    </div>
                </div>
            </div>
            <div className={`flex relative gap-6 min-[786px]:hidden items-start mx-auto px-8 w-[97%] mb-10 h-[80vh]`}>
                {smallScreen.map((item, idx) => (
                    <div
                        key={idx}
                        className={`absolute left-0 right-0 gap-6 inset-0 w-full h-auto flex justify-between items-center -z-10 ${
                            idx === index
                                ? " translate-x-0 transition-all opacity-100 ease-linear duration-[1s]"
                                : " translate-x-[100vw] opacity-0"
                        }`}
                    >
                        <div className="w-full h-full px-4 py-6 flex flex-col gap-4">
                            <Image
                                width={1000}
                                height={1000}
                                alt="image"
                                src={item.image}
                                className="w-full h-full object-center rounded-md bg-center object-cover"
                            />
                            <h4 className="text-2xl md:text-3xl font-semibold pl-4 capitalize">{item.title}</h4>
                            <p className="text-sm md:text-lg pl-4 capitalize">{item.text}</p>
                        </div>
                    </div>
                ))}
                <div className="flex gap-3 absolute left-0 right-0 bottom-0 top-[20%] justify-end items-start px-8">
                    <div
                        onClick={() => {
                            if (index === smallScreen.length - 1) {
                                setIndex(0);
                            } else {
                                setIndex(index + 1);
                            }
                        }}
                        className="text-white z-10 transition-all ease-linear duration-500 p-3 hover:bg-black rounded-full border border-white"
                    >
                        <LuMoveRight />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupplyChain;
