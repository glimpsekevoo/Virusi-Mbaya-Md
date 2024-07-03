// VIRUSI-MBAYA-MD 

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "null";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngwathegang3@gmai.com";
global.location = "Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Vurusian/Virusi-Mbaya-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://https://telegra.ph/file/7f03fb699a244da228740.jpg";
global.devs = "254748721079,254762016957,254110853827,254728746852,255655147353,254728782591,254700505700";
global.sudo = process.env.SUDO || "254748721079";
global.owner = process.env.OWNER_NUMBER || "254748721079,254700505700";
global.style = process.env.STYLE || "4";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8aa6951466328563add47.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "2547xxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "2547xxxx";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://pearni-3db1e9057508.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Virusi;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk83TWZFNnVsaXhMOXBjeExQQ2h1bEI1c3FZaXVQU0FtTGptZHpvR2lVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVk5cHQxckYxWm0rc3BLNnAvWVg3N3FkRFpha3o1SzJSOGFMT1d6U2IyST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q2hmeVhwSXZITHBLd2ZZZmRLakMvMlBNUURKU1hiaCttMXNnUi81U0ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZmluZDA3WjA2ak4xbHR5L29ycisvTEZ0ZU9IL3gvdncvZmdBSHdJcFRNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldNM1BWaGhESG9JdDEzektwS2wzTE9nanFTL3lreXZVNW5NaEcxVThnbnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko2UTBtVlZPNWhGWW5CSUdUb2IvRGFrL2RQQWV4a25hc0tPQkU2ak5pVWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0pTSldTQ0NYWnJicWNwS1BFQlJldDUxSHlSSXd0S3ZEMnpUaU4vL25XUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUE9mQnJQRDdWd0Y0dWJTRVZwOS9HeS9ETnVjOC9GYnhCVVh1WFJrWVloST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJqdDNaVHVoc3Y4Vy9zSEptcUg0MDYzeis5THRZekRVTVlzbDY4Mm5DUmdiRGMvOFowc290cER4ZjhiYjE4NWo2VGRMWk9aZ0tIWUhsOTBWQmZQTEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiI3N29XYXoxNW1RL3RSWlljWVBqaFRZKzdFUXJ5NEV5dDBXVzZod1B6ZXhnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUbTc0dWUtZFMzTzZPMjlaZ1RqaGdBIiwicGhvbmVJZCI6ImExODEwMDdkLWI2ZjAtNDJmYy04NWNlLThiY2M0Njc0ZjBmYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFN1AxQTY3NjljNGR5UlhRVUxXMDcyZUJlR289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBmbE9CNzdXOHR0OXI2UGh1Rnp3b0dSbEhRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxDWThIQjlSIiwibWUiOnsiaWQiOiIyNTQ3OTg1MTUwNTI6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+UHJpbmNlIHJvY2t5IHdyeSAswr/Cvz8/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQaUpxZGdIRVBtSGxyUUdHQmtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2cnpKc3oyNjVwbjNha1JSak9oMUUwZXBCQTZUcXhJelNBWjdqcXVtclE4PSIsImFjY291bnRTaWduYXR1cmUiOiI1SkhzaE1ieDdCcnJNNmovSnlKSDZid2FxdGI4QUhJbXpEanV2KzdxT2QzNFcwSWYzVlovSDVwd0ZyZWtJdlZ2bUpFSklIMWN6Rld5Vlcrajc1QmVDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRUdEN3J4SUlJZlo2LzBiNEtKVFhrOU1jbW9mOUFiTWRnUXFPOTh0OUlqRGR5WXpOUGRSZS9aMEJuS0FiUndvV0toemFUanJYclRBTmN0ZHRpdmF3Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTg1MTUwNTI6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiNjh5Yk05dXVhWjkycEVVWXpvZFJOSHFRUU9rNnNTTTBnR2U0NnJwcTBQIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMDI2MTE5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUE5LyJ9"
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🦠𝗩𝗜𝗥𝗨𝗦𝗜-𝗠𝗕𝗔𝗬𝗔-𝗠𝗗🦠🦟",
  author: process.env.PACK_AUTHER || "Virusi-Md",
  packname: process.env.PACK_NAME || "🦠",
  botname: process.env.BOT_NAME || "𝗩𝗜𝗥𝗨𝗦𝗜-𝗠𝗕𝗔𝗬𝗔-𝗠𝗗",
  ownername: process.env.OWNER_NAME || "Vurusian",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VIRUSI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
