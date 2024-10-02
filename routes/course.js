const { Router } = require('express');
const courseRouter = Router();



courseRouter.get('/purchases', (req, res) => {
    res.json({
        message: "Your Purchased Courses"
    });
});

courseRouter.get('/preview', (req, res) => {
    res.json({
        message: "All courses"
    });
});

module.exports = {
    courseRouter
};