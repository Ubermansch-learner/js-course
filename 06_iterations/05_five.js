const coding =["js","cpp","java","ruby","python"]

//for each inbuilt properties 

coding.forEach( function (item){
   // console.log(item);
})

//coding.forEach()       
//forEach calls the callbackfn function one time for each element in the array.
//Performs the specified action for each element in an array.
//since it calls function we have to write function inside its parenthesis - how do we write functions?? 
//functionn functionName(){}
//here no need to write name of function and inside parenthesis of function pass item which will iterat eover the array

// coding.forEach( (item) =>{
//     //console.log(item);

// })

// function printMe(item){
//   //  console.log(item);
// }
// coding.forEach(printMe);


coding.forEach( (item,index,arr)=> {
   // console.log(item,index,arr);
})


//arr having objects

const myCoding =[
    {
        languageName:"javascript",
        fileNmae:"js"
    },
    {
        languageName:"C++",
        fileNmae:"cpp"
    },
    {
        languageName:"python",
        fileNmae:"py"
    }
]
myCoding.forEach((item) =>{
    //here item refers to the object which the array consists and object item has 2 things-name and filename
    // console.log(item);
    // console.log(item.fileNmae);
    console.log(item.languageName);

    
})