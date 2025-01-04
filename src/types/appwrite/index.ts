import { Models } from "appwrite";

export interface UserInput {
    name: string;
    institute: string;
    email: string;
    phoneNumber: string;
    city: string;
    state: string;
    referralCode: string;
}

export interface RegisterResponse {
    success: boolean;
    data?: Models.Document;
    error?: string;
}
