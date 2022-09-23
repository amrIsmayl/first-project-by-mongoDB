let jwt = require('jsonwebtoken');


module.exports.auth = (req, res, next) => {
    const token = req.header("token");
    jwt.verify(token, 'amr', async function (err, decoded) {
        if (err) {
            res.json({ message: 'error in token or token not provided', err })
        } else {
            console.log(decoded);
            // console.log(req);
            req.id = decoded.userid
            next()
        }
    });
}


