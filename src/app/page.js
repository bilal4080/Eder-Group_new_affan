"use client";
import React, {useState, useEffect} from "react";
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
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Check if the modal has been shown in this session
        const hasModalBeenShown = sessionStorage.getItem("modalShown");
        if (!hasModalBeenShown) {
            setShowModal(true);
            sessionStorage.setItem("modalShown", "true");
        }
    }, []);

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-lg w-full mx-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Willkommen bei EDER</h2>
                        <p className="mb-8">Wählen Sie eine Option, um fortzufahren:</p>
                        <div className="flex flex-col space-y-4">
                            <Link href="/steel">
                                <button
                                    className="bg-[#f97316] text-white px-6 py-3 rounded-lg w-full text-lg font-medium"
                                    onClick={() => setShowModal(false)}
                                >
                                    Stahlerzeugnisse
                                </button>
                            </Link>
                            <Link href="/logistics">
                                <button
                                    className="bg-[#f97316] text-white px-6 py-3 rounded-lg w-full text-lg font-medium"
                                    onClick={() => setShowModal(false)}
                                >
                                    Logistische Dienstleistungen
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

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
                    <h2 data-translate className="text-xl font-bold mb-2">
                        Start a Conversation
                    </h2>
                    <p data-translate className="mb-4">
                        The team typically responds in a few minutes.
                    </p>
                    <div className="space-y-2">
                        <div
                            className="flex items-center bg-blue-100 text-blue-600 p-2 rounded-lg cursor-pointer"
                            onClick={() => openMessenger("Hello, I have a question about software development.")}
                        >
                            <BsMessenger className="w-6 h-6 mr-2" />
                            <div>
                                <p data-translate className="font-semibold">
                                    Need Steel Products?
                                </p>
                                <p data-translate className="text-sm">
                                    Premium Steel Products
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex items-center bg-blue-100 text-blue-600 p-2 rounded-lg cursor-pointer"
                            onClick={() =>
                                openMessenger("Hello, I have a question about product design and manufacturing.")
                            }
                        >
                            <BsMessenger className="w-6 h-6 mr-2" />
                            <div>
                                <p data-translate className="font-semibold">
                                    Looking for a warehouse?
                                </p>
                                <p data-translate className="text-sm">
                                    Book a space
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-center bg-blue-100 text-blue-600 p-2 rounded-lg cursor-pointer"
                            onClick={() => openMessenger("Hello, I have a general question.")}
                        >
                            <BsMessenger className="w-6 h-6 mr-2" />
                            <div>
                                <p data-translate className="font-semibold">
                                    Something else?
                                </p>
                                <p data-translate className="text-sm">
                                    EDER Support
                                </p>
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
                        <span data-translate>Chat with us</span>
                    </>
                )}
            </button>
        </>
    );
}
