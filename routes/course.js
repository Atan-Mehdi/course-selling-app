const { Router } = require('express');
const { userMiddleware } = require('../middlewares/user');
const { CourseModel, PurchasesModel } = require('../db');
const courseRouter = Router();


courseRouter.get('/preview', async (req, res) => {

    const allCourses = await CourseModel.find();
    res.json({
        allCourses: allCourses,
        message: "All courses"
    });
});

courseRouter.use(userMiddleware);

courseRouter.get('/purchases', async (req, res) => {
    const userCourses = await PurchasesModel.find({
        userId: req.userId
    });

    const yourCourses = await CourseModel.find({
        courseId: userCourses.courseId
    });

    res.json({
        yourCourses: yourCourses,
        message: "Your Purchased Courses"
    });
});


module.exports = {
    courseRouter
};