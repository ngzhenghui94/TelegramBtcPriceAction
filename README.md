### Create an .env file with the below template

TOKEN="TELEGRAMAPITOKEN -- Obtain from @BotFather"
CHANNELID="@btc_price_action -- Your Telegram Channel ID"
CRYPTOTICKER="BTC"
APIURL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1"

### CLI Command

npm install
node index.js
