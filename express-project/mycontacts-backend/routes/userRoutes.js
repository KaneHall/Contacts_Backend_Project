const express = require('express');

const router = express.Router();

router.post('/register', (req, res) => {
    res.json({message: 'Register The User.'})
});

router.post('/login', (req, res) => {
    res.json({message: 'Login user.'})
});

router.post('/register', (req, res) => {
    res.json({message: 'Current User Information.'})
});