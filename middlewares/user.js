const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    if (token) {
        const user = jwt.verify(token, process.env.JWT_USER_SECRET);
        if (user) {
            req.userId = user.id;
            next();
        } else {
            res.status(403).json({
                message: "Invalid Credentials"
            });
        }
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        });
    }
}

module.exports = {
    userMiddleware
}