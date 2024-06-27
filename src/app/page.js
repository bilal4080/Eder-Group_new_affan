"use client";
import {useState, useEffect} from "react";
import Link from "next/link"; // Import Link from Next.js
import {AiOutlineWhatsApp} from "react-icons/ai"; // Import WhatsApp icon from React Icons
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
    const [showPopup, setShowPopup] = useState(false);
    const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        const hidePopupTimer = setTimeout(() => {
            setShowPopup(false);
            setShowWhatsAppPopup(true);
        }, 9000); // 5000ms + 4000ms to show the WhatsApp popup after 4 seconds of showing the first popup

        return () => {
            clearTimeout(timer);
            clearTimeout(hidePopupTimer);
        };
    }, []);

    const closePopup = () => {
        setShowPopup(false);
        setShowWhatsAppPopup(true);
    };

    const scheduleMeeting = () => {
        console.log("Meeting scheduled!");
        closePopup();
    };

    const openWhatsApp = () => {
        const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp phone number
        const message = "Hello, I have a question about your services.";
        const url = `https://wa.me/${+923111982255}?text=${encodeURIComponent(message)}`;
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
            {showPopup && (
                <div className="fixed bottom-0 right-0 m-8">
                    <div className="bg-white opacity-80 rounded-lg p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Haben Sie eine Diskussion</h2>
                        <p className="mb-4">Haben Sie eine Frage? Sprechen Sie mit unserem Team</p>
                        <Link href="/contact">
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                                Kontakt
                            </button>
                        </Link>
                        <button onClick={closePopup} className="ml-4 text-gray-600 hover:text-gray-800">
                            Schließen
                        </button>
                    </div>
                </div>
            )}
            {showWhatsAppPopup && (
                <div className="fixed bottom-0 right-0 m-8 flex items-center">
                    <button
                        onClick={openWhatsApp}
                        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center"
                    >
                        <AiOutlineWhatsApp className="w-6 h-6 mr-2" />
                        <span>WhatsApp us</span>
                    </button>
                </div>
            )}
        </>
    );
}
