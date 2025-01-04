"use client";

import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

import { account, ID } from "@/lib/appwrite";
import { User } from "@/types/user";

interface AuthContextType {
    user: User | null;
    error: string;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    createAccount: (
        email: string,
        password: string,
        name: string
    ) => Promise<void>;
    logout: () => Promise<void>;
}

const defaultAuthContext: AuthContextType = {
    user: null,
    error: "",
    loading: true,
    login: async () => {},
    createAccount: async () => {},
    logout: async () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkSession();
    }, []);

    const checkSession = async () => {
        try {
            const currentUser = await account.get();
            setUser({ name: currentUser.name, email: currentUser.email });
        } catch (err) {
            console.error("Session check error:", err);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            await account.createEmailPasswordSession(email, password);
            const loggedInUser = await account.get();
            setUser({ name: loggedInUser.name, email: loggedInUser.email });
            setError("");
        } catch (err) {
            console.error("Login error:", err);
            setError("Invalid email or password.");
        }
    };

    const createAccount = async (
        email: string,
        password: string,
        name: string
    ) => {
        try {
            await account.create(ID.unique(), email, password, name);
            await login(email, password);
        } catch (err) {
            console.error("Registration error:", err);
            setError("Registration failed. Please check your details.");
        }
    };

    const logout = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
            setError("");
        } catch (err) {
            console.error("Logout error:", err);
            setError("Failed to log out.");
        }
    };

    if (loading) {
        return null;
    }

    return (
        <AuthContext.Provider
            value={{ user, error, loading, login, createAccount, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
