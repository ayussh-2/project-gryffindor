"use client";
import React from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { formFields } from "@/config/register";
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

    const onSubmit = async (userDetails: UserInput) => {
        if (!user?.id) {
            toast.error("Please login to register.");
            return;
        }

        const result = await registerUser(userDetails, user.id);

        const { status, data } = result!;

        if (status === "error") {
            toast.error(data);
            return;
        }

        toast.success("User registered successfully.");
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
                                    {
                                        (
                                            errors[name as keyof UserInput] as {
                                                message?: string;
                                            }
                                        )?.message
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
        </div>
    );
};

export default Registration;
