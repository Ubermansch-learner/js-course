const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers.map((num)=> num+10);
// console.log(newNums);



//same using forEach loop
//const newNums=[];
// myNumbers.forEach(num => {
//   // newNums.push(num+10);
    
// });
//console.log(newNums);

//chaining
const newNums=myNumbers
            .map((num)=>num*10)
            .map((num)=>num+2 ) //result of applying map to the array from 1st map will be transferred to second map
            .filter((num)=> num>=40)
            ;

console.log(newNums);

           

