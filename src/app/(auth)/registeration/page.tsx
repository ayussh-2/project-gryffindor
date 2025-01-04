"use client";
import React from "react";

import { useForm } from "react-hook-form";

import { useAuth } from "@/contexts/auth-context";
import { UserInput } from "@/types/appwrite";
import { registerUser } from "@/utils/appwrite";

const Registration: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserInput>();

    const { user, loading } = useAuth();

    const onSubmit = async (data: UserInput) => {
        console.log("Form Data:", data);
        if (!user?.id) {
            alert("Please login to register");
            return;
        }

        const result = await registerUser(data, user.id);
        console.log("Registration Result:", result);
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="max-w-lg mx-auto p-6 rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 font-manrope">
                User Registration
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-semibold text-sm">Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your Name"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block font-semibold text-sm">
                        Institute
                    </label>
                    <input
                        {...register("institute", {
                            required: "Institute is required",
                        })}
                        placeholder="Your Institute"
                    />
                    {errors.institute && (
                        <p className="text-red-500 text-sm">
                            {errors.institute.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block font-semibold text-sm">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        placeholder="Your Email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block font-semibold text-sm">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        {...register("phoneNumber", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Invalid phone number",
                            },
                        })}
                        placeholder="Your Phone Number"
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-sm">
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block font-semibold text-sm">City</label>
                    <input
                        {...register("city", { required: "City is required" })}
                        placeholder="Your City"
                    />
                    {errors.city && (
                        <p className="text-red-500 text-sm">
                            {errors.city.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block font-semibold text-sm">State</label>
                    <input
                        {...register("state", {
                            required: "State is required",
                        })}
                        placeholder="Your State"
                    />
                    {errors.state && (
                        <p className="text-red-500 text-sm">
                            {errors.state.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block font-semibold text-sm">
                        Referral Code
                    </label>
                    <input
                        {...register("referralCode")}
                        placeholder="Referral Code (Optional)"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Registration;
