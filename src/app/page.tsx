"use client";

import AboutUs from "@/components/About Us/AboutUs";
import Events from "@/components/Events/Events";
import Faq from "@/components/FAQ/Faq";
import Footer from "@/components/Footer/footer";
import ParallaxScene from "@/components/Herosection/HeroSection";
import PastSponsors from "@/components/PastSponsor/PastSponsors";

export default function Home() {
    return (
        <>
            <ParallaxScene />
            <AboutUs />
            <Events />
            <PastSponsors />
            <Faq />
            <Footer />
        </>
    );
}
