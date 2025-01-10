// Events.js
"use client";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Heading from "@/components/ui/Heading";

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/events.json')
            .then(response => response.json())
            .then(data => setEvents(data));
    }, []);

    return (
        <div className="bg-[#1E1E1E] relative min-h-screen  z-50" >
            <Heading>
                <div className="text-[#CBFFFF] text-5xl flex items-center justify-center py-[3rem]">
                    Events
                </div>

            </Heading>



            <div className="flex flex-wrap bg-[#1E1E1E] flex-row gap-[3rem] justify-center">

                {events.map((event) => (

                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
}
