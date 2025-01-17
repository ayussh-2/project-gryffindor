import React from "react";
import CarouselWithDetails from "./CarouselWithDetails";
import Carousel from "@/components/Carousel/carousel";
import { workshops } from "./constants";
const Workshop = () => {
  return (
    <div>
      <Carousel
        slides={workshops}
        heading={"Workshops & Exhibition"}
      ></Carousel>

      {/* <CarouselWithDetails
        data={workshops}
        heading={"Workshops & Exhibition"}       
        blendMode={``}
        contentData={workshops}
        bg={`url("/events-bg/bg7.png")`}
      /> */}
    </div>
  );
};

export default Workshop;