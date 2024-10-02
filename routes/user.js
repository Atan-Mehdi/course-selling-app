const { Router } = require('express');

const userRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.json({
        message: "Successfull signup"
    });
});

userRouter.post('/login', (req, res) => {
    res.json({
        message: "Successfull login"
    });
});

userRouter.post('/purchase', (req, res) => {
    res.json({
        message: "Successful Purchase"
    });
});

module.exports = {
    userRouter
}