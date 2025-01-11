"use client"

import { useState, useEffect } from "react";
import Faq from "@/components/FAQ/Faq";
import ParallaxScene from "@/components/Herosection/HeroSection";
import Loader from "@/components/loader/loader";
import AboutUs from "@/components/About Us/AboutUs";
import PastSponsors from "@/components/PastSponsor/PastSponsors";
import Events from "@/components/Events/Events"
import Footer from "@/components/Footer/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state for 3 seconds, adjust as needed
    const timer = setTimeout(() => setIsLoading(false), 500); // You can adjust this timeout
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
          {/* Background */}
          <ParallaxScene />
      <AboutUs />
      <Events />
      <PastSponsors />
          <Faq />
          <Footer />
        </>
      )}
     
    </>
  );
}
