"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "@/components/ui/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@/components/ui/Typography";
const CarouselWithDetails = ({ data, heading, bg, contentData, Eventname,position }) => {
  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-prev-arrow">
      <img src="/events/left_arrow.png" alt="" />
    </div>
  );
  const CustomNextArrow = (props) => (
    <div {...props} className="custom-next-arrow">
      <img src="/events/right_arrow.png" alt="" />
    </div>
  );
  const divStyle = {
    background: `${bg} black`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const settings = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const [selectedImage, setSelectedImage] = useState(data[0]?.image);
  const selectedImageData = data.find((item) => item.image === selectedImage);
  const selectedContent = selectedImageData ? selectedImageData.content : "";
  const selectedEventName = selectedImageData
    ? selectedImageData.eventName
    : "";
  const selectedRegisterurl = selectedImageData?selectedImageData.Registerurl:"" ;


  const handleButtonClick = () => {
    // Redirect to the selectedButtonUrl when the button is clicked
    window.location.href = selectedRegisterurl;
  };

 
  
  return (
    <div
      style={divStyle}
      className={`pt-14 bg-${position} bg-blend-hard-light main overflow-hidden bg-cover   min-h-screen bg-no-repeat bg-center relative `}
    >
      <div className="flex justify-center items-center mb-7 mx-auto">
        <div className="w-32 hidden lg:block rotate-180 ">
          <img src="/events/knife.png" alt="" />
        </div>
        <div className="ml-4 mr-4">
          <Heading variant="xs">{heading}</Heading>
        </div>
        <div className="w-32  hidden lg:block ">
          <img src="/events/knife.png" alt="" />
        </div>
      </div>
      {/* <div className=" md:h-72 md:mt-20 mb-14  w-4/5 mx-auto">
        <Slider {...settings}>
          {data.map((item) => (
            <div
              key={item.id}
              className={`flex justify-center items-center p-2 gap-5 focus:outline-none ${selectedImage === item.image ? "selected" : "grayscale"}`}
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                className="w-36 h-32 md:w-52  lg:w-[23rem] object-cover lg:h-[15rem] rounded-xl "
                alt={item.name}
              />
            </div>
          ))}
        </Slider>
      </div> */}
      <div className="flex w-4/5 mb-12   mx-auto flex-col-reverse lg:flex-row gap-9">
        <div className="flex w-full flex-col gap-8">
          <div className="lg:text-5xl text-3xl">{selectedEventName}</div>
          <div className="flex">
            <div className="h-1 w-20 bg-red-500"></div>
            <div className="h-1 w-36 bg-white"></div>
          </div>
          <div className="text-xl md:w-[40rem]">
            <Typography variant="sm">{selectedContent}</Typography>
          </div>
          <div>
            {selectedRegisterurl && (
              <button
                onClick={handleButtonClick}
                className="bg-[#BA0000] hover:bg-[#BA0009]  text-white font-bold py-2 px-4 rounded"
              >
                Register
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-center  items-center  object-center w-[100%]  lg:w-4/5 lg:h-4/5 ">
          <img
            src={selectedImage}
            className="lg:h-[24rem] lg:w-[56rem] w-[100%] object-cover object-center rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselWithDetails;