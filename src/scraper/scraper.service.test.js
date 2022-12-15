const ScraperService = require('./scraper.service')
const ScraperPuppeteer = require('./repository/scraper.puppeteer.repository')

jest.mock('./repository/scraper.puppeteer.repository')

describe('ScraperService.getList', () => {
  it('should call getRepository once', async () => {
    const scraperService = new ScraperService('puppeteer')
    const getRepositoryfSpy = jest.spyOn(scraperService, 'getRepository')
    await scraperService.getList()
    expect(getRepositoryfSpy).toHaveBeenCalledTimes(1)
  })

  it('should call method from puppeteer repository', async () => {
    const scraperService = new ScraperService('puppeteer')
    await scraperService.getList()
    expect(ScraperPuppeteer).toHaveBeenCalledTimes(1)
  })

  it('should throw an error if method is empty', async () => {
    const scraperService = new ScraperService()

    await expect(async () => { 
      await scraperService.getList()
    }).rejects.toThrowError('Invalid method')
  })

  it('should throw an error if method has invalid value', async () => {
    const scraperService = new ScraperService()

    await expect(async () => { 
      await scraperService.getList('selenium')
    }).rejects.toThrowError('Invalid method')
  })
})