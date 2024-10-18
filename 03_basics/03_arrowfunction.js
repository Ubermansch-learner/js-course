//this keyword gives the present context

const user = {
    username:"suman",
    price:299,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Bheem";
// user.welcomeMessage();

// console.log(this);//empty object


// function chai(){
//     let username="sumaexpress"

//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username="suman"
//     console.log(this.username);
// }

//arrow function
const chai = () => {
    let username ="suman"
    console.log(this);
}
// chai()


// const addTwo=(num1,num2) => {
//     return  num1+num2;
// }  //curly braces are used so you have to write return statement
// console.log(addTwo(8,9))

//another way to write arrow function for the same as above


const addTwo=(num1,num2) => (num1+num2);//return sum of two
//if braces not used then no need to write return statement

console.log(addTwo(8,9))


const addTwo2=(num1,num2) => ({username:"suman"});//return object
console.log(addTwo2(4,5))





