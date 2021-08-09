/* eslint-disable no-console */
const { closeBrowser, getCryptoList, launchBrowser } = require('./services/crawler')
const { sendMessageToTelegramBot } = require('./services/bot')

const start = async () => {
  console.log('[ 🤖 ] service started')

  try {
    console.log('[ 🤖 ] starting browser')
    const { browser, page } = await launchBrowser()

    console.log('[ 🤖 ] starting crypto scraping')
    const cryptos = await getCryptoList(page)

    console.log('[ 🤖 ] closing browser')
    await closeBrowser(browser)

    console.log('[ 🤖 ] sending top 10 data to telegram bot')
    await sendMessageToTelegramBot(cryptos.slice(0, 10))

    console.log('[ 🤖 ] message sent, we are done')
  } catch (error) {
    console.log(`[ ❌ ] error: ${error}`)
  }
}

start()
