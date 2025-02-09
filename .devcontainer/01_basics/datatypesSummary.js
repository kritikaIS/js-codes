//datatypes are divided into two categories on basis of how they are stroed in the memory and how to acces it
// primitive and non-primitive(reference)

//primitive (call by value) 
const num_value=1;//number
const num_val=3.5;//number
const isLoggedOut=false     //boolean
const outside_temp=null;    //object
let user_email; //undefined
const id=Symbol('123');//datatype=symbol
const another_id=Symbol('123');
console.log(id==another_id);
const bigNumber=123456789012341234455n
//7 types: String ,number, boolean, null, undefined, BigInt, Symbol

//Reference type (non-primitive)

//Array,Objects,functions
const heros=["shaktiman","naagraj","doga"];
let obj={
    name:"hitesh",
    age:22,
    year:2027
}

const fun=function(){
    console.log("hello world") //datatype => function
}
fun();
console.log(typeof(fun)); //function
console.log(typeof(heros));   //object
console.log(typeof(obj));   //object
