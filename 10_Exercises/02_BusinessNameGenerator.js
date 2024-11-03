/*create a buisiness name generator by combining list of adjectives an dhsop names and another word

adjectives:
crazy amazing fire

shop name:
engine
foods
garments

anoher word:
bros
limited
hub


*/

let random1= Math.random();
let word1;
if(random1<1/3){
    word1="crazy";
}else if(random1<2/3 && random1>=1/3){
    word1="amazing";
}else{
    word1="fire";
}

let random2=Math.random();
let shopname;
if(random2<1/3){
    shopname="engine";
}else if(random2<2/3){
    shopname="food";
}else{
    shopname="garments";
}

let random3=Math.random();
let anotherWord;
if(random3<1/3){
    anotherWord="bros";
}else if(random3<2/3){
    anotherWord="limited";
}else{
    anotherWord="hub";
}

const BusinessNamegenerator = `${word1} ${shopname} ${anotherWord}`;
console.log(BusinessNamegenerator);