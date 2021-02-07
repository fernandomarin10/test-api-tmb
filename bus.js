const fetch = require('node-fetch');
//variables 
codiLinia = 23;
codiParada = 1775;
app_id = 'bee42c63';
app_key = 'a53ae4fc8c81389c5d4f600beec54059';
let url = `https://api.tmb.cat/v1/ibus/stops/${codiParada}?app_id=${app_id}&app_key=${app_key}`;
console.log(`TEST API\n`);

const request = async () => {
    console.log(`Obteniendo info parada ${codiParada}...\n`);
    const response = await fetch(url);
    const json = await response.json();
    console.log("response...\n")
    console.log(json['data'].ibus.length);

    for (let i =0; i<json['data'].ibus.length; i++ ){
        console.log(json['data'].ibus[i]);
    }
    
    codigoBusProximo = json['data'].ibus[0].line;
    codigoBusTiempo = json['data'].ibus[0]['text-ca'];
    let stringResponse = `El bus más proximo es ${codigoBusProximo} en un tiempo ${codigoBusTiempo}`
    console.log("\n");
    console.log(stringResponse);
}

request();
