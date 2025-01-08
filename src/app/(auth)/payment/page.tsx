"use client";
import React from "react";

import toast from "react-hot-toast";

import { useAuth } from "@/contexts/auth-context";

export default function Page() {
    const { user } = useAuth();
    async function initiatePayment() {
        const name = user?.name;
        const mobileNumber = "9876543210";
        const amount = 100;
        const userId = user?.id;
        if (!amount || !user) {
            toast("Please login again!");
            return;
        }
        try {
            const response = await fetch("/api/payment/initiate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, mobileNumber, amount, userId }),
            });

            const data = await response.json();
            if (response.ok) {
                window.location.href = data.url;
            } else {
                alert(data.error || "Failed to initiate payment");
            }
        } catch (error) {
            toast.error("Some error occured!");
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen grid place-items-center">
            <div className="flex items-center flex-col">
                logged in: {user?.name}
                <button
                    onClick={initiatePayment}
                    className="bg-green-500 p-2 font-bold"
                >
                    Pay
                </button>
            </div>
        </div>
    );
}
