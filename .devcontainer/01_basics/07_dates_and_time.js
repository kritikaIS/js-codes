let myDate=new Date()
// console.log(myDate.toDateString()) //Sun Feb 09 2025
// console.log(myDate.toISOString()) //2025-02-09T17:43:44.743Z
// console.log(myDate.toJSON()) //2025-02-09T17:43:44.743Z
// console.log(typeof myDate) //object
// let myCreatedDate=new Date(2025,0,24);  //month start with jan
// console.log(myCreatedDate.toDateString())

// let myCreateDate=new Date(2025,0,24,5,4);
// console.log(myCreateDate.toLocaleString())
let myCreateDate=new Date("01-23-2025");
//console.log(myCreateDate.toLocaleString())
let myTimeStamp=Date.now();
// console.log(myTimeStamp)
//console.log(Math.floor(Date.now()/1000));
let newDate=new Date();
//console.log(newDate.getHours());

//using localeString as an object

// console.log(newDate.toLocaleString('default',{
//     weekday:"long"
// }))
