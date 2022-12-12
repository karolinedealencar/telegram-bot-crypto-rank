const { executablePath } = require('puppeteer')
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(StealthPlugin())

const launchBrowser = async () => {
  const browser = await puppeteer.launch({
    executablePath: executablePath(),
  })
  const page = await browser.newPage()
  return { browser, page }
}

const closeBrowser = async (browser) => browser.close()

const getCryptoList = async (page) => {
  console.log('[ 🤖 ] navigating to coinbase.com')
  await page.goto('https://www.coinbase.com/price')

  console.log('[ 🤖 ] waiting for page content')
  await page.waitForSelector('#main table tbody tr img')

  const cryptos = await page.evaluate(() => {
    const list = Array.from(document.querySelectorAll('#main table tbody tr')).slice(0, 10)

    return list.map((item) => {
      const icon = item.querySelector('td:nth-child(1) img').src
      const name = item.querySelector('td:nth-child(1) h2').textContent

      const symbol = item.querySelector('td:nth-child(1) p').textContent
      const price = item.querySelector('td:nth-child(2) span:nth-child(1)').textContent
      const change = item.querySelector('td:nth-child(4) span span:nth-child(2)')?.textContent  || ''
      const marketCap = item.querySelector('td:nth-child(5) span').textContent
      const volume = item.querySelector('td:nth-child(6) span').textContent

      return {
        name,
        symbol,
        icon,
        price,
        volume,
        change,
        marketCap,
      }
    })
  })

  console.log('[ 🤖 ] finished crypto info scraping')
  return cryptos
}

module.exports = {
  launchBrowser,
  closeBrowser,
  getCryptoList,
}
