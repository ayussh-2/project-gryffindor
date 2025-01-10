"use client";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { formFields } from "@/config/register";
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

    const { user, loading } = useAuth();
    const [userStatus, setUserStatus] = useState({
        isRegistered: false,
        hasPaid: false,
    });
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [existingUser, setExistingUser] = useState<UserInput | null>(null);

    useEffect(() => {
        async function getUserStatus() {
            if (!user?.id) {
                return;
            }
            const userRegStatus = await getUser(user.id);
            const userPaymentStatus = await getUserPaymentStatus(user.id);
            if (
                userRegStatus?.status === "error" ||
                userPaymentStatus?.status === "error"
            ) {
                toast.error("Some error occurred! Please try again later.");
                return;
            }

            setExistingUser(userRegStatus?.data?.documents?.[0] || null);

            const isRegistered = userRegStatus?.data?.documents?.length > 0;
            const hasPaid = userPaymentStatus?.data?.documents?.length > 0;

            setUserStatus({
                isRegistered,
                hasPaid,
            });

            setLoadingStatus(false);
        }
        if (user) {
            setValue("email", user.email || "");
            setValue("name", user.name || "");
            getUserStatus();
        }
    }, [user, setValue]);

    const onSubmit = async (userDetails: UserInput) => {
        if (!user?.id) {
            toast.error("Please login to register.");
            return;
        }

        const { referralCode } = userDetails;
        if (!referralCode) {
            userDetails.referralCode = "NU25";
        }

        const result = await registerUser(userDetails, user.id);

        const { status, data } = result!;

        if (status === "error") {
            toast.error(data);
            return;
        }

        initiatePayment(userDetails.name, userDetails.phoneNumber, user?.id);
    };

    async function initiatePayment(
        name: string,
        mobileNumber: string,
        userId: string
    ) {
        if (!name || !mobileNumber || !userId) {
            toast.error("Can't initiate payment!");
            return;
        }
        const amount = 10;
        if (!amount || !user) {
            toast("Please login again!");
            return;
        }
        try {
            const response = await fetch("/api/payment/initiate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    mobileNumber,
                    amount,
                    userId,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                window.location.href = data.url;
            } else {
                alert(data.error || "Failed to initiate payment");
            }
        } catch (error) {
            toast.error("Some error occurred!");
            console.error(error);
        }
    }

    if (loading || loadingStatus) {
        return <div>Loading...</div>;
    }

    async function handleStartRePayment() {
        if (!user?.id) {
            toast.error("Please login to register.");
            return;
        }

        initiatePayment(
            existingUser?.name || "",
            existingUser?.phoneNumber || "",
            user?.id
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6 rounded-lg min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center mb-4">
                User Registration
            </h1>
            {userStatus.isRegistered && !userStatus.hasPaid && (
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-52"
                    onClick={handleStartRePayment}
                >
                    Complete Payment
                </button>
            )}

            {userStatus.isRegistered && userStatus.hasPaid && (
                <p>You have already registered and paid!</p>
            )}

            {!userStatus.isRegistered && !userStatus.hasPaid && (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 w-full max-w-lg"
                >
                    {formFields.map(
                        ({
                            name,
                            label,
                            placeholder,
                            type,
                            required,
                            pattern,
                        }) => (
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
                                        {
                                            errors[name as keyof UserInput]
                                                ?.message
                                        }
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
            )}
        </div>
    );
};

export default Registration;
