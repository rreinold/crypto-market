/**
 * Fetch market prices for cryptocurrencies. Built upon Alpha Vantage's free API
 * @link https://www.alphavantage.co/documentation/
 * @typedef {Object} CryptoMarket
 * @param {string} apiKey API Key provided by Alpha Vantage 
 * @param {string} market cryptocurrency market, ex "USD" (see docs link above for all options)
 * 
 * @example
 * var market = CryptoMarket(API_KEY);
 */
function CryptoMarket(apiKey, market){
    
    var URL_TEMPLATE = "https://www.alphavantage.co/query?function={{function}}&symbol={{symbol}}&market={{market}}&apikey={{apiKey}}"
    var DEFAULT_OPTIONS = {
        market:"USD",
        symbol: "BTC"
    }
    
    /**
     * Fetches intraday data for a cryptocurrency
     * 
     * @memberof CryptoMarket
     * @param {string} symbol cryptocurrency symbol, ex "BTC" (see docs link above for all options)
     * @param {callback} callback response function(err, data)
     * 
     * @example
     * 
     * var market = CryptoMarket(API_KEY);
     * market.intraday("BTC", function(err, data){
     *     resp.success(data)
     * });
     * 
     */
    function intraday(symbol, callback){
        var options = DEFAULT_OPTIONS
        options.apiKey = apiKey
        options.function = "DIGITAL_CURRENCY_INTRADAY"
        options.symbol = symbol ? symbol : DEFAULT_OPTIONS.symbol
        options.market = market ? market : DEFAULT_OPTIONS.market;
        _fetch(options, callback)
    }
    
    /**
     * Fetches daily data for a cryptocurrency
     * 
     * @memberof CryptoMarket
     * @param {string} symbol cryptocurrency symbol, ex "BTC" (see docs link above for all options)
     * @param {callback} callback response function(err, data)
     * 
     * @example
     * var market = CryptoMarket(API_KEY);
     * market.daily("BTC", function(err, data){
     *     resp.success(data)
     * });
     */
    function daily(symbol, callback){
        var options = DEFAULT_OPTIONS
        options.apiKey = apiKey
        options.function = "DIGITAL_CURRENCY_DAILY"
        options.symbol = symbol ? symbol : DEFAULT_OPTIONS.symbol
        options.market = market ? market : DEFAULT_OPTIONS.market;
        _fetch(options, callback)
    }
    
    function _fetch(options, callback){
        var url = URL_TEMPLATE
        for(var key in options){
            url = url.replace('{{'+key+'}}', options[key]);
        }
        var r = Requests()
        var requestOptions = {
            url
        }
        //log(url); //Uncomment to see the generated URL in logs
        r.get(requestOptions, callback)
    }
    
    return {
        intraday,
        daily
    }
    
}

/**
* This callback is displayed as part of sgEmail.
* @callback callback
* @param {Object} err
* @param {Object} resp
*/