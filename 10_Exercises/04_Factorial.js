//using reduce and for loops

//5!
// let element=1;
// for (let i = 5; i < 0; i--) {
//      element *= i;   
// }
// console.log(element);


// let arr=[5,4,3,2,1];
// const fact =(a,b)=>{

//     return a*b;

// }
// console.log(arr.reduce(fact));



let a =6
function factorial(number){
    let arr=Array.from(Array(number+1).keys())//returns an array from 1 till 6 as we have also used slice later
    console.log(arr.slice(1,))
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
}
factorial(a);
