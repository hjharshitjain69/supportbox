const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Ticket = require('./ticketModel');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ticketDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle ticket submission
app.post('/submit-ticket', (req, res) => {
  const { description, category, urgency, membership } = req.body;

  // Basic validation
  if (!description || !category || !urgency || !membership) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create new ticket
  const newTicket = new Ticket({
    description,
    category,
    urgency,
    membership
  });

  // Save new ticket to database
  newTicket.save((err) => {
    if (err) {
      console.error('Error saving ticket:', err);
      return res.status(500).json({ error: 'Error saving ticket' });
    }
    console.log('Ticket saved successfully:', newTicket);
    return res.status(201).json({ message: 'Ticket submitted successfully', ticket: newTicket });
  });
});

app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});
