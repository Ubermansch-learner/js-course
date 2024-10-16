const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc= ["superman","flash","batman"]




// marvel_heros.push(dc);
// console.log(marvel_heros[3]);
//will given an array having elements of dc

// const allHeros= marvel_heros.concat(dc)
// //will give a new array so we have to store it in a different variable
// console.log(allHeros);

//using spread 

const all_New_heros=[...marvel_heros,...dc];
//console.log(all_New_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Suman"))//false
console.log(Array.from("Suman"))//to convert it into an array
console.log(Array.from({name:"Suman"}))
//will not be able to convert it into array 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))


