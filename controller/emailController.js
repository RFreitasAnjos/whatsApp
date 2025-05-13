const emailjs = require('@emailjs/browser');
const axios = require('axios');
//const process = require('dotenv').config();

async function sendEmail(message){
    const response = await axios.post("https://api.emailjs.com/api/v1,send", message ,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.EMAILJS_SECRET_KEY,
        },
    }).then((response) => {
        console.log(response)
        client.sendMessage(message.from, "Solicitação feita com sucesso, a aprovação poderá ser creditada em até 2 horas.");
        return solicitacao(message, client);
    }).catch((error) => {
        client.sendMessage(message.from, "Houve um erro ao enviar a solicitação, tente novamente mais tarde.");
    });
}


module.exports = {
    sendEmail,
}