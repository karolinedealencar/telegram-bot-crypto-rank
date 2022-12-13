const log = require('./utils/log')
const formatMessage = require('./utils/formatMessage')
const Scraper = require('./scraper')
const ScraperPuppeteer = require('./scraper/abstraction/scraper.puppeteer')
const Bot = require('./bot')
const BotTelegram = require('./bot/abstraction/bot.telegram')

const start = async () => {
  log.info('[ 🤖 ] service started')

  const scraper = new Scraper(ScraperPuppeteer)
  const cryptoList = await scraper.getList()

  log.info('[ 🤖 ] formatting crypto list as a cool message')
  const message = formatMessage(cryptoList)

  log.info('[ 🤖 ] sending to bot')
  const bot = new Bot(BotTelegram)
  await bot.sendMessage(message)
}

start()
