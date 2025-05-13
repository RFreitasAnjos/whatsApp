const fiscais = require('../config/contatos.json'); 

async function verificaFiscal(client,message, id, to){
    const fiscal = fiscais.find(f => f.Id === id);
    console.log(fiscal.Id);
    const remetente = to == message.to ? true : false;
    console.log(remetente);
    if (fiscal && remetente == true) {
        resposta(client, message);
        return fiscal;
    } else {
        console.log(`Fiscal não encontrado para o ID: ${fiscal.Id} ou mensagem foi enviada pelo user do momento.`);
        setTimeout(() =>{
            console.log("bot em standby");
        }, 5 * 60 * 1000);
        return null;
    }
    return true;
}

const resposta = async (client, message) => {
    const chatUser = {
        chatId: message.from,
        message: message.body,
    }
    console.log(chatUser);
    client.sendMessage(chatUser.chatId, "Olá, sou o assistente virtual do grupo de fiscais. Como posso ajudar?");
}

module.exports = {
    verificaFiscal
}