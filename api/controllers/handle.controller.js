import Handle from '../models/handle.model.js';

export const handleController = async(req, res) => {
    try {
        const { leetcode, codechef, codeforces, gfg } = req.body;

        // Save handles to the database using your Handle model
        const newHandle = new Handle({ leetcode, codechef, codeforces, gfg });
        await newHandle.save();

        res.status(201).json({ message: 'Handles saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};