// pages/index.tsx
import Typewriter from "../components/comingSoon/ComingSoon";
import Image from "next/image";
import bgImg from "../../public/Images/backNU.avif";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-30">
        {/* Background Image */}
        <Image
          src={bgImg}
          fill={true}
          alt="Background"
          className="object-cover"
        />

        {/* Logo Image */}
        <Image
          src="/Images/logo.png"
          width={600}
          height={600}
          alt="Logo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-soft-light"
        />

        {/* Dark Overlay */}
        <div className="w-full h-full absolute top-0 bg-[#00000085]" />
      </div>

      {/* Content */}
      <div
        className={`${orbitron.className} w-screen h-screen flex justify-center items-center flex-col text-center gap-4`}
      >
        <div className="sm:text-[64px] text-[36px] font-bold flex">
          <div>&#10240;</div> {/* This is an empty character. DO NOT REMOVE */}
          <Typewriter text="Coming Soon" />
        </div>
        <div className="sm:text-[80px] text-[24px] font-bold">
          NITRUTSAV 2025
        </div>
      </div>
    </>
  );
}
