const asyncHandler = require("express-async-handler");
const Contact = require('../models/contactModel');

// Describe get all contacts
// Route GET /api/contacts
// Access public
const getContacts = asyncHandler(async (req, res) => {
  // Fetch all contacts from the database using the Contact model
  const contacts = await Contact.find();
  
  // Respond with the fetched contacts as JSON data
  res.status(201).json({ contacts });
});


// Describe create new contact
// Route POST /api/contacts
// Access public
const createContact = asyncHandler(async (req, res) => {
  console.log('The request body is:', req.body);
  const { name, email, phone } = req.body;
  
       // Check if required fields are populated
    if (!name || !email || !phone) {
      // If any required field is missing, respond with a 400 Bad Request status and throw an error
    res.status(400);
    throw new Error("All fields must be populated.");
    }
     const contact = await Contact.create({
    name, 
    email,
    phone
  })
  // Respond with a success message indicating that the contact is created
  res.status(201).json(contact);
});


// Describe get contact
// Route GET /api/contacts/:id
// Access public
const getContact = asyncHandler(async(req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact)


  // Respond with a success message indicating the contact to be updated (based on the provided ID)
  //res.status(201).json({ message: `Get for contact ${req.params.id}` });
});


// Describe update contact
// Route PUT /api/contacts/:id
// Access public
const updateContact = asyncHandler((req, res) => {
  // Respond with a success message indicating the contact to be updated (based on the provided ID)
  res.status(201).json({ message: `Update for contact ${req.params.id}` });
});


// Describe delete contact
// Route DELETE /api/contacts/:id
// Access public
const deleteContact = asyncHandler((req, res) => {
  // Respond with a success message indicating the contact to be deleted (based on the provided ID)
  res.status(201).json({ message: `Delete for contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
