import { funevents } from "./constants";
import Carousel from "@/components/Carousel/carousel";
const FunEvents = () => {
  return (
    <div>
      <Carousel
        slides={funevents}
        heading={"Fun Events"}
      ></Carousel>

      {/* <CarouselWithDetails
        data={funevents}
        contentData={funevents}
        heading={"Fun Events"}
        Eventname={"Fun Events"}
        bg={`url("/events-bg/bg6.png")`}
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

export default FunEvents;