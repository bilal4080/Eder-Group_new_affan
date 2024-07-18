import {Inter, Outfit} from "next/font/google";
import "./globals.css";
import GlobalStateProvider from "@/components/GlobalStateProvider";
import PricingPopUp from "@/components/cal_pricing/PricingPopUp";
import Layout from "@/components/Layout/Layout";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

const outfit = Outfit({subsets: ["latin"]});

export const metadata = {
    title: "Eder",
    description: "Next JS",
    verification: {
        google: "your-google-verification-id-here",
    },
    icons: {
        icon: "./icon.ico",
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="de">
            <GoogleAnalytics measurementId="G-TR230NE73T" />
            <link rel="icon" href="/playstore.ico" sizes="any" />
            <body className={`${outfit.className} overflow-x-hidden`}>
                <GlobalStateProvider>
                    <PricingPopUp />
                    <Layout>{children}</Layout>
                </GlobalStateProvider>
            </body>
        </html>
    );
}
//G-TR230NE73T
//AW-10841270925
///
