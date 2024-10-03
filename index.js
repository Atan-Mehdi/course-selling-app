require('dotenv').config();
const express = require('express');
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
    await mongoose.connect(process.env.MONGO_URL);
    console.log("You are listning to port 3000");
});