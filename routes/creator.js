const { Router } = require('express');
const { CreatorModel, CourseModel } = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { z } = require('zod');
const { creatorMiddleware } = require('../middlewares/creator');
const creatorRouter = Router();


creatorRouter.post('/signup', async (req, res) => {
    const requiredBody = z.object({
        email: z.string().min(10).max(30).email(),
        password: z.string().min(8).max(30),
        firstName: z.string().min(3).max(30),
        lastName: z.string().min(3).max(30)
    });

    const parsedDataWithSucess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSucess.success) {
        res.status(403).json({
            message: "Invalid format"
        });
    } else {
        const email = req.body.email;
        const password = req.body.password;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;

        const hashedPassword = await bcrypt.hash(password, 10);

        await CreatorModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        });

        res.json({
            message: "Successful creator signup"
        });
    }
});

creatorRouter.post('/login', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const creator = await CreatorModel.findOne({
        email
    });
    if (creator) {
        const response = await bcrypt.compare(password, creator.password);
        if (response) {
            const token = jwt.sign({
                id: creator._id.toString()
            }, process.env.JWT_CREATOR_SECRET);
            res.json({
                token: token
            });
        }
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        });
    }
});

creatorRouter.use(creatorMiddleware);


creatorRouter.post('/course', async (req, res) => {
    const { title, description, price, imageUrl } = req.body;
    const creatorId = req.creatorId;

    await CourseModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorId
    });

    res.json({
        message: "Successful course created"
    });
});

creatorRouter.put('/course', async (req, res) => {
    const { title, description, price, imageUrl, courseId } = req.body;
    const creatorId = req.creatorId;

    await CourseModel.updateOne({
        creatorId,
        courseId
    }, {
        title,
        description,
        price,
        imageUrl,
        creatorId
    });
    res.json({
        message: "Successful course updated"
    });
});

creatorRouter.get('/course/bulk', async (req, res) => {

    const courses = await CourseModel.find({
        creatorId: req.creatorId
    });
    res.json({
        courses: courses,
        message: "All your courses"
    });
});


module.exports = {
    creatorRouter
}