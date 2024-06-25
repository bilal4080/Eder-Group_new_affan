"use client";
import Image from "next/image";
import React, {useState} from "react";
import {GoArrowUpRight} from "react-icons/go";

const Page = () => {
    const [isHovered, setIsHovered] = useState(false);
    const tires = [
        {id: 1, img: "/catalogLanding_TRACKwheel.jpg", text: "Hochleistung"},
        {id: 2, img: "/croa4-final.jpg", text: "Motorrad"},
        {id: 3, img: "/bc-rim.jpg", text: "Fahrrad "},
        {id: 4, img: "/continental-ultracontact-nxt-pro.jpg", text: "Auto und Van"},
        {id: 5, img: "continental--sc20plus-s--product.jpg", text: "Materialtransport"},
        {id: 43, img: "/co-straddlemaster-radial.jpg", text: "Hafenbetrieb"},
        {id: 3, img: "co-em-master-e3-l3-productpictur.jpg", text: "Erdbewegung"},
        {id: 2, img: "/co-tractormaster.jpg", text: "Schwerlast"},
        {id: 32, img: "ckko1ugcq03go01of5kbase03-tire-p.jpg", text: "Ganzjahresreifen"},
        {id: 2, img: "/roadtec_01_se_1.jpg", text: "Sport"},
        {id: 4, img: "/sportec_m9_rr_1.jpg", text: "Rennsport"},
        {id: 5, img: "karoo_street_1.jpg", text: "Abenteuer"},
        {id: 43, img: "/cq5dam.thumbnail.319.319.jpg", text: "Winterreifen"},
        {id: 3, img: "cq5dam.thumbnail.319.319 (2).jpg", text: "Komfort "},
        {id: 32, img: "tire 1 (2).jpg", text: "Ganzjahresreifen"},
        {id: 2, img: "/tire 1 (1).jpg", text: "Sport"},
    ]; // Liste der Reifen mit entsprechenden Bildern und Text

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "center"});
        }
    };

    return (
        <>
            <div className="bg-black h-[85px] w-full"></div>

            <div className="py-4 sm:py-10 w-[90%] h-screen space-y-4 2xl:space-y-0 2xl:h-[70vh] mx-auto grid grid-cols-1 2xl:grid-cols-4 2xl:gap-5">
                <div
                    onMouseEnter={() => setIsHovered("lDiv")}
                    onMouseLeave={() => setIsHovered(false)}
                    className="col-span-3 bg-no-repeat bg-cover bg-[url('/carTrie1.jpg')] rounded-2xl relative"
                >
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 z-20">
                        <p className="mb-4 text-white">
                            Die beste Reifenlösung in Ihrer Nähe in Deutschland, wir haben wertvolle Dienstleistungen
                            für Sie, wählen Sie das Beste
                        </p>
                        <h1 className="text-2xl md:text-4xl xl:text-7xl text-white font-extrabold mb-4">
                            EXPORT-REIFEN QUALITÄT
                        </h1>
                        <button
                            className="bg-orange-500 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={() => handleScrollTo("tires-section")}
                        >
                            Jetzt ansehen
                        </button>
                    </div>
                    <div
                        className={`absolute inset-0 bg-black ${
                            isHovered === "lDiv" ? "opacity-80" : "opacity-60"
                        } rounded-2xl transition-opacity duration-300`}
                    ></div>
                </div>
                <div className="flex sm:flex-row flex-col 2xl:flex-col gap-5">
                    <div
                        onMouseEnter={() => setIsHovered("RDiv1")}
                        onMouseLeave={() => setIsHovered(false)}
                        className="bg-no-repeat bg-cover bg-[url('/mc-continental-contiattack-sm2-0.jpg')] relative rounded-2xl text-start flex-1"
                    >
                        <div className="absolute inset-0 flex flex-col gap-1 sm:gap-3 2xl:gap-5 justify-center items-start p-8 md:p-16 z-20 text-white">
                            <p>Profitieren Sie mit uns</p>
                            <h2 className="text-xl md:text-2xl xl:text-4xl font-extrabold">PREMIUM-QUALITÄTSREIFEN</h2>
                            <button
                                className="bg-orange-500 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleScrollTo("tires-section")}
                            >
                                Besitzen
                            </button>
                        </div>
                        <div
                            className={`absolute inset-0 bg-black ${
                                isHovered === "RDiv1" ? "opacity-80" : "opacity-60"
                            } rounded-2xl transition-opacity duration-300`}
                        ></div>
                    </div>
                    <div
                        onMouseEnter={() => setIsHovered("RDiv2")}
                        onMouseLeave={() => setIsHovered(false)}
                        className="bg-no-repeat bg-cover bg-[url('/radrace-tdf2021-bjoern-reschabek.jpg')] relative rounded-2xl text-start flex-1"
                    >
                        <div className="absolute inset-0 flex flex-col justify-center gap-1 sm:gap-3 2xl:gap-5 items-start p-8 md:p-16 z-20 text-white">
                            <p>Wählen Sie die Variation</p>
                            <h2 className="text-xl md:text-2xl xl:text-4xl font-extrabold">
                                BESTE QUALITÄT MIT VORTEILEN
                            </h2>
                            <button
                                className="bg-orange-500 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleScrollTo("tires-section")}
                            >
                                Besitzen
                            </button>
                        </div>
                        <div
                            className={`absolute inset-0 bg-black ${
                                isHovered === "RDiv2" ? "opacity-80" : "opacity-60"
                            } rounded-2xl transition-opacity duration-300`}
                        ></div>
                    </div>
                </div>
            </div>

            <div
                id="tires-section"
                className="py-4 sm:py-10 w-[90%] h-max mx-auto grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-3 2xl:gap-5"
            >
                {tires.map((tire, idx) => (
                    <div
                        key={idx}
                        onMouseEnter={() => setIsHovered(idx)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`flex flex-col items-center justify-between pt-4 ${
                            isHovered === idx ? "border-orange-500" : "border-gray-300"
                        } border-2 rounded-lg`}
                    >
                        <img src={tire.img} alt={tire.text} className="object-contain h-2/3 w-full hover:scale-105" />
                        <div className="w-full">
                            <button
                                className={`${
                                    isHovered === idx ? "bg-orange-500 text-white" : "text-black"
                                } font-bold py-8 w-full rounded-b-md mt-2`}
                            >
                                {tire.text}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex my-8 relative justify-between bg-no-repeat bg-[url('/trieBanner.jpg')] py-12 md:py-24 gap-6 items-center w-full h-full">
                <h1 className="font-semibold z-20 text-2xl text-white md:text-3xl px-4 md:px-24 min-[1800px]:text-4xl relative text-darken lg:pr-10">
                    Kümmern Sie sich um Ihren Reifen 22% Rabatt
                    <br />
                    <span className="text-xl text-white md:text-2xl font-light">
                        Dieser Rabatt ist nicht mit anderen Angeboten kombinierbar
                    </span>
                </h1>
                <img src="/tire.png" className="absolute xl:block hidden -top-5 -bottom-5 right-20 z-20 h-80" />
                <div
                    style={{
                        backgroundColor: "transparent",
                        backgroundImage: "linear-gradient(90deg, rgb(249 115 22) 25%, rgba(0, 0, 0, 0.8) 70%)",
                        opacity: 1,
                        transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
                    }}
                    className={`absolute inset-0 z-10`}
                ></div>
            </div>
        </>
    );
};

export default Page;
