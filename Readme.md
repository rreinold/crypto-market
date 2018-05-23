
# ipm package: crypto-market

## Overview

Library for realtime and historical data on digital/crypto currencies

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

Get a free API Key Here:  

[https://www.alphavantage.co/support/#api-key](https://www.alphavantage.co/support/#api-key)

## Usage
Can be used to monitor crypto-currencies prices on ClearBlade platform. Can be integrated with an existing system to do exciting projects.

## Assets
### Code Libraries

`CryptoMarket` - Library for fetching crypto pricing

### Code Services

#### Example 

* `CryptoExampleDaily` - Fetches daily prices for BTC
* `CryptoExampleIntraday` - Fetches intraday prices for BTC

## API

### Typedefs

<dl>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>This callback is displayed as part of sgEmail.</p>
</dd>
<dt><a href="#CryptoMarket">CryptoMarket</a> : <code>Object</code></dt>
<dd><p>Fetch market prices for cryptocurrencies. Built upon Alpha Vantage&#39;s free API</p>
</dd>
</dl>

<a name="callback"></a>

### callback : <code>function</code>
This callback is displayed as part of sgEmail.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| err | <code>Object</code> | 
| resp | <code>Object</code> | 

<a name="CryptoMarket"></a>

### CryptoMarket : <code>Object</code>
Fetch market prices for cryptocurrencies. Built upon Alpha Vantage's free API

**Kind**: global typedef  
**Link**: https://www.alphavantage.co/documentation/  

| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>string</code> | API Key provided by Alpha Vantage |
| market | <code>string</code> | cryptocurrency market, ex "USD" (see docs link above for all options) |

**Example**  

```js
var market = CryptoMarket(API_KEY);
```

* [CryptoMarket](#CryptoMarket) : <code>Object</code>
    * [.intraday(symbol, callback)](#CryptoMarket.intraday)
    * [.daily(symbol, callback)](#CryptoMarket.daily)

<a name="CryptoMarket.intraday"></a>

#### CryptoMarket.intraday(symbol, callback)
Fetches intraday data for a cryptocurrency

**Kind**: static method of [<code>CryptoMarket</code>](#CryptoMarket)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | cryptocurrency symbol, ex "BTC" (see docs link above for all options) |
| callback | [<code>callback</code>](#callback) | response function(err, data) |

**Example**  

```js
var market = CryptoMarket(API_KEY);
market.intraday("BTC", function(err, data){
    resp.success(data)
});
```

<a name="CryptoMarket.daily"></a>

#### CryptoMarket.daily(symbol, callback)
Fetches daily data for a cryptocurrency

**Kind**: static method of [<code>CryptoMarket</code>](#CryptoMarket)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | cryptocurrency symbol, ex "BTC" (see docs link above for all options) |
| callback | [<code>callback</code>](#callback) | response function(err, data) |

**Example**  

```js
var market = CryptoMarket(API_KEY);
market.daily("BTC", function(err, data){
    resp.success(data)
});
```
