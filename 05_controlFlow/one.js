//if 
const isUserLoggedIn = true;

if(2==="2")//both data types are not same,strict equal
    {
    console.log("Hello")
}
else{
    console.log("Not Welcome")
}

//shorthand notation
// const balance=1000;
// // if(balance>500) console.log("test");

// if(balance<500){
// console.log("less than");
// }else if(balance<750){
//     console.log("less than 750");

// }else
// console.log("More than 750");

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFRomEmail=true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFRomEmail || loggedInFromGoogle){
    console.log("logged in successfully")
}



