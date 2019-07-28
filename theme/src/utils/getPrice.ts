/**
 * Some products can be on sale.
 * We need to calculate the percentage
 * with the data the API provides:
 *
 * @param {numbstringr} price - the price at which it's being sold
 * @param {string} original_price - the initial price before the sale is applied
 */

interface IProductOnSale {
  originalPrice: string
  price: string
  isOnSale: boolean
  percentageOff?: number
}
export function getPrice(price: string, originalPrice: string): IProductOnSale {
  if (originalPrice > price) {
    const decrease = Number(originalPrice) - Number(price)
    return {
      originalPrice,
      price,
      isOnSale: true,
      percentageOff: Math.round(
        (Number(decrease) / Number(originalPrice)) * 100
      ),
    }
  } else {
    return {
      originalPrice,
      price,
      isOnSale: false,
    }
  }
}
