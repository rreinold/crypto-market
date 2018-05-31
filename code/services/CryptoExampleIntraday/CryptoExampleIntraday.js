/**
 * Fetches intraday prices for BitCoin (BTC)
 * Can also fetch other supported cryptocurrencies:
 * https://www.alphavantage.co/documentation/
 * 
 * @example
 * 
 *   "Meta Data": {
 *     "1. Information": "Intraday Prices and Volumes for Digital Currency",
 *     "2. Digital Currency Code": "BTC",
 *     "3. Digital Currency Name": "Bitcoin",
 *     "4. Market Code": "USD",
 *     "5. Market Name": "United States Dollar",
 *     "6. Interval": "5min",
 *     "7. Last Refreshed": "2018-03-27 20:50:00",
 *     "8. Time Zone": "UTC"
 *   },
 *   "Time Series (Digital Currency Intraday)": {
 *     "2018-03-27 20:50:00": {
 *       "1a. price (USD)": "8004.62468329",
 *       "1b. price (USD)": "8004.62468329",
 *       "2. volume": "118480.11567157",
 *       "3. market cap (USD)": "948388858.38378000"
 *     },
 *     "2018-03-27 20:45:00": {
 *       "1a. price (USD)": "7947.88201252",
 *       "1b. price (USD)": "7947.88201252",
 *       "2. volume": "118230.34426528",
 *       "3. market cap (USD)": "939680826.52035999"
 *     },
 *     ...
 *    }
 *  }  
 */
function CryptoExampleIntraday(req, resp){
    var API_KEY = "90ISJH02B3K3H98J"
    var market = CryptoMarket(API_KEY);
    var callback = function (err, data) {
        if (err) {
            resp.error(data);
        }
        else {
            resp.success(data);
        }
    }
    var market = CryptoMarket(API_KEY);
    market.intraday(callback, "BTC");
}