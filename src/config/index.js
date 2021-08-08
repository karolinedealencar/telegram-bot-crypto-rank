require('dotenv').config()

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
const telegramBotChatID = process.env.TELEGRAM_BOT_CHAT_ID

module.exports = { 
  telegramBotToken,
  telegramBotChatID
}