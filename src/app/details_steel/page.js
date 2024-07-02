"use client";

const products = [
    {id: 1, name: "Vorschweissflansche PN16", imageUrl: "https://example.com/image1.png"},
    {id: 2, name: "Vorschweissflansche PN40", imageUrl: "https://example.com/image2.png"},
    {id: 3, name: "Blindflansche PN16", imageUrl: "https://example.com/image3.png"},
    {id: 4, name: "Edelstahl Vorschweissflansche", imageUrl: "https://example.com/image4.png"},
    {id: 5, name: "Vorschweissflansche PN6", imageUrl: "https://example.com/image5.png"},
    {id: 6, name: "Edelstahl Vorschweissflansche PN16 1.4571 / 1.4404", imageUrl: "https://example.com/image6.png"},
    {id: 7, name: "Edelstahl Vorschweissbördel gepresst V4A", imageUrl: "https://example.com/image7.png"},
    {id: 8, name: "Blindflansche PN40", imageUrl: "https://example.com/image8.png"},
    {id: 9, name: "Edelstahl Vorschweissbördel gepresst V2A", imageUrl: "https://example.com/image9.png"},
    {id: 10, name: "Gewindeflanche", imageUrl: "https://example.com/image10.png"},
];

const page = () => {
    return (
        <div className="pt-24 text-black container mx-auto">
            <h1 className="text-2xl font-bold mb-6 flex justify-center">Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="flex items-center p-4 border-b border-gray-300">
                        <img src={product.imageUrl} alt={product.name} className="w-12 h-12" />
                        <span className="ml-4">{product.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default page;
