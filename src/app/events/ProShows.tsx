import React from "react";
import { proShows } from "./constants";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "@/components/Carousel/carousel";

// type Props = {
//   userId: string | undefined;
//   registeredEvents: string[] | undefined;
// };

const ProShows = () => {
  const OPTIONS: EmblaOptionsType = {};

  return (
    <div id={"club"}>
      <Carousel
        //registeredEvents={registeredEvents}
        slides={proShows}
        heading={"DTS Live"}
        //userId={userId}
      ></Carousel>
    </div>
  );
};

export default ProShows;
