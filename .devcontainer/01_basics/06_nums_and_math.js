const score=400
// console.log(score);
const balance=new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
const other=13.5545;
// console.log(other.toPrecision(3));
const hundred=10000000;
// console.log(hundred.toLocaleString());//10,000,000 
// console.log(hundred.toLocaleString('en-IN')) //1,00,00,000 Indian standard


//+++++++++++++++++++++MATHS+++++++++++++++++++++++++/

// console.log(Math);
// console.log(Math.abs(-30))  //30
// console.log(Math.round(30.7321));   //31
// console.log(Math.ceil(30.21));  //31
// console.log(Math.floor(30.71));  //30
// console.log(Math.min(3,5,2,57,44,2,1)); //1
// console.log(Math.max(3,5,2,57,44,2,1)); //57

//console.log(Math.floor((Math.random()*10)+1))
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)