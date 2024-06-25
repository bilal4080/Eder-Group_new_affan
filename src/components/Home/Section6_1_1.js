import Image from "next/image";
import React from "react";
import {GoArrowUpRight} from "react-icons/go";
import Link from "next/link";
const Section6_1_1 = () => {
    return (
        <div className="md:flex hidden mt-40 relative justify-between gap-6 md:py-6 py-2 md:space-x-10 items-center bg-orange-500 px-8 w-full h-full">
            <Image
                width={500}
                height={500}
                src="/icon-flight.png"
                className=" w-auto h-auto rounded-md"
                alt="Your Alt Text"
            />
            <div className=" w-3/4 pr-4 md:pr-64 flex gap-4 justify-between items-center relative">
                <div className="flex gap-4 items-center">
                    <Image
                        width={1000}
                        height={1000}
                        src="/Tickicon.png"
                        className=" h-full w-auto rounded-md"
                        alt="Your Alt Text"
                    />
                    <h1 className="font-semibold text-2xl text-white md:text-3xl min-[1800px]:text-4xl relative text-darken lg:pr-10">
                        Durch die Lieferung von Vertrauen <br />
                        <span className="text-xl text-white md:text-2xl min-[1800px]:text-3xl">
                            Sichere Logistiklösungen
                        </span>
                    </h1>
                </div>
                <button className={` bg-white flex items-center px-8 py-4 gap-3 my-8 cursor-pointer w-auto`}>
                    <Link href="/custom_clear" className="text-xl lg:text-2xl text-black capitalize font-semibold">
                        Jetzt überprüfen
                    </Link>
                    <GoArrowUpRight size={25} className="mt-2 font-extralight" color="black" />
                </button>
            </div>
        </div>
    );
};

export default Section6_1_1;
