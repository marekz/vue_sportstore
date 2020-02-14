const jwt = require('jsonwebtoken');
const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWD = "secret";

module.exports = function (req, res, next) {
    if ((req.url == '/api/login' || req.url == '/login') && req.method == "POST") {
        if (req.body != null && req.body.name == USERNAME && req.body.password = PASSWD) {
            let token = jwt.sign({ data: USERNAME, expiresIn: "1h"}, APP_SECRET);
            res.json({
                success: true,
                token: token
            });
        } else {
            res.json({
                success: false
            });
        }
        res.end();
        return;
    } else if ((((req.url.starts.With("/api/products")
            || req.url.starts))))
};