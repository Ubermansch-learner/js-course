//reduce
const myNums = [1,2,3]


// const myTotal = myNums.reduce(function (acc,curval){
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc + curval;

// },0 )//acc value initialised as 0


//using arrow function
const myTotal = myNums.reduce((acc,curval)=>acc +curval,0)
//console.log(myTotal);

const shoppingCart=[
    {
        Name:"js course",
        price: 2999

},
    {
        Name:"mobile dev",
        price: 4999

},
    {
        Name:"data science",
        price: 12999

}
   
]

const priceToPay =shoppingCart.reduce((acc,item)=> acc + item.price, 0)
console.log(priceToPay);
