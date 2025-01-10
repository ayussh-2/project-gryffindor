"use client";
import React from "react";

import { useSearchParams } from "next/navigation";

import { ERR_DETAILS } from "@/config/payment";

export default function Page() {
    const searchParams = useSearchParams();
    const details = searchParams.get("details");
    const isReqValid = searchParams.get("error");
    if (!isReqValid) {
        window.location.href = "/";
        return null;
    }
    return (
        <div className="bg-reg min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center max-w-lg">
                <h1 className="text-2xl font-bold font-Spirits">
                    Payment Failed
                </h1>
                {ERR_DETAILS.find((err) => err.id === details) && (
                    <p className="text-xl font-Spirits text-center mt-4">
                        {ERR_DETAILS.find((err) => err.id === details)?.message}
                    </p>
                )}
            </div>
        </div>
    );
}
