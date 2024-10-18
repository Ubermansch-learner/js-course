//this keyword gives the present context

const user = {
    username:"suman",
    price:299,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        //since function is inside an object we are able to access username via this keyword
        
    }
}

// user.welcomeMessage()
// user.username = "Bheem";
// user.welcomeMessage();

// console.log(this);//empty object, as  now ,in global scope there is no present context 


// function chai(){
//     let username="sumaexpress"

//     console.log(this.username);//undefined

//  cannot access username via this as we cant do so inside a function
// }
// chai()


// const chai = function(){
//     let username="suman"
//     console.log(this.username);
// }
// chai();

//arrow function
const chai = () => {
    let username ="suman"
    console.log(this.username);//undefined
    console.log(this)
}
chai()


const addTwo1=(num1,num2) => {
    return  num1+num2;
}  //curly braces are used so you have to write return statement
console.log(addTwo1(8,9))

//another way to write arrow function for the same as above


//+++++++++++implicit return method
const addTwo=(num1,num2) => num1+num2;//return sum of two
// //if braces not used then no need to write return statement

console.log(addTwo(8,9))


const addTwo2=(num1,num2) => ({username:"suman"});
// to return an object you have to wrap it around parenthesis
console.log(addTwo2(4,5))





