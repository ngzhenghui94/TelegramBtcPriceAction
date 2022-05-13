import moment from "moment-timezone";
moment.tz.setDefault("Asia/Singapore");
import schedule from "node-schedule";
import dotenv from "dotenv";
dotenv.config();
import { channelID, apiUrl } from "./constants.js";
import axios from "axios";

/**
 * It sends a message to the channelID every 60 seconds.
 * @param bot - The bot object
 */
export const msgSender = async (bot) => {
	schedule.scheduleJob("*/60 * *  * * *", async () => {
		axios.get(apiUrl).then(async (response) => {
			let price = response.data[0].current_price;
			bot.sendMessage(channelID, `⬢ ${process.env.CRYPTOTICKER}/USD Price: ${price}`);
		});
	});
};
