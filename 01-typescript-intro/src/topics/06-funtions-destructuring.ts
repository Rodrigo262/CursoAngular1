

export interface Product{
    description: string,
    price: number,

}

export interface TaxCalculationOptions{
    tax: number,
    products : Product[];
}

const phone: Product ={
    description: 'Iphone',
    price: 1000.0
}
const tablet: Product ={
    description: 'Ipad',
    price: 10500.0
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

//function taxCalculation(options: TaxCalculationOptions): [number, number]{
export function taxCalculation(options: TaxCalculationOptions): [number, number]{
    let total = 0.0;
    
    const {tax, products} = options;
    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax]
}

const [product, totaltaxt] = taxCalculation({
    products:shoppingCart, 
    tax
});

console.log('Total', product )
console.log('Tax', totaltaxt )