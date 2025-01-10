"use client";

import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";

import { useAuth } from "@/contexts/auth-context";
import { getUserPaymentStatus } from "@/utils/appwrite";

export default function PaymentStatusPage() {
    const { user } = useAuth();
    const [paymentStatus, setPaymentStatus] = useState({
        hasPaid: false,
        loading: true,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkPaymentStatus = async () => {
            if (!user?.id) {
                setPaymentStatus((prev) => ({ ...prev, loading: false }));
                return;
            }
            setLoading(true);
            try {
                const response = await getUserPaymentStatus(user.id);

                if (response?.status === "error") {
                    throw new Error("Failed to fetch payment status");
                }

                const hasPaid = Boolean(response?.data?.documents?.length);
                setPaymentStatus({
                    hasPaid,
                    loading: false,
                });
            } catch (error: unknown) {
                toast.error(
                    "Failed to fetch payment status. Please try again later."
                );
                console.error(error);
                setPaymentStatus({
                    hasPaid: false,
                    loading: false,
                });
            } finally {
                setLoading(false);
            }
        };

        checkPaymentStatus();
    }, [user?.id]);

    return (
        <div className="bg-reg min-h-screen flex items-center justify-center">
            {loading || paymentStatus.loading ? (
                <div className="text-center">
                    <h1 className="text-2xl font-bold font-Spirits">
                        Loading...
                    </h1>
                    <p className="mt-4 font-Spirits">
                        Please wait while we fetch your details.
                    </p>
                </div>
            ) : paymentStatus.hasPaid ? (
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-green-600 font-Spirits">
                        Payment Successful!
                    </h1>
                    <p className="mt-4 font-Spirits">
                        Thank you for your payment.
                    </p>
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-2xl font-bold font-Spirits">
                        Payment Details Not Found
                    </h1>
                    <p className="mt-4 font-Spirits">Please try again later.</p>
                </div>
            )}
        </div>
    );
}
