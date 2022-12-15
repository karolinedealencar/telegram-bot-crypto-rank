const ScraperPuppeteer = require('./repository/scraper.puppeteer.repository')

class ScraperService {
  constructor(method) {
    this.method = method
  }

  getRepository() {
    if (this.method === 'puppeteer') {
      return new ScraperPuppeteer()
    }

    throw new Error('Invalid method')
  }

  getList() {
    const repository = this.getRepository()
    return repository.getList()
  }
}

module.exports = ScraperService