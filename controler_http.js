
const path = require('path');
const moment = require('moment');
const {Pool} = require('pg')
const { off } = require('process');
const { start } = require('repl');
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

    // HTTP HANDLING

    // Respond request to give latest 100 data
    async getDataTopic1(req, res) {
        try {
          data = await dbase_rest.query(`SELECT timestamp, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv FROM pertanian ORDER BY time DESC LIMIT 100`);
          
          res.status(200);
          res.send({
            count: data.rowCount,
            result: data.rows.reverse(),
          });
          console.log("[GET DATA TOPIC 1]");
        } catch (error) {
          // Tangani kesalahan di sini
          console.error(error);
          res.status(500).send({ error: "Terjadi kesalahan saat mengambil data." });
        }
      },
      
      async getDataTopic2(req, res) {
        try {
          data = await dbase_rest.query(`SELECT timestamp, Ph, TDS, Rain, Suhu_Air, WindDirection, Kecepatan_Angin, Waterflow1, Waterflow2, Waterflow3, Waterflow4, Berat1, Infrared1, Infrared2, Infrared3, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4 FROM pertanian ORDER BY time DESC LIMIT 100`);
          
          res.status(200);
          res.send({
            count: data.rowCount,
            result: data.rows.reverse(),
          });
          console.log("[GET DATA TOPIC 2]");
        } catch (error) {
          // Tangani kesalahan di sini
          console.error(error);
          res.status(500).send({ error: "Terjadi kesalahan saat mengambil data." });
        }
      }
}
    // async getDataGisting10(req, res) {
       
    //    const data = await dbase_rest.query(`SELECT datetime
    //     FROM sensor_data ORDER BY datetime DESC LIMIT 100`);

    //     const convertedTime = moment(data).format("DD-MM-YY HH:mm:ss")

    //     console.log(data)

    //     res.status(200);
    //     res.send({
    //         count:data.rowCount,
    //         result:convertedTime,
    //     })
    //     console.log("[ REST-API ] GET DATA 100");

    // }

    // async getDataPertanian10(req, res) {
    //     const data = await dbase_rest.query(`SELECT datetime FROM sensor_data ORDER BY datetime DESC LIMIT 100`);
    
    //     if (data.rowCount > 0) {
    //         const timeArray = data.rows.map(row => ({
    //             datetime: moment(row.datetime).format("DD-MM-YY HH:mm:ss")
    //         }));
    
    //         res.status(200);
    //         res.send({
    //             count: data.rowCount,
    //             result: timeArray,
    //         });
    
    //         console.log("[REST-API] GET DATA 100");
    //     } else {
    //         res.status(404).send("No data found");
    //     }
    // },

    // async getDataPertanianDatetime(req, res) {
    //     const data = await dbase_rest.query(`SELECT datetime, humidity_280, pressure_280, temperature_280, temperature_388, pressure_388, phsensor, tdsSensor, moistureSensor, anemoMeter, windVane, currentSensor, rainIntensity, rainStatus 
    //         FROM sensor_data ORDER BY datetime DESC LIMIT 100`);
    
    //     if (data.rowCount > 0) {
    //         const combinedArray = data.rows.map(row => {
    //             const { datetime, ...rest } = row;
    //             return {
    //                 datetime: moment(datetime).format("DD-MM-YY HH:mm:ss"),
    //                 ...rest,
    //             };
    //         });
    
    //         res.status(200);
    //         res.send({
    //             count: data.rowCount,
    //             result: combinedArray,
    //         });
    
    //         console.log("[REST-API] GET DATA 100");
    //     } else {
    //         res.status(404).send("No data found");
        // }
    
    
    
// }
