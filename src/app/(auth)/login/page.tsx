"use client";
import React, { useState } from "react";

import { useAuth } from "@/contexts/auth-context";

const LoginPage: React.FC = () => {
    const { user, login, createAccount, logout, error, loading } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");

    if (user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="text-xl font-medium mb-4">
                    Logged in as {user.name}
                </p>
                <button
                    type="button"
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="w-full max-w-sm rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Login / Create Account
                </h1>
                {error && (
                    <p className="text-red-500 text-center mb-4">{error}</p>
                )}
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <input
                        type="text"
                        placeholder="Name (for registration)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={() => login(email, password)}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Login"}
                        </button>
                        <button
                            type="button"
                            onClick={() => createAccount(email, password, name)}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Create Account"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
