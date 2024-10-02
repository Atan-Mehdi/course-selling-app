const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECREST = 'kuchbhirakhlepassword';
const mongoose = require('mongoose');

const app = express();

app.post('/user/signup', (req, res) => {
    res.json({
        message: "Successfull signup"
    });
});

app.post('/user/login', (req, res) => {
    res.json({
        message: "Successfull login"
    });
});

app.post('/user/purchase', (req, res) => {
    res.json({
        message: "Successful Purchase"
    });
});

app.get('/user/courses', (req, res) => {
    res.json({
        message: "All courses"
    });
});

app.get('/user/purchased', (req, res) => {
    res.json({
        message: "Your Purchased Courses"
    });
});



app.listen(3000, () => {
    console.log("You are listning to port 3000");
});