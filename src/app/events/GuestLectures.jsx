import React from "react";
import Carousel from "@/components/Carousel/carousel";
import { guestLectures } from "./constants";
const Workshop = () => {
  return (
    <div>
      <Carousel
        slides={guestLectures}
        heading={"Guest Lectures"}
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