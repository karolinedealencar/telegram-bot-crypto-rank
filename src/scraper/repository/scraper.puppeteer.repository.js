const log = require('../../utils/log')
const ScraperInterface = require('../scraper.interface')
const { executablePath } = require('puppeteer')
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(StealthPlugin())

class ScraperPuppeteer extends ScraperInterface {
  constructor() {
    super()
    this.browser = null;
    this.page = null;
  }

  async createPage() {
    const page = await this.browser.newPage()
    this.page = page
  }

  async launchBrowser() {
    const browser = await puppeteer.launch({
      executablePath: executablePath(),
    })
    
    this.browser = browser
  }

  async goToSite() {
    await this.page.goto('https://www.coinbase.com/price')
  }

  async closeBrowser() {
    await this.browser.close()
  }

  async scrapSite() {
    await this.page.waitForSelector('#main table tbody tr img')

    const cryptos = await this.page.evaluate(() => {
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
  
    return cryptos
  }

  async getList() {
    try {
      log.info('[ 🤖 ] launching browser')
      await this.launchBrowser()

      log.info('[ 🤖 ] creating page')
      await this.createPage()

      log.info('[ 🤖 ] opening coinbase website')
      await this.goToSite()

      log.info('[ 🤖 ] getting top 10 crypto')
      const list = await this.scrapSite()

      log.info('[ 🤖 ] closing browser')
      await this.closeBrowser()
      return list
    } catch (error) {
      await this.closeBrowser()
      throw new Error(error)
    }
  }
}

module.exports = ScraperPuppeteer