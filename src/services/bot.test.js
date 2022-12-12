const { formatMessageToTelegramBot } = require('./bot')

describe('formatMessageToTelegramBot', () => {
  it('should return a formatted message', () => {
    const data = [
      {
        name: "Bitcoin",
        symbol: "BTC",
        icon: "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
        price: "R$90,531.25",
        volume: "R$100.3B",
        change: "0.82%",
        marketCap: "R$1.7T",
      },
    ]

    expect(formatMessageToTelegramBot(data))
      .toBe(
        '\n  <b>Top 10 Cryptos</b>\n  \n    <b>Bitcoin (BTC)</b>\n    - price: R$90,531.25\n    - change (last 24 hours): 0.82%\n    - volume (last 24 hours): R$100.3B\n    - market cap: R$1.7T\n  \n'
      )
  })

  it('should return a formatted message with title only', () => {
    expect(formatMessageToTelegramBot()).toBe('\n  <b>Top 10 Cryptos</b>\n  \n')
  })
})