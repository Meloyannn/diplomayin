const router = require('express').Router();
const verifier = require('../routes/verifyToken');

router.get('/', verifier, (req, res) => {
    res.send("Hello " + req.header('auth-token'));
});

module.exports = router;