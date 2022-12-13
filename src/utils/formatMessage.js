const formatMessage = (data = []) => `
  <b>Top 10 Cryptos</b>
  ${data.map((item) => `
    <b>${item.name} (${item.symbol})</b>
    - price: ${item.price}
    - change (last 24 hours): ${item.change}
    - volume (last 24 hours): ${item.volume}
    - market cap: ${item.marketCap}
  `).join('')}
`

module.exports = formatMessage