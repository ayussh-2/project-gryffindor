import Image from "next/image";

import ComingSoon from "@/components/comingSoon/ComingSoon";
import Faq from "@/components/FAQ/Faq";
import Events from "@/components/Events/Events"

import bgImg from "../../public/Images/backNU.avif";

export default function Home() {
  return (
    <>
      <div className="magic-cursor">
        <Faq />
        <Events />
      </div>


    </>
  );

}
