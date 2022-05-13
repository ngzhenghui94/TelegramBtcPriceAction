import moment from "moment-timezone";
moment.tz.setDefault("Asia/Singapore");
import schedule from "node-schedule";
import dotenv from "dotenv";
dotenv.config();
import { channelID } from "./constants.js";

/**
 * It sends a message to the channelID every 2 seconds.
 * @param bot - The bot object
 */
export const msgSender = (bot) => {
	schedule.scheduleJob("*/2 * *  * * *", async () => {
		console.log("Ran");
		await bot.sendMessage(channelID, "Init Test");
	});
};
