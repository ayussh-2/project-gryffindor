import Image from "next/image";

import ComingSoon from "@/components/comingSoon/ComingSoon";
import Faq from "@/components/FAQ/Faq";

import bgImg from "../../public/Images/backNU.avif";
import ParallaxScene from "@/components/Herosection/HeroSection";

export default function Home() {
  return (
    <>
      {/* Background */}
      
      <ParallaxScene />
      <Faq />
    </>
  );
}
