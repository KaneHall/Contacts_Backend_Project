// This line requires the Express module.
const express = require('express');
const errorHandler = require('./routes/middleware/errorHandler');

// This line requires the dotenv module and loads the environment variables from a .env file.
const dotenv = require('dotenv').config();

// This line creates a new Express application.
const app = express();

// This line defines the port number that the application will listen on.
const PORT = process.env.PORT || 6001;

// This line listens on the specified port number and logs a message when the server starts.
app.listen(PORT, () => {
  console.log(`Were up and running on port ${PORT}`);
});
//
app.use(express.json());
// This line uses the app.use() method to mount the contactRoutes module at the /api/contacts path.
app.use('/api/contacts', require('./routes/contactRoutes'));

app.use(errorHandler);