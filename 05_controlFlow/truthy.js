// const userEmail="suma.com"
// const userEmail=""
const userEmail=[]

//string is assumed to be true
//empty string is assumed to be false

if(userEmail){
    console.log("got user email")
} else{
    console.log("dont have")
}

//falsy values

// false,0, -0, BigInt 0n,"", null,undefined,NaN

//truthy values
//"0", "false","  ",[],{},function(){} - empty function

//so to check if arr is empty or not
if(userEmail.length===0){
    console.log("Arr is empty");
    
}

//to check if object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length===0)
    //Object.keys(emptyObj) willl return an arr , so we can use     .length
    {
    console.log("object is empty");
    
}


//false==0    ->true
//false==''   -> true
//0==''       -> true


//Nullish coalescing opertaor (??):null undefined

let val1;
// val1=5 ?? 10
// val1= null?? 10  //10
val1= undefined ?? 15  //15
val1 = null ?? 10 ?? 20 //first value will be printed


console.log(val1);

//ternary operator

// condition ? true:false

const iceTea =500
iceTea>=400 ? console.log("do not buy") :console.log("can buy")