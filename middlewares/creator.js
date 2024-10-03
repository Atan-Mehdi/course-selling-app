const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'kuchbhirakhlepassword';

const app = express();

function creatorMiddleware(req, res, next) {
    const token = req.headers.token;
    if (token) {
        const creator = jwt.verify(token, JWT_SECRET);
        if (creator) {
            req.creatorId = creator.id;
            next();
        } else {
            res.status(403).json({
                message: "Invalid Credentials"
            });
        }
    } else {
        res.status(403).json({
            message: "No token"
        });
    }
}

module.exports = {
    creatorMiddleware
}