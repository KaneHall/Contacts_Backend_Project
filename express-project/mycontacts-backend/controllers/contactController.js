// edscribe get all contacts
//route GET /api/contacts
//access public

const getContacts = async (req,res) => {
    res.status(201).json({message: "Get all contacts"})
};

// edscribe create new contact
//route POST /api/contacts
//access public

const createContact = async (req,res) => {
    console.log('The request body is:', req.body);
    const {name, email, phone } = req.body
    if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields must be populated.")
}
    res.status(201).json({message: "Create contacts"})
};

// edscribe gridTemplateColumns:  all contact
//route get /api/contacts/:id
//access public

const getContact = async ((req, res) => {
    res.status(201).json({message: `Update for contact for ${req.params.id}`});
  });

// edscribe Update contact
//route PUT /api/contacts/:id
//access public

const updateContact =  async ((req, res) => {
    res.json({message: `Update for contact for ${req.params.id}`}).status(201);
  });

  // describe Delete contact
//route DELETE /api/contacts/:id
//access public

const deleteContact =  async ((req, res) => {
    res.json({message: `Delete for contact for ${req.params.id}`}).status(201);
  });
module.exports = {getContacts, createContact, getContact, updateContact, deleteContact  }