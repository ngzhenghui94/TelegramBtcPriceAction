import dotenv from "dotenv";
dotenv.config();


export const channelID = process.env.CHANNELID.split(", ");
export const telegramToken = process.env.TOKEN
export const apiUrls = process.env.APIURL.split(", ");
export const cryptoTickers = process.env.CRYPTOTICKER.split(", ");

console.log(apiUrls);
console.log(cryptoTickers)
console.log(channelID)