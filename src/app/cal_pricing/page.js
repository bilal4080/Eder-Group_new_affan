"use client";
import { useGlobalState } from "@/components/GlobalStateProvider";
import Layout from "@/components/Layout/Layout";
import EcommerceForm from "@/components/cal_pricing/EcommerceForm";
import FreightForm from "@/components/cal_pricing/FreightForm";
import React, { useEffect } from "react";

const Page = () => {
  const { PricingPopUp, setPricingPopUp, PricingFormType, setPricingFormType } =
    useGlobalState();
  useEffect(() => {
    setPricingPopUp(!PricingPopUp);
  }, []);
  return (
    <>
      {PricingFormType === "ecommerce" && <EcommerceForm />}
      {PricingFormType === "freight" && <FreightForm />}
    </>
  );
};

export default Page;
