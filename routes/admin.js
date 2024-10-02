const { Router } = require('express');
const adminRouter = Router();


adminRouter.post('/signup', (req, res) => {
    res.json({
        message: "Successful admin signup"
    });
});

adminRouter.post('/login', (req, res) => {
    res.json({
        message: "Successful admin login"
    });
});


adminRouter.post('/course', (req, res) => {
    res.json({
        message: "Successful course created"
    });
});

adminRouter.put('/course', (req, res) => {
    res.json({
        message: "Successful course created"
    });
});

adminRouter.post('/course/bulk', (req, res) => {
    res.json({
        message: "Successful delete"
    });
});


module.exports = {
    adminRouter
}