"use client";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { formFields, notAllowedInstitutes } from "@/config/register";
import { useAuth } from "@/contexts/auth-context";
import { UserInput } from "@/types/appwrite";
import { getUser, getUserPaymentStatus, registerUser } from "@/utils/appwrite";

const Registration: React.FC = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<UserInput>();

    const { user } = useAuth();
    const [{ isRegistered, hasPaid }, setUserStatus] = useState({
        isRegistered: false,
        hasPaid: false,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [existingUser, setExistingUser] = useState<UserInput | null>(null);

    useEffect(() => {
        if (!user?.id) {
            setIsLoading(false);
            return;
        }

        const getUserStatus = async () => {
            try {
                const [userRegStatus, userPaymentStatus] = await Promise.all([
                    getUser(user.id),
                    getUserPaymentStatus(user.id),
                ]);

                if (
                    userRegStatus?.status === "error" ||
                    userPaymentStatus?.status === "error"
                ) {
                    throw new Error("Failed to fetch user status");
                }

                setExistingUser(userRegStatus?.data?.documents?.[0] || null);
                setUserStatus({
                    isRegistered: userRegStatus?.data?.documents?.length > 0,
                    hasPaid: userPaymentStatus?.data?.documents?.length > 0,
                });
            } catch (error) {
                toast.error(
                    "Failed to fetch user status. Please try again later."
                );
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        setValue("email", user.email || "");
        setValue("name", user.name || "");
        getUserStatus();
    }, [user, setValue]);

    const initiatePayment = async (
        name: string,
        mobileNumber: string,
        userId: string
    ) => {
        if (!name || !mobileNumber || !userId) {
            toast.error("Missing required payment information");
            return;
        }

        try {
            const response = await fetch("/api/payment/initiate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    mobileNumber,
                    amount: 10,
                    userId,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to initiate payment");
            }

            window.location.href = data.url;
        } catch (error) {
            toast.error("Payment initiation failed");
            console.error(error);
        }
    };

    const onSubmit = async (userDetails: UserInput) => {
        if (!user?.id) {
            toast.error("Please login to register.");
            return;
        }

        if (notAllowedInstitutes.includes(userDetails.institute)) {
            toast.error("Sorry your institute is not allowed to register");
            return;
        }

        try {
            userDetails.referralCode = userDetails.referralCode || "NU25";
            const result = await registerUser(userDetails, user.id);

            if (result?.status === "error") {
                toast.error(result?.data || "Registration failed");
                return;
            }

            await initiatePayment(
                userDetails.name,
                userDetails.phoneNumber,
                user.id
            );
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : "Registration failed"
            );
            console.error(error);
        }
    };

    const handleStartRePayment = async () => {
        if (!user?.id || !existingUser) {
            toast.error("Please login to complete payment");
            return;
        }

        await initiatePayment(
            existingUser.name,
            existingUser.phoneNumber,
            user.id
        );
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                Loading...
            </div>
        );
    }

    const renderContent = () => {
        if (!user) {
            return (
                <p className="text-center">
                    Please login to register. If you don&apos;t have an account,
                    you can create one.
                </p>
            );
        }

        if (isRegistered && hasPaid) {
            return (
                <p className="text-center">
                    You have already registered and paid!
                </p>
            );
        }

        if (isRegistered && !hasPaid) {
            return (
                <button
                    onClick={handleStartRePayment}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-52"
                >
                    Complete Payment
                </button>
            );
        }

        return (
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 w-full max-w-lg"
            >
                {formFields.map(
                    ({ name, label, placeholder, type, required, pattern }) => (
                        <div key={name}>
                            <label className="block font-semibold text-sm">
                                {label}
                            </label>
                            <input
                                type={type}
                                {...register(name as keyof UserInput, {
                                    required: required
                                        ? `${label} is required`
                                        : false,
                                    pattern,
                                })}
                                placeholder={placeholder}
                                className="border p-2 w-full rounded-md"
                            />
                            {errors[name as keyof UserInput] && (
                                <p className="text-red-500 text-sm">
                                    {errors[name as keyof UserInput]?.message}
                                </p>
                            )}
                        </div>
                    )
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        );
    };

    return (
        <div className="max-w-6xl mx-auto p-6 rounded-lg min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center mb-4">
                User Registration
            </h1>
            {renderContent()}
        </div>
    );
};

export default Registration;
