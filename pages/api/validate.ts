import * as crypto from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const generatedSignature = crypto
        .createHmac('sha256', process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET)
        .update(`${req.body.order_id}|${req.body.payment_id}`)
        .digest('hex');
    res.json({
        value: req.body.signature === generatedSignature,
    });
}
