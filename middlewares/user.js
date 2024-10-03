const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'kuchbhirakhlepassword';

const app = express();

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    if (token) {
        const user = jwt.verify(token, JWT_SECRET);
        if (user) {
            req.userId = user.id;
            next();
        } else {
            res.status(403).json({
                message: "Invalid Credentials"
            });
        }
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        });
    }
}

module.exports = {
    userMiddleware
}