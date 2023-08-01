// Import the 'express' module
const express = require('express');

// Import the user controller functions for registering, logging in, and getting current user
const { registerUser, loginUser, currentUser } = require('../controllers/userController');

// Import the middleware for validating tokens
const validateToken = require('../middleware/validateTokenHandler');

// Create a new router instance from the 'express' module
const router = express.Router();

// Route for handling user registration, uses the 'registerUser' function from the controller
router.post('/register', registerUser);

// Route for handling user login, uses the 'loginUser' function from the controller
router.post('/login', loginUser);

// Route for getting the current user, protected by the 'validateToken' middleware
router.get('/current', validateToken, currentUser);

// Export the router to be used in other parts of the application
module.exports = router;


