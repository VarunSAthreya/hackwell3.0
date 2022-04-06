import type { NextApiRequest, NextApiResponse } from 'next';
import Razorpay from 'razorpay';
import { v4 as uuid } from 'uuid';

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    console.log(req.body.price);

    const payment_capture: number = 1;

    const amount: number = req.body.price;
    const currency: string = 'INR';

    const options = {
        amount: amount * 100,
        currency,
        receipt: uuid(),
        payment_capture,
    };

    try {
        const response = await razorpay.orders.create(options);
        console.log(response);

        res.status(200).send(
            JSON.stringify({
                id: response.id,
                currency: response.currency,
                amount: response.amount,
            })
        );
    } catch (error) {
        res.status(500).send(error);
    }
}
