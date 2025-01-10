"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import ComingSoon from "@/components/comingSoon/ComingSoon";
import Faq from "@/components/FAQ/Faq";

import bgImg from "../../public/Images/backNU.avif";
import ParallaxScene from "@/components/Herosection/HeroSection";
import Loader from "@/components/loader/loader";

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
          <ParallaxScene />
          <Faq />
        </>
      )}
    </>
  );
}
