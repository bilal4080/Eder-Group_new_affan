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
        image: "https://traditional-bathrooms.com/tb/wp-content/uploads/2022/06/Gusseisen-Heizkörper-INDUSTRIAL-IND10660.jpg",
    },
    {
        name: "Armaturen & Pumpen",
        image: "https://wassermeister.net/wp-content/uploads/2021/10/KSB-online.jpg",
    },

    {
        name: "Streckmetalle",
        image: "https://www.metallpfister.ch/img/2p8R1jWYaB/1920x0_ratio/Titel_Streckmetall.jpg?1657028040",
    },
    {
        name: "Glitter",
        image: "https://gvsystem.co.uk/wp-content/uploads/2022/09/Stainless-Steel-Grids-.jpg",
    },
    {
        name: "Gitterroste",
        image: "https://i.ebayimg.com/images/g/UA8AAOSw2StgipxA/s-l1200.jpg",
    },
    {
        name: "Laufschienensysteme",
        image: "https://bilder.baur.de/i/empiriecom/2185873f9e547387f90aae070bfbc24d.jpg?$PL_landscape_hq$",
    },
    {
        name: "Geländersysteme",
        image: "https://cdn.cloudbf.com/thumb/format/mini_xsize/upfile/100/images/15/20210825143723482.jpg.webp",
    },
    {
        name: "Voll-/Stabmaterial",
        image: "https://www.weldorado.de/media/image/9d/97/3f/552200_24_fq_Gasflaschtrage-Arnitur_600x600.jpg",
    },
    {
        name: "Autogen-/ Pressluft Zubehör",
        image: "https://www.bucher-stahl.de/fileadmin/user_upload/backgrounds/produkte/header_img/bucher-produkte-bleche-header__2_.jpg",
    },
    {
        name: "MIG / MAG, WIG & Plasma",
        image: "https://m.media-amazon.com/images/I/718ElMJ9qlL.jpg",
    },
    {
        name: "Schweißzubehör",
        image: "https://www.poppstar.de/media/b2/e6/ef/1666367032/03916271f86541f88321671f15a1aa50-1010629_1.jpg",
    },
    {
        name: "Arbeitsstoffe & Beizprodukte",
        image: "https://media.istockphoto.com/id/1170096342/photo/professional-industrial-cleaner-in-protective-uniform-cleaning-floor-of-food-processing-plant.jpg?s=612x612&w=0&k=20&c=MPXg00sFhtJBkadBKVWWrSqAkmeCdatsh5qvkwbFBk8=",
    },
    {
        name: "Arbeitsstoffe & Beizprodukte",
        image: "https://www.lagertechnik-direkt.de/cdn/shop/products/meta-clip-arbeitsschutz-komplettregal-verzinkt-lagertechnik-direkt-1_1024x1024.png?v=1698313473",
    },
    // Add more items here if needed up to 19 items
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
    // Ensure there are 19 items here as well
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
];

const Page = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredAdditionalItems = additionalItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    <div className="grid grid-cols-6 gap-4 pt-5  pb-5">
                        {filteredItems.map((item, index) => (
                            <div key={index} className="border p-4 rounded-lg flex flex-col items-center">
                                <img src={item.image} alt={item.name} className="mb-4 h-24 hover:scale-105 " />
                                <span className="text-center">{item.name}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center pt-5 text-red-500">No items found</div>
                )}

                <div className="bg-gray-100 p-8 text-center">
                    <h2 className="text-2xl font-semibold mb-4 flex justify-center">
                        Stahl in allen Formen online kaufen
                    </h2>
                    <p className="text-gray-700">
                        Du kannst bei uns nicht nur Stahl in allen erdenklichen Formen online kaufen – mit über 100.000
                        Artikel führen wir ein einzigartiges Online-Sortiment mit verschiedensten Werkstoffen. In
                        unserem Sortiment findest du Träger, Voll- & Stabmaterial, Bleche, Formrohre & Profile,
                        Rundrohre, Rohrverbindungen, Installationssysteme, Armaturen & Pumpen und vieles mehr.
                    </p>
                    <p className="text-blue-500 mt-4 flex justify-center">
                        Entdecke jetzt unser einzigartiges Sortiment!
                    </p>
                </div>
                {/* New section starts here */}
                <h1 className="justify-center flex text-xl mt-10">ADDITIONAL METALS</h1>
                {filteredAdditionalItems.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-4 pt-5">
                        {filteredAdditionalItems.map((item, index) => (
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
