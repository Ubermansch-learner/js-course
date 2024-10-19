const myObject={
    js:'javascipt',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
//for in loop
// for (const key in myObject) {
//     console.log(key); 
// }//we got only keys printed 

for (const key in myObject) {
 //   console.log(`${key} shortcut is for ${myObject[key]}`); 
}


//for in loop in arrays
const programming =["js","rb","py","java"]
for (const key in programming) {
    
    // console.log(key);//gives index numbers and not values    
 //   console.log(programming[key]);//to get values
    
}
//that'why we use object to get desired key values we have entered


//using for in loop in map
//cannot apply iteration over here using this loop 
const map=new Map()
map.set("IN","India")
map.set("USA","America")
map.set("DRC","Demo. republic of congo")
map.set("UK","United Kingdom")
for (const key in map) {
    console.log(key);
    
    
}
