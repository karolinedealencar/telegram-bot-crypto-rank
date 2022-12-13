class Scraper {
  constructor(ScraperInterface) {
    this.scraper = new ScraperInterface()
  }

  getList() {
    return this.scraper.getList();
  }

}

module.exports = Scraper