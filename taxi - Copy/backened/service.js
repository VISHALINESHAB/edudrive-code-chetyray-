import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Endpoint to handle payment processing
app.post('/api/payment', (req, res) => {
    // Process payment here
    // You can integrate with Google Pay API or any other payment gateway
    // Upon successful payment, generate ticket and send response
    const { userName } = req.body;
    generateTicket(userName);
    res.json({ success: true });
});

// Function to generate ticket
function generateTicket(userName) {
    // Code to generate ticket with the user's name
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});