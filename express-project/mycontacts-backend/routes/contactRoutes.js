// This line requires the Express module.
const express = require("express");

// This line creates a new Express router object.
const router = express.Router();

// Import the getContacts function from the contactController module.
const {getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contactController")


// router.route("/").get(getContacts); // Create a GET route at the root path that calls the getContacts function.
// router.route("/").post(createContact); // Create a POST route at the root path that does nothing.
// router.route("/:id").get(getContact); // Create a GET route that matches the path /:id and returns a contact by ID.
// router.route("/:id").put( updateContact); // Create a PUT route that matches the path /:id and updates a contact by ID.
// router.route("/:id").delete(deleteContact); // Create a DELETE route that matches the path /:id and deletes a contact by ID.

//The above simplified
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// This line defines a GET route that handles requests to the root path.
// The callback function returns a JSON object with the message "Get all contacts".
// router.route("/").get((req, res) => {
//   res.json({message: "Get all contacts"}).status(200);
// });

// // This line defines a POST route that handles requests to the root path.
// // The callback function returns a JSON object with the message "Create all contacts".
// router.route("/").post((req, res) => {
//   res.json({message: "Create all contacts"}).status(200);
// });

// // This line defines a GET route that handles requests to the root path with a parameter.
// // The callback function returns a JSON object with the message "Update for contact for {id}".
// router.route("/").get((req, res) => {
//   res.json({message: `Update for contact for ${req.params.id}`}).status(200);
// });

// // This line defines a PUT route that handles requests to the /:id path.
// // The callback function returns a JSON object with the message "Update for contact for {id}".
// router.route("/:id").put((req, res) => {
//   res.json({message: `Update for contact for ${req.params.id}`}).status(200);
// });

// // This line defines a DELETE route that handles requests to the /:id path.
// // The callback function returns a JSON object with the message "Delete for contact for {id}".
// router.route("/:id").delete((req, res) => {
//   res.json({message: `Delete for contact for ${req.params.id}`}).status(200);
// });

// This line exports the router object.
module.exports = router;