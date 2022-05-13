import moment from "moment-timezone";
moment.tz.setDefault("Asia/Singapore");
import schedule from "node-schedule";
import dotenv from "dotenv";
dotenv.config();
import { channelID, btcAPI } from "./constants.js";
import { getPrice } from "./requestBTCprice.js";
import axios from "axios"

/**
 * It sends a message to the channelID every 60 seconds.
 * @param bot - The bot object
 */
export const msgSender = async (bot) => {
	schedule.scheduleJob("*/60 * *  * * *", async () => {
		console.log("Ran");
		axios.get(btcAPI).then(async (response) => {
			let btcPrice = response.data[0].current_price;
			bot.sendMessage(channelID, `BTC Price: ${btcPrice}`);
		});
	});
};
