const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
        username: {
            type: String,
            required:[true, 'Please add a username'],
        },
        email: {
            type:String,
            required:[true, 'Please add user email adress'],
            unique: [true, 'Email is alreaady in use'],
        },
        password:{
            type: String,
            required: [true, 'Please add the user passowrd'],
        },
},  {
    timestamp: true,
    }
);

module.exports = mongoose.model('User', userSchema);