"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { TiTick } from "react-icons/ti";
const EcommerceForm = () => {
  const [formData, setFormData] = useState({
    loadType: "",
    storageType: "",
    customerType: "",
    orderType: {
      perOrder: "",
      perPiece: "",
    },
  });
  const [inputFields, setInputFields] = useState({
    loadTypeInput: "",
    storageTypeInput: "",
    singleOrder: "",
    additionalPiecesOrder: "",
    additionalPieces: "",
  });
  const [totalAmount, setTotalAmount] = useState(0);
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
                Calculate Price according to your items
              </h1>
              {/* Recieving  fields */}
              <div className="w-full flex flex-col items-start gap-6">
                <h4 className=" text-xl lg:text-3xl capitalize min-[1800px]:text-4xl font-bold leading-normal text-left">
                  <span className="mx-3 font-medium">1-</span> Receiving &
                  Put-Away
                </h4>
                <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                  <h3 className="text-md flex gap-4 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Select
                    Your Product Type{" "}
                    <span className="text-red-500 mt-3 -ml-2">*</span>
                  </h3>
                  <ul className="w-full flex gap-5 h-auto flex-wrap justify-between">
                    <li
                      onClick={() => setFormData({ ...formData, loadType: 15 })}
                      className=" w-full md:w-[30%] min-h-full max--h-max"
                    >
                      <input
                        type="radio"
                        className="hidden peer"
                        checked={formData.loadType === 15}
                      />
                      <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 bg-black border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 text-start">
                        <div className="block w-full">
                          <div className="w-full flex justify-between items-start text-lg font-semibold">
                            Pallets
                            {formData.loadType === 15 && (
                              <TiTick color="white" size={30} />
                            )}
                          </div>
                          <div className="w-full">Per Pallet €15.00</div>
                          <div className="w-full text-sm">
                            Unload Pallets off of Container & Putaway As Is. 1
                            Sku per Pallet. (If unpacking and/or repacking is
                            required, hourly charges will be incurred.)
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      onClick={() =>
                        setFormData({ ...formData, loadType: 350 })
                      }
                      className=" w-full md:w-[30%] min-h-full max--h-max"
                    >
                      <input
                        type="radio"
                        checked={formData.loadType === 350}
                        className="hidden peer"
                      />
                      <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                        <div className="block w-full">
                          <div className="w-full flex justify-between items-start text-lg font-semibold">
                            20 Foot Container (FLC) / Cartons
                            {formData.loadType === 350 && (
                              <TiTick color="white" size={30} />
                            )}
                          </div>
                          <div className="w-full">Per Container €350.00</div>
                          <div className="w-full text-sm">
                            Unload Cartons off Truck, Verify Inventory, Box
                            Count. Does not include organizing by sku,
                            palletetizing or putaway.
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      onClick={() =>
                        setFormData({ ...formData, loadType: 500 })
                      }
                      className=" w-full md:w-[30%] min-h-full max--h-max"
                    >
                      <input
                        type="radio"
                        checked={formData.loadType === 500}
                        className="hidden peer"
                      />
                      <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                        <div className="block w-full">
                          <div className="w-full flex justify-between items-start text-lg font-semibold">
                            40 Foot Container (FLC) / Cartons
                            {formData.loadType === 500 && (
                              <TiTick color="white" size={30} />
                            )}
                          </div>
                          <div className="w-full">Per Container €500.00</div>
                          <div className="w-full text-sm">
                            Unload Cartons off Truck, Verify Inventory, Box
                            Count. Does not include organizing by sku,
                            palletetizing or putaway.
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Number of
                    Items <span className="text-red-500 mt-3 -ml-2">*</span>
                  </h3>
                  <div className="flex justify-between md:items-center gap-4 flex-col md:flex-row w-full">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value={inputFields.loadTypeInput}
                      disabled={!formData.loadType}
                      onChange={(e) => {
                        if (e.target.value > 0) {
                          setInputFields({
                            ...inputFields,
                            loadTypeInput: e.target.value,
                          });
                        }
                      }}
                      className="block w-full md:w-1/2 rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="0"
                    />
                    <div className="flex gap-3 items-center">
                      <h7 className="font-semibold">Calculated Amount:</h7>
                      <span>
                        €
                        {formData.loadType
                          ? (
                              formData.loadType * inputFields.loadTypeInput
                            ).toLocaleString()
                          : "0"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start text-left px-3 md:px-8 flex-col md:flex-row w-full gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Material
                    Handling
                  </h3>
                  <p>Per Hour €40.00</p>
                  <p className=" w-full md:w-[30%]">
                    Verifying Inventory. Organize by Sku. Palletizing, Putaway.
                    Billed in 15 minute Increments.
                  </p>
                </div>
              </div>
              {/* storage fields */}
              <div className="w-full flex flex-col items-start gap-6">
                <h4 className=" text-xl lg:text-3xl capitalize min-[1800px]:text-4xl font-bold leading-normal text-left">
                  <span className="mx-3 font-medium">2-</span> Storage
                </h4>
                <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                  <h3 className="text-md flex gap-4 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Select
                    Your Storage Type{" "}
                    <span className="text-red-500 mt-3 -ml-2">*</span>
                  </h3>
                  <ul className="w-full flex gap-5 h-auto flex-wrap justify-between">
                    <li
                      onClick={() =>
                        setFormData({ ...formData, storageType: 30 })
                      }
                      className=" w-full sm:w-[40%] md:w-[18%] min-h-full max-h-max"
                    >
                      <input
                        type="radio"
                        className="hidden peer"
                        checked={formData.storageType === 30}
                      />
                      <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 bg-black border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 text-start">
                        <div className="block w-full">
                          <div className="w-full flex justify-between items-start text-lg font-semibold">
                            Standard Single Pallet{" "}
                            {formData.storageType === 30 && (
                              <TiTick color="white" size={30} />
                            )}
                          </div>
                          <div className="w-full">
                            Per Pallet / Per Month €30.00
                          </div>
                          <div className="w-full text-sm">
                            Standard Pallet (Up to 40x48x60)
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      onClick={() =>
                        setFormData({ ...formData, storageType: 50 })
                      }
                      className=" w-full sm:w-[40%] md:w-[18%] min-h-full max-h-max"
                    >
                      <input
                        type="radio"
                        checked={formData.storageType === 50}
                        className="hidden peer"
                      />
                      <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                        <div className="block w-full">
                          <div className="w-full flex justify-between items-start text-lg font-semibold">
                            Oversized Single Pallet
                            {formData.storageType === 50 && (
                              <TiTick color="white" size={30} />
                            )}
                          </div>
                          <div className="w-full">
                            Per Pallet / Per Month €50.00
                          </div>
                          <div className="w-full text-sm">
                            Oversized Pallet (Over 40x48x60)
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      onClick={() =>
                        setFormData({ ...formData, storageType: 5 })
                      }
                      className=" w-full sm:w-[40%] md:w-[18%] min-h-full max-h-max"
                    >
                      <input
                        type="radio"
                        checked={formData.storageType === 5}
                        className="hidden peer"
                      />
                      <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                        <div className="block w-full">
                          <div className="w-full flex justify-between items-start text-lg font-semibold">
                            4 Foot Pick Bin
                            {formData.storageType === 5 && (
                              <TiTick color="white" size={30} />
                            )}
                          </div>
                          <div className="w-full">
                            Per Bin / Per Month €5.00
                          </div>
                          <div className="w-full text-sm">4 cubic feet</div>
                        </div>
                      </label>
                    </li>
                    <li
                      onClick={() =>
                        setFormData({ ...formData, storageType: 2 })
                      }
                      className=" w-full sm:w-[40%] md:w-[18%] min-h-full max-h-max"
                    >
                      <input
                        type="radio"
                        className="hidden peer"
                        checked={formData.storageType === 2}
                      />
                      <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 bg-black border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 text-start">
                        <div className="block w-full">
                          <div className="w-full flex justify-between items-start text-lg font-semibold">
                            2 Foot Pick Bin{" "}
                            {formData.storageType === 2 && (
                              <TiTick color="white" size={30} />
                            )}
                          </div>
                          <div className="w-full">
                            Per Bin / Per Month €2.50
                          </div>
                          <div className="w-full text-sm">2 cubic feet</div>
                        </div>
                      </label>
                    </li>
                    <li
                      onClick={() =>
                        setFormData({ ...formData, storageType: 25 })
                      }
                      className=" w-full sm:w-[40%] md:w-[18%] min-h-full max-h-max"
                    >
                      <input
                        type="radio"
                        checked={formData.storageType === 25}
                        className="hidden peer"
                      />
                      <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                        <div className="block w-full">
                          <div className="w-full flex justify-between items-start text-lg font-semibold">
                            Shelving
                            {formData.storageType === 25 && (
                              <TiTick color="white" size={30} />
                            )}
                          </div>
                          <div className="w-full">
                            Per Shelf / Per Month €25.00
                          </div>
                          <div className="w-full text-sm">
                            Oversized Pallet (Over 40x48x60)
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Number of
                    Items <span className="text-red-500 mt-3 -ml-2">*</span>
                  </h3>
                  <div className="flex justify-between md:items-center gap-4 flex-col md:flex-row w-full">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      disabled={!formData.storageType}
                      value={inputFields.storageTypeInput}
                      onChange={(e) => {
                        if (e.target.value > 0) {
                          setInputFields({
                            ...inputFields,
                            storageTypeInput: e.target.value,
                          });
                        }
                      }}
                      className="block w-full md:w-1/2 rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="0"
                    />
                    <div className="flex gap-3 items-center">
                      <h7 className="font-semibold">Calculated Amount:</h7>
                      <span>
                        €
                        {formData.storageType
                          ? (
                              formData.storageType *
                              inputFields.storageTypeInput
                            ).toLocaleString()
                          : "0"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pick and Pack fields */}
              <div className="w-full flex flex-col items-start gap-6">
                <h4 className=" text-xl lg:text-3xl capitalize min-[1800px]:text-4xl font-bold leading-normal text-left">
                  <span className="mx-3 font-medium">2-</span> PICK & PACK /
                  TIERED PRICING
                </h4>
                <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                  <h3 className="text-md flex gap-4 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Select
                    Customer Type{" "}
                    <span className="text-red-500 mt-3 -ml-2">*</span>
                  </h3>
                  <ul className="w-full flex gap-5 h-auto flex-wrap justify-between">
                    <li
                      onClick={() =>
                        setFormData({ ...formData, customerType: "d2d" })
                      }
                      className=" w-full md:w-[40%] min-h-full max-h-max"
                    >
                      <input
                        type="radio"
                        className="hidden peer"
                        checked={formData.customerType === "d2d"}
                      />
                      <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 bg-black border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 text-start">
                        <div className="block w-full">
                          <div className="w-full flex justify-between items-start text-lg font-semibold">
                            D2C Customers{" "}
                            {formData.customerType === "d2d" && (
                              <TiTick color="white" size={30} />
                            )}
                          </div>
                        </div>
                      </label>
                    </li>
                    <li
                      onClick={() =>
                        setFormData({ ...formData, customerType: "b2b" })
                      }
                      className=" w-full md:w-[40%] min-h-full max-h-max"
                    >
                      <input
                        type="radio"
                        checked={formData.customerType === "b2b"}
                        className="hidden peer"
                      />
                      <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                        <div className="block w-full">
                          <div className="w-full flex justify-between items-start text-lg font-semibold">
                            B2B Customers - Custom Requirements
                            {formData.customerType === "b2b" && (
                              <TiTick color="white" size={30} />
                            )}
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
                {formData.customerType === "d2d" && (
                  <>
                    {" "}
                    <div className="w-full flex px-3 md:px-8 flex-col justify-start items-start gap-6">
                      <h3 className="text-md flex gap-4 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                        <p className="w-2 h-2 bg-white rounded-full "></p>{" "}
                        Select Your Order Type{" "}
                        <span className="text-red-500 mt-3 -ml-2">*</span>
                      </h3>
                      <ul className="w-full flex gap-5 h-auto flex-wrap justify-between">
                        <li
                          onClick={() =>
                            setFormData({
                              ...formData,
                              orderType: {
                                perOrder: 3,
                                perPiece: 0.75,
                              },
                            })
                          }
                          className=" w-full sm:w-[40%] md:w-[18%] min-h-full max-h-max"
                        >
                          <input
                            type="radio"
                            className="hidden peer"
                            checked={formData.orderType.perOrder === 3}
                          />
                          <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 bg-black border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 text-start">
                            <div className="block w-full">
                              <div className="w-full flex justify-between items-start text-lg font-semibold">
                                0 - 1000 Orders Per Month{" "}
                                {formData.orderType.perOrder === 3 && (
                                  <TiTick color="white" size={30} />
                                )}
                              </div>
                              <div className="w-full my-3 text-white">
                                <p className="w-2 inline-block h-2 bg-white rounded-full mr-2 mb-[2px] "></p>{" "}
                                Pick & Pack: D2C Order Fee Per Order €3.00 :{" "}
                                <span className="w-full text-sm text-gray-400">
                                  Order Fee (includes 1st pick)
                                </span>
                              </div>
                              <div className="w-full my-3 text-white">
                                <p className="w-2 inline-block h-2 bg-white rounded-full mr-2 mb-[2px] "></p>{" "}
                                Pick & Pack: D2C Per Piece Fee Per Piece €0.75 :{" "}
                                <span className="w-full text-sm text-gray-400">
                                  Each additional Piece in the same order
                                </span>
                              </div>
                            </div>
                          </label>
                        </li>
                        <li
                          onClick={() =>
                            setFormData({
                              ...formData,
                              orderType: {
                                perOrder: 2.75,
                                perPiece: 0.75,
                              },
                            })
                          }
                          className=" w-full sm:w-[40%] md:w-[18%] min-h-full max-h-max"
                        >
                          <input
                            type="radio"
                            checked={formData.orderType.perOrder === 2.75}
                            className="hidden peer"
                          />
                          <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                            <div className="block w-full">
                              <div className="w-full flex justify-between items-start text-lg font-semibold">
                                1001 - 2500 Orders Per Month
                                {formData.orderType.perOrder === 2.75 && (
                                  <TiTick color="white" size={30} />
                                )}
                              </div>
                              <div className="w-full my-3 text-white">
                                <p className="w-2 inline-block h-2 bg-white rounded-full mr-2 mb-[2px] "></p>{" "}
                                Pick & Pack: D2C Order Fee Per Order €2.75 :{" "}
                                <span className="w-full text-sm text-gray-400">
                                  Order Fee (includes 1st pick)
                                </span>
                              </div>
                              <div className="w-full my-3 text-white">
                                <p className="w-2 inline-block h-2 bg-white rounded-full mr-2 mb-[2px] "></p>{" "}
                                Pick & Pack: D2C Per Piece Fee Per Piece €0.75 :{" "}
                                <span className="w-full text-sm text-gray-400">
                                  Each additional Piece in the same order
                                </span>
                              </div>
                            </div>
                          </label>
                        </li>
                        <li
                          onClick={() =>
                            setFormData({
                              ...formData,
                              orderType: {
                                perOrder: 2.5,
                                perPiece: 0.5,
                              },
                            })
                          }
                          className=" w-full sm:w-[40%] md:w-[18%] min-h-full max-h-max"
                        >
                          <input
                            type="radio"
                            checked={formData.orderType.perOrder === 2.5}
                            className="hidden peer"
                          />
                          <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                            <div className="block w-full">
                              <div className="w-full flex justify-between items-start text-lg font-semibold">
                                2501 - 5000 Orders Per Month
                                {formData.orderType.perOrder === 2.5 && (
                                  <TiTick color="white" size={30} />
                                )}
                              </div>
                              <div className="w-full my-3 text-white">
                                <p className="w-2 inline-block h-2 bg-white rounded-full mr-2 mb-[2px] "></p>{" "}
                                Pick & Pack: D2C Order Fee Per Order €2.50 :{" "}
                                <span className="w-full text-sm text-gray-400">
                                  Order Fee (includes 1st pick)
                                </span>
                              </div>
                              <div className="w-full my-3 text-white">
                                <p className="w-2 inline-block h-2 bg-white rounded-full mr-2 mb-[2px] "></p>{" "}
                                Pick & Pack: D2C Per Piece Fee Per Piece €0.50 :{" "}
                                <span className="w-full text-sm text-gray-400">
                                  Each additional Piece in the same order
                                </span>
                              </div>
                            </div>
                          </label>
                        </li>
                        <li
                          onClick={() =>
                            setFormData({
                              ...formData,
                              orderType: {
                                perOrder: 2,
                                perPiece: 0.4,
                              },
                            })
                          }
                          className=" w-full sm:w-[40%] md:w-[18%] min-h-full max-h-max"
                        >
                          <input
                            type="radio"
                            className="hidden peer"
                            checked={formData.orderType.perOrder === 2}
                          />
                          <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 bg-black border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 text-start">
                            <div className="block w-full">
                              <div className="w-full flex justify-between items-start text-lg font-semibold">
                                5001 - 10,000 + Orders Per Month{" "}
                                {formData.orderType.perOrder === 2 && (
                                  <TiTick color="white" size={30} />
                                )}
                              </div>
                              <div className="w-full my-3 text-white">
                                <p className="w-2 inline-block h-2 bg-white rounded-full mr-2 mb-[2px] "></p>{" "}
                                Pick & Pack: D2C Order Fee Per Order €2.00 :{" "}
                                <span className="w-full text-sm text-gray-400">
                                  Order Fee (includes 1st pick)
                                </span>
                              </div>
                              <div className="w-full my-3 text-white">
                                <p className="w-2 inline-block h-2 bg-white rounded-full mr-2 mb-[2px] "></p>{" "}
                                Pick & Pack: D2C Per Piece Fee Per Piece €0.40 :{" "}
                                <span className="w-full text-sm text-gray-400">
                                  Each additional Piece in the same order
                                </span>
                              </div>
                            </div>
                          </label>
                        </li>
                        <li
                          onClick={() =>
                            setFormData({
                              ...formData,
                              orderType: {
                                perOrder: 1.9,
                                perPiece: 0.3,
                              },
                            })
                          }
                          className=" w-full sm:w-[40%] md:w-[18%] min-h-full max-h-max"
                        >
                          <input
                            type="radio"
                            checked={formData.orderType.perOrder === 1.9}
                            className="hidden peer"
                          />
                          <label className="inline-flex h-full items-start justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-white peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 bg-black dark:hover:bg-gray-900 text-start">
                            <div className="block w-full">
                              <div className="w-full flex justify-between items-start text-lg font-semibold">
                                10,000 + Orders Per Month
                                {formData.orderType.perOrder === 1.9 && (
                                  <TiTick color="white" size={30} />
                                )}
                              </div>
                              <div className="w-full my-3 text-white">
                                <p className="w-2 inline-block h-2 bg-white rounded-full mr-2 mb-[2px] "></p>{" "}
                                Pick & Pack: D2C Order Fee Per Order €1.90 :{" "}
                                <span className="w-full text-sm text-gray-400">
                                  Order Fee (includes 1st pick)
                                </span>
                              </div>
                              <div className="w-full my-3 text-white">
                                <p className="w-2 inline-block h-2 bg-white rounded-full mr-2 mb-[2px] "></p>{" "}
                                Pick & Pack: D2C Per Piece Fee Per Piece €0.30 :{" "}
                                <span className="w-full text-sm text-gray-400">
                                  Each additional Piece in the same order
                                </span>
                              </div>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between md:items-end text-left gap-4 flex-col w-full">
                      <div className="flex justify-between flex-col md:flex-row w-full gap-4 md:items-end">
                        <div className="w-full md:w-[45%] flex px-3 md:px-8 flex-col justify-start items-start gap-3">
                          <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                            <p className="w-2 h-2 bg-white rounded-full "></p>{" "}
                            Number of Single Piece Orders{" "}
                            <span className="text-red-500 mt-3 -ml-2">*</span>
                          </h3>
                          <input
                            type="number"
                            name="price"
                            value={inputFields.singleOrder}
                            disabled={!formData.orderType.perOrder}
                            onChange={(e) => {
                              if (e.target.value > 0) {
                                setInputFields({
                                  ...inputFields,
                                  singleOrder: e.target.value,
                                });
                              }
                            }}
                            id="price"
                            className="block rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder="0"
                          />
                        </div>
                        <div className="w-full md:w-[45%] flex px-3 md:px-8 flex-col justify-start items-start gap-3">
                          <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                            <p className="w-2 h-2 bg-white rounded-full "></p>{" "}
                            Number of Additional Pieces Orders
                          </h3>
                          <input
                            type="number"
                            name="price"
                            id="price"
                            disabled={!formData.orderType.perOrder}
                            value={inputFields.additionalPiecesOrder}
                            onChange={(e) => {
                              if (e.target.value > 0) {
                                setInputFields({
                                  ...inputFields,
                                  additionalPiecesOrder: e.target.value,
                                });
                              }
                            }}
                            className="block rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder="0"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between flex-col md:flex-row w-full gap-4 md:items-end">
                        <div className="w-full md:w-[45%] flex px-3 md:px-8 flex-col justify-start items-start gap-3">
                          <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                            <p className="w-2 h-2 bg-white rounded-full "></p>{" "}
                            Number of Pieces Per Order
                          </h3>
                          <input
                            type="number"
                            name="price"
                            id="price"
                            disabled={
                              !formData.orderType.perOrder ||
                              !inputFields.additionalPiecesOrder
                            }
                            value={inputFields.additionalPieces}
                            onChange={(e) => {
                              if (e.target.value > 0) {
                                setInputFields({
                                  ...inputFields,
                                  additionalPieces: e.target.value,
                                });
                              }
                            }}
                            className="block rounded-md appearance-none outline-none px-5 py-4 bg-transparent border placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder="0"
                          />
                        </div>
                        <div className="flex gap-3 items-center">
                          <h7 className="font-semibold">Calculated Amount:</h7>
                          <span>
                            €
                            {formData.orderType.perOrder
                              ? (
                                  formData.orderType.perOrder *
                                    inputFields?.singleOrder +
                                  formData.orderType.perPiece *
                                    inputFields.additionalPieces *
                                    inputFields.additionalPiecesOrder
                                ).toLocaleString()
                              : "0"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* Shipping Charges */}
              <div className="w-full flex flex-col items-start gap-6">
                <h4 className=" text-xl lg:text-3xl capitalize min-[1800px]:text-4xl font-bold leading-normal text-left">
                  <span className="mx-3 font-medium">2-</span> SHIPPING CHARGES
                </h4>
                <div className="flex justify-between items-start text-left px-3 md:px-8 flex-col md:flex-row w-full gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Freight
                    (on pallets)
                  </h3>
                  <p>Per Shipment TBD</p>
                  <p className=" w-full md:w-[30%]">
                    Pricing based on weights, dimensions and zones shipping to.
                    Disclaimer: Rates subject to change based on carrier applied
                    surcharges/fees. (Handled by Alpacka)
                  </p>
                </div>
                <div className="flex justify-between items-start text-left px-3 md:px-8 flex-col md:flex-row w-full gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Parcel
                    (cartons)
                  </h3>
                  <p>Per Package TBD</p>
                  <p className=" w-full md:w-[30%]">
                    Pricing based on weights, dimensions and zones shipping to.
                    Disclaimer: Rates subject to change based on carrier applied
                    surcharges/fees. (Handled by iDrive, Alpacka's shipping
                    partner).
                  </p>
                </div>
              </div>
              {/* Return fee  */}
              <div className="w-full flex flex-col items-start gap-6">
                <h4 className=" text-xl lg:text-3xl capitalize min-[1800px]:text-4xl font-bold leading-normal text-left">
                  <span className="mx-3 font-medium">2-</span> RETURNS
                  PROCESSING
                </h4>
                <div className="flex justify-between items-start text-left px-3 md:px-8 flex-col md:flex-row w-full gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Returns
                    Handling: Per Hour
                  </h3>
                  <p>Per Hour €40.00</p>
                  <p className=" w-full md:w-[30%]">
                    Billed in 15 minute Increments
                  </p>
                </div>
              </div>
              {/* Software fee */}
              <div className="w-full flex flex-col items-start gap-6">
                <h4 className=" text-xl lg:text-3xl capitalize min-[1800px]:text-4xl font-bold leading-normal text-left">
                  <span className="mx-3 font-medium">2-</span> SOFTWARE /
                  TECHNOLOGY
                </h4>
                <div className="flex justify-between items-start text-left px-3 md:px-8 flex-col md:flex-row w-full gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> WMS -
                    Portal Fee
                  </h3>
                  <p>Per Month €250.00</p>
                  <p className=" w-full md:w-[30%]">Includes 2 Users</p>
                </div>
                <div className="flex justify-between items-start text-left px-3 md:px-8 flex-col md:flex-row w-full gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> WMS -
                    Additional Integration Fee
                  </h3>
                  <p>Per Month Ask for a quote</p>
                  <p className=" w-full md:w-[30%]">
                    e If you require EDI integrations or other integrations that
                    require subscription pricing to maintain.
                  </p>
                </div>
              </div>
              {/* Monthly charges  */}
              <div className="w-full flex flex-col items-start gap-6">
                <h4 className=" text-xl lg:text-3xl capitalize min-[1800px]:text-4xl font-bold leading-normal text-left">
                  <span className="mx-3 font-medium">2-</span> MONTHLY SERVICE
                  MINIMUM
                </h4>
                <div className="flex justify-between items-start text-left px-3 md:px-8 flex-col md:flex-row w-full gap-6">
                  <h3 className="text-md flex gap-3 items-center lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                    <p className="w-2 h-2 bg-white rounded-full "></p> Minimum
                    Billing Requirements
                  </h3>
                  <p>Per Month €5,000.00</p>
                  <p className=" w-full md:w-[30%]">
                    When total monthly services bill does not equal the minimum
                    billing requirement, customer will be charged the
                    difference. Does not include freight or supplies.
                  </p>
                </div>
              </div>
              {/* Total Amount */}
              <div className="flex justify-between flex-col md:flex-row items-start text-left w-full gap-6">
                <h3 className="text-2xl flex gap-3 items-center lg:text-3xl capitalize min-[1800px]:text-5xl font-extrabold leading-normal">
                  <p className="w-4 h-4 bg-white rounded-full "></p>Total Amount
                </h3>
                <h5 className=" w-full md:w-[30%] text-md md:text-start text-end gap-3 lg:text-lg capitalize min-[1800px]:text-xl font-bold leading-normal">
                  €
                  {formData.loadType &&
                  inputFields.loadTypeInput &&
                  formData.storageType &&
                  inputFields.storageTypeInput &&
                  formData.orderType.perOrder &&
                  inputFields.singleOrder
                    ? (
                        5000 +
                        40 +
                        250 +
                        formData.loadType * inputFields.loadTypeInput +
                        formData.storageType * inputFields.storageTypeInput +
                        formData.orderType.perOrder * inputFields?.singleOrder +
                        formData.orderType.perPiece *
                          inputFields.additionalPieces *
                          inputFields.additionalPiecesOrder
                      ).toLocaleString()
                    : "0"}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceForm;
