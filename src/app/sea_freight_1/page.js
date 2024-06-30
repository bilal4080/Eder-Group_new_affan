"use client";
import React, {useState} from "react";

const incoterms = [
    {id: 1, term: "EXW", text: "Ex Works"},
    {id: 2, term: "FCA", text: "Free Carrier"},
    {id: 3, term: "FAS", text: "Free Alongside Ship"},
    {id: 4, term: "FOB", text: "Free on Board"},
    {id: 5, term: "CFR", text: "Cost and Freight"},
    {id: 6, term: "CIF", text: "Cost, Insurance, and Freight"},
    {id: 7, term: "CPT", text: "Carriage Paid To"},
    {id: 8, term: "CIP", text: "Carriage and Insurance Paid To"},
    {id: 9, term: "DPU", text: "Delivered at Place Unloaded"},
    {id: 10, term: "DAP", text: "Delivered at Place"},
];

const page = () => {
    const [selectedIncoterm, setSelectedIncoterm] = useState(null);

    const handleIncotermClick = (incoterm) => {
        setSelectedIncoterm(incoterm);
    };

    return (
        <div className="container mx-auto px-4 py-8 pt-24">
            <h2 className="text-2xl font-bold mb-4">Incoterms</h2>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 px-4 border border-gray-200 rounded-md mr-4 md:mr-0">
                    {incoterms.map((incoterm) => (
                        <button
                            key={incoterm.id}
                            className={`text-left p-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                                selectedIncoterm?.id === incoterm.id ? "font-bold" : ""
                            }`}
                            onClick={() => handleIncotermClick(incoterm)}
                        >
                            {incoterm.term} - {incoterm.text}
                        </button>
                    ))}
                </div>
                {selectedIncoterm && (
                    <div className="w-full md:w-1/2 px-4 border border-gray-200 rounded-md">
                        <p className="text-gray-700 text-base leading-relaxed">
                            {selectedIncoterm.text} refers to a specific set of rules governing the responsibilities of
                            buyers and sellers in an international commercial transaction. It determines which party is
                            responsible for tasks like loading, unloading, carriage, and insurance of the goods. By
                            selecting an Incoterm, both parties involved clearly understand their obligations and can
                            mitigate risks associated with international trade.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default page;
