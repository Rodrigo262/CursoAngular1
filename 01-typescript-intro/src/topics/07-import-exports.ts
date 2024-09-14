
import { Product, taxCalculation } from './06-funtions-destructuring';

const shoppingCart : Product[] = [
    {
        description: 'Nokia',
        price: 1500,
    },
    {
        description: 'iphone',
        price: 4500,
    }
]


const[total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: 0.2
})
console.log('Total', total )
console.log('Tax', taxTotal )