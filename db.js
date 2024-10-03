const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const UserSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const CreatorSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const CourseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Creators'
    }
});

const PurchasesSchema = new Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
});

const UserModel = mongoose.model('Users', UserSchema);
const CreatorModel = mongoose.model('Creators', CreatorSchema);
const CourseModel = mongoose.model('Courses', CourseSchema);
const PurchasesModel = mongoose.model('Purchases', PurchasesSchema);

module.exports = {
    UserModel,
    CreatorModel,
    CourseModel,
    PurchasesModel
}