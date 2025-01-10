"use client";
import React, { useState } from 'react';
import Accordion from "./Accordion";
import "./Faq.css";

export default function Faq() {
    const accordionData = [
        {
            serial: "01",
            question: "What is a hackathon?",
            answer:
                "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
        },
        {
            serial: "02",
            question: "Can we work on old or ongoing projects?",
            answer:
                "No, you have to start from scratch. You can use open source libraries and frameworks.",
        },
        {
            serial: "03",
            question: "How many members do we need in a team?",
            answer:
                "You can submit solo as well a team with at max 4 members can be formed.",
        },
        {
            serial: "04",
            question: "Registration costs?",
            answer: "Nada",
        },
        {
            serial: "05",
            question: "Can I apply for multiple tracks?",
            answer:
                "Sure thing! Apply for all the tracks you want, like a kid in a candy store! 🏃🍭😄. Just make sure to be relevant.",
        },
        {
            serial: "06",
            question: "Who can participate?",
            answer:
                "Everyone is welcome to participate, be it, students, professionals, or aliens from different planets!",
        },
        {
            serial: "07",
            question: "Is physical presence required, or can we hack remotely?",
            answer: "Nah, no need for pants, go remote! 🏠😄",
        },
        {
            serial: "08",
            question: "What is a hackathon?",
            answer:
                "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
        },
        {
            serial: "09",
            question: "What is a hackathon?",
            answer:
                "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="bg-green-300 w-full h-full flex z-50 flex-col    ">
                <div className="accordion bg-[#FFF6E0] w-full flex flex-col ">
                    <div className="flex justify-center items-center font-bold text-red-700 leading-normal text-[16px] sm:text-[40px] md:text-[40px] text-center space-x-4">

                        <div className="w-auto h-full flex items-center">
                            FAQS
                        </div>

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
            </div>
        </>
    );
}
