const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    //header of the token---
   
    let token = req.headers["authorization"] || req.headers["x-auth-token"];
    

    if (token && token.startsWith("Bearer")) token = token.slice(7);
    //----if token not exist---
    
    if (!token) return res.status(401).send('Acess Denied Invalid Token');
    try {
        ///-------decoding the token
        const decode = jwt.verify(token, process.env.JWT_PVT_KEY);
        //attach the token with with req
        req.user = decode;
        //--------move to next middle ware
        next();
    }
    catch (err) {
        res.status(400).send('Token is invalid___');
    }
}