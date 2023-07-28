const asyncHandler = require("express-async-handler");

// Describe Register a user
// Route POST /api/users/register
// Access public
const registerUser = asyncHandler(async(req,res) => {
    res.json({message: "Register The User"})
});

// Describe Login a user
// Route POST /api/users/login
// Access public
const loginUser = asyncHandler(async(req,res) => {
    res.json({message: "Login User"})
});

// Describe Current user
// Route POST /api/users/current
// Access private
const currentUser = asyncHandler(async(req,res) => {
    res.json({message: "Current User"})
});

module.exports = {registerUser, loginUser, currentUser};