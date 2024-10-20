// 1 We have a list of dictionaries representing product information 
// (keys: "name", "price", "quantity"). Write a function that generates 
// a dictionary from this list, in which the key is the product name and the 
// value is the total price of this product (price * quantity).
//

interface Product {
    name: string;
    price: number;
    quantity: number;
}

function calculateTotalPrices(products: Product[]): Record<string, number> {
    return products.reduce((result, product) => {
        result[product.name] = product.price * product.quantity;
        return result;
    }, {} as Record<string, number>);
}

const productList: Product[] = [
    { name: "Apple", price: 0.5, quantity: 10 },
    { name: "Banana", price: 0.3, quantity: 15 },
    { name: "Orange", price: 0.6, quantity: 8 }
];

const totalPrices = calculateTotalPrices(productList);
console.log(totalPrices);
