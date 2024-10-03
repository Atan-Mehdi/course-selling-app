const { Router } = require('express');
const { UserModel } = require('../db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'kuchbhirakhlepassword';
const bcrypt = require('bcrypt');
const { z } = require("zod");

const userRouter = Router();

userRouter.post('/signup', async (req, res) => {

    const requiredBody = z.object({
        email: z.string().min(3).max(30).email(),
        password: z.string().min(8).max(30),
        firstName: z.string().min(3).max(30),
        lastName: z.string().min(3).max(30)
    });

    const parsedDataWithSucess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSucess.success) {
        res.json({
            message: "Invalid format",
            error: parsedDataWithSucess.error
        });
        return;
    } else {
        const email = req.body.email;
        const password = req.body.password;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;

        const hashPassword = await bcrypt.hash(password, 10);
        await UserModel.create({
            email: email,
            password: hashPassword,
            firstName,
            lastName
        });

        res.json({
            message: "Successfull signup"
        });
    }
});

userRouter.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email
    });

    const response = await bcrypt.compare(password, user.password);
    if (response) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Invalid Credential"
        });
    }
});

userRouter.post('/purchase', (req, res) => {
    res.json({
        message: "Successful Purchase"
    });
});

module.exports = {
    userRouter
}