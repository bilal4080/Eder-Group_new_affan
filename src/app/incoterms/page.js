"use client";
import {useState} from "react";

const incotermsData = {
    EXW: {
        description:
            "EXW stands for Ex Works, which means that the seller has fulfilled their obligation to deliver when the goods are made available at their premises (i.e., works, factory, warehouse, etc.) to the buyer.",
        sellerObligations: [
            "Goods, commercial invoice and documentationGoods, commercial invoice and documentation",
            "Export packaging and marking",
            "Export licenses and customs formalities",
            "Pre-carriage to terminal",
            "Delivery to named place of delivery",
            "Cost of pre-shipment inspection",
            "Proof of delivery",
        ],
        buyerObligations: [
            "Payment for goods at price agreed upon in sales contract",
            "Unloading from arriving means of transportation",
            "Loading charges",
            "Main carriage",
            "Discharge and onward carriage",
            "Import formalities and duties",
            "Cost of pre-shipment inspection (for import clearance)",
        ],
    },
    FCA: {
        description:
            "FCA stands for Free Carrier, which means that the seller delivers the goods to the carrier or another person nominated by the buyer at the seller’s premises or another named place.",
        sellerObligations: [
            "Goods, commercial invoice and documentation",
            "Export packaging and marking",
            "Export licenses and customs formalities",
            "Pre-carriage to terminal",
            "Delivery to named place of delivery",
            "Cost of pre-shipment inspection",
            "Proof of delivery",
        ],
        buyerObligations: [
            "Payment for goods at price agreed upon in sales contract",
            "Unloading from arriving means of transportation",
            "Loading charges",
            "Main carriage",
            "Discharge and onward carriage",
            "Import formalities and duties",
            "Cost of pre-shipment inspection (for import clearance)",
        ],
    },
    // Add similar entries for other INCOTERMS...
    FAS: {
        description:
            "FAS stands for Free Alongside Ship, which means that the seller delivers when the goods are placed alongside the vessel (e.g., on a quay or a barge) nominated by the buyer at the named port of shipment.",
        sellerObligations: [
            "Goods, commercial invoice and documentation",
            "Export packaging and marking",
            "Export licenses and customs formalities",
            "Pre-carriage to terminal",
            "Delivery alongside vessel at port of shipment",
            "Cost of pre-shipment inspection",
            "Proof of delivery",
        ],
        buyerObligations: [
            "Pay the price of the goods as provided in the sales contract",
            "Loading charges",
            "Main carriage",
            "Discharge and onward carriage",
            "Import formalities and duties",
            "Cost of pre-shipment inspection (for import clearance)",
        ],
    },
    FOB: {
        description:
            "FOB stands for Free On Board, which means that the seller delivers the goods on board the vessel nominated by the buyer at the named port of shipment or procures the goods already so delivered.",
        sellerObligations: [
            "Goods, commercial invoice and documentation",
            "Export packaging and marking",
            "Export licenses and customs formalities",
            "Pre-carriage and delivery",
            "Cost of pre-shipment inspection",
            "Proof of delivery",
        ],
        buyerObligations: [
            "Payment for goods as specified in sales contract",
            "Main carriage",
            "Discharge and onward carriage",
            "Import formalities and duties",
            "Cost of pre-shipment inspection (for import clearance)",
        ],
    },
    CFR: {
        description:
            "CFR stands for Cost and Freight, which means that the seller delivers the goods on board the vessel or procures the goods already so delivered. The risk of loss of or damage to the goods passes when the goods are on board the vessel.",
        sellerObligations: [
            "Goods, commercial invoice and documentation",
            "Export packaging and marking",
            "Export licenses and customs formalities",
            "Pre-carriage to terminal",
            "Delivery to named place of delivery",
            "Cost of pre-shipment inspection",
            "Proof of delivery",
        ],
        buyerObligations: [
            "Payment for goods as specified in sales contract",
            "Risk starting with onboard delivery",
            "Discharge and onward carriage",
            "Import formalities and duties",
            "Cost of pre-shipment inspection (for import clearance)",
        ],
    },
    CIF: {
        description:
            "CIF stands for Cost, Insurance, and Freight, which means that the seller delivers the goods on board the vessel or procures the goods already so delivered. The risk of loss of or damage to the goods passes when the goods are on board the vessel. The seller also contracts for insurance cover against the buyer’s risk of loss of or damage to the goods during the carriage.",
        sellerObligations: [
            "Goods, commercial invoice and documentation",
            "Export packaging and marking",
            "Delivery at named port of destination",
            "Loading charges",
            "Proof of deliveryy",
            "Cost of pre-shipment inspection",
            "Minimum insurance coverage",
        ],
        buyerObligations: [
            "Payment for goods as specified in sales contract",
            "Discharge and onward carriage",
            "Import formalities and duties",
            "Cost of pre-shipment inspection (for import clearance)",
        ],
    },
    CPT: {
        description:
            "CPT stands for Carriage Paid To, which means that the seller delivers the goods to the carrier or another person nominated by the seller at an agreed place (if any such place is agreed between parties). The seller must contract for and pay the costs of carriage necessary to bring the goods to the named place of destination.",
        sellerObligations: [
            "Goods, commercial invoice and documentation",
            "Export packaging and marking",
            "Export licenses and customs formalities",
            "Loading charges",
            "Cost of pre-shipment inspection",
            "Proof of delivery",
        ],
        buyerObligations: [
            "Payment for goods at price agreed upon in sales contract",
            "Import formalities and duties",
            "Cost of pre-shipment inspection (for import clearance)",
        ],
    },
    CIP: {
        description:
            "CIP stands for Carriage and Insurance Paid To, which means that the seller delivers the goods to the carrier or another person nominated by the seller at an agreed place (if any such place is agreed between parties). The seller must contract for and pay the costs of carriage necessary to bring the goods to the named place of destination. The seller also contracts for insurance cover against the buyer’s risk of loss of or damage to the goods during the carriage.",
        sellerObligations: [
            "Goods, commercial invoice and documentation",
            "Export packaging and marking",
            "Export licenses and customs formalities",
            "Pre-carriage to terminal",
            "Delivery to named place of delivery",
            "Cost of pre-shipment inspection",
            "Proof of delivery",
            "All-risk insurance coverage",
        ],
        buyerObligations: [
            "Payment for goods at price agreed upon in sales contract",
            "Import formalities and duties",
            "Cost of pre-shipment inspection (for import clearance)",
        ],
    },
    DPU: {
        description:
            "DPU stands for Delivered at Place Unloaded, which means that the seller delivers when the goods, once unloaded from the arriving means of transport, are placed at the disposal of the buyer at a named place of destination.",
        sellerObligations: [
            "Goods, commercial invoice and documentation",
            "Export packaging and marking",
            "Export licenses and customs formalities",
            "Pre-carriage to terminal",
            "Delivery to named place of delivery",
            "Unloading charges",
            "Cost of pre-shipment inspection",
            "Proof of delivery",
        ],
        buyerObligations: [
            "Payment for goods at price agreed upon in sales contract",
            "Import formalities and duties",
            "Cost of pre-shipment inspection (for import clearance)",
            "Onward carriage and delivery to buyer (depending upon named place)",
        ],
    },
    DAP: {
        description:
            "DAP stands for Delivered at Place, which means that the seller delivers when the goods are placed at the disposal of the buyer on the arriving means of transport ready for unloading at the named place of destination.",
        sellerObligations: [
            "Goods, commercial invoice and documentation",
            "Export packaging and marking",
            "Export licenses and customs formalities",
            "Pre-carriage to terminal",
            "Delivery to named place of delivery",
            "Cost of pre-shipment inspection",
            "Proof of delivery",
        ],
        buyerObligations: [
            "Payment for goods at price agreed upon in sales contract",
            "Unloading from arriving means of transportation",
            "Onward carriage and delivery to buyer (depending on named place)",

            "Import formalities and duties",
        ],
    },
    DDP: {
        description:
            "DDP stands for Delivered Duty Paid, which means that the seller delivers the goods when the goods are placed at the disposal of the buyer, cleared for import on the arriving means of transport ready for unloading at the named place of destination. The seller bears all the costs and risks involved in bringing the goods to the place of destination and has an obligation to clear the goods not only for export but also for import, to pay any duty for both export and import, and to carry out all customs formalities.",
        sellerObligations: [
            "Goods, commercial invoice and documentation",
            "Export packaging and marking",
            "Export licenses and customs formalities",
            "Pre-carriage to terminal",
            "Delivery to named place of delivery",
            "Cost of pre-shipment inspection",
            "Proof of delivery",
        ],
        buyerObligations: [
            "Payment for goods at price agreed upon in sales contract",
            "Assist seller in obtaining any documents or information necessary for export or import clearance formalities",
        ],
    },
};

const Incoterms = () => {
    const [selectedTerm, setSelectedTerm] = useState("EXW");

    return (
        <div className="flex flex-col lg:flex-row justify-between p-5 max-w-7xl mx-auto pt-32">
            <div className="w-full lg:w-2/3 lg:pr-10">
                <h1 className="text-2xl font-bold mb-5">How to Use Incoterms® Rules, Common Shipping Terms</h1>
                <p className="mb-4 text-gray-700">
                    EDER supports the international import and export guidelines and universal shipping terms laid out
                    in the International Chamber of Commerce’s (ICC) Incoterms rules.
                </p>
                <p className="mb-4">
                    Read on to learn more about the Incoterms rules, how to use them, and what’s new in Incoterms 2020
                    compared to Incoterms 2010. And don’t miss the glossary of common shipping terms.
                </p>
                <h2 className="text-xl font-semibold mb-3">What are Incoterms? Are Incoterms mandatory?</h2>
                <p className="mb-4 text-gray-700">
                    Short for “International Commercial Terms,” the Incoterms are a set of globally recognized trade
                    rules organized into 11 abbreviated terms. First published in Paris in 1936, by the{" "}
                    <a className="text-orange-500 underline" href="https://iccwbo.org/">
                        International Chamber of Commerce (ICC)
                    </a>
                    , the Incoterms rules provide:
                </p>

                <div className="">
                    <h2 className="text-xl font-bold mb-4">How do I use Incoterms?</h2>
                    <p className="text-gray-700">
                        When incorporating Incoterms into a sales contract you will need two components: 1) the
                        abbreviated name of the rule/term you're using and 2) a named place.
                    </p>
                    <ul className="list-disc pl-4 mt-4">
                        <li className="text-gray-700">Place of delivery</li>
                        <li className="text-gray-700">Place of destination</li>
                        <li className="text-gray-700">Port of shipment</li>
                        <li className="text-gray-700">Port of destination</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        In the example below, FCA stands for "Free Carrier" and the rest of the entry specifies the
                        "named place of delivery" required in the rule.
                    </p>
                    <div className="bg-white p-4 mt-4 border border-gray-200 rounded">
                        <span className="font-bold">FCA</span>, Generic Cargo Terminal, Chicago O'Hare International
                        Airport (ORD), USA
                    </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-700 mb-2 pt-5">{selectedTerm}</h3>
                <p>{incotermsData[selectedTerm].description}</p>
                <h4 className="text-md font-semibold mb-2 pt-5">Seller’s Obligations</h4>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    {incotermsData[selectedTerm].sellerObligations.map((obligation, index) => (
                        <li key={index}>{obligation}</li>
                    ))}
                </ul>
                <h4 className="text-md font-semibold mb-2">Buyer’s Obligations</h4>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    {incotermsData[selectedTerm].buyerObligations.map((obligation, index) => (
                        <li key={index}>{obligation}</li>
                    ))}
                </ul>
            </div>
            <div className="w-full h-3/4 lg:w-1/3 bg-gray-100 p-5 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">INCOTERMS</h2>
                <ul>
                    {Object.keys(incotermsData).map((term) => (
                        <li
                            key={term}
                            onClick={() => setSelectedTerm(term)}
                            className={`cursor-pointer p-3 mb-2 bg-white rounded-md text-center hover:bg-orange-500 hover:text-white transition duration-300 ${
                                selectedTerm === term ? "bg-blue-500 text-orange-500" : ""
                            }`}
                        >
                            {term}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Incoterms;
