const { Router } = require('express');
const creatorRouter = Router();


creatorRouter.post('/signup', (req, res) => {
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