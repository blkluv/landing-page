import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email } = req.body;

        // Remove any Firebase-related code here

        // Example: 
        // const result = await someFunctionThatDoesNotUseFirebase();

        return res.status(200).json({ text: 'Success' });
    } catch (error: any) {
        console.trace(error);
        res.status(500).json({ text: 'Failed to save email' });
    }
}
