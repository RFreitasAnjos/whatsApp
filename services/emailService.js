const { sendEmail } = require('../utils/email');

async function solicitaCombustivel(client, placa, valor, order_id, nameColaborador) {
    const solicitacao ={
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params:{
            order_id: order_id,
            order: solicitacao(),
            nameColaborador: nameColaborador,
            placa: placa,
            price: valor,
        },
    };
    return sendEmail(solicitacao);
}

function solicitacao(response,client){
    const count = 0;
    
    if(response === 200){
        client.sendMessage(client.getId(), "Solicitação recebida, você receberá um retorno em breve.");
        count++;
    }
    return count;
}


module.exports = {
    solicitaCombustivel,
}