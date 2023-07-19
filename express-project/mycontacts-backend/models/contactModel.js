const mongoose = require('mongoose');

const contactsSchema = mongoose.Schema(
    {
  name: {
    type: String,
    required: [true, 'Please add the contact name'],
  },
  email: {
    type: String,
    required: [true, 'Please add the email address'],
  },
  phpne: {
    type: String,
    required: [true, 'Please add the phone number'],
  } 
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('Contact', contactsSchema);