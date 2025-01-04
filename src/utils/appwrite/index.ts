import {
    createDocument,
    deleteDocument,
    getDocument,
    updateDocument,
} from "@/lib/appwrite";
import { UserInput } from "@/types/appwrite";

const USERS_COLLECTION_ID =
    process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID!;

export async function registerUser(userDetails: UserInput, userId: string) {
    try {
        const response = await createDocument(
            USERS_COLLECTION_ID,
            userDetails,
            userId
        );
        return response;
    } catch (error) {
        throw new Error(String(error));
    }
}

export async function getUser(userId: string) {
    try {
        const response = await getDocument(USERS_COLLECTION_ID, userId);
        return response;
    } catch (error) {
        console.log(error);
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
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteUser(userId: string) {
    try {
        const response = await deleteDocument(USERS_COLLECTION_ID, userId);
        return response;
    } catch (error) {
        console.log(error);
    }
}
