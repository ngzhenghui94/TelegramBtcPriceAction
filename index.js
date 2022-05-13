import TelegramBot from "node-telegram-bot-api";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Singapore");
import schedule from "node-schedule";
import dotenv from "dotenv";
dotenv.config();

const bot = new TelegramBot(process.env.TOKEN, { polling: true });
const channelID = process.env.CHANNELID;


/* A cron job that runs every 1 minute. */
const job = schedule.scheduleJob("* 1 *  * * *", async () => {
	bot.sendMessage(channelID, "Init Test");
});

