import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/* Video Source with Autoplay, Loop, and Muted */}
      <Image
        src="/loader/loader.gif"
        height={1000}
        width={1000}
        className="max-w-full w-screen h-screen max-h-full"
        alt="Loader"
      />
      {/* Audio Source with Autoplay */}
      <audio autoPlay loop style={{ display: "none" }}>
        <source src="/loader/loader.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Loader;
