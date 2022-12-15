const BotService = require('./bot.service')
const BotTelegram = require('./repository/bot.telegram.repository')

jest.mock('./repository/bot.telegram.repository')

describe('BotService.sendMessage', () => {
  beforeEach(() => {
    BotTelegram.mockClear()
  })

  it('should call method from telegram repository', async () => {
    const botService = new BotService('telegram')
    await botService.sendMessage('hi')
    expect(BotTelegram).toHaveBeenCalledTimes(1)
  })

  it('should throw an error if channel is empty', async () => {
    const botService = new BotService()
    await expect(async () => { 
      await botService.sendMessage('hi')
    }).rejects.toThrowError('Invalid channel')
  })

  it('should throw an error if channel has invalid value', async () => {
    const botService = new BotService('whatsapp')
    await expect(async () => { 
      await botService.sendMessage('hi')
    }).rejects.toThrowError('Invalid channel')
  })

  it('should throw an error if message is empty', async () => {
    const botService = new BotService('telegram')
    await expect(async () => { 
      await botService.sendMessage()
    }).rejects.toThrowError('Empty message')
  })
})