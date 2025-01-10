"use client";
import Image from "next/image";
import Faq from "@/components/FAQ/Faq";
import ParallaxScene from "@/components/Herosection/HeroSection";
import AboutUs from "@/components/About Us/AboutUs";
import PastSponsors from "@/components/PastSponsor/PastSponsors";

export default function Home() {
  return (
    <>
      <ParallaxScene />
      <AboutUs />
      <PastSponsors />
      <Faq />
    </>
  );
}
