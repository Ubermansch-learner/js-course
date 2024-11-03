//using reduce and for loops

//5!
let element=1;
for (let i = 5; i < 0; i--) {
     element *= i;   
}
console.log(element);


let arr=[5,4,3,2,1];
const fact =(a,b)=>{

    return a*b;

}
console.log(arr.reduce(fact));




