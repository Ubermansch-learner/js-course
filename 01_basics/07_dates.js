let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString());
// console.log(typeof myDate);//object

// let myCreatedDate=new Date(2024,0,23);
// let myCreatedDate=new Date(2024,0,23,15,3);
//date and time both-> 15 here is 3pm 

// let myCreatedDate=new Date("2023-01-14")

let myCreatedDate=new Date("01-14-2024")


console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDate());

console.log(newDate.toLocaleString('default',{
    weekday:"long"
    
}))
//a little bit complex but sir will intorduce this topic later also
