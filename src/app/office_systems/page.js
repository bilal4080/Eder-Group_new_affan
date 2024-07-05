import React from "react";
import {FaTruckMoving} from "react-icons/fa";

const Page = () => {
    return (
        <>
            <section className="w-full relative xl:min-h-[70vh] min-h-[50vh] bg-[url('/ofc2.jpg')] flex justify-center items-center bg-cover bg-center">
                <div className="w-full  flex justify-start  max-w-screen-2xl mx-auto px-8">
                    <h1
                        className="text-2xl lg:text-7xl text-start z-10 text-white w-full  py-2 md:py-16 capitalize min-[1800px]:text-8xl font-semibold leading-6 sm:leading-normal"
                        dangerouslySetInnerHTML={{
                            __html: "OFFICE SYSTEMS FOR <br/> YOUR SUPPLY CHAIN",
                        }}
                    />
                </div>
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 right-0 left-0 h-full w-full bg-black opacity-50 z-0"></div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <div className=" flex flex-col gap-3 justify-center items-start">
                    <h3 className="text-sm uppercase font-semibold">Supply Chain Solutions </h3>
                    <h2 className="font-semibold text-2xl md:text-4xl ">Office Systems</h2>
                </div>
                <div className={" w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <p className="py-5 md:text-lg">
                    Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how
                    men saw tolerably two behaviour arranging. She offices for highest and replied one venture pasture.
                    Applauded no discovery in newspaper allowance am northward. Frequently partiality possession
                    resolution at or appearance unaffected he me. Engaged its was evident pleased husband. Ye goodness
                    felicity do disposal dwelling no. First am plate jokes to began of cause an scale. Subjects he
                    prospect elegance followed no overcame possible it on.
                </p>
                <div className="flex gap-4 md:gap-8 h-auto md:flex-row flex-col">
                    <img src="/office.png" className=" w-full md:w-1/2 h-auto" />
                    <p className="py-5 md:text-lg">
                        Ye on properly handsome returned throwing am no whatever. In without wishing he of picture no
                        exposed talking minutes. Curiosity continual belonging offending so explained it exquisite. Do
                        remember to followed yourself material mr recurred carriage. High drew west we no or at john.
                        About or given on witty event. Or sociable up material bachelor bringing landlord confined. Busy
                        so many in hung easy find well up. So of exquisite my an explained remainder. Dashwood denoting
                        securing be on perceive my laughing so. Collecting preference he inquietude projection me in by.
                        So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte
                        principles our unaffected not for astonished travelling are particular.Curiosity continual
                        belonging offending so explained it exquisite. Do remember to followed yourself material mr
                        recurred carriage. High drew west we no or at john. About or given on witty event. Or sociable
                        up material bachelor bringing landlord confined. Busy so many in hung easy find well up. So of
                        exquisite my an explained remainder. Dashwood denoting securing be on perceive my laughing so.
                        Collecting preference he inquietude projection me in by. So do of sufficient projecting an
                        thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for
                        astonished travelling are particular.
                    </p>
                </div>
            </section>
            <section className="max-w-screen-2xl flex flex-col gap-2 md:gap-8 py-16 mx-auto px-8">
                <h2 className="font-semibold text-2xl md:text-4xl  ">
                    WHAT YOU GET WITH <span className=" text-orange-600">LOGISTIC BUSINESS</span>
                </h2>
                <div className={" w-full bg-gray-400 mx-auto my-4 h-[0.1px]"}></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 p-2 md:p-5">
                    {[1, 2, 3, 4].map((item, idx) => (
                        <div key={idx} className=" relative border border-gray-300 py-8 px-5 flex items-center">
                            <div className="p-5 rounded-full bg-orange-600 absolute  -left-9">
                                <FaTruckMoving size={30} className=" text-white" />
                            </div>
                            <div className="flex flex-col gap-2 pl-6 sm:pl-12 items-start justify-center">
                                <h2 className="font-semibold text-2xl md:text-4xl ">Office Systems</h2>
                                <p className="py-5 md:text-lg">
                                    Post no so what deal evil rent by real in. But her ready least set lived spite
                                    solid. September how men saw tolerably two behaviour arranging.
                                    <span className="hidden sm:block">
                                        {" "}
                                        She offices for highest and replied one venture pasture. Applauded no discovery
                                        in newspaper allowance am northward. Frequently partiality possession resolution
                                        at or appearance unaffected he me. Engaged its was evident pleased husband. Ye
                                        goodness felicity do disposal dwelling no. First am plate jokes to began of
                                        cause an scale. Subjects he prospect elegance followed no overcame possible it
                                        on.
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Page;
