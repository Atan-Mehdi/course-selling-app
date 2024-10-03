const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECREST = 'kuchbhirakhlepassword';
const mongoose = require('mongoose');

const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { creatorRouter } = require('./routes/creator');

const app = express();

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/creator', creatorRouter);



app.listen(3000, () => {
    console.log("You are listning to port 3000");
});