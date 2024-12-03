import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
