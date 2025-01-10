import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/contexts/auth-context";
import { ReactLenis } from "@/providers/LenisProvider";

const Cattedrale = localFont({
    src: "./fonts/Cattedrale-Demo-Regular.ttf",
    variable: "--font-cattedrale",
});
// const Sholp = localFont({
//   src: "./fonts/sholprg.otf",
//   variable: "--font-sholp",
// });
const Spirits = localFont({
    src: "./fonts/spirits-sharp-light.otf",
    variable: "--font-spirits",
});

export const metadata: Metadata = {
    title: {
        template: "%s | NITRUTSAV 2025 - NIT Rourkela Cultural Fest",
        default:
            "NITRUTSAV 2025 - NIT Rourkela's Premier Literary and Cultural Fest",
    },

    description:
        "NITRUTSAV 2025 is NIT Rourkela's premier literary and cultural fest, offering students a platform for creativity, innovation, and celebration. Join us for a memorable experience filled with events, performances, workshops, and more.",

    manifest: "/manifest.json",

    icons: {
        apple: "/icon.png",
    },

    metadataBase: new URL("https://www.nitrustav.com/"),

    openGraph: {
        type: "website",
        locale: "en_IE",
        url: "https://www.nitrutsav.com/",
        title: "NITRUTSAV 2025 - NIT Rourkela's Premier Literary and Cultural Fest",
        description:
            "NITRUTSAV 2025 is NIT Rourkela's premier literary and cultural fest, offering students a platform for creativity, innovation, and celebration. Join us for a memorable experience filled with events, performances, workshops, and more.",
        siteName: "NITRUTSAV 2025",
        images: [
            {
                url: "https://www.nitrutsav.com/images/og-image.jpg",
                width: 800,
                height: 600,
                alt: "NITRUTSAV 2025 Logo",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        site: "@UtsavNitr",
        title: "NITRUTSAV 2025",
        description:
            "NITRUTSAV, the Literary and Cultural Fest of NIT Rourkela works to give students a creative outlet to commemorate and introspectively explore their mind filled with ingenuity and innovation.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ReactLenis root>
                <body
                    suppressHydrationWarning={true}
                    className={` ${Cattedrale.variable}  ${Spirits.variable} overflow-x-hidden  antialiased`}
                >
                    <Toaster />
                    <AuthProvider>{children}</AuthProvider>
                </body>
            </ReactLenis>
        </html>
    );
}
