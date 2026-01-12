const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Hear
SESSION_ID: process.env.SESSION_ID || "DEW-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUthaGEvOENLTTAxYysyMFV3TTJoclVKUnBIblU2ODhUVnRGQWZtbkZXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzZPamxpQXh6SmxiK1BzMkJGSzE5ZENxSmRrdUxiQ21DYWpEWFVKZ0FrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2R3BnSVZlajVEYjdWcHFrZ1hWWG5MSXl2d0cyQU12SENOdkZ3MmJHNkZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZTk0UWE2N0N0Zlk5Vm54VlphWnJhbnd3bWFUeUNsdXFabkZaQnRCSWdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOT3dva2hQaS9jS0V3cmNNdWpiVGNXREI4MVAyWTU0TUJNZXFlYlltVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkrTWsra3JRRU1YZ3ZGaTd5aVJEb1BkSm5QeTdpeW9BSXAxN0pMNGFPa0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9wQk9GZEg3UEZ1eEQyczV6UWEzS1V0R2RicUs0dTlPRUVLOTh0blNFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWJONGdnZm10d0E4ZThnSDZyb0plNUtXRXI2SDk3MGhoYXJVNmRxb0FBaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx5Qmtsd0h6U0NnaTNuSGFwSHVmd1paM2RVU01YTTN1a1c2cFN3bE9RS3Ewb29qT3FRY3ZpR0h2SndHajlMQkw4SGRyN0hqSTU2QmVmOCtVT2piMkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiJWZEtRdjA2bWljeUd1RjFMSU8wUG9XVGZRVzlXdlZmK3liczdjaEpFdWdJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgxNzk3MTI0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQjNCREYzM0M2MjJCOUUyOEE2MTIwOEYyRkQxQkE3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjgxOTkyMjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklYcGhaVG1yUTFHV3RFNnNfQWJqb3ciLCJwaG9uZUlkIjoiOTUyOWMwNDAtNGMyOC00MTBhLWEwOGUtNDBkYWYxNzU5ZDI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhuNGpCWXdaeExsSnF6TFRPeVVuZ2FnNjhrND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwbm56ZmpwblpuU0dTUlY0amQ5ZmVMZlc0bWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREVXTURPRkMiLCJtZSI6eyJpZCI6Ijk0NzgxNzk3MTI0OjMwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTAyMDQ5MTI3NjUzNTM2OjMwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTN4MFBzREVLYW9rc3NHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM2FRLzd5YlRCRGRXUTdobEhoenFLSE51eVVPOUZYZ3ZrR2d3MWpnZTdVZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicXlwamcrdUllUmFjdVhhcks1akR5cnZkVTB0bEx0UnM5cUM4NGlBcVJUVXE0ZmpOc0dyTnNUa25iQjh2V3VTVGJJNzNSOE9ta0ZjenhrU1NJcHJiQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ims2QUpvZUtSNVp3NGt3bHZJS0wrT0xXMUFPakhjSURCTjhLMmF5UktCa2NwVmhQOWRsdlJFM29hd3NLQnVaekVCKzdDWEZ3ank3K0xDcnVRdnBvYkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODE3OTcxMjQ6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDJrUCs4bTB3UTNWa080WlI0YzZpaHpic2xEdlJWNEw1Qm9NTlk0SHUxSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUFnZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY4MTk5MjE5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtGSiJ9",
// Dew MD Api Site Url
API_BASE: process.env.API_BASE || "https://api.srihub.store",
// Dew MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "dew_kI5goH3q6XmpI7stwPX9m0aICW9KBO6w1DM0kcBy",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY RAVINDU-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "RAVINDU_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "RAVINDU_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94763079634",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Hansa Dewmina",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94763079634",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};
