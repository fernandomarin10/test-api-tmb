const dotenv = require('dotenv').config();
const fetch = require('node-fetch');

let url = `https://api.tmb.cat/v1/planner/plan?app_id=${process.env.app_id}&app_key=${process.env.app_key}&fromPlace=${process.env.fromPlace}&toPlace=${process.env.toPlace}&date=${process.env.date}&time=${process.env.time}&arriveBy=${process.env.arriveBy}&mode=${process.env.mode}`;
console.log(`TEST API\n`);

/* origen gran via 985 destino sagrada familia

gran via 985: latitud: 41.41258467439465; longitud: 2.1982008659472
sagrada familia: 41.4044383860963; longitud: 2.174996626134032

*/

const request = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log("response...\n");

    const plan = json['plan'];
    const itinerariesLegs = plan.itineraries[0].legs;
    let destinationPlan = "";
    
    for(let i = 0; i< itinerariesLegs.length; i++){
        let straux = logLegInfo(itinerariesLegs[i]);
        destinationPlan += straux;
    }

    console.log(destinationPlan);
    
}

function logLegInfo(leg) {
    const destination = leg.to.name;
    const mode = leg.mode;
    const transporte = leg.mode!=='WALK'? ` en ${leg.routeShortName}`: "";
    return (`Ves a ${destination} mediante ${mode}${transporte}, `); 
} 

request();
