import axios from "axios";
import process from "dotenv";

async function init() {
    await emailjs.init({
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_SECRET_KEY,
    });
}

module.exports = {
    sendEmail,
}