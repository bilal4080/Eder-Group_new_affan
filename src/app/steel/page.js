"use client";
import React, {useState} from "react";

const items = [
    {
        name: "Träger",
        image: "https://www.metallparadies.de/images/product_images/original_images/stahl-traegerprofil-b-1300.jpg",
    },
    {
        name: "Voll-/Stabmaterial",
        image: "https://semigent.hu/storage/uploads/images/8466993b3b6a4cffb73fce0d33cd641e.jpg",
    },
    {
        name: "Bleche",
        image: "https://www.bucher-stahl.de/fileadmin/user_upload/backgrounds/produkte/header_img/bucher-produkte-bleche-header__2_.jpg",
    },
    {
        name: "Formrohre & Profile",
        image: "https://www.brr.ch/thumbor/rdPpftbbZ4qQpfJT4ZOLW2EY8Oc=/filters:cachevalid(2021-04-14T20:44:16.233813):strip_icc():strip_exif()/cms/Shop/Headerbilder/sh_10_formrohre-hohlprofile.png",
    },
    {
        name: "Rundrohre",
        image: "https://www.opo.de/medias/52.080.89-90-xl.jpg?context=bWFzdGVyfFByb2R1Y3RJbWFnZXN8MTI3ODIwfGltYWdlL2pwZWd8YURCbUwyZ3hOaTg0T0RJd056QXpNak15TURNd0x6VXlMakE0TUM0NE9TMDVNQzE0YkM1cWNHY3wwOGJkZDg5MTAwNmI5NGZkNmMzMDk2M2E5N2VjOWJkZjEyZmI4Zjg1ZWIzNGY4NTI1M2RhNTJlNmFlNzkyYzRj",
    },
    {
        name: "Rohrverbindungen",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Installationssysteme",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Heizkörper",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Armaturen & Pumpen",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Streckmetalle",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Gitter",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Gitterroste",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Laufschienensysteme",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Geländersysteme",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Autogen-/Pressluftzubehör",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "MIG/MAG, WIG & Plasma",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Schweißzubehör",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Arbeitsstoffe & Beizprodukte",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Arbeitsschutz",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
];
const additionalItems = [
    {
        name: "Aluminium",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Bleche",
        image: "https://www.metallwelt.at/fileadmin/content/produktbilder/01_Stahlbleche_DSC_5040.jpg",
    },
    {
        name: "Cortenstahl",
        image: "https://t3.ftcdn.net/jpg/02/84/28/52/360_F_284285205_j8ew2fNsdEsPoPHnd8GtAiXZVjlK9kHj.jpg",
    },
    {
        name: "Dekorohre",
        image: "https://www.schmiedekult.de/media/image/product/12889/lg/edelstahlrohr-geschweisst-424-x-2mm-guete-14301-in-240-korn-geschliffen-bis-3000mm-laenge.jpg",
    },
    {
        name: "Edelstahl",
        image: "https://www.batzerstahl.de/images/edelstahl-uebersicht-batzerstahl-Fotolia_132614358_XS.jpg",
    },
    {
        name: "Flansche",
        image: "https://yenaengineering.nl/wp-content/uploads/2022/09/image-27.png",
    },
    {
        name: "Gitter",
        image: "https://www.kso-beizerei.de/wp-content/uploads/2022/07/gitter.jpg",
    },
    {
        name: "Hohlprofile / Formrohre",
        image: "https://www.ewth.at/media/8c/9b/9b/1594715718/Stahl.jpg",
    },
    {
        name: "Installationssysteme",
        image: "https://www.infrabuild.com/wp-content/uploads/sites/8/2018/04/CVLX-Saleyard-hero-1.jpg",
    },
    {
        name: "Bleche",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Cortenstahl",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Dekorohre",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Edelstahl",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Flansche",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Gitter",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Hohlprofile / Formrohre",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Aluminium",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Bleche",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Cortenstahl",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Dekorohre",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Edelstahl",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Flansche",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Gitter",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
    {
        name: "Hohlprofile / Formrohre",
        image: "https://t3.ftcdn.net/jpg/03/19/13/14/360_F_319131476_vPBEjt7LLKdDlUJK1LskGOBo3AejUJdG.jpg",
    },
];

const allItems = [...items, ...additionalItems];

const Page = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = allItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="relative">
            {/* Overlay starts here */}
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="text-center text-white">
                    <h1 className="text-2xl font-bold mb-4">This page is in development process</h1>
                    <p>Please be patient....</p>
                </div>
            </div>
            {/* Overlay ends here */}
            <div className="container mx-auto p-4 pt-32">
                <div className="mb-4 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full max-w-lg"
                    />
                </div>
                <h1 className="justify-center flex text-xl">STEEL METALS WE HAVE</h1>
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-6 gap-4 pt-5">
                        {filteredItems.map((item, index) => (
                            <div key={index} className="border p-4 rounded-lg flex flex-col items-center">
                                <img src={item.image} alt={item.name} className="mb-4 h-24" />
                                <span className="text-center">{item.name}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center pt-5 text-red-500">No items found</div>
                )}
                {/* New section starts here */}
                <h1 className="justify-center flex text-xl mt-10">ADDITIONAL METALS</h1>
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-4 pt-5">
                        {filteredItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative group border p-4 rounded-lg flex flex-col items-center"
                            >
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
                                <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center pt-5 text-red-500">No items found</div>
                )}
            </div>
        </div>
    );
};

export default Page;
