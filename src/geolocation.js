const dotenv = require('dotenv').config();
const fetch = require('node-fetch');

let url = `https://api.tmb.cat/v1/planner/plan?app_id=${process.env.app_id}&app_key=${process.env.app_key}&fromPlace=${process.env.fromPlace}&toPlace=${process.env.toPlace}&date=${process.env.date}&time=${process.env.time}&arriveBy=${process.env.arriveBy}&mode=${process.env.mode}`;
console.log(`TEST API\n`);

const request = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log("response...\n");

    const plan = json['plan'];
    const itineraries = plan.itineraries[0].duration /3600;

    console.log(itineraries); 
}

request();
