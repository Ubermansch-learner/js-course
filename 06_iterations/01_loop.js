// for 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }



// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value:${i}`)
//     for (let index = 0; index <=10; index++) {
//         // console.log(`inner loop:${index} and inner loop ${i}`) ;
//         console.log(i+'*' + index + '=' + i*index) ;
//     }
   
// }

let myArray=["flash","batman","ironman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);  
}

//break and continue

// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break;
        
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`detected 5`);
       continue;//5 will not be printed ad after that it will continue printing  same 
        
    }
    console.log(`value of i is ${index}`);
    
    
}



