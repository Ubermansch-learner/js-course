function sayMyName(){
    console.log("A");
    console.log("r");
    console.log("u");
    console.log("n");
    console.log("a");
    console.log("c");


}

// sayMyName();

function addTwonum(num1,num2){
    //parameters= function definition inputs
    console.log(num1+ num2);
}
//addTwonum function does not have a return statement, so it returns undefined by default.

 const result1 = addTwonum( 3,4);
          //arguements  
        //   console.log("Result :" , result1); //undefined  



//correct way to get the desired output will be
function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    //return result
    return number1 + number2
    
}
const result = addTwoNumbers(5,8);
//console.log("Result:", result);

function loginUserMessage(username = " 123")
//123 is default parameter
{
    if(username===undefined)// or u can also write the same as if(!username) ,will take undefined as false
    {
        console.log("Please enter a username");
        return;
    }
    else{
           return `${username} just logged in`;
    }
   
}
const alert = loginUserMessage("God");
//console.log(loginUserMessage());
//undefined , if you think it will give null then u are wrong


//++++++++++ if you do not know how many parameters will be passed eg:shopping cart - user keeps on adding items in the cart and in last you have to add all the items+++++++++++++++++++++++++++++++++++
//rest operator
function calculateCartPrice(...num1)
{
     return num1
}

//console.log(calculateCartPrice(200,400,500,700))

function calculateCartPrice(val1, val2,...num1)
{
     return num1
}

//console.log(calculateCartPrice(200,400,500,700))
//will give array of 500 and 700 only

const user ={
    username:"suman",
    price:200
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username:"ABCDEF",
    price:599
})

const myNewArray = [200,300,500,600]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));


