//literals or constructor
// singleton made by constructor

//object literals
//object.create    =>singleton method to create the object using literal
const mySym=Symbol("key1")

const jsUser={
    user_name:"Kritika",
    age:20,
    location: "Tamilnadu",
    "Fullname": "Kritika Varyani",
    [mySym]:"myKey1",
    email:"kritika@gmail.com",
    isloggedIn:false,
    lastLogginDays:["Monday","Tuesday"]
}

//ways to use the objects
// console.log(jsUser.user_name)
// console.log(jsUser["user_name"])
// console.log(jsUser["Fullname"]);
// console.log(jsUser.Fullname);
// console.log(jsUser[mySym]);

jsUser.email="kritika@google.com"
//console.log(jsUser.email);
//Object.freeze(jsUser)
jsUser.email="kritikavaryani@google.com"
//console.log(jsUser)

//adding function in my object

jsUser.greeting=function(){
    console.log("Hello jsUser");
}
jsUser.greetingtwo=function(){
    console.log(`Hello jsUser ${this.user_name}`);
}
console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())