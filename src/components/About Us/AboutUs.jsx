import Image from "next/image";

export default function AboutUs() {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#040D17] to-[#040D17] text-white px-4 py-12 md:py-16 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Tombstone - back to original position */}
          <div className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0">
            <Image
              src="/Images/Tombstone.svg"
              alt="Decorative Tombstone"
              height={500}
              width={450}
              className="object-contain"
              priority
            />
          </div>

          {/* Witch - hidden on mobile, shown on desktop */}
          <div className="hidden md:block absolute bottom-0 right-0">
            <Image
              src="/Images/witch.svg"
              alt="Decorative Witch"
              height={500}
              width={500}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-Cattedrale text-center mb-8 md:mb-16"
            style={{ color: "#CBFFFF" }}
          >
            ABOUT US
          </h1>

          {/* Text Content */}
          <div className="relative max-w-4xl mx-auto">
            <p
              className="text-lg md:text-xl font-Spirits leading-relaxed md:leading-loose text-left  p-6 rounded-lg "
              style={{ color: "#a6a9ad" }}
            >
              NITRUTSAV 2024 is the largest and the most fascinating literary
              and cultural festival of Odisha, scheduled from 9th to 11th
              February, 2024 in the abyss of National Institute of Technology,
              Rourkela. With endless suzume energies and kakkoi showdowns on
              offer, we are all geared up to unveil the charisma. Let's prepare
              for the journey that aims to unravel the matrix of imagination and
              rediscover the code of storytelling. Join us on this enthralling
              anime dynamism that awaits and pace up to the spirits of
              exploration!
            </p>
          </div>
        </div>
      </div>
    );
}
