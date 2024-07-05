"use client";
import React, {useState, useEffect} from "react";
import {Link as LinkScroll} from "react-scroll";
import LogoVPN from "../../../public/Logo.png";
import Image from "next/image";
import {SlArrowDown} from "react-icons/sl";
import Link from "next/link";

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    const [open, setOpen] = useState(false);
    const [subSCSMenu1, setSubSCSMenu1] = useState(null);
    const [subSMenu1, setSSubMenu1] = useState(null);
    const [subECSMenu1, setECSSubMenu1] = useState(null);
    const [subFMenu1, setFSubMenu1] = useState(null);
    const [subIMenu1, setISubMenu1] = useState(null);
    const [subWSMenu1, setWSSubMenu1] = useState(null);
    const [scrollDownActive, setScrollDownActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrollDownActive(true);
            } else {
                setScrollActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);

    const closeMenu = () => {
        setOpen(false);
        setSubSCSMenu1(false);
        setSSubMenu1(false);
        setECSSubMenu1(false);
        setFSubMenu1(false);
        setISubMenu1(false);
        setWSSubMenu1(false);
    };

    const headerItems = [
        {
            heading: "Supply Chain Solutions",
            state: subSCSMenu1,
            func: (data) => {
                setISubMenu1(false);
                setECSSubMenu1(false);
                setWSSubMenu1(false);
                setFSubMenu1(false);
                setSSubMenu1(false);
                setSubSCSMenu1(data);
            },
            subLinks: [
                {link: "/industry_solutions", text: "Industry Solutions"},
                {link: "/port_logistics", text: "Port Logistics"},
                {link: "/offshore_logistics", text: "Offshore Logistics"},
                {link: "/commodity_logistics", text: "Commodity Logistics"},
            ],
        },
        {
            heading: "Services",
            state: subSMenu1,
            func: (data) => {
                setISubMenu1(false);
                setECSSubMenu1(false);
                setWSSubMenu1(false);
                setFSubMenu1(false);
                setSSubMenu1(data);
                setSubSCSMenu1(false);
            },
            subLinks: [
                {link: "/sea_freight", text: "Sea Freight"},
                {link: "/air_freight", text: "Air Freight"},
                {link: "/custom_clear", text: "Custom Clearance"},
                {link: "/ground_dist", text: "Ground Distribution"},
                {link: "/inter_model", text: "Intermodal"},
                {link: "/ware_house", text: "Warehouse"},
                {link: "/trans_border", text: "Cross-border"},
            ],
        },
        {
            heading: "E-Commerce Solutions",
            state: subECSMenu1,
            func: (data) => {
                setISubMenu1(false);
                setECSSubMenu1(data);
                setWSSubMenu1(false);
                setFSubMenu1(false);
                setSSubMenu1(false);
                setSubSCSMenu1(false);
            },
            subLinks: [{link: "/3pl_4pl", text: "3PL vs. 4PL"}],
        },
        {
            heading: "Exports",
            state: subWSMenu1,
            func: (data) => {
                setISubMenu1(false);
                setECSSubMenu1(false);
                setWSSubMenu1(data);
                setFSubMenu1(false);
                setSSubMenu1(false);
                setSubSCSMenu1(false);
            },
            subLinks: [
                {link: "/tyres", text: "Tyres"},
                {link: "/steel", text: "Steel"},
            ],
        },
    ];

    return (
        <>
            <header
                onMouseLeave={() => {
                    setISubMenu1(false);
                    setECSSubMenu1(false);
                    setWSSubMenu1(false);
                    setFSubMenu1(false);
                    setSSubMenu1(false);
                    setSubSCSMenu1(false);
                }}
                className={
                    "fixed top-0 block bottom-auto h-max w-full text-white z-30  transition-all " +
                    (scrollActive ? " shadow-md bg-black pt-0 hover-submenu" : " pt-4") +
                    (open ? " bg-black" : null)
                }
            >
                <div className="w-full text-white h-max font-extralight capitalize">
                    <div className="flex flex-col max-w-screen-2xl h-auto px-8 mx-auto xl:items-center xl:justify-between xl:flex-row">
                        <div className="flex flex-row items-center h-auto justify-between py-6">
                            <Link href={"/"} className="col-start-1 col-end-2 flex items-center">
                                <Image
                                    src={LogoVPN}
                                    className="h-auto w-auto"
                                    alt="Nodelogistics Logo"
                                    quality={100}
                                    width={100}
                                    height={100}
                                />
                            </Link>
                            <button
                                className="rounded-lg xl:hidden focus:outline-none focus:shadow-outline"
                                onClick={() => setOpen(!open)}
                            >
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                    <path
                                        style={!open ? {display: "block"} : {display: "none"}}
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path
                                        style={open ? {display: "block"} : {display: "none"}}
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <nav
                            className={`xl:h-auto ${
                                open ? "flex min-h-screen max-h-max " : "h-0 scale-y-0 xl:scale-y-100"
                            } flex flex-col flex-grow xl:items-center pb-4 xl:pb-0 xl:flex xl:justify-end xl:flex-row origin-top duration-300`}
                        >
                            {headerItems?.map((item, index) => (
                                <div key={index}>
                                    {item?.link ? (
                                        <>
                                            <LinkScroll
                                                activeClass="active"
                                                to={item.link}
                                                spy={true}
                                                smooth={true}
                                                duration={1000}
                                                onSetActive={() => {
                                                    setActiveLink(item.text);
                                                    closeMenu();
                                                }}
                                                className={
                                                    "px-4 py-2 mx-2 cursor-pointer font-normal animation-hover inline-block relative" +
                                                    (activeLink === item.text
                                                        ? " text-[#000a41] animation-active "
                                                        : " hover:text-blue-300 ")
                                                }
                                            >
                                                {item.text}
                                            </LinkScroll>
                                        </>
                                    ) : (
                                        <>
                                            <div className={`px-4 py-2 mx-2 cursor-pointer relative animation-hover`}>
                                                <div
                                                    onClick={() => item.func(!item.state)}
                                                    onMouseEnter={() => item.func(!item.state)}
                                                    className="flex font-normal hover:text-white"
                                                >
                                                    {item.heading}
                                                    <SlArrowDown
                                                        className={`transition-all ml-2 mt-2 duration-500 ease-in-out font-medium ${
                                                            item.state ? "rotate-180" : ""
                                                        }`}
                                                        size={10}
                                                    />
                                                </div>
                                                <div
                                                    onMouseLeave={() => item.func(!item.state)}
                                                    className={`xl:flex absolute hover-submenu border rounded-lg border-gray-500 top-16 right-auto hidden gap-4 w-max ${
                                                        item.state ? "h-auto" : "scale-y-0 h-0"
                                                    } px-8 py-4`}
                                                >
                                                    <div className="w-full">
                                                        {item.subLinks.map((subItem, subIndex) => (
                                                            <Link
                                                                href={subItem.link}
                                                                key={subIndex}
                                                                onClick={closeMenu}
                                                            >
                                                                <li
                                                                    className={
                                                                        "px-4 py-2 mx-2 flex cursor-pointer animation-hover relative hover:text-blue-300 "
                                                                    }
                                                                >
                                                                    {subItem.text}
                                                                </li>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={`flex xl:hidden flex-col gap-2 ${
                                                    item.state ? "h-auto" : "scale-y-0 h-0"
                                                } px-4`}
                                            >
                                                {item.subLinks.map((subItem, subIndex) => (
                                                    <Link href={subItem.link} key={subIndex} onClick={closeMenu}>
                                                        <li
                                                            className={
                                                                "px-4 py-2 mx-2 flex cursor-pointer animation-hover relative hover:text-blue-300 "
                                                            }
                                                        >
                                                            {subItem.text}
                                                        </li>
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                            <div className="flex font-semibold flex-col xl:flex-row gap-3 my-4 xl:my-0">
                                <Link
                                    href={"/contact"}
                                    className="tracking-wide py-2 px-5 rounded-md sm:px-8 bg-transparent outline-none capitalize transition-all hover:shadow-blue"
                                    onClick={closeMenu}
                                >
                                    Contact
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <div
                    className={
                        "w-[95vw] hidden xl:block bg-gray-400 mx-auto" +
                        (scrollActive ? "hidden h-0" : " block h-[0.1px]")
                    }
                ></div>
            </header>
        </>
    );
};

export default Header;
