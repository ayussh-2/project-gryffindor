import axios from "axios";
import crypto from "crypto";
import { NextResponse } from "next/server";

import { account } from "@/lib/appwrite";
import { handleUserPayment } from "@/utils/appwrite";

const MERCHANT_KEY = process.env.MERCHANT_KEY;
const MERCHANT_ID = process.env.MERCHANT_ID;
const MERCHANT_STATUS_URL = process.env.MERCHANT_STATUS_URL;

export async function POST(request) {
    const { searchParams } = new URL(request.url);
    const merchantTransactionId = searchParams.get("id");

    const keyIndex = 1;
    const string =
        `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + MERCHANT_KEY;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const option = {
        method: "GET",
        url: `${MERCHANT_STATUS_URL}/${MERCHANT_ID}/${merchantTransactionId}`,
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-VERIFY": checksum,
            "X-MERCHANT-ID": MERCHANT_ID,
        },
    };

    try {
        const response = await axios.request(option);
        console.log(response);
        if (response?.code === "PAYMENT_SUCCESS") {
            const user = await account.get();
            const dbUpdate = await handleUserPayment({
                userId: user.$id,
                amount: response.data.amount,
                transactionId: response.data.transactionId,
                merchantTransactionId: response.data.merchantTransactionId,
                merchantId: response.data.merchantId,
                state: response.data.state,
            });

            if (dbUpdate?.status == "error") {
                console.error("Error saving details to APPWRITE ", dbUpdate);
                NextResponse.redirect("/payment/failed?details=unableToSave");
            }

            return NextResponse.redirect("/payment/success");
        }
        return NextResponse.redirect("/payment/failed");
    } catch (error) {
        console.error("error in payment status", {
            message: error.message,
            response: error.response ? error.response.data : null,
            request: error.request ? error.request : null,
        });
        return NextResponse.json(
            { error: "Failed to fetch payment status", details: error.message },
            { status: 500 }
        );
    }
}
