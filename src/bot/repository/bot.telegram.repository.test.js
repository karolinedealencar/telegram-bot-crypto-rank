const axios = require('axios').default
const BotTelegram = require('./bot.telegram.repository')

jest.mock('axios')

describe('BotTelegram.sendMessage', () => {
  it('should call sendGift & sendMessageToChat once', async () => {
    const botTelegram = new BotTelegram()
    const sendGifSpy = jest.spyOn(botTelegram, 'sendGif')
    const sendMessageToChatSpy = jest.spyOn(botTelegram, 'sendMessageToChat')

    await botTelegram.sendMessage('hi')
    expect(sendGifSpy).toHaveBeenCalledTimes(1)
    expect(sendMessageToChatSpy).toHaveBeenCalledTimes(1)

    sendGifSpy.mockClear()
    sendMessageToChatSpy.mockClear()
  })
})