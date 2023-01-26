const express = require('express');
const router = express.Router();


router.get('/', function(req,res){
    return res.end('<h1>Home is working</h1>');
});
router.get(/^\/(?!posts\/?$)/, (req, res) => { res.send('general') })

module.exports = router;