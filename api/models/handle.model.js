import mongoose from 'mongoose';

// Define the handle schema
const handleSchema = new mongoose.Schema({
    leetcode: {
        type: String,
        required: true,
    },
    codechef: {
        type: String,
        required: true,
    },
    codeforces: {
        type: String,
        required: true,
    },
    gfg: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Create the Handle model
const Handle = mongoose.model('Handle', handleSchema);

// Export the Handle model
export default Handle;