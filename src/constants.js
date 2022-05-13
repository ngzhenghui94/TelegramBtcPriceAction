import dotenv from "dotenv";
dotenv.config();


export const channelID = process.env.CHANNELID;
export const telegramToken = process.env.TOKEN
export const btcAPI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1"