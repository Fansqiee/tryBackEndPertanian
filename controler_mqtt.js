const dbase_mqtt = require('./database_config.js');
const mqtt_connect = require('./mqtt_config.js');

require('dotenv').config()

TOPIC_PERTANIAN = process.env.TOPIC1;
TOPIC_PERTANIAN2 = process.env.TOPIC2;



TS_PATH = process.env.PAYLOAD_PERTANIAN_DATE
PH_PATH = process.env.PAYLOAD_PERTANIAN_Ph
TDS_PATH = process.env.PAYLOAD_PERTANIAN_TDS
RAIN_PATH = process.env.PAYLOAD_PERTANIAN_Rain
SUHUAIR_PATH = process.env.PAYLOAD_PERTANIAN_Suhu_Air
WINDIRECTION_PATH = process.env.PAYLOAD_PERTANIAN_WindDirection
WINDSPEED_PATH = process.env.PAYLOAD_PERTANIAN_Kecepatan_Angin
WATERFLOW1_PATH = process.env.PAYLOAD_PERTANIAN_Waterflow1
WATERFLOW2_PATH = process.env.PAYLOAD_PERTANIAN_Waterflow2
WATERFLOW3_PATH = process.env.PAYLOAD_PERTANIAN_Waterflow3
WATERFLOW4_PATH = process.env.PAYLOAD_PERTANIAN_Waterflow4
BERAT1_PATH = process.env.PAYLOAD_PERTANIAN_Berat1
BERAT2_PATH = process.env.PAYLOAD_PERTANIAN_Berat2
BERAT3_PATH = process.env.PAYLOAD_PERTANIAN_Berat3
BERAT4_PATH = process.env.PAYLOAD_PERTANIAN_Berat4
SUHU_PATH = process.env.PAYLOAD_PERTANIAN_Suhu
TEKANANUDARA_PATH = process.env.PAYLOAD_PERTANIAN_Tekanan_Udara
INFRARED1_PATH = process.env.PAYLOAD_PERTANIAN_Infrared1
INFRARED2_PATH = process.env.PAYLOAD_PERTANIAN_Infrared2
INFRARED3_PATH = process.env.PAYLOAD_PERTANIAN_Infrared3
SOILMOISTURE1_PATH = process.env.PAYLOAD_PERTANIAN_SoilMoisture1
SOILMOISTURE2_PATH = process.env.PAYLOAD_PERTANIAN_SoilMoisture2
SOILMOISTURE3_PATH = process.env.PAYLOAD_PERTANIAN_SoilMoisture3
SOILMOISTURE4_PATH = process.env.PAYLOAD_PERTANIAN_SoilMoisture4
POMPAAIR_PATH = process.env.PAYLOAD_PERTANIAN_Pompaair
POMPANUTRISI_PATH = process.env.PAYLOAD_PERTANIAN_Pompanutrisi
LAMPUUV_PATH = process.env.PAYLOAD_PERTANIAN_UV


module.exports = {
    // MQTT HANDLING
    async incomingData(topic,message){
        
        if (topic === TOPIC_PERTANIAN){
            const payload = JSON.parse(message, toString());
        
            Ph = (payload[PH_PATH]);
            TDS = (payload[TDS_PATH]);
            Rain = (payload[RAIN_PATH]);
            Suhu_Air = (payload[SUHUAIR_PATH]);
            WindDirection = (payload[WINDIRECTION_PATH]);
            Kecepatan_Angin = (payload[WINDSPEED_PATH]);
            Waterflow1 = (payload[WATERFLOW1_PATH]);
            Waterflow2 = (payload[WATERFLOW2_PATH]);
            Waterflow3 = (payload[WATERFLOW3_PATH]);
            Waterflow4 = (payload[WATERFLOW4_PATH]);
            Berat1 = (payload[BERAT1_PATH]);
            Ketinggian = (payload[Ketinggian_PATH]);
            Infrared1 = (payload[INFRARED1_PATH]);
            Infrared2 = (payload[INFRARED2_PATH]);
            Infrared3 = (payload[INFRARED3_PATH]);
            SoilMoisture1 = (payload[SOILMOISTURE1_PATH]);
            SoilMoisture2 = (payload[SOILMOISTURE2_PATH]);
            SoilMoisture3 = (payload[SOILMOISTURE3_PATH]);
            SoilMoisture4 = (payload[SOILMOISTURE4_PATH]);
        
            let dataArray = [timestamp, Ph, TDS, Rain, Suhu_Air, WindDirection, Kecepatan_Angin, Waterflow1, Waterflow2, Waterflow3, Waterflow4, Berat1, Infrared1, Infrared2, Infrared3, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4];
        
            console.log(`data topic 1 received `);
            console.log(dataArray);
            const insertQuery = `INSERT INTO pertanian (timestamp, Ph, TDS, Rain, Suhu_Air, WindDirection, Kecepatan_Angin, Waterflow1, Waterflow2, Waterflow3, Waterflow4, Berat1, Infrared1, Infrared2, Infrared3, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $17, $18, $19, $20, $21, $22, $23, $24)`;
        
            dbase_mqtt.query(insertQuery, dataArray, (err, res) => {
                
                if (err) {
                    console.error('Error inserting data into the database:', err);
                } else {
        
                console.log("______________________________________");
                console.log("DATA INSERTED TO DATABASE:");
                console.log(`Timestamp: ${timestamp}`);
                console.log(`PH: ${Ph}`);
                console.log(`TDS: ${TDS}`);
                console.log(`Rain: ${Rain}`);
                console.log(`Suhu Air: ${Suhu_Air}`);
                console.log(`Wind Direction: ${WindDirection}`);
                console.log(`Kecepatan Angin: ${Kecepatan_Angin}`);
                console.log(`Waterflow 1: ${Waterflow1}`);
                console.log(`Waterflow 2: ${Waterflow2}`);
                console.log(`Waterflow 3: ${Waterflow3}`);
                console.log(`Waterflow 4: ${Waterflow4}`);
                console.log(`Berat 1: ${Berat1}`);
                console.log(`Infrared 1: ${Infrared1}`);
                console.log(`Infrared 2: ${Infrared2}`);
                console.log(`Infrared 3: ${Infrared3}`);
                console.log(`SoilMoisture 1: ${SoilMoisture1}`);
                console.log(`SoilMoisture 2: ${SoilMoisture2}`);
                console.log(`SoilMoisture 3: ${SoilMoisture3}`);
                console.log(`SoilMoisture 4: ${SoilMoisture4}`);
                console.log("______________________________________");
                }
            });


            //sub to topic esp 2
            if (topic === TOPIC_PERTANIAN2){
                const payload = JSON.parse(message.toString());


                timestamp = (payload[TS_PATH]); 
                Berat2 = (payload[BERAT2_PATH]);
                Berat3 = (payload[BERAT3_PATH]);
                Berat4 = (payload[BERAT4_PATH]);
                Suhu = (payload[SUHU_PATH]);
                Tekanan_Udara = (payload[TEKANANUDARA_PATH]);
                PompaNutrisi = (payload[POMPANUTRISI_PATH]);
                PompaAir = (payload[POMPAAIR_PATH]);
                LampuUV = (payload[LAMPUUV_PATH]);

                let dataArray2 = [timestamp, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUV];

                console.log(`data topic 2 received `);
                console.log(dataArray2);
                const insertQuery = `INSERT INTO pertanian (timestamp, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, PompaNutrisi, PompaAir, LampuUv) VALUES ($1, $13, $14, $15, $16, $25, $26, $27)`;

                dbase_mqtt.query(insertQuery, dataArray2, (err, res) => {
                    
                    if (err) {
                        console.error('Error inserting data into the database:', err);
                    } else {

                    console.log("______________________________________");
                    console.log("DATA INSERTED TO DATABASE:");
                    console.log(`Timestamp: ${timestamp}`);
                    console.log(`Berat 2: ${Berat2}`);
                    console.log(`Berat 3: ${Berat3}`);
                    console.log(`Berat 4: ${Berat4}`);
                    console.log(`Suhu: ${Suhu}`);
                    console.log(`Tekanan Udara: ${Tekanan_Udara}`);
                    console.log(`PompaNutrisi : ${PompaNutrisi}`);
                    console.log(`PompaAir : ${PompaAir}`);
                    console.log(`LampuUV : ${LampuUV}`);
                    console.log("______________________________________");
                }
            });
        }
    }
    }
}
    

                //Ph = (payload[PH_PATH]);
                //TDS = (payload[TDS_PATH]);
                //Rain = (payload[RAIN_PATH]);
                //Suhu_Air = (payload[SUHUAIR_PATH]);
                //WindDirection = (payload[WINDIRECTION_PATH]);
                //Kecepatan_Angin = (payload[WINDSPEED_PATH]);
                //Waterflow1 = (payload[WATERFLOW1_PATH]);
                //Waterflow2 = (payload[WATERFLOW2_PATH]);
                //Waterflow3 = (payload[WATERFLOW3_PATH]);
                //Waterflow4 = (payload[WATERFLOW4_PATH]);
                //Berat1 = (payload[BERAT1_PATH]);
                //Ketinggian = (payload[Ketinggian_PATH]);
                // Infrared1 = (payload[INFRARED1_PATH]);
                // Infrared2 = (payload[INFRARED2_PATH]);
                // Infrared3 = (payload[INFRARED3_PATH]);
                // SoilMoisture1 = (payload[SOILMOISTURE1_PATH]);
                // SoilMoisture2 = (payload[SOILMOISTURE2_PATH]);
                // SoilMoisture3 = (payload[SOILMOISTURE3_PATH]);
                // SoilMoisture4 = (payload[SOILMOISTURE4_PATH]);
        
                // let dataArray = [timestamp, Ph, TDS, Rain, Suhu_Air, WindDirection, Kecepatan_Angin, Waterflow1, Waterflow2, Waterflow3, Waterflow4, Berat1, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, Infrared1, Infrared2, Infrared3, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4, PompaNutrisi, PompaAir, LampuUV];

                // console.log(`data received `);
                // console.log(dataArray);
                // const insertQuery = `INSERT INTO pertanian (timestamp, Ph, TDS, Rain, Suhu_Air, WindDirection, Kecepatan_Angin, Waterflow1, Waterflow2, Waterflow3, Waterflow4, Berat1, Berat2, Berat3, Berat4, Suhu, Tekanan_Udara, Infrared1, Infrared2, Infrared3, SoilMoisture1, SoilMoisture2, SoilMoisture3, SoilMoisture4, PompaNutrisi, PompaAir, LampuUv) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27)`;
                
            

            //sub to topic esp 1