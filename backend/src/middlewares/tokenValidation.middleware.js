const regexToken = /\b[a-z0-9]{11}\b/i

const tokenValidation = (req, res, next) => {
    console.log("middleware (tokenValidation) - auth: ", req.headers.authorization);
    const token = req.headers.authorization;
    if (regexToken.test(token)) {
        return next();
    }
    res.status(401).json({ "message": "invalid token" });
}

module.exports = tokenValidation