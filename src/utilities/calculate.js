const add = (first,second) =>  first + second; 

const multiply = (first,second) => first * second;

// array sum using reduce 
// const numbers = [12,23,5,65,66,67];
// const sumReducer = (previous, current) => previous + current; 
// const total = numbers.reduce(sumReducer,0);

//object sum 
// const items = [
//     {id:1, name: 'alta', price: 100},
//     {id:2, name: 'malta', price: 200},
//     {id:3, name: 'chalta', price: 300},
//     {id:4, name: 'dalta', price: 400},
//     {id:5, name: 'lalta', price: 500}
// ]

// const itemSumReducer = (previous,current) => previous + current.price; 
// const itemsTotal = items.reduce( itemSumReducer,0);

const getTotalPrice = (products) => {
    const reducer = (previous,current) => previous +  current.price;
    const total = products.reduce(reducer,0);
    return total; 
}

//export default add;

export {add,multiply, getTotalPrice as getTotal}