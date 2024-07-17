"use client";
import React, {useState} from "react";
import Link from "next/link";
import {FaTruck, FaShoppingCart, FaDollarSign, FaClipboardList, FaFileAlt, FaFileDownload} from "react-icons/fa";
const items = [
    {
        name: "Supports",
        image: "https://www.metallparadies.de/images/product_images/original_images/stahl-traegerprofil-b-1300.jpg",
    },
    {
        name: "Solid/Rod Material",
        image: "https://semigent.hu/storage/uploads/images/8466993b3b6a4cffb73fce0d33cd641e.jpg",
    },
    {
        name: "Sheets",
        image: "https://www.bucher-stahl.de/fileadmin/user_upload/backgrounds/produkte/header_img/bucher-produkte-bleche-header__2_.jpg",
    },
    {
        name: "Hollow Sections & Profiles",
        image: "https://www.brr.ch/thumbor/rdPpftbbZ4qQpfJT4ZOLW2EY8Oc=/filters:cachevalid(2021-04-14T20:44:16.233813):strip_icc():strip_exif()/cms/Shop/Headerbilder/sh_10_formrohre-hohlprofile.png",
    },
    {
        name: "Round Tubes",
        image: "https://www.opo.de/medias/52.080.89-90-xl.jpg?context=bWFzdGVyfFByb2R1Y3RJbWFnZXN8MTI3ODIwfGltYWdlL2pwZWd8YURCbUwyZ3hOaTg0T0RJd056QXpNak15TURNd0x6VXlMakE0TUM0NE9TMDVNQzE0YkM1cWNHY3wwOGJkZDg5MTAwNmI5NGZkNmMzMDk2M2E5N2VjOWJkZjEyZmI4Zjg1ZWIzNGY4NTI1M2RhNTJlNmFlNzkyYzRj",
    },
    {
        name: "Pipe Connections",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Installation Systems",
        image: "https://img.directindustry.com/images_di/projects/images-g/new-aluminum-pipe-vulkan-lokring-rohrverbindungen-gmbh-co-kg-18103-9893306.jpg",
    },
    {
        name: "Radiators",
        image: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/9503d653f0c53e6d389ffaeb4f0730b3/large.JPG",
    },
    {
        name: "Fittings & Pumps",
        image: "https://wassermeister.net/wp-content/uploads/2021/10/KSB-online.jpg",
    },
    {
        name: "Expanded Metals",
        image: "https://www.metallpfister.ch/img/2p8R1jWYaB/1920x0_ratio/Titel_Streckmetall.jpg?1657028040",
    },
    {
        name: "Glitter",
        image: "https://gvsystem.co.uk/wp-content/uploads/2022/09/Stainless-Steel-Grids-.jpg",
    },
    {
        name: "Gratings",
        image: "https://i.ebayimg.com/images/g/UA8AAOSw2StgipxA/s-l1200.jpg",
    },
    {
        name: "Running Rail Systems",
        image: "https://bilder.baur.de/i/empiriecom/2185873f9e547387f90aae070bfbc24d.jpg?$PL_landscape_hq$",
    },
    {
        name: "Balustrade Systems",
        image: "https://cdn.cloudbf.com/thumb/format/mini_xsize/upfile/100/images/15/20210825143723482.jpg.webp",
    },
    {
        name: "Solid/Rod Material",
        image: "https://www.weldorado.de/media/image/9d/97/3f/552200_24_fq_Gasflaschtrage-Arnitur_600x600.jpg",
    },
    {
        name: "Autogenous/Air Accessories",
        image: "https://www.bucher-stahl.de/fileadmin/user_upload/backgrounds/produkte/header_img/bucher-produkte-bleche-header__2_.jpg",
    },
    {
        name: "MIG / MAG, TIG & Plasma",
        image: "https://m.media-amazon.com/images/I/718ElMJ9qlL.jpg",
    },
    {
        name: "Welding Accessories",
        image: "https://www.poppstar.de/media/b2/e6/ef/1666367032/03916271f86541f88321671f15a1aa50-1010629_1.jpg",
    },
    {
        name: "Work Materials & Pickling Products",
        image: "https://media.istockphoto.com/id/1170096342/photo/professional-industrial-cleaner-in-protective-uniform-cleaning-floor-of-food-processing-plant.jpg?s=612x612&w=0&k=20&c=MPXg00sFhtJBkadBKVWWrSqAkmeCdatsh5qvkwbFBk8=",
    },
    {
        name: "Work Materials & Pickling Products",
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
        name: "Sheets",
        image: "https://www.metallwelt.at/fileadmin/content/produktbilder/01_Stahlbleche_DSC_5040.jpg",
    },
    {
        name: "Corten Steel",
        image: "https://t3.ftcdn.net/jpg/02/84/28/52/360_F_284285205_j8ew2fNsdEsPoPHnd8GtAiXZVjlK9kHj.jpg",
    },
    {
        name: "Decorative Pipes",
        image: "https://www.schmiedekult.de/media/image/product/12889/lg/edelstahlrohr-geschweisst-424-x-2mm-guete-14301-in-240-korn-geschliffen-bis-3000mm-laenge.jpg",
    },
    {
        name: "Stainless Steel",
        image: "https://www.batzerstahl.de/images/edelstahl-uebersicht-batzerstahl-Fotolia_132614358_XS.jpg",
    },
    {
        name: "Flanges",
        image: "https://yenaengineering.nl/wp-content/uploads/2022/09/image-27.png",
    },
    {
        name: "Grids",
        image: "https://www.kso-beizerei.de/wp-content/uploads/2022/07/gitter.jpg",
    },
    {
        name: "Hollow Profiles / Structural Pipes",
        image: "https://www.ewth.at/media/8c/9b/9b/1594715718/Stahl.jpg",
    },
    {
        name: "Installation Systems",
        image: "https://www.infrabuild.com/wp-content/uploads/sites/8/2018/04/CVLX-Saleyard-hero-1.jpg",
    },
    {
        name: "JAKO",
        image: "https://m.media-amazon.com/images/I/31B+Md1eGCL._AC_UF894,1000_QL80_.jpg",
    },
    {
        name: "Piston Rods",
        image: "https://www.stainless-fruechtl.de/wp-content/uploads/2021/12/Kolbenstangen-Exakt-Gerade.jpg",
    },
    {
        name: "Perforated Sheets",
        image: "https://faco-metalltechnik.de/fileadmin/_processed_/3/c/csm_galerieLochblech_Rv_gewalzt_Stahl_1-scaled-800x533_71fff723ff.jpeg",
    },
    {
        name: "Brass",
        image: "https://eshop.boellhoff.de/out/pictures/master/product/1/din_84_messing__.jpg",
    },
    {
        name: "Nirostick Balustrade Systems",
        image: "https://img.directindustry.com/images_di/photo-mg/30419-13859859.jpg",
    },
    {
        name: "Oval Tubes",
        image: "https://ae01.alicdn.com/kf/S481f717e932241f4987c0f65d26e5c4fl/Aluminum-oval-pipe-30mm-oval-steel-tube-32mm-aluminum-alloy-oval-shape-steel-tubing-40mm-oval.jpg",
    },
    {
        name: "Precision Tubes",
        image: "https://www.mst-edelstahlrohr.de/media/image/product/51/lg/nahtlose-praezisionsrohre-en-10216-5-en-10305-1-astm-a269-werkstoff-316l-14404-3-4-x-0065-1905-x-165-mm.jpg",
    },
    {
        name: "Quality Steel / Steel",
        image: "https://www.hsm-stahl.de/wp-content/uploads/2023/06/shutterstock_172763705-scaled.jpg",
    },
    {
        name: "Tubes",
        image: "https://www.coremarkmetals.com/files/image/large/HR_TUBE_RECT_3_X_2_075_3000.jpg",
    },
    {
        name: "Expanded Metals",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDEVuFVz0saFOktLGiXgcLEih7I1DihqqeKA&s",
    },
    {
        name: "Supports",
        image: "https://t3.ftcdn.net/jpg/03/50/13/06/360_F_350130648_UiZz70eBo9KGHDNa9FifTVR2ShMcToHo.jpg",
    },
    {
        name: "U-Profiles",
        image: "https://swr-balustrade.co.uk/images/contentSlots/Slot-1/OnLevel/productImage-Handrail-U-Profile-SS.jpg",
    },
];

const features = [
    {
        icon: <FaTruck className="text-4xl text-orange-500" />,
        title: "Desired Delivery Date",
        description: "You decide when we deliver",
    },
    {
        icon: <FaShoppingCart className="text-4xl text-orange-500" />,
        title: "Inquiries and Shopping",
        description: "When and where you want",
    },
    {
        icon: <FaDollarSign className="text-4xl text-orange-500" />,
        title: "Personal Price Calculation",
        description: "The same conditions online and offline",
    },
    {
        icon: <FaClipboardList className="text-4xl text-orange-500" />,
        title: "Direct Order",
        description: "Order multiple products at the same time",
    },
    {
        icon: <FaFileAlt className="text-4xl text-orange-500" />,
        title: "Quote Management",
        description: "Accept or change offers at any time",
    },
    {
        icon: <FaFileDownload className="text-4xl text-orange-500" />,
        title: "Document and Order Management",
        description: "Download all documents",
    },
];
const Page = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredAdditionalItems = additionalItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative p-4 pt-32">
            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full max-w-lg"
                />
            </div>
            {/* Overlay starts here */}
            {/* <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="text-center text-white">
                    <h1 className="text-2xl font-bold mb-4">This page is in development process</h1>
                    <p>Please be patient....</p>
                </div>
            </div> */}
            {/* Overlay ends here */}

            <div className="container mx-auto ">
                <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4">What are your benefits with us you may ask</h2>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✔️</span>
                            <span className="text-gray-700">
                                You will save time, effort, and be able to cut costs – through our many years of
                                extensive experience in sourcing
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✔️</span>
                            <span className="text-gray-700">
                                You will be able to concentrate more on your core business again – through the
                                high-quality standards of the EDER GmbH
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✔️</span>
                            <span className="text-gray-700">
                                You will have more opportunities for your sales team – through our wide network of
                                possibilities
                            </span>
                        </li>
                    </ul>
                    <p className="mt-4 font-bold">
                        Let’s talk today about how your business can benefit from our services.
                    </p>

                    <h3 className="text-xl font-bold mt-8">EDER Steel core products</h3>
                    <p className="mt-4 text-gray-700">
                        EDER has everything you need, from stainless steel coils or sheets in various grades like 304,
                        304L, 316, 316L, 321 or 409, 420, 430, 439, 441. If you don’t see what you want, just let us
                        know and we’ll get it for you!
                    </p>

                    <h3 className="text-xl font-bold mt-8">How to order?</h3>
                    <p className="mt-4 text-gray-700">
                        We have millions of Products, you just need to select the items you need and send us Query
                        through email, our Suport will reach you as soon as possible. In this stage you dont need to pay
                        any amount
                    </p>
                </div>
                <h1 className="justify-center flex text-xl font-bold '">Steel Metals we have</h1>
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-5 pb-5">
                        {filteredItems.map((item, index) => (
                            <Link
                                key={index}
                                href={`/details_steel?name=${item.name}&image=${encodeURIComponent(item.image)}`}
                                className="border p-4 rounded-lg flex flex-col items-center"
                            >
                                <img src={item.image} alt={item.name} className="mb-4 h-24 hover:scale-105" />
                                <span className="text-center">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center pt-5 text-red-500">No items found</div>
                )}
                <div className="bg-gray-100 p-8 text-center">
                    <h2 className="text-2xl font-semibold mb-4 flex justify-center">Buy Steel in All Shapes Online</h2>
                    <p className="text-gray-700">
                        Not only can you buy steel in all imaginable forms from us online – with over 100,000 items, we
                        offer a unique online range of various materials. In our assortment, you will find supports,
                        solid & rod material, sheets, hollow sections & profiles, round tubes, pipe connections,
                        installation systems, fittings & pumps, and much more.
                    </p>
                    <p className="text-blue-500 mt-4 flex justify-center">Discover our unique range now!</p>
                </div>
                <h1 className="justify-center flex text-xl mt-10">ADDITIONAL METALS</h1>
                {filteredAdditionalItems.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-4 pt-5">
                        {filteredAdditionalItems.map((item, index) => (
                            <Link
                                key={index}
                                href={`/details_steel?name=${item.name}&image=${encodeURIComponent(item.image)}`}
                                className="relative group border p-4 rounded-lg flex flex-col items-center"
                            >
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
                                <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center pt-5 text-red-500">No items found</div>
                )}
                <div className="py-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Your Benefits in the EDER Online Shop</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg"
                            >
                                {feature.icon}
                                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                                <p className="mt-2">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
