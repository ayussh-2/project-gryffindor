import SponsorCard from "./sponsorCard";

const sponsors = [
  {
    imageSrc: "/Images/ahp prod.jpeg",
    altText: "Cuts & Creations",
  },
  {
    imageSrc: "/Images/AK.jpeg",
    altText: "ICICI Bank",
  },
  {
    imageSrc: "/Images/Bolt Final.png",
    altText: "Bank of India",
  },
  {
    imageSrc: "/Images/gift Fairy.jpeg",
    altText: "SBI",
  },
  { imageSrc: "/Images/handshake.jpeg", altText: "Hideaway" },
  {
    imageSrc: "/Images/gym.png",
    altText: "Nirvaana",
  },
  { imageSrc: "/Images/Tikkaway final.png", altText: "Vanix" },
  { imageSrc: "/Images/VIP.png", altText: "Vanix" },
];

const PastSponsors = () => {
  return (
    <section
      className=" text-white py-12"
      style={{
        background: "linear-gradient(0deg, #040D17 0%, #040D17 100%), #000",
      }}
      id="sponsors"
    >
      <div className="text-center mb-8">
        <h2
          className=" font-bold font-Cattedrale tracking-wide text-4xl md:text-6xl lg:text-7xl"
          style={{
            color: "#CBFFFF",
          }}
        >
          PAST SPONSORS
        </h2>
      </div>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 max-w-7xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            key={index}
            imageSrc={sponsor.imageSrc}
            altText={sponsor.altText}
          />
        ))}
      </div> */}
      <div className="grid grid-cols-2 gap-4 p-4 max-w-5xl mx-auto lg:grid-cols-4">
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            key={index}
            imageSrc={sponsor.imageSrc}
            altText={sponsor.altText}
          />
        ))}
      </div>
      {/* <div className="grid grid-cols-4 gap-4 p-4 max-w-5xl mx-auto">
        {sponsors.slice(4).map((sponsor, index) => (
          <SponsorCard
            key={index + 4}
            imageSrc={sponsor.imageSrc}
            altText={sponsor.altText}
          />
        ))}
      </div> */}
    </section>
  );
};

export default PastSponsors;
