import Typewriter from "./components/comingSoon/ComingSoon";
import Image from "next/image";
import bgImg from './backNU.avif';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Home() {
  return (
    <>
      <div className={`${orbitron.className} w-screen h-screen flex justify-center items-center flex-col text-center gap-4`}>

      <Image src={bgImg} fill={true} alt={"name"} className="-z-30"/>
      <Image src={'/logo.png'} width={600} height={600} className="-z-20 absolute mix-blend-soft-light" alt={""}/>
      <div className="w-full h-full absolute -z-10 bg-[#00000085]">
          
      </div>
        <div className="sm:text-[64px] text-[36px] font-bold flex">
          <div>&#10240;</div> {/* This is an empty character. DO NOT REMOVE */}
          <Typewriter text="Coming Soon" />
        </div>
        <div className="sm:text-[80px] text-[24px] font-bold">
          NIRUTSAV 2025
        </div>

        
      </div>
    </>
  );
}
