const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Describe Register a user
// Route POST /api/users/register
// Access public
const registerUser = asyncHandler(async(req,res) => {
    const {username, email, password } = req.body;
    if(!username || !email || !password ){
        res.status(400);
        throw new Error ('All fields are mandetory')
    }
        const userAvailable = await User.findOne({email})
        if(userAvailable){
            res.status(400);
            throw new Error('User already exists')
        }
        
            //Hash pasword
            const hashedPassword = await bcrypt.hash(password,10);
            console.log("Hashed Password: ", hashedPassword);
            const user = await User.create({
                username,
                email,
                password: hashedPassword,
            });

            console.log(`User created ${user}`);
            if(user){
                res.status(201).json({_id: user.id, email: user.email})
            }else{
                res.status(400);
                throw new Error('User data not valid');
            }

    res.json({message: "Register The User"})
});

// Describe Login a user
// Route POST /api/users/login
// Access public
const loginUser = asyncHandler(async(req,res) => {
    res.json({message: "Login User"})
    
    const {email, password} = req.body;
    if(!email || !password){
    res.status(400)
    throw new Error('All fields are mandatory');
    }
    const user = await User.findOne({email});
    //comapre password with hashed password
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '35m'})
            console.log(accessToken)

        res.status(200).json({accessToken});
        }else{
        res.status(401);
        throw new Error('Email or Password is not valid');
    }
    

});

// const loginUser = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       res.status(400);
//       throw new Error("All fields are mandatory!");
//     }
//     const user = await User.findOne({ email });
//     //compare password with hashedpassword
//     if (user && (await bcrypt.compare(password, user.password))) {
//       const accessToken = jwt.sign(
//         {
//           user: {
//             username: user.username,
//             email: user.email,
//             id: user.id,
//           },
//         },
//         process.env.ACCESS_TOKEN_SECERT,
//         { expiresIn: "1m" }
//       );
//       console.log(accessToken);
//       res.status(200).json({ accessToken });
//     } else {
//       res.status(401);
//       throw new Error("email or password is not valid");
//     }
//   });







// Describe Current user
// Route POST /api/users/current
// Access private
const currentUser = asyncHandler(async(req,res) => {
    res.json(req.user)
});

module.exports = {registerUser, loginUser, currentUser};