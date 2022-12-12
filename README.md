# Crypto Bot

Bot that sends data from top 10 cryptos from [coinbase.com](https://www.coinbase.com/) to a telegram group.

![bitcoin gif](https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F67031179-5c04-4e69-bb18-a30d0c0ffdd8_477x415.gif)

## 💻 Prerequisites

- [NodeJS 16.x](https://nodejs.org/en/download/)

## 🚀 Installing

1. `git clone https://github.com/karolinedealencar/telegram-bot-crypto-rank`
2. `cd telegram-bot-crypto-rank`
3. `npm install -g pino-pretty`
3. `npm install`
4. `cp .env.sample .env`
5. `add your telegram bot token & the chat id you want to send the data`
    - [tutorial on how to create a bot & get the token](https://core.telegram.org/bots#3-how-do-i-create-a-bot)
    - [tutorial on how to get the chat id](https://stackoverflow.com/a/38388851)

## 🤖 Usage

1. `npm start`
2. That's it! Wait for the service to finish and check your telegram group. 🎉

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.