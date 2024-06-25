"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useGlobalState } from "../GlobalStateProvider";

export default function PricingPopUp() {
  const { PricingPopUp, setPricingPopUp, PricingFormType, setPricingFormType } =
    useGlobalState();
  return (
    <>
      <Transition appear show={PricingPopUp} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => console.log("nothing")}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-2xl bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-black bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center leading-6"
                  >
                    Select one of them
                  </Dialog.Title>

                  <div className=" flex justify-center items-center gap-4">
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex dark:bg-white bg-black dark:text-black text-white  justify-center rounded-md px-4 py-2 text-sm font-medium outline-none"
                        onClick={() => {
                          setPricingPopUp(!PricingPopUp);
                          setPricingFormType("ecommerce");
                        }}
                      >
                        Ecommerce
                      </button>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex dark:bg-white bg-black dark:text-black text-white  justify-center rounded-md px-4 py-2 text-sm font-medium outline-none"
                        onClick={() => {
                          setPricingPopUp(!PricingPopUp);
                          setPricingFormType("freight");
                        }}
                      >
                        Freight Forwarding
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
