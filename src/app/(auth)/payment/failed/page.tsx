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
        <div className="min-h-screen flex items-center justify-center flex-col font-sans">
            <h1>Payment Failed</h1>
            {ERR_DETAILS.find((err) => err.id === details) && (
                <p>{ERR_DETAILS.find((err) => err.id === details)?.message}</p>
            )}
        </div>
    );
}
