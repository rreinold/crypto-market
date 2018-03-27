/**
 * Fetch market prices for cryptocurrencies. Built upon Alpha Vantage's free API
 * @link https://www.alphavantage.co/documentation/
 * @typedef CryptoMarket
 * @param {string} apiKey API Key provided by Alpha Vantage 
 * @param {string} market cryptocurrency market, ex "USD" (see docs link above for all options)
 */
function CryptoMarket(apiKey, market){
    
    var URL_TEMPLATE = "https://www.alphavantage.co/query?function={{function}}&symbol={{symbol}}&market={{market}}&apikey={{apiKey}}"
    var DEFAULT_OPTIONS = {
        market:"USD",
        symbol: "BTC"
    }
    
    this.apiKey = apiKey
    /**
     * Fetches intraday data for a cryptocurrency
     * 
     * memberof CryptoMarket
     * @param {string} symbol cryptocurrency symbol, ex "BTC" (see docs link above for all options)
     * @param {callback} callback response function(err, data)
     */
    function intraday(symbol, callback){
        var options = DEFAULT_OPTIONS
        options.apiKey = this.apiKey
        options.function = "DIGITAL_CURRENCY_INTRADAY"
        options.symbol = symbol ? symbol : options.symbol
        fetch(options, callback)
    }
    
    /**
     * Fetches daily data for a cryptocurrency
     * 
     * memberof CryptoMarket
     * @param {string} symbol cryptocurrency symbol, ex "BTC" (see docs link above for all options)
     * @param {callback} callback response function(err, data)
     */
    function daily(symbol, callback){
        var options = DEFAULT_OPTIONS
        options.apiKey = this.apiKey
        options.function = "DIGITAL_CURRENCY_DAILY"
        options.symbol = symbol ? symbol : options.symbol
        fetch(options, callback)
    }
    
    function fetch(options, callback){
        var url = URL_TEMPLATE
        for(key in options){
            url = url.replace('{{'+key+'}}', options[key])
        }
        var r = Requests()
        var requestOptions = {
            url
        }
        log(url)
        r.get(requestOptions, callback)
    }
    
    return {
        intraday,
        daily
    }
    
}