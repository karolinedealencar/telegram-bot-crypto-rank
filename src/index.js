const log = require('./utils/log')
const formatMessage = require('./utils/formatMessage')
const Scraper = require('./scraper')
const ScraperPuppeteer = require('./scraper/abstraction/scraper.puppeteer')
const BotController = require('./bot/bot.controller')

const start = async () => {
  try {
    log.info('[ 🤖 ] service started')

    const scraper = new Scraper(ScraperPuppeteer)
    const cryptoList = await scraper.getList()

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
