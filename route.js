const router = require('express').Router();
const pertanian_http = require('./controler_http.js');

router.get('/getDataTopic1', pertanian_http.getDataTopic1);
router.get('/getDataTopic2', pertanian_http.getDataTopic2);
router.get('/getDataTopic3', pertanian_http.getDataTopic3);
//datafortable
router.get('/TableDataTopic1', pertanian_http.TableDataTopic1);
router.get('/TableDataTopic2', pertanian_http.TableDataTopic2);
router.get('/TableDataTopic3', pertanian_http.TableDataTopic3);
//getforoneday
router.get('/getDataForOneDayTopic1', pertanian_http.getDataForOneDayTopic1);
router.get('/getDataForOneDayTopic2', pertanian_http.getDataForOneDayTopic2);
router.get('/getDataForOneDayTopic3', pertanian_http.getDataForOneDayTopic3);
//getdatasevendays
router.get('/getDataForSevenDaysTopic1', pertanian_http.getDataForSevenDaysTopic1);
router.get('/getDataForSevenDaysTopic2', pertanian_http.getDataForSevenDaysTopic2);
router.get('/getDataForSevenDaysTopic3', pertanian_http.getDataForSevenDaysTopic3);
//getdataforonemonth
router.get('/getDataForonemonthTopic1', pertanian_http.getDataForonemonthTopic1);
router.get('/getDataForonemonthTopic2', pertanian_http.getDataForonemonthTopic2);
router.get('/getDataForonemonthTopic3', pertanian_http.getDataForonemonthTopic3);

module.exports = router;