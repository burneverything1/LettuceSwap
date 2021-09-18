const PriceData = require('../models/pricedata')

const CheckSale = async (price_id) => {
    // check if any ask/bids match and create "sale"
    const all_prices = await PriceData.findById(price_id)

    const bid_data = []
    const ask_data = []

    all_prices.bids.forEach((value, key) => bid_data.push(parseInt(key)))
    all_prices.asks.forEach((value, key) => ask_data.push(parseInt(key)))
    let max_bid = Math.max(...bid_data)
    let min_ask = Math.min(...ask_data)

    if (min_ask <= max_bid) {
        // decrement ask/bid counts for all matching

        max_bid = String(max_bid)
        min_ask = String(min_ask)

        let num_bids = all_prices.bids.get(max_bid)
        let num_asks = all_prices.asks.get(min_ask)

        if (num_bids === 1){
            all_prices.bids.delete(max_bid)
        } else {
            all_prices.bids.set(max_bid, parseInt(num_bids) - 1)
        }

        if (num_asks === 1){
            all_prices.asks.delete(min_ask)
        } else {
            all_prices.asks.set(min_ask, parseInt(num_asks) - 1)
        }
        console.log('bid and ask matched - sale logged!');
        await PriceData.findByIdAndUpdate(price_id, all_prices)
        return {result: true, price: max_bid}
    }
    return {result: false, price: 0}
}

module.exports = {CheckSale}