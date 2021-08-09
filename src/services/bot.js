const axios = require('axios').default
const { telegramBotToken, telegramBotChatID } = require('../config')

const formatMessageToTelegramBot = (data) => `
  <b>Top 10 Cryptos</b>
  ${data.map((item) => `
    <b>${item.name} (${item.symbol})</b>
    - price: ${item.price}
    - change (last 24 hours): ${item.change}
    - volume (last 24 hours): ${item.volume}
    - market cap: ${item.marketCap}
  `).join('')}
`

const sendAnimationToTelegramBotAPI = async () => axios.get(`https://api.telegram.org/bot${telegramBotToken}/sendAnimation?chat_id=${telegramBotChatID}&animation=https://i.pinimg.com/originals/32/4b/99/324b99bf03869e91fc6807e854d7e616.gif`)

const sendMessageToTelegramBotAPI = async (message) => axios.get(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramBotChatID}&text=${message}&parse_mode=html`)

const sendMessageToTelegramBot = async (data) => {
  const message = formatMessageToTelegramBot(data)
  await sendAnimationToTelegramBotAPI()
  await sendMessageToTelegramBotAPI(message)
}

module.exports = {
  sendMessageToTelegramBot,
}
