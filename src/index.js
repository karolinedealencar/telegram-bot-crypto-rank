const log = require('./utils/log')
const formatMessage = require('./utils/formatMessage')
const BotController = require('./bot/bot.controller')
const ScraperController = require('./scraper/scraper.controller')

const start = async () => {
  try {
    log.info('[ 🤖 ] service started')

    const scraperController = new ScraperController('puppeteer')
    const cryptoList = await scraperController.getList()

    log.info('[ 🤖 ] formatting crypto list as a cool message')
    const message = formatMessage(cryptoList)

    log.info('[ 🤖 ] sending to bot')
    const bot = new BotController('telegram')
    await bot.sendMessage(message)
  } catch (error) {
    throw new Error(`[ 🤖 ] Ops! ${error.message}`)
  }
}

start()
