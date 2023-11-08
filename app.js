// "use strict";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const http = require('http');
const https = require('https');

//const privateKey = fs.readFileSync('/etc/letsencrypt/live/vps.isi-net.org/privkey.pem','utf8');
//const certificate = fs.readFileSync('/etc/letsencrypt/live/vps.isi-net.org/cert.pem','utf8');
//const ca = fs.readFileSync('/etc/letsencrypt/live/vps.isi-net.org/chain.pem','utf8');

///const credentials = {
	//key: privateKey,
	//cert: certificate,
  //ca: ca
//};

const api = express();
api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json())
api.use(cors({
    origin:['http://localhost/8080','*']
}));


// const dbase_gisting = require('./database_config.js'); 
// dbase_gisting.query(`CREATE TABLE IF NOT EXISTS pertanian (
//   time TIMESTAMP NOT NULL,
//   ph FLOAT,
//   tds FLOAT,
//   rain FLOAT,
//   suhu_air FLOAT,
//   winddir FLOAT,
//   windspeed FLOAT,
//   waterflow1 FLOAT,
//   waterflow2 FLOAT,
//   waterflow3 FLOAT,
//   waterflow4 FLOAT,
//   berat FLOAT,
//   suhu FLOAT,
//   tekanan_udara FLOAT,
//   ketinggian FLOAT,
//   infrared1 FLOAT,
//   infrared2 FLOAT, )
  // `, function(err, result){
  //   console.log("Database Pertanian Connected");
  // });

const dbase_pertanian = require('./database_config.js');
dbase_pertanian.query(`CREATE TABLE pertanian (
  timestamp FLOAT,
  Ph FLOAT,
  TDS FLOAT,
  Rain FLOAT,
  Suhu_Air FLOAT,
  WindDirection FLOAT,
  Kecepatan_Angin FLOAT,
  Waterflow1 FLOAT,
  Waterflow2 FLOAT,
  Waterflow3 FLOAT,
  Waterflow4 FLOAT,
  Berat1 FLOAT,
  Berat2 FLOAT,
  Berat3 FLOAT,
  Berat4 FLOAT,
  Suhu FLOAT,
  Tekanan_Udara FLOAT,
  Infrared1 FLOAT,
  Infrared2 FLOAT,
  Infrared3 FLOAT,
  SoilMoisture1 FLOAT,
  SoilMoisture2 FLOAT,
  SoilMoisture3 FLOAT,
  SoilMoisture4 FLOAT,
  PompaNutrisi FLOAT,
  PompaAir FLOAT,
  LampuUv FLOAT )
  `, function(err, result){
    console.log("Database Pertanian Connected");
  });


// API HANLDING
const pertanian_appRoute = require('./route.js');
api.use('/', cors(), pertanian_appRoute);

api.use('/', cors(), (req, res) => {
    res.status(404);
    res.send('CONNECTED'); // respond 404 if not available
});  

// Starting both http & https servers
const httpServer = http.createServer(api);
//const httpsServer = https.createServer(credentials, api);
//const httpsServer = https.createServer(credentials, api);

httpServer.listen(process.env.API_PORT, () => {
	console.log(`HTTP REST-API running on port ${process.env.API_PORT}`);
});



//httpsServer.listen(4443, () => {
	//console.log('HTTPS REST-API running on port 4443');
//});

let topic = [
  process.env.TOPIC1,
  process.env.TOPIC2
];

const mqtt_connect = require('./mqtt_config.js')
const {incomingData} = require('./controler_mqtt.js') 
  // Subscribe topic to receive data from raspberryPi
  // Data From Canti
//Subscribe topic to receive API request
mqtt_connect.subscribe(topic, (err) => {
  if (!err) {
    console.log("Subscribed to topic : " + topic); 
  } else throw (err);
});

// Handle message from mqtt
mqtt_connect.on("message", incomingData);