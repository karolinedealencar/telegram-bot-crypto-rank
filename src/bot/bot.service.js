const BotTelegram = require('./repository/bot.telegram.repository')

class BotService {
  constructor(channel) {
    this.channel = channel
  }

  getRepository() {
    if (this.channel === 'telegram') {
      return new BotTelegram()
    }

    throw new Error('Invalid channel')
  }

  sendMessage(message) {
    if (!message) {
      throw new Error('Empty message')
    }

    const repository = this.getRepository()
    return repository.sendMessage(message)
  }
}

module.exports = BotService