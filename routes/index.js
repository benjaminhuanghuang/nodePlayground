var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next){
    // res.send('Index Page');  //output to browser

    res.render('index.html');
});

module.exports = router;