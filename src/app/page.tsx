"use client";

import { useEffect, useState } from "react";

import AboutUs from "@/components/About Us/AboutUs";
import Events from "@/components/Events/Events";
import Faq from "@/components/FAQ/Faq";
import ParallaxScene from "@/components/Herosection/HeroSection";
import PastSponsors from "@/components/PastSponsor/PastSponsors";
import ScaryLoader from "@/components/scary-loader/ScaryLoader";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <ScaryLoader />
            ) : (
                <>
                    {/* Background */}
                    <ParallaxScene />
                    <AboutUs />
                    <Events />
                    <PastSponsors />

                    <Faq />
                </>
            )}
        </>
    );
}
