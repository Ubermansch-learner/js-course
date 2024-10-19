//for of loop

const arr =[1,2,5,6,7,8]

for (const num of arr) {

    // console.log(arr[num]); //not valid
   // console.log(num);
    }

const greetings="Helloworld! how"
for (const greet of greetings) {
    if(greet ==" "){
        break;
    }
    else{
       // console.log(`each char of greet is ${greet}`);
    }
    
    
}

//Maps

const map=new Map()
map.set("IN","India")
map.set("USA","America")
map.set("DRC","Demo. republic of congo")
map.set("UK","United Kingdom")

// console.log(map);

// //applying loop over map
// for (const [key,value] of map) {
//     console.log(key, ':-', value);
    
// }//will print key and value separately

for (const key of map) {
    console.log(key);
    
}



//Applying loop over object

//object is not iterable here by using for of loop

const myObject={
    game1:'NFS',
    game2: 'Angry Birds'
}
for (const [key,value] of myObject) {
    console.log(key ,':-' , value);   
}


