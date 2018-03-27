
# ipm package: crypto-market

## Overview

Library for realtime and historical data on digital/crypto currencies

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

Get a free API Key Here:  

[https://www.alphavantage.co/support/#api-key](https://www.alphavantage.co/support/#api-key)

## Usage

### Code Libraries

`CryptoMarket` - Library for fetching crypto pricing

### Code Services

`ExampleCryptoDaily` - Fetches daily prices for BTC
`ExampleCryptoIntraday` - Fetches intraday prices for BTC

## API

<a name="CryptoMarket"></a>

### CryptoMarket
Fetch market prices for cryptocurrencies. Built upon Alpha Vantage's free API

**Kind**: global typedef  
**Link**: https://www.alphavantage.co/documentation/  

| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>string</code> | API Key provided by Alpha Vantage |
| market | <code>string</code> | cryptocurrency market, ex "USD" (see docs link above for all options) |


* [CryptoMarket](#CryptoMarket)
    * [~intraday(symbol, callback)](#CryptoMarket..intraday)
    * [~daily(symbol, callback)](#CryptoMarket..daily)

<a name="CryptoMarket..intraday"></a>

### CryptoMarket~intraday(symbol, callback)
Fetches intraday data for a cryptocurrency

memberof CryptoMarket

**Kind**: inner method of [<code>CryptoMarket</code>](#CryptoMarket)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | cryptocurrency symbol, ex "BTC" (see docs link above for all options) |
| callback | <code>callback</code> | response function(err, data) |

<a name="CryptoMarket..daily"></a>

### CryptoMarket~daily(symbol, callback)
Fetches daily data for a cryptocurrency

memberof CryptoMarket

**Kind**: inner method of [<code>CryptoMarket</code>](#CryptoMarket)  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | cryptocurrency symbol, ex "BTC" (see docs link above for all options) |
| callback | <code>callback</code> | response function(err, data) |



## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
