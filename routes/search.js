const express = require('express');
const router = express.Router();
const searchReq = require('../modules/services/searchReq.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    var searchRes = searchReq.makeSearch(req.query.search);
    res.render()
    res.send(searchRes);
});

module.exports = router;
