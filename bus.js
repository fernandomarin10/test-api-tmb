const fetch = require('node-fetch');
//variables 
codiLinia = 23;
codiParada = 1775;
app_id = 'bee42c63';
app_key = 'a53ae4fc8c81389c5d4f600beec54059';

console.log(`Obteniendo info parada ${codiParada}...\n`);

//obtener coordenadas de la parada??

/* fetch(`https://api.tmb.cat/v1/transit/parades/${codiParada}?app_id=${app_id}&app_key=${app_key}`)
    .then(res => res.text())
    .then(res => console.log(res))
    //TODO filtrar res
 */


// previsió per linia i parada, TODO: retorna vacio 
/* fetch(`https://api.tmb.cat/v1/ibus/lines/${codiLinia}/stops/${codiParada}?app_id=${app_id}&app_key=${app_key}`)
    .then(res => res.text())
    .then(res => console.log(res)) */


//previsió per una parada
fetch(`https://api.tmb.cat/v1/ibus/stops/${codiParada}?app_id=${app_id}&app_key=${app_key}`)
    .then(res => res.text())
    .then(res => console.log(res))
    