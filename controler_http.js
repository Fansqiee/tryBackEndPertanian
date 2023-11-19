
const path = require('path');
const moment = require('moment');
const {Pool} = require('pg')
const { off } = require('process');
const { start } = require('repl');
const { incomingdata } = require('./controler_mqtt');
require('dotenv').config()
require('fs');
const dbase_rest= new Pool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_PERTANIAN
})
dbase_rest.connect();
module.exports = {

// async getDataTopic1(req, res) {
//   const data = await dbase_rest.query(`SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1 FROM topic1 ORDER BY timestamp DESC LIMIT 100`);

//   if (data.rowCount > 0) {
//       const combinedArray = data.rows.map(row => {
//           const { timestamp, ...rest } = row;
//           return {
//               timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//               ...rest,
//           };
//       });

//       res.status(200);
//       res.send({
//           count: data.rowCount,
//           result: combinedArray,
//       });

//       console.log("[REST-API] GET DATA TOPIC 1");
//   } else {
//       res.status(404).send("No data found");
//   }
// },

//     async getDataTopic2(req, res) {
//          const data = await dbase_rest.query(`SELECT timestamp, Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4 FROM topic2 ORDER BY timestamp DESC LIMIT 100`);
          
//          if (data.rowCount > 0) {
//           const combinedArray = data.rows.map(row => {
//               const { timestamp, ...rest } = row;
//               return {
//                   timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                   ...rest,
//               };
//           });
    
//           res.status(200);
//           res.send({
//               count: data.rowCount,
//               result: combinedArray,
//           });
    
//           console.log("[REST-API] GET DATA TOPIC 2");
//       } else {
//           res.status(404).send("No data found");
//       }
//     },
//     async getDataTopic3(req, res) {
//          const data = await dbase_rest.query(`SELECT timestamp, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity FROM topic3 ORDER BY timestamp DESC LIMIT 100`);
          
//           if (data.rowCount > 0) {
//             const combinedArray = data.rows.map(row => {
//                 const { timestamp, ...rest } = row;
//                 return {
//                     timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
//                     ...rest,
//                 };
//             });
      
//             res.status(200);
//             res.send({
//                 count: data.rowCount,
//                 result: combinedArray,
//             });
      
//             console.log("[REST-API] GET DATA TOPIC 3");
//         } else {
//             res.status(404).send("No data found");
//         }
//       },
    
      async getDataTopic(req, res) {
        const data = await dbase_rest.query(`SELECT timestamp, Ph, TDS, Suhu_Air, WindDirection, Kecepatan_Angin, Infrared1, Infrared2, Infrared3, Berat1,  Waterflow1, Waterflow2, Waterflow3, Waterflow4, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv, pyrano, Humidity FROM ics ORDER BY timestamp DESC LIMIT 100`);
         
         if (data.rowCount > 0) {
           const combinedArray = data.rows.map(row => {
               const { timestamp, ...rest } = row;
               return {
                   timestamp: moment(timestamp).format("DD-MM-YY HH:mm:ss"),
                   ...rest,
               };
           });
     
           res.status(200);
           res.send({
               count: data.rowCount,
               result: combinedArray,
           });
     
           console.log("[REST-API] GET DATA TOPIC 3");
       } else {
           res.status(404).send("No data found");
       }
     },

    }