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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially
                        unchanged.lorem45 Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Accusantium perspiciatis alias vero,
                        commodi sed eligendi sapiente consequatur, a nihil sint
                        recusandae eum libero officiis eveniet dolorem
                        blanditiis autem? Maxime provident rerum facere. In
                        atque facere distinctio necessitatibus expedita maiores
                        sed reiciendis eligendi quas! Quis corrupti aliquam
                        architecto laborum nemo nostrum natus voluptas. Vel
                        nesciunt consectetur consequatur odio.
                    </p>
                </div>
            </div>
        </div>
    );
}
