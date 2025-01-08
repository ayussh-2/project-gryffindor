import {
    createDocument,
    deleteDocument,
    getDocument,
    updateDocument,
} from "@/lib/appwrite";
import { PaymentDetails, UserInput } from "@/types/appwrite";

import { handleError } from "../handleError";
import { handleResponse } from "../handleResponse";

const USERS_COLLECTION_ID =
    process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID!;

export async function registerUser(userDetails: UserInput, userId: string) {
    try {
        const response = await createDocument(
            USERS_COLLECTION_ID,
            userDetails,
            userId
        );
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

export async function getUser(userId: string) {
    try {
        const response = await getDocument(USERS_COLLECTION_ID, userId);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

export async function updateUser(
    userId: string,
    userDetails: Partial<UserInput>
) {
    try {
        const response = await updateDocument(
            USERS_COLLECTION_ID,
            userId,
            userDetails
        );
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

export async function deleteUser(userId: string) {
    try {
        const response = await deleteDocument(USERS_COLLECTION_ID, userId);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

export async function handleUserPayment(paymentDetails: PaymentDetails) {
    try {
        const response = await createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_PAYMENT_COLLECTION_ID!,
            paymentDetails
        );
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

export async function getLoggedInUser() {}
