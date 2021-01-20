const fetch = require('node-fetch');
//variables 
codiLinia = 2;
app_id = 'bee42c63';
app_key = 'a53ae4fc8c81389c5d4f600beec54059';

// previsió per linia i parada
/* fetch(`https://api.tmb.cat/v1/ibus/lines/${codiLinia}/stops/${codiParada}?app_id=${app_id}&app_key=${app_key}`)
    .then(res => res.text())
    .then(res => console.log(res))
console.log("\n\n\n"); */
//previsió per una parada
fetch(`https://api.tmb.cat/v1/transit/linies/metro/${codiLinia}/trams?app_id=${app_id}&app_key=${app_key}`)
    
    .then(res => res.text())
    .then(res => console.log(res))
    

       