//singleton
//object literals
const mySym = Symbol("key1")

const JsUser = {
name:"Suman",
"full name":"Michel Focault",
//by default here  name is processed by system as string
 age:12,
//  mySym:"mykey1",
[mySym]:"mykey1",
 location:"Vaikunth Dham",
 email:"abc@gmail.com",
 isLoggedIn:false,
 lastLoginDays:["Monday","Tuesday"]

}

//how to access the value of objects
console.log(JsUser.email)
console.log(JsUser["email"])
//why to know the second way of syntax?
//bcz just see when you will access full name by writing 1st method

console.log(JsUser.full name);//syntax error
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym)
//will give string and not symbol
//to make it symbol u have to write it as [mySym] and not simply as mySym

JsUser.email = "abc@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="1234@yahoo.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
// console.log(JsUser.greeting);//undefined
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())
