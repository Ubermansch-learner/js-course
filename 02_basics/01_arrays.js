const myArr=[0,1,2,3,4,6,7]
const myHeros=["Batman","Iron man"]
const myArr2=new Array(1,2,3,4)

// console.log(myArr[0]);


// //Array methods

// myArr.push(9);
// myArr.pop();
//simply pop out the last element, no need to pass any element

// myArr.unshift(9);
//push value 9 in the beginning

// myArr.shift();
//    pop out element present in the beginning

// const newArr=myArr.join()
// //convert it into string
// console.log(myArr);
// console.log(typeof newArr);



// console.log(newArr);



//slice,splice

console.log("A", myArr);
const myn1=myArr.slice(1,3);
//it does not inlcude the last range + original array remains the same.
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
//includes the last range + manipulates the original array by removing those elements which are passed in splice parenthesis

console.log(myn2);
console.log(myArr);//you will see original array now do not contain: 1,2,3



