const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=r6QF3AaA#dYG93JVv9v5eU8QuRc4unK5uQo6AVCPnmTFcIuvshds", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/cx9d75.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am Suranga*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "public", //private or public
AUTO_VOICE:"false" //true or false
};
