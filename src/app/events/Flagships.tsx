import React from "react";
import { flagships } from "./constants";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "@/components/Carousel/carousel";

// type Props = {
//   userId: string | undefined;
//   registeredEvents: string[] | undefined;
// };

const Flagships = () => {
  const OPTIONS: EmblaOptionsType = {};

  return (
    <div id={"flagship"}>
      <Carousel
        //registeredEvents={registeredEvents}
        slides={flagships}
        heading={"Flagship Events"}
        //userId={userId}
      ></Carousel>
    </div>
  );
};

export default Flagships;