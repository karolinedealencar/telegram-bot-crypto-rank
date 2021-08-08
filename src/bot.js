const { telegramBotToken, telegramBotChatID } = require('./config')
const axios = require('axios').default

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

const sendMessageToTelegramBotAPI = async (message) => {
  return axios.get(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramBotChatID}&text=${message}&parse_mode=html`)
}

const sendMessageToTelegramBot = async (data) => {
  const message = formatMessageToTelegramBot(data)
  await sendMessageToTelegramBotAPI(message)
}

module.exports = { sendMessageToTelegramBot }
