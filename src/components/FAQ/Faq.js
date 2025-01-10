"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Accordion from "./Accordion";
import "./Faq.css";
import Heading from "@/components/ui/Heading";

export default function Faq() {
    const accordionData = [
        {
            serial: "01",
            question: "What is a hackathon?",
            answer: "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
        },
        {
            serial: "02",
            question: "Can we work on old or ongoing projects?",
            answer: "No, you have to start from scratch. You can use open source libraries and frameworks.",
        },
        {
            serial: "03",
            question: "How many members do we need in a team?",
            answer: "You can submit solo as well a team with at max 4 members can be formed.",
        },
        {
            serial: "04",
            question: "Registration costs?",
            answer: "Nada",
        },
        {
            serial: "05",
            question: "Can I apply for multiple tracks?",
            answer: "Sure thing! Apply for all the tracks you want, like a kid in a candy store! 🏃🍭😄. Just make sure to be relevant.",
        },
        {
            serial: "06",
            question: "Who can participate?",
            answer: "Everyone is welcome to participate, be it, students, professionals, or aliens from different planets!",
        },
        {
            serial: "07",
            question: "Is physical presence required, or can we hack remotely?",
            answer: "Nah, no need for pants, go remote! 🏠😄",
        },

    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="w-full relative bg-[#1E1E1E] h-full flex flex-col pb-[10rem] ">
                <div className="accordion bg-[#1E1E1E] w-full flex flex-col">
                    <div className="flex justify-center items-center font-bold text-[#CBFFFF] leading-normal text-[16px] sm:text-[40px] md:text-[40px] text-center space-x-4">
                        <Heading>
                            <div className="w-auto h-full text-[#CBFFFF] flex items-center mt-[3rem]">
                                FAQS
                            </div>
                        </Heading>
                    </div>

                    {accordionData.map((data, index) => (
                        <Accordion
                            key={index}
                            question={data.question}
                            isOpen={openIndex === index}
                            toggleAccordion={() => toggleAccordion(index)}
                            answer={data.answer}
                        />
                    ))}
                </div>

                {/* Image Section */}
                <div className="">
                    {/* Image 1 */}
                    <div className="absolute right-[5%] top-[20%] w-[150px] sm:w-[200px] md:w-[250px] z-10">
                        <img
                            src="/Images/Group.svg"
                            alt="Decorative Image 1"
                            className="w-full h-full object-contain"
                        />
                    </div>


                    {/* Image 2 */}
                    <div className="absolute left-[10%] top-[60%] w-[150px] sm:w-[200px] md:w-[250px] z-10">
                        <img
                            src="/Images/Group-1.svg"
                            alt="Decorative Image 2"
                            layout="fill"

                        />
                    </div>

                    {/* Image 3 */}
                    <div className="absolute right-[2%] bottom-0 w-[350px] sm:w-[400px] md:w-[450px] z-10">
                        <img
                            src="/Images/house.svg"
                            alt="Decorative Image 3"
                            layout="fill"

                        />
                    </div>
                </div>
            </div>
        </>
    );
}
