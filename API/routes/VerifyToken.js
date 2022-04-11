const jwt = require('jsonwebtoken');

const veryfy = (req,res,next) => {
    const authHeader = req.headers.token;
    if(!authHeader) res.status(401).json('You are not authenticated');
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if(err) return res.status(403).json('Token is invalid');
        req.user = user;
        next();
    })
}

const verifyTokenAndAuthorization = (req,res,next) => {
    veryfy(req,res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) next();
        res.status(403).json('You are not allowed to do this');
    }) 
}
const verifyTokenAndAdmin = (req,res, next) => {
    veryfy(req,res, () => {
        req.user.isAdmin ? next() : res.status(403).json('You are not allowed to do this');
    })
}
module.exports = {veryfy, verifyTokenAndAuthorization, verifyTokenAndAdmin}