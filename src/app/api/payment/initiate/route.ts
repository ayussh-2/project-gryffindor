import axios from "axios";
import crypto from "crypto";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

const MERCHANT_KEY = process.env.MERCHANT_KEY;
const MERCHANT_ID = process.env.MERCHANT_ID;
const MERCHANT_BASE_URL = process.env.MERCHANT_BASE_URL;
const REDIRECT_URL = process.env.PAYMENT_REDIRECT_URI;

export async function POST(request) {
    const { name, mobileNumber, amount, userId } = await request.json();
    const orderId = nanoid();

    const paymentPayload = {
        merchantId: MERCHANT_ID,
        merchantUserId: name,
        mobileNumber: mobileNumber,
        amount: amount,
        merchantTransactionId: orderId,
        redirectUrl: `${REDIRECT_URL}/?id=${orderId}&userId=${userId}`,
        redirectMode: "POST",
        paymentInstrument: { type: "PAY_PAGE" },
    };

    const payload = Buffer.from(JSON.stringify(paymentPayload)).toString(
        "base64"
    );
    const keyIndex = 1;
    const string = payload + "/pg/v1/pay" + MERCHANT_KEY;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const option = {
        method: "POST",
        url: MERCHANT_BASE_URL,
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-VERIFY": checksum,
        },
        data: { request: payload },
    };

    try {
        const response = await axios.request(option);
        return NextResponse.json({
            msg: "OK",
            url: response.data.data.instrumentResponse.redirectInfo.url,
        });
    } catch (error) {
        console.error("error in payment", error);
        return NextResponse.json(
            { error: "Failed to initiate payment" },
            { status: 500 }
        );
    }
}
