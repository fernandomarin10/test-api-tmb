const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    async handle(handlerInput) {
        let speakOutput = 'Hola mundo';
        let url = `https://api.tmb.cat/v1/ibus/stops/${codiParada}?app_id=${app_id}&app_key=${app_key}`;
        console.log(`Obteniendo info parada ${codiParada}...\n`);
        const response = await fetch(url);
        const json = await response.json();
        
        if(json){
            if(json['data'].ibus.length){
                if(json['data'].ibus.length > 0) {
                    let codigoBusProximo = json['data'].ibus[0].line;
                    let codigoBusTiempo = json['data'].ibus[0]['text-ca'];
                    speakOutput = `El bus más proximo de la parada ${codiParada} es el ${codigoBusProximo} en un tiempo ${codigoBusTiempo}`;
                }else{
                    speakOutput = 'No hay buses proximos';
                }
            }
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};