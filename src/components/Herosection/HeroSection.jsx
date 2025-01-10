"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { div } from "framer-motion/client";

const ParallaxScene = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for different layers
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const spiderwebX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const forestY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const pumpkinsY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <>
     <div>
       
     </div>
    </>
  );
};

export default ParallaxScene;
