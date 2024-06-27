import {Inter, Outfit} from "next/font/google";
import "./globals.css";
import GlobalStateProvider from "@/components/GlobalStateProvider";
import PricingPopUp from "@/components/cal_pricing/PricingPopUp";
import Layout from "@/components/Layout/Layout";
import Script from "next/script";
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
            <head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TR230NE73T"></Script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${"G - TR230NE73T"}');
                `}
                </Script>
            </head>
            <link rel="icon" href="/playstore.ico" sizes="any" />
            <body className={`${outfit.className} overflow-x-hidden`}>
                <GlobalStateProvider>
                    {" "}
                    <PricingPopUp />
                    <Layout>{children}</Layout>
                </GlobalStateProvider>
            </body>
        </html>
    );
}
