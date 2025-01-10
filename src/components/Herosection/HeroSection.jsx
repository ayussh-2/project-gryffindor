"use client";
import "./hero.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const ParallaxScene = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Slow downward movement for text
  const leftImageX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]); // Move left image to the left
  const rightImageX = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]); // Move right image to the right
  const bottomY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Fast upward movement for bottom image

  // Witch flying animation
  const [witchPosition, setWitchPosition] = useState({ x: 0, y: 0, rotate: 0 });

  const getRandomAlignedPosition = () => ({
    x: Math.random() * window.innerWidth - window.innerWidth / 2, // Random X position
    y: Math.random() * window.innerHeight - window.innerHeight / 2, // Random Y position
    rotate: Math.random() * 20 - 10, // Smaller rotation (-10° to 10°)
  });

  useEffect(() => {
    const moveWitch = () => {
      const newPosition = getRandomAlignedPosition();
      setWitchPosition(newPosition);
    };

    const interval = setInterval(moveWitch, Math.random() * 2000 + 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg" ref={containerRef}>
      <div
        className={
          "relative md:h-[100vh] h-[60vh] overflow-hidden bg-[url('/hero/moon.svg')] bg-center bg-contain bg-no-repeat w-screen flex justify-center items-center"
        }
      >
        <audio autoPlay loop style={{ display: "none" }}>
          <source src="/hero/horror.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {/* Witch Animation */}
        <motion.div
          className="absolute z-50"
          animate={witchPosition}
          transition={{
            duration: 4, // Slightly longer duration for smoother motion
            ease: "easeInOut", // Smooth transitions
          }}
        >
          <Image
            height={100}
            width={100}
            alt="witch"
            objectFit="contain"
            src="/hero/witch.png"
          />
        </motion.div>

        {/* NITRUTSAV Text (Slow Downward Movement) */}
        <motion.div style={{ y: textY }} className="relative py-10">
          <h1 className="text-[#003955] font-Cattedrale text-[60px]  md:text-[150px] text-center leading-none">
            NITRUTSAV
          </h1>
          <p className="absolute lg:top-[0%] tracking-wider font-Cattedrale text-[16px] md:text-[35px] right-4 top-2 lg:right-[0%] text-[#003955] font-semibold">
            7-9 FEB
          </p>
          <div className="flex items-center flex-col md:flex-row justify-center space-x-4 font-Cattedrale lg:gap-10 gap-3 md:text-2xl lg:mt-5 mt-8">
            <button className="flex items-center justify-between bg-transparent border-[2px] border-black text-black font-semibold lg:px-4 lg:py-2 px-4 rounded-full shadow-md hover:shadow-lg">
              View Picture
            </button>
            <button className="flex items-center bg-black text-white font-semibold lg:px-8 lg:py-2 px-4 rounded-full shadow-md hover:shadow-lg">
              Register
            </button>
          </div>
        </motion.div>

        {/* Right Image Parallax (Moves to the Right) */}
        <motion.div
          style={{ x: rightImageX }}
          className="absolute hidden lg:block right-0"
        >
          <Image
            height={400}
            width={500}
            alt="right"
            objectFit="contain"
            src="/hero/right.png"
          />
        </motion.div>

        {/* Left Image Parallax (Moves to the Left) */}
        <motion.div
          style={{ x: leftImageX }}
          className="absolute hidden lg:block left-0"
        >
          <Image
            height={300}
            width={500}
            alt="left"
            objectFit="contain"
            src="/hero/left.png"
          />
        </motion.div>

        {/* Bottom Image Parallax (Fast Upward Movement) */}
        <motion.div
          style={{ y: bottomY }}
          className="w-screen absolute bottom-0"
        >
          <Image
            height={100}
            width={1000}
            alt="bottom"
            className="absolute lg:h-60 object-cover w-full bottom-0"
            // objectFit="contain"
            src="/hero/bottom.svg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxScene;
