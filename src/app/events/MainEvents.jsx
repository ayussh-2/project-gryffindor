import React from "react";
import { mainEvents } from "./constants";
import Carousel from "@/components/Carousel/carousel";

const MainEvents = () => {
  return (
    <div className="">
      <Carousel
        slides={mainEvents}
        heading={"Main Events"}
      ></Carousel>

      {/* <CarouselWithDetails
        data={Proshow}
        heading={"Main Events"}
        blendMode={`hard-light`}
        contentData={Proshow}
        position={"bottom"}
        bg={`url("/events-bg/bg1.png")`}
        content={`loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
              optio omnis ea, eum ut, quam vero sapiente saepe, incidunt
              voluptas accusamus. Voluptatibus accusamus expedita, quis, quod
              laborum earum vel beatae fugiat delectus illo exercitationem.
              sapiente voluptas et adipisci eaque, obcaecati unde atque quos
              enim eveniet perferendis. Quaerat labore ratione aperiam dolores
              temporibus. Facilis, nesciunt molestias!`}
      /> */}
    </div>
  );
};

export default MainEvents;