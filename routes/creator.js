const { Router } = require('express');
const { CreatorModel } = require('../db');
const creatorRouter = Router();


creatorRouter.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;


    await CreatorModel.create({
        email,
        password,
        firstName,
        lastName
    });

    res.json({
        message: "Successful creator signup"
    });
});

creatorRouter.post('/login', (req, res) => {
    res.json({
        message: "Successful creator login"
    });
});


creatorRouter.post('/course', (req, res) => {
    res.json({
        message: "Successful course created"
    });
});

creatorRouter.put('/course', (req, res) => {
    res.json({
        message: "Successful course created"
    });
});

creatorRouter.post('/course/bulk', (req, res) => {
    res.json({
        message: "Successful delete"
    });
});


module.exports = {
    creatorRouter
}