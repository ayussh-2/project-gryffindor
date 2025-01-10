"use client";
import Image from "next/image";
// import bgImg from "../../public/Images/backNU.avif";
import ComingSoon from "@/components/comingSoon/ComingSoon";

import Faq from "@/components/FAQ/Faq";

import Footer from "@/components/Footer/footer";
import ParallaxScene from "@/components/Herosection/HeroSection";
import AboutUs from "@/components/About Us/AboutUs";
import PastSponsors from "@/components/PastSponsor/PastSponsors";

export default function Home() {
  return (
    <>
      <AboutUs />
      <PastSponsors />
    </>
  );
}
