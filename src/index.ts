//------------------------------------------------1
type FormatString = (input: string, toUpper?: boolean) => string;
const formatString: FormatString = (input, toUpper = true) => {
    return toUpper ? input.toUpperCase() : input.toLowerCase()
}


//------------------------------------------------2
interface Item {
    title: string;
    rating: number;
}
const filterByRating = (items: Item[]): Item[] => items.filter(item => item.rating >= 4)


//------------------------------------------------3
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}


//------------------------------------------------4
class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}
class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model
    }
    getModel(): string {
        return `Model: ${this.model}`
    }
}


//------------------------------------------------5
type ProcessValue = (value: string | number) => number;
const processValue: ProcessValue = (value) => {

    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }

}


//------------------------------------------------6
interface Product {
    name: string;
    price: number;
}
const getMostExpensiveProduct = (products: Product[]): Product | null => {
    if (!products.length) {
        return null
    }
    return products.reduce((acc, curr) => curr.price > acc.price ? curr : acc);
}


//------------------------------------------------7

//------------------------------------------------8
