const accountId = 14445
let accountEmail = "suman@google.com"
var accountPassword= "12345"
accountCity= "Bhubhaneshwar"
let accountState;
// will print undefined as no value has been declared here

// accountId = 2  //not allowed for const

accountEmail="suman123.com"
accountPassword="3456"
accountCity="Indore"

console.log(accountId);


// prefer not to use var bcz of issue
// in block scope and functional scope




 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])