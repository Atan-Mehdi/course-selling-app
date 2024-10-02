const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECREST = 'kuchbhirakhlepassword';
const mongoose = require('mongoose');

const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

const app = express();

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);



app.listen(3000, () => {
    console.log("You are listning to port 3000");
});