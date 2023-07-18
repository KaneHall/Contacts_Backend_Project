const asyncHandler = require("express-async-handler");

// Describe get all contacts
// Route GET /api/contacts
// Access public
const getContacts = asyncHandler((req, res) => {
  res.status(201).json({ message: "Get all contacts" });
});

// Describe create new contact
// Route POST /api/contacts
// Access public
const createContact = asyncHandler((req, res) => {
  console.log('The request body is:', req.body);
  const { name, email, phone } = req.body;
  
  // Check if required fields are populated
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields must be populated.");
  }
  
  res.status(201).json({ message: "Create contacts" });
});

// Describe get contact
// Route GET /api/contacts/:id
// Access public
const getContact = asyncHandler((req, res) => {
  res.status(201).json({ message: `Update for contact ${req.params.id}` });
});

// Describe update contact
// Route PUT /api/contacts/:id
// Access public
const updateContact = asyncHandler((req, res) => {
  res.status(201).json({ message: `Update for contact ${req.params.id}` });
});

// Describe delete contact
// Route DELETE /api/contacts/:id
// Access public
const deleteContact = asyncHandler((req, res) => {
  res.status(201).json({ message: `Delete for contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
