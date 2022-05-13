import TelegramBot from "node-telegram-bot-api";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Singapore");

import { msgSender } from "./src/msgSender.js";
import { telegramToken } from "./src/constants.js";

const bot = new TelegramBot(telegramToken, { polling: true });

/* Fn to send msg to channnell */
msgSender(bot);
