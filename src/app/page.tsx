import Image from "next/image";
import bgImg from "../../public/Images/backNU.avif";
import ComingSoon from "@/components/comingSoon/ComingSoon";
import Faq from "@/components/FAQ/Faq";


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
      <ComingSoon />
      <Faq />
    </>
  );
}
