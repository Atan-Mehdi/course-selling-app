const jwt = require('jsonwebtoken');

function creatorMiddleware(req, res, next) {
    const token = req.headers.token;
    if (token) {
        const creator = jwt.verify(token, process.env.JWT_CREATOR_SECRET);
        if (creator) {
            req.creatorId = creator.id;
            next();
        } else {
            res.status(403).json({
                message: "Invalid Credentials"
            });
        }
    } else {
        res.status(403).json({
            message: "No token"
        });
    }
}

module.exports = {
    creatorMiddleware
}