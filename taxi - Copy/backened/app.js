import express from 'express';
import bodyParser from 'body-parser';
import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

// Create an Express application
const app = express();

// Use bodyParser middleware to parse request bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/admin')
   .then(() => console.log('MongoDB connected'))
   .catch((err) => console.error("MongoDB connection error:", err));

// Define a schema for user data
const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

// Create a mongoose model based on the schema
const User = model('User', userSchema);

// Define a route for handling registration
app.post('/register', async (req, res) => {
    // Extract data from the request body
    const { userName, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Create a new user document
        const newUser = new User({
            userName: userName,
            email: email,
            password: password
        });

        // Save the user document to the database
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error registering user", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
const PORT = 5000; // Changed the default port to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
