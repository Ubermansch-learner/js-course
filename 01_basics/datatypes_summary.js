//data types are categorised into 2 categories on the basis of data storage and how it is being accessed or fetched
//primitive and non-primitive

//primitive( call by value)-> 1.string  2.Number  3.boolean 4.null  5.undefined  6.symbol  7.BigInt

//JS is dynamically typed lang

//non-primitive or reference type-> 1.Arrays 2,objects 3.functions  


const id = Symbol('123')
 const anotherId=Symbol('123')

 console.log(id === anotherId);//false, symbol ka kamaal  hai ye

 const bigNumber = 345697842345987n
 //n for bigInt

 //Array, objects,functions

 const heros=["shaktiman","doga","naagraj"]

  let myObj={
    name:"suman",
    age:20

 }

 const myFunction=function(){
    console.log("Hello World");
 }

 console.log(typeof bigNumber);

 let myName;
 const isSleepy= true;
 const temp = null;

 console.log(typeof myName );//undefined
 console.log(typeof isSleepy );//boolean
 console.log(typeof temp);//object
 console.log(typeof myFunction);//function
 console.log(typeof anotherId);//symbol
 console.log(typeof heros);//object

 //return type of different data types

