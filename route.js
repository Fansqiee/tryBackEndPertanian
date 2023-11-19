const router = require('express').Router();
const pertanian_http = require('./controler_http.js');

// router.get('/getDataTopic1', pertanian_http.getDataTopic1);
// router.get('/getDataTopic2', pertanian_http.getDataTopic2);
// router.get('/getDataTopic3', pertanian_http.getDataTopic3);
router.get('/getDataTopic', pertanian_http.getDataTopic);
module.exports = router;