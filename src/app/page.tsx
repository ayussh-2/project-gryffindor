"use client";

import AboutUs from "@/components/About Us/AboutUs";
import Events from "@/components/Events/Events";
import Faq from "@/components/FAQ/Faq";
import ParallaxScene from "@/components/Herosection/HeroSection";
import PastSponsors from "@/components/PastSponsor/PastSponsors";
import Footer from "@/components/Footer/footer";

export default function Home() {
    return (
        <>
          {/* Background */}
          <ParallaxScene />
      <AboutUs />
      <Events />
      <PastSponsors />
          <Faq />
          <Footer />
        </>
      )
    }
     
   