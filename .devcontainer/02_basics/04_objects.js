
//const tinderUser=new Object();   //singleton object using constructor
const tinderUser={} //non singleton object by literals

tinderUser.id="123abc"
tinderUser.name="Sami"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

let regularUser={
    email:"kritika@gmail.com",
    fullname:{
        userfirstname:"Kritika",
        userlastname:"Varyani",
        userfullname:"kritika varyani"
    }
}
//console.log(regularUser.fullname.userfirstname) //kritika

const object1={1:"a",2:"b",3:"c"}
const object2={4:"a",2:"a",7:"c"}
const object3={8:"r",9:"s",10:"t"}

//const obj3={object1,object2}
//const obj3=Object.assign(object1,object2) //here the target is object1 object1 is changing
//console.log(obj3)
//console.log(object1)


const obj4=Object.assign({},object1,object2,object3)    //here the target is {} no source value will change
//console.log(obj4)
//console.log(object1)
const obj3={...object1,...object2,...object3}   //object spread method
//console.log(obj3)

//objects inside array
const arr=[
    {
        name:"kritika",
        id:1
    },
    {
        name:"kritika",
        id:1
    },
    {
        name:"kritika",
        id:1
    }
]
//console.log(arr[1].id);

console.log(tinderUser)
console.log(Object.keys(tinderUser))    //array datatype keys will be printed in array form
console.log(Object.values(tinderUser))   //array datatype
console.log(Object.entries(tinderUser))   //array datatype every key and value pair is inside the array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))    //to find if property available

//destructuring

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

//course.courseInstructor
const {courseInstructor : ins}=course
const {price:p}=course
console.log(ins);
console.log(p);

//api-json format-

// {
//     "name":"kritika",
//     "coursename":"js in hindi"
// }

[
    {},
    {},
    {}
]
