const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, WAState, MessageAck, MessageTypes, Status } = require('whatsapp-web.js');
const { verificaFiscal } = require('./services/menu');


const client = new Client({
    authStrategy: new LocalAuth(),
    webVersion: 'web.whatsapp.com',
});



isOnStandby = false;

client.on('qr', (qr) => {
    qrcode.generate(qr, {small:true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});



client.on('message', async(message) =>{
    const time = message.timestamp;
    console.log(time);

    const id = message.from;
    const status = message.isStatus;
    const ack = message.ack;
    const to = message.to;
    verificaFiscal(client,message,id,to);
    console.log(verificaFiscal);
});

client.initialize();