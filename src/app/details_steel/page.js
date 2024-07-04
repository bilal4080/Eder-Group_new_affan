"use client";

import {useState} from "react";

const products = [
    {
        id: 1,
        name: "Vorschweissflansche PN16",
        imageUrl: "https://www.vhg-gruppe.de/wordpress/wp-content/uploads/DIN-2633.png",
    },
    {
        id: 2,
        name: "Vorschweissflansche PN40",
        imageUrl: "https://protubo.biz/media/image/03/89/c6/DIN_EN_1092-1_TYP11_DN150_PN10_600x600.jpg",
    },
    {
        id: 3,
        name: "Blindflansche PN16",
        imageUrl: "https://protubo.biz/media/image/03/89/c6/DIN_EN_1092-1_TYP11_DN150_PN10_600x600.jpg",
    },
    {
        id: 4,
        name: "Edelstahl Vorschweissflansche",
        imageUrl: "https://www.heco.de/webservice/pictures/articlegroup/1559457.png",
    },
    {
        id: 5,
        name: "Vorschweissflansche PN6",
        imageUrl:
            "https://www.flanschen-fitting-shop.de/59-tm_large_default/vorschweissflansch-pn6-din2631-1080-rst37-2.jpg",
    },
    {
        id: 6,
        name: "Edelstahl Vorschweissflansche PN16 1.4571 / 1.4404",
        imageUrl: "https://www.heco.de/webservice/pictures/articlegroup/1559666.png",
    },
    {
        id: 7,
        name: "Edelstahl Vorschweissbördel gepresst V4A",
        imageUrl: "https://www.zickwolff.de/media/image/cc/d7/42/V-Flansch-71-PN40-4loch_600x600.jpg",
    },
    {id: 8, name: "Blindflansche PN40", imageUrl: "https://www.heco.de/webservice/pictures/articlegroup/320829.png"},
    {
        id: 9,
        name: "Edelstahl Vorschweissbördel gepresst V2A",
        imageUrl: "https://i.ebayimg.com/images/g/qPEAAOSwXExhsNO7/s-l500.jpg",
    },
    {
        id: 10,
        name: "Gewindeflanche",
        imageUrl: "https://www.schwarte-shop.de/media/i/p/popup/tempswgewindeflansch321.jpg",
    },
];

const Page = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleSelect = (product) => {
        setSelectedProducts((prevSelectedProducts) => {
            if (prevSelectedProducts.includes(product)) {
                return prevSelectedProducts.filter((p) => p.id !== product.id);
            } else {
                return [...prevSelectedProducts, product];
            }
        });
    };

    return (
        <div className="pt-24 text-black container mx-auto px-4 md:px-0">
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="text-center text-white">
                    <h1 className="text-2xl font-bold mb-4">This page is in development process</h1>
                    <p>Please be patient....</p>
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-6 flex justify-center">Products</h1>
            <ul className="flex flex-col gap-4">
                {products.map((product) => (
                    <li key={product.id} className="flex items-center p-4 border border-gray-300 rounded-lg">
                        <input
                            type="checkbox"
                            checked={selectedProducts.includes(product)}
                            onChange={() => handleSelect(product)}
                            className="mr-4"
                        />
                        <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-contain" />
                        <span className="ml-4">{product.name}</span>
                    </li>
                ))}
            </ul>
            {selectedProducts.length > 0 && (
                <div className="fixed top-0 right-0 p-4 bg-white shadow-lg w-full h-1/3 md:w-64 md:h-full overflow-y-auto pt-24 md:pt-24">
                    <h2 className="text-xl font-bold mb-4">Selected Products</h2>
                    <ul>
                        {selectedProducts.map((product) => (
                            <li key={product.id} className="flex items-center p-2 border-b border-gray-300">
                                <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-contain" />
                                <span className="ml-4">{product.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Page;
