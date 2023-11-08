const router = require('express').Router();
const pertanian_http = require('./controler_http.js');

router.get('/getDataTopic1', pertanian_http.getDataTopic1);
router.get('/getDataTopic2', pertanian_http.getDataTopic2);// route request to respond lastest 100 data
// router.get('/getDataPertanian10', pertanian_http.getDataPertanian10);
// router.get('/getDate', pertanian_http.getDataPertanianDatetime);

module.exports = router;