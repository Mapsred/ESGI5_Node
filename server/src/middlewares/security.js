const verifyJWTToken = require('../libs/auth').verifyToken;

const verifyToken = (req, res, next) => {
    const authorizedPathes = [
        '/login_check',
        '/register'
    ];

    if(authorizedPathes.indexOf(req.path) !== -1){
        next();
    } else {
        const auth = req.get('Authorization') ;
        if(!auth || !auth.startsWith('Bearer ')){
            res.sendStatus(401);
        } else {
            verifyJWTToken(auth.replace("Bearer ", ""))
                .then((decodedToken) => {
                    req.user = decodedToken;
                    next();
                })
                .catch((error) => res.status(400).send({
                    error: "JWT token invalid",
                    details: error
                }));
        }
    }
};

module.exports = {
    verifyToken
};
