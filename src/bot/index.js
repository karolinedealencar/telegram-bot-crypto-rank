class Bot {
  constructor(BotInterface) {
    this.bot = new BotInterface()
  }

  sendMessage(message) {
    return this.bot.sendMessage(message);
  }

}

module.exports = Bot