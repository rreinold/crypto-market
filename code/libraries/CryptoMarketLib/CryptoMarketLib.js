/**
 * Fetch market prices for cryptocurrencies. Built upon Alpha Vantage's free API
 * @link https://www.alphavantage.co/documentation/
 * @typedef {Object} CryptoMarket
 * @param {string} apiKey API Key provided by Alpha Vantage 
 * @param {string} [market=USD] cryptocurrency market, defaults to "USD" (see docs link above for all options)
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
     * @param {callback} callback response function(err, data)
     * @param {string} [symbol=BTC] cryptocurrency symbol, defaults to "BTC" (see docs link above for all options)
     * 
     * @example
     * 
     * var callback  = function(err, data){
     *      if(err){
     *          resp.error(data);
     *      }
     *      else{
     *          resp.success(data);
     *      }
     * }
     * 
     * var market = CryptoMarket(API_KEY);
     * market.intraday(callback, "BTC");
     * 
     */
    function intraday(callback, symbol){
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
     * @param {callback} callback response function(err, data)
     * @param {string} [symbol=BTC] cryptocurrency symbol, defaults to "BTC" (see docs link above for all options)
     * 
     * @example
     * var market = CryptoMarket(API_KEY);
     * market.daily("BTC", function(err, data){
     *     resp.success(data)
     * });
     */
    function daily(callback, symbol){
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
        r.get(requestOptions, callback)
    }
    
    return {
        intraday,
        daily
    }
    
}

/**
* This callback is displayed as part of this Library.
* @callback callback
* @param {Object} err
* @param {Object} resp
*/