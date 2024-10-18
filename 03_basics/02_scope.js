//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

//two() //function two is two is a function scoped inside one(), you can't call two() from outside of one(). When you try to call two() before one(), you get an error because two() is not defined in the global scope.
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//here we can access it because it is not defined like in the below example

function addone(num){
    return num + 1
}



addTwo(5) //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}