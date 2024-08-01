const products = [
    {name: 'Product1', priceUSD: 5},
    {name: 'Product2', priceUSD: 10}
]

function convertPricesToEUR(products){
    return products.map(product => {
        return {
            name: product.name,
            priceEUR: product.priceUSD * 0.85
        }
    })
}

const productsEUR = convertPricesToEUR(products)

console.log(productsEUR)