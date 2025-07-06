export function calculateDiscount(price, sale) {
    if(sale) {
        const discount = price - sale
       return  Math.round((discount/price)*100)
    } else return 0
}