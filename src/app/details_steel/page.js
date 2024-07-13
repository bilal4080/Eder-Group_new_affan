"use client";

import {useState, useEffect} from "react";

const products = [
    {
        id: 1,
        name: "Pre-welded flanges PN16",
        imageUrl: "https://www.vhg-gruppe.de/wordpress/wp-content/uploads/DIN-2633.png",
    },
    {
        id: 2,
        name: "Pre-welded flanges PN40",
        imageUrl: "https://protubo.biz/media/image/03/89/c6/DIN_EN_1092-1_TYP11_DN150_PN10_600x600.jpg",
    },
    {
        id: 3,
        name: "Blind flanges PN16",
        imageUrl: "https://protubo.biz/media/image/03/89/c6/DIN_EN_1092-1_TYP11_DN150_PN10_600x600.jpg",
    },
    {
        id: 4,
        name: "Stainless Steel Pre-welded flanges",
        imageUrl: "https://www.heco.de/webservice/pictures/articlegroup/1559457.png",
    },
    {
        id: 5,
        name: "Pre-welded flanges PN6",
        imageUrl:
            "https://www.flanschen-fitting-shop.de/59-tm_large_default/vorschweissflansch-pn6-din2631-1080-rst37-2.jpg",
    },
    {
        id: 6,
        name: "Stainless Steel Pre-welded flanges PN16 1.4571 / 1.4404",
        imageUrl: "https://www.heco.de/webservice/pictures/articlegroup/1559666.png",
    },
    {
        id: 7,
        name: "Stainless Steel Pre-welded press-formed V4A",
        imageUrl: "https://www.zickwolff.de/media/image/cc/d7/42/V-Flansch-71-PN40-4loch_600x600.jpg",
    },
    {id: 8, name: "Blind flanges PN40", imageUrl: "https://www.heco.de/webservice/pictures/articlegroup/320829.png"},
    {
        id: 9,
        name: "Stainless Steel Pre-welded press-formed V2A",
        imageUrl: "https://i.ebayimg.com/images/g/qPEAAOSwXExhsNO7/s-l500.jpg",
    },
    {
        id: 10,
        name: "Threaded flanges",
        imageUrl: "https://www.schwarte-shop.de/media/i/p/popup/tempswgewindeflansch321.jpg",
    },
];

const Page = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleSelect = (product) => {
        setSelectedProducts((prevSelectedProducts) => {
            const isSelected = prevSelectedProducts.includes(product);
            const updatedProducts = isSelected
                ? prevSelectedProducts.filter((p) => p.id !== product.id)
                : [...prevSelectedProducts, product];
            setDescription(updatedProducts.map((p) => p.name).join("\n"));
            return updatedProducts;
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY || window.pageYOffset;
            const documentHeight = document.documentElement.scrollHeight;

            if (windowHeight + scrollY >= documentHeight) {
                setShowLoader(true);
            } else {
                setShowLoader(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSendEmail = () => {
        const toEmail = "kontakt@the-eder.de"; // Replace with your email address
        const subject = "Selected Products";
        const emailBody = `Email: ${email}\n\nDescription: ${description}\n\nProducts:\n${selectedProducts
        .map((p) => p.name)
        .join("\n")}`;
        const mailToLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            emailBody
        )}`;
        window.location.href = mailToLink;
    };

    const openModal = () => {
        setDescription(selectedProducts.map((p) => p.name).join("\n"));
        setShowModal(true);
    };

    return (
        <div className="pt-24 text-black container mx-auto px-4 md:px-0">
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
                    <button onClick={openModal} className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg">
                        Next
                    </button>
                </div>
            )}
            {/* {showLoader && (
                <div className="flex items-center justify-center my-8">
                    <div
                        className="w-24 h-24 border-8 border-black rounded-full animate-spin"
                        style={{borderTopColor: "transparent"}}
                    ></div>
                    <p className="ml-4 text-gray-700">More Products Coming Soon...</p>
                </div>
            )} */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
                        <h2 className="text-xl font-bold mb-4">Selected Products</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                rows="4"
                                placeholder="Enter a description"
                            ></textarea>
                        </div>
                        <button onClick={handleSendEmail} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
                            Send Email
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg ml-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
