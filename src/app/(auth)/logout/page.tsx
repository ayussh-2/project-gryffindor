"use client";
import React, { useEffect } from "react";

import { useAuth } from "@/contexts/auth-context";

export default function Page() {
    const { logout } = useAuth();
    useEffect(() => {
        async function handleLogout() {
            const status = await logout();
            if (status) {
                window.location.href = "/";
            }
        }
        handleLogout();
    }, []);
    return (
        <div>
            <h1>Logout</h1>
            <p>Logging out...</p>
        </div>
    );
}
