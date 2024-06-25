"use client"
import { useState, useEffect } from 'react';

import Link from 'next/link'; // Import Link from Next.js
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const scheduleMeeting = () => {
    // Implement your scheduling logic here
    console.log('Meeting scheduled!');

    // Redirect to a new page (for example, '/confirmation') after scheduling

    // For demonstration purposes, close the popup after scheduling
    closePopup();
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

            {/* Link component for Contact button */}
            <Link href="/contact">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Kontakt</button>
            </Link>

            {/* Close button */}
            <button onClick={closePopup} className="ml-4 text-gray-600 hover:text-gray-800">Schließen</button>
          </div>
        </div>
      )
      }
    </>
  );
}
