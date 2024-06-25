"use client";
// GlobalStateContext.js
import { createContext, useContext, useState, useEffect } from "react";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./misc/Loader";
const GlobalStateContext = createContext();
const GlobalStateProvider = ({ children }) => {
  const [PricingPopUp, setPricingPopUp] = useState(false);
  const [PricingFormType, setPricingFormType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 5, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });

    // Clean up AOS on unmount
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        PricingPopUp,
        setPricingPopUp,
        PricingFormType,
        setPricingFormType,
      }}
    >
      {loading ? <Loader /> : <>{children}</>}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
export const useGlobalState = () => useContext(GlobalStateContext);
