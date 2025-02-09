const name="kritika"
const repoCount=50
console.log(`${name} have total repository count = ${repoCount}`); //string interpolation

const gameName=new String('Mario the gamer') //way to create the string object
// console.log(gameName)
// console.log(gameName[0]);
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('t'))

const newString=gameName.substring(0,7)
console.log(newString);
console.log(newString.length);
const anotherString=gameName.slice(-15,5)
console.log(anotherString);
const newStringOne="    hitesh   "
console.log(newStringOne.trim());

const url="https://kritika.com/kritika%20varyani"
console.log(url.replace("%20","-"));
console.log(url.includes('Kritika'))  //false case sensitive
console.log(gameName.split(' '))