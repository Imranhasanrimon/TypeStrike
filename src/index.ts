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

//------------------------------------------------4
//------------------------------------------------5
//------------------------------------------------6
//------------------------------------------------7
//------------------------------------------------8
