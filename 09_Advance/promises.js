//creating promises

const promiseOne = new Promise(function(resolve , reject){
    //do an async task
    //DB calls, cryptography , network  
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()//to connect to .then
    },1000)
})

promiseOne.then(function(){
    console.log("promise is consumed");
    //for resolve .then direct relation  
})


//direct way to write ->

new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
        
    },1000)
}).then(function(){
    console.log("async 2 is resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"dreamjob", email:"dreamjob@yahoo.com"})
        
    },1000)
})
promiseThree.then(function(userInfo){
    console.log(userInfo);
})

const promiseFour = new Promise(function(resolve,reject){
        setTimeout(function(){
         let error = true;
         if(!error){
            resolve({username:"bheem",password:"abcde"})
         }else{
            reject('ERROR:something went wrong')
         }
       },1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username;
})
.then((myusername)=>{
    console.log(myusername);
})
.catch(function(error){
    console.log(error);    
}).finally(()=>console.log("the promise is either resolved or rejected"))


const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
           resolve({username:"Focault",password:"abcde"})
        }else{
           reject('ERROR:something went wrong')
        }
      },1000)
})

//using async await for the same 
// async function consumepromiseFive(){
//     const response = await promiseFive
//     console.log(response);
    
// }
//async await cannot handle errors directly
//so if error occurs it will not handle it
//use try catch


async function consumepromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
        
    }  
}

consumepromiseFive()


// async function getAllUsers(){
//    try {
//     const response = await  fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
    
//    } catch (error) {
//     console.log("E:",error);
    
//    }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
            return response.json()
}) 
.then((data)=>{
    console.log(data);
    

})
.catch((error)=> console.log(error)
)