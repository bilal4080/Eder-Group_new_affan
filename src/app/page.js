"use client";
import {useState} from "react";
import Link from "next/link";
import {AiOutlineClose} from "react-icons/ai";
import {BsMessenger} from "react-icons/bs";
import Hero from "@/components/Home/Hero";
import SupplyChain from "@/components/Home/SupplyChain";
import GlobalTransport from "@/components/Home/GlobalTransport";
import Section4 from "@/components/Home/Section4";
import Section6 from "@/components/Home/Section6";
import Section6_1 from "@/components/Home/Section6_1";
import Section6_1_1 from "@/components/Home/Section6_1_1";
import MapChart from "@/components/Home/MapChart";
import Section11 from "@/components/Home/Section11";

export default function Home() {
    const [showMessengerPopup, setShowMessengerPopup] = useState(false);

    const openMessenger = (message) => {
        const url = `https://m.me/theminuseder?ref=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <>
            <Hero />
            <SupplyChain />
            <section className="w-full flex justify-start items-start">
                <GlobalTransport />
            </section>
            <section className="w-full flex justify-end items-end">
                <Section4 />
            </section>
            <Section6 />
            <Section6_1 />
            <Section6_1_1 />
            <MapChart />
            <Section11 />

            {showMessengerPopup && (
                <div className="fixed bottom-20 right-8 bg-white p-4 rounded-lg shadow-lg w-80 border">
                    <h2 className="text-xl font-bold mb-2">Ein Gespräch beginnen</h2>
                    <p className="mb-4">Das Team antwortet normalerweise in wenigen Minuten.</p>
                    <div className="space-y-2">
                        <div
                            className="flex items-center bg-blue-100 text-blue-600 p-2 rounded-lg cursor-pointer"
                            onClick={() => openMessenger("Hallo, ich habe eine Frage zur Softwareentwicklung.")}
                        >
                            <BsMessenger className="w-6 h-6 mr-2" />
                            <div>
                                <p className="font-semibold">Benötigen Sie Dienstleistungen?</p>
                                <p className="text-sm">EDER</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center bg-blue-100 text-blue-600 p-2 rounded-lg cursor-pointer"
                            onClick={() =>
                                openMessenger("Hallo, ich habe eine Frage zum Produktdesign und zur Fertigung.")
                            }
                        >
                            <BsMessenger className="w-6 h-6 mr-2" />
                            <div>
                                <p className="font-semibold">Suchen Sie ein Lager?</p>
                                <p className="text-sm">EDER</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={() => setShowMessengerPopup(!showMessengerPopup)}
                className="fixed bottom-0 right-0 m-8 flex items-center bg-blue-600 text-white p-3 rounded-full shadow-lg"
            >
                {showMessengerPopup ? (
                    <AiOutlineClose className="w-6 h-6" />
                ) : (
                    <>
                        <BsMessenger className="w-6 h-6 mr-2" />
                        <span>Chatten Sie mit uns</span>
                    </>
                )}
            </button>
        </>
    );
}
