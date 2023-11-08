const Mqtt = require("mqtt");
require('dotenv').config()

const mqtt = Mqtt.connect(process.env.MQTT_HOST, {
    port : process.env.MQTT_PORT,
    username: process.env.MQTT_USER,
    password: process.env.MQTT_PASSWORD,
    clientId: 'mqttjs_' + Math.random(),
    keepalive: 60,
    reconnectPeriod: 1000,
    clean: true,
});

mqtt.on("connect", () => {
    console.log(`MQTT Connected on host : ${process.env.MQTT_HOST}`); 
    
    // topic = process.env.TOPIC;
    // mqtt.subscribe(topic, () => {
    //     console.log("subscribed to topic " + topic);
    // })

    // mqtt.on("message", (topic, message) => {
    //     try {
    //         const data = JSON.parse(message.toString());
        
    //         console.log("-------------------------------");
    //         console.log(" ");
    //         console.log(`Received ${topic}`);
    //         console.log(`Received Data at ${new Date().toLocaleString()}`);
    //         console.log(" ");

    //         for (const key in data) {
    //             if (data.hasOwnProperty(key)) {
    //                 console.log(`${key}: ${data[key]}`);
    //             }
    //         }    
    //         console.log("...............................");
            
    //     } catch (e) {
    //         console.error('Error parsing JSON:', e);
    //     }
    // });
    
});

module.exports = mqtt;