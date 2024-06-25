"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { TiTick } from "react-icons/ti";
import { CiCircleAlert } from "react-icons/ci";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import Container from "./Container";
const FreightForm = () => {
  const [selectedDate, setselectedDate] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleselectedDateChange = (newselectedDate) => {
    console.log("newselectedDate:", newselectedDate);
    setselectedDate(newselectedDate);
  };

  const [citiesArray, setcitiesArray] = useState();
  const fetchCities = async () => {
    try {
      const res = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const dataArray = res?.data?.data
        .map((country) => {
          const citiesWithCountry = country.cities.map(
            (city) => `${city}, ${country.country}`
          );
          return citiesWithCountry;
        })
        .flat();
      setcitiesArray(dataArray);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <>
      <div className="relative max-h-max min-h-[80vh] w-full py-[6.5rem] text-white">
        {/* Background Image */}
        <Image
          width={1000}
          height={1000}
          src="/hs1bg.png"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          alt="Background"
        />

        {/* Black Shade Overlay */}
        <div className="absolute inset-0 h-full w-2/3 bg-gradient-to-r from-black to-transparent"></div>

        {/* Your Content Goes Here */}
        {/* Example content: */}
        <div className="relative z-10 py-6 sm:py-24">
          {" "}
          <div className="max-w-screen-xl px-3 md:px-8 mx-auto">
            <div className="w-full py-16 md:py-0 flex flex-col md:gap-12 gap-4 justify-center items-center text-center">
              <h1 className="text-2xl lg:text-6xl capitalize min-[1800px]:text-7xl font-extrabold leading-normal">
                Freight Forwarding Prices
              </h1>
              {/* Route  fields */}
              <div className="w-full flex flex-col items-start gap-6">
                <div className="flex w-full items-center gap-2">
                  <h4 className=" text-xl lg:text-3xl uppercase min-[1800px]:text-4xl font-bold leading-normal text-left">
                    <span className="mx-3 font-medium">1-</span> Route
                  </h4>
                  <CiCircleAlert size={30} color="red" />
                </div>
                <div className=" flex justify-start items-center gap-5 w-full">
                  <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                    <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                      <p className="w-2 h-2 bg-white rounded-full "></p> From
                      (City, Country/Region)
                    </h3>
                    <div className="flex justify-between md:items-center gap-4 flex-col md:flex-row w-full">
                      {/* {citiesArray && <FromRoute citiesArray={citiesArray} />} */}
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="block w-full rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="From City with Country"
                      />
                    </div>
                    <ul className="w-full flex flex-col gap-5 h-auto justify-between">
                      <li
                        // onClick={() =>
                        //   setFormData({ ...formData, customerType: "d2d" })
                        // }
                        className=" w-full  min-h-full max-h-max"
                      >
                        <input
                          type="radio"
                          className="hidden peer"
                          //   checked={formData.customerType === "d2d"}
                        />
                        <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 bg-black border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 text-start">
                          <div className="block w-full">
                            <div className="w-full flex justify-between items-start text-lg font-semibold">
                              D2C Customers{" "}
                              {/* {formData.customerType === "d2d" && ( */}
                              <TiTick color="white" size={30} />
                              {/* )} */}
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        // onClick={() =>
                        //   setFormData({ ...formData, customerType: "b2b" })
                        // }
                        className=" w-full  min-h-full max-h-max"
                      >
                        <input
                          type="radio"
                          //   checked={formData.customerType === "b2b"}
                          className="hidden peer"
                        />
                        <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                          <div className="block w-full">
                            <div className="w-full flex justify-between items-start text-lg font-semibold">
                              B2B Customers - Custom Requirements
                              {/* {formData.customerType === "b2b" && ( */}
                              <TiTick color="white" size={30} />
                              {/* )} */}
                            </div>
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                    <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                      <p className="w-2 h-2 bg-white rounded-full "></p> To
                      (City, Country/Region)
                    </h3>
                    <div className="flex justify-between md:items-center gap-4 flex-col md:flex-row w-full">
                      {/* {citiesArray && <ToRoute citiesArray={citiesArray} />} */}
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="block w-full rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="To City with Country"
                      />
                    </div>
                    <ul className="w-full flex flex-col gap-5 h-auto justify-between">
                      <li
                        // onClick={() =>
                        //   setFormData({ ...formData, customerType: "d2d" })
                        // }
                        className=" w-full  min-h-full max-h-max"
                      >
                        <input
                          type="radio"
                          className="hidden peer"
                          //   checked={formData.customerType === "d2d"}
                        />
                        <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 bg-black border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 text-start">
                          <div className="block w-full">
                            <div className="w-full flex justify-between items-start text-lg font-semibold">
                              D2C Customers{" "}
                              {/* {formData.customerType === "d2d" && ( */}
                              <TiTick color="white" size={30} />
                              {/* )} */}
                            </div>
                          </div>
                        </label>
                      </li>
                      <li
                        // onClick={() =>
                        //   setFormData({ ...formData, customerType: "b2b" })
                        // }
                        className=" w-full  min-h-full max-h-max"
                      >
                        <input
                          type="radio"
                          //   checked={formData.customerType === "b2b"}
                          className="hidden peer"
                        />
                        <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                          <div className="block w-full">
                            <div className="w-full flex justify-between items-start text-lg font-semibold">
                              B2B Customers - Custom Requirements
                              {/* {formData.customerType === "b2b" && ( */}
                              <TiTick color="white" size={30} />
                              {/* )} */}
                            </div>
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* COMMODITY  fields */}
              <div className="w-full flex flex-col items-start gap-6">
                <div className="flex w-full items-center gap-2">
                  <h4 className=" text-xl lg:text-3xl uppercase min-[1800px]:text-4xl font-bold leading-normal text-left">
                    <span className="mx-3 font-medium">1-</span> COMMODITY
                  </h4>
                  <CiCircleAlert size={30} color="red" />
                </div>
                <div className="w-full md:w-1/2 flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Commodity
                  </h3>
                  <div className="flex justify-between md:items-center gap-4 flex-col md:flex-row w-full">
                    <input
                      type="text"
                      name="Commodity"
                      id="Commodity"
                      className="block w-full rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Write Your Commodity"
                    />
                  </div>
                </div>
              </div>
              {/* CONTAINER  fields */}
              <div className="w-full flex flex-col items-start gap-6">
                <div className="flex w-full items-center gap-2">
                  <h4 className=" text-xl lg:text-3xl uppercase min-[1800px]:text-4xl font-bold leading-normal text-left">
                    <span className="mx-3 font-medium">1-</span> CONTAINER
                  </h4>
                  <CiCircleAlert size={30} color="red" />
                </div>
                <div className="mb-[0.125rem]  px-3 md:px-14 block min-h-[1.5rem]">
                  <input
                    className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                    type="checkbox"
                    value=""
                    id="checkboxDefault"
                  />
                  <label
                    className="inline-block ps-[0.15rem] hover:cursor-pointer"
                    for="checkboxDefault"
                  >
                    Shipper owned container (SOC)
                  </label>
                </div>
                <div className=" flex justify-start items-center gap-5 w-full">
                  <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                    <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                      <p className="w-2 h-2 bg-white rounded-full "></p>{" "}
                      Container type
                    </h3>
                    <div className="flex justify-between md:items-center gap-4 flex-col md:flex-row w-full">
                      <Container />
                    </div>
                  </div>
                  <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                    <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                      <p className="w-2 h-2 bg-white rounded-full "></p>{" "}
                      Container quantity
                    </h3>
                    <div className="flex justify-between md:items-center gap-4 flex-col md:flex-row w-full">
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="block w-full rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                    <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                      <p className="w-2 h-2 bg-white rounded-full "></p> Weight
                      - cargo only(Kg)
                    </h3>
                    <div className="flex justify-between md:items-center gap-4 flex-col md:flex-row w-full">
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="block w-full rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* DATE  fields */}
              <div className="w-full flex flex-col items-start gap-6">
                <div className="flex w-full items-center gap-2">
                  <h4 className=" text-xl lg:text-3xl uppercase min-[1800px]:text-4xl font-bold leading-normal text-left">
                    <span className="mx-3 font-medium">1-</span> DATE
                  </h4>
                  <CiCircleAlert size={30} color="red" />
                </div>
                <div className="w-full md:w-1/2 flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Expected
                    Departure Date
                  </h3>
                  <div className="flex justify-between md:items-center  gap-4 flex-col md:flex-row w-full">
                    {/* <input
                      type="date"
                      className="block w-full md:w-1/2 rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Select Date"
                    /> */}
                    <Datepicker
                      value={selectedDate}
                      containerClassName="relative w-full md:w-1/2 text-white cursor-pointer rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      toggleClassName="absolute bg-transparent rounded-r-lg text-white right-5 top-5 outline-none focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                      inputClassName="bg-transparent outline-none"
                      popoverDirection="up"
                      asSingle={true}
                      useRange={false}
                      onChange={handleselectedDateChange}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 my-4 md:my-0">
                    <button className="font-semibold uppercase tracking-wide px-5 py-4  rounded-md sm:px-8 hover:bg-transparent hover:border hover:border-white outline-none bg-blue-500 transition-all hover:shadow-blue ">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreightForm;
