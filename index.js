const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'kuchbhirakhlepassword';
const mongoose = require('mongoose');

const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { creatorRouter } = require('./routes/creator');


const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/creator', creatorRouter);



app.listen(3000, async () => {
    await mongoose.connect("mongodb+srv://atan:07cMghzP6Eb93CWy@cluster0.o4smy.mongodb.net/course-selling-app");
    console.log("You are listning to port 3000");
});