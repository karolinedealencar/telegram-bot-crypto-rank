const ScraperService = require('./scraper.service')

class ScraperController {
  constructor(method) {
    this.service = new ScraperService(method)
  }

  getList() {
    return this.service.getList()
  }

}

module.exports = ScraperController