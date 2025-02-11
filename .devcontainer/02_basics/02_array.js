const mh=["thor","Ironman","spiderman"]
const dc=["superman","flash","batman"]
//mh.push(dc)
//console.log(mh)
const heros= mh.concat(dc) //concat return new array
//console.log(heros)
const all_new_heros=[...mh,...dc]   //spread operator
//console.log(all_new_heros)
const another_arr=[1,2,3,[4,5,6],7,[6,7,[8,9]]];
//console.log(another_arr);
const real_arr=another_arr.flat(Infinity)   //will concatinate all the subarray
//console.log(real_arr)

console.log(Array.isArray("hitesh")) //question 
console.log(Array.from("hitesh")) //creates array from the iterable object
console.log(Array.from({name: "hitesh"})) 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) //if you want to convert lot of values into array

