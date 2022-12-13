const log = require('../../utils/log')
const axios = require('axios').default
const BotInterface = require('../bot.interface')
const { telegramBotToken, telegramBotChatID } = require('../../config')

class BotTelegram extends BotInterface {
  constructor() {
    super()
    this.token = telegramBotToken
    this.chatID = telegramBotChatID
  }

  async sendGif() {
    return axios.get(`https://api.telegram.org/bot${this.token}/sendAnimation?chat_id=${this.chatID}&animation=https://i.pinimg.com/originals/32/4b/99/324b99bf03869e91fc6807e854d7e616.gif`)
  }

  async sendMessageToChat(message) {
    return axios.get(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatID}&text=${message}&parse_mode=html`)
  }

  async sendMessage(message) {
    await this.sendGif()
    await this.sendMessageToChat(message) 
  }
}

module.exports = BotTelegram