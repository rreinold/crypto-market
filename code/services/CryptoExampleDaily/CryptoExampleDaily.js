/**
 * Fetches daily prices for BitCoin (BTC)
 * Can also fetch other supported cryptocurrencies:
 * https://www.alphavantage.co/documentation/
 * 
 * @example
 * {
 *   "Meta Data": {
 *     "1. Information": "Daily Prices and Volumes for Digital Currency",
 *     "2. Digital Currency Code": "BTC",
 *     "3. Digital Currency Name": "Bitcoin",
 *     "4. Market Code": "USD",
 *     "5. Market Name": "United States Dollar",
 *     "6. Last Refreshed": "2018-03-25 (end of day)",
 *     "7. Time Zone": "UTC"
 *   },
 *   "Time Series (Digital Currency Daily)": {
 *       "2018-03-25": {
 *             "1a. open (USD)": "8550.46352001",
 *             "1b. open (USD)": "8550.46352001",
 *             "2a. high (USD)": "8670.44414860",
 *             "2b. high (USD)": "8670.44414860",
 *             "3a. low (USD)": "8412.13922602",
 *             "3b. low (USD)": "8412.13922602",
 *             "4a. close (USD)": "8481.61213115",
 *             "4b. close (USD)": "8481.61213115",
 *             "5. volume": "73724.46670737",
 *             "6. market cap (USD)": "625302331.18805134"
 *           },
 *           ...
 *       }
 *     }
 */

function CryptoExampleDaily(req, resp){
    var API_KEY = "90ISJH02B3K3H98J"
    var market = CryptoMarket(API_KEY);
    market.daily("BTC", function(err, data){
        resp.success(data)
    })
}