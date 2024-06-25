import React from 'react';

const Page = () => {
    return (
        <div className="container mx-auto py-8 px-4 pt-28">
            {/* About Section */}
            <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                    <img src="/about.jpg" alt="Über uns" className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2 lg:pl-8 pt-14 lg:pt-0">
                    <h2 className="text-3xl font-bold mb-4">Über unser Unternehmen</h2>
                    <p className="text-lg leading-relaxed">
                        Bei Eder sind wir darauf spezialisiert, nahtlose Transport- und Logistiklösungen anzubieten, die auf Ihre geschäftlichen Bedürfnisse zugeschnitten sind. Mit einem Engagement für Zuverlässigkeit, Effizienz und Kundenzufriedenheit stellen wir sicher, dass Ihre Waren sicher und pünktlich ihr Ziel erreichen, jedes Mal.

                        Unser engagiertes Team kombiniert Branchenexpertise mit innovativer Technologie, um das Supply Chain Management zu optimieren. Wir bieten umfassende Dienstleistungen wie Frachttransport, Lagerhaltung, Distribution und Zollabwicklung an. Egal, ob Sie lokal oder global versenden, Eder ist Ihr vertrauenswürdiger Partner für zuverlässige Logistiklösungen.
                    </p>
                </div>
            </div>

            {/* Mission Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12 pt-8">
                {/* Card 1 - Our Team */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                    <div className="bg-blue-500 rounded-full h-12 w-12 flex items-center justify-center text-white text-xl font-bold mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Unser Team</h3>
                        <p className="text-lg">
                            Voll ausgebildetes und hochqualifiziertes Personal mit Expertenwissen arbeitet in flexiblen Umgebungen.
                        </p>
                    </div>
                </div>

                {/* Card 2 - CEO */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                    <div className="bg-green-500 rounded-full h-12 w-12 flex items-center justify-center text-white text-xl font-bold mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Geschäftsführer</h3>
                        <p className="text-lg">
                            Treffen Sie unseren CEO Affan Dawood, Experte für Logistik mit 20 Jahren Erfahrung in der Branche.
                        </p>
                    </div>
                </div>

                {/* Card 3 - Warehouses */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                    <div className="bg-yellow-500 rounded-full h-12 w-12 flex items-center justify-center text-white text-xl font-bold mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Lagerhäuser</h3>
                        <p className="text-lg">
                            Ein breites Netzwerk von Lagerhäusern weltweit zur Vereinfachung Ihrer Lösungen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
