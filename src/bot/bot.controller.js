const BotService = require('./bot.service')

class BotController {
  constructor(channel) {
    this.service = new BotService(channel)
  }

  sendMessage(message) {
    return this.service.sendMessage(message)
  }

}

module.exports = BotController