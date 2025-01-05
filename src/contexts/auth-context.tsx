"use client";

import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

import { account, ID } from "@/lib/appwrite";
import { AuthContextType } from "@/types/auth-context";
import { User } from "@/types/user";
import { handleError } from "@/utils/handleError";

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

    const setUserFromAccount = async () => {
        const currentUser = await account.get();
        setUser({
            name: currentUser.name,
            email: currentUser.email,
            id: currentUser.$id,
        });
    };

    const checkSession = async () => {
        try {
            await setUserFromAccount();
        } catch (err) {
            const message = handleError(err, "Failed to fetch user session.");
            setError(message);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            await account.createEmailPasswordSession(email, password);
            await setUserFromAccount();
            setError("");
        } catch (err) {
            const message = handleError(err, "Invalid email or password.");
            setError(message);
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
            const message = handleError(
                err,
                "Registration failed. Please check your details."
            );
            setError(message);
        }
    };

    const logout = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
            setError("");
        } catch (err) {
            const message = handleError(err, "Failed to log out.");
            setError(message);
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
