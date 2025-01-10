import Image from "next/image";
import bgImg from "../../public/Images/backNU.avif";
import ComingSoon from "@/components/comingSoon/ComingSoon";

import Faq from "@/components/FAQ/Faq";

import Footer from "@/components/Footer/footer";
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
